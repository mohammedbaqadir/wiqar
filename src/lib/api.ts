import catalog from '@/data/catalog.json';
import { toArabicDigits } from '@/lib/format';
import { url } from '@/lib/url';

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

/** Same room first, then the rest — so the row is never empty. */
export const getRelated = async (product: ApiProduct, limit = 4): Promise<ApiProduct[]> => {
  const inRoom = data.products.filter(
    (other) => other.category_id === product.category_id && other.id !== product.id
  );
  const elsewhere = data.products.filter(
    (other) => other.category_id !== product.category_id && other.id !== product.id
  );
  return [...inRoom, ...elsewhere].slice(0, limit);
};

export const isOnSale = (product: ApiProduct): boolean =>
  product.sale_price !== null && product.sale_price < product.regular_price;

/** The one red: last units, never for a product that is already gone. */
export const isLowStock = (product: ApiProduct): boolean =>
  !product.is_out_of_stock && product.quantity !== null && product.quantity <= 3;

/** What the red flag says: a single piece is not "1 قطع". */
export const lowStockLabel = (product: ApiProduct): string =>
  product.quantity === 1 ? 'آخر قطعة' : `آخر ${toArabicDigits(product.quantity ?? 0)} قطع`;

/** Catalogue paths are relative; the site may be served from a sub-path. */
export const imageSrc = (image: ApiImage): string => url(image.url);
