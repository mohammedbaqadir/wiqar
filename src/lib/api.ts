import catalog from '@/data/catalog.json';
import { toArabicDigits } from '@/lib/format';

/**
 * The store's data seam. Every page reads the shop through this file and
 * nothing else, so pointing the storefront at Salla later means rewriting this
 * one module — the shapes below stay, the source changes.
 *
 * Today the source is a JSON catalogue that mimics what the API will return.
 */

export interface ApiImage {
  url: string;
  alt: string;
}

/** A choice the shopper makes: a size, a colour, a measure. */
export interface ApiProductOption {
  name: string;
  values: Array<{ label: string; swatch?: string }>;
}

export interface ApiCategory {
  id: number;
  slug: string;
  name: string;
}

export interface ApiProduct {
  id: number;
  sku: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  regular_price: number;
  sale_price: number | null;
  quantity: number | null;
  status: string;
  is_out_of_stock: boolean;
  category_id: number;
  origin: string;
  standard: string;
  /** Shopper-facing synonyms: the forms people type that the copy doesn't carry. */
  keywords: string[];
  /** ISO date, newest first when sorting by "الأحدث". */
  created_at: string;
  /** Empty when the piece has no choices to make. */
  options: ApiProductOption[];
  image: ApiImage;
  images: ApiImage[];
}

export interface ApiStore {
  name: string;
  name_en: string;
  currency: string;
  locale: string;
  domain: string;
}

interface ApiCatalog {
  store: ApiStore;
  categories: ApiCategory[];
  products: ApiProduct[];
}

const data = catalog as unknown as ApiCatalog;

export const getStore = async (): Promise<ApiStore> => data.store;

export const getCategories = async (): Promise<ApiCategory[]> => data.categories;

export const getProducts = async (): Promise<ApiProduct[]> => data.products;

export const getProduct = async (slug: string): Promise<ApiProduct | null> =>
  data.products.find((product) => product.slug === slug) ?? null;

export const getCategory = async (id: number): Promise<ApiCategory | null> =>
  data.categories.find((category) => category.id === id) ?? null;

export const getProductsInCategory = async (categoryId: number): Promise<ApiProduct[]> =>
  data.products.filter((product) => product.category_id === categoryId);

/**
 * Closest pieces first: the same room, then shared keywords, then a nearby price.
 * Deterministic, so the row never reshuffles between builds.
 */
export const getRelated = async (product: ApiProduct, limit = 4): Promise<ApiProduct[]> => {
  const words = new Set(product.keywords ?? []);

  const score = (other: ApiProduct): number => {
    let points = other.category_id === product.category_id ? 3 : 0;
    points += (other.keywords ?? []).filter((word) => words.has(word)).length;

    const spread =
      Math.max(other.price, product.price) / Math.max(1, Math.min(other.price, product.price));
    return spread <= 1.6 ? points + 1 : points;
  };

  return data.products
    .filter((other) => other.id !== product.id)
    .map((other) => ({ product: other, points: score(other) }))
    .sort((a, b) => b.points - a.points || a.product.price - b.product.price)
    .slice(0, limit)
    .map((entry) => entry.product);
};

export const isOnSale = (product: ApiProduct): boolean =>
  product.sale_price !== null && product.sale_price < product.regular_price;

/** Gone: either the flag or an empty shelf. */
export const isOutOfStock = (product: ApiProduct): boolean =>
  product.is_out_of_stock || product.quantity === 0;

/** The one red: last units, never for a product that is already gone. */
export const isLowStock = (product: ApiProduct): boolean =>
  !isOutOfStock(product) && product.quantity !== null && product.quantity <= 3;

/** What the red flag says: a single piece is not "1 قطع". */
export const lowStockLabel = (product: ApiProduct): string =>
  product.quantity === 1 ? 'آخر قطعة' : `آخر ${toArabicDigits(product.quantity ?? 0)} قطع`;
