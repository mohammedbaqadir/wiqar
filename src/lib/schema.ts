import { isOutOfStock, type ApiCategory, type ApiProduct } from '@/lib/api';

/**
 * Structured data for a product page. Google reads this to show price and
 * availability in results, so it only repeats what the page already says.
 */
export const productSchema = (
  product: ApiProduct,
  context: { url: string; image?: string; category?: ApiCategory | null }
) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  sku: product.sku,
  image: context.image ? [context.image] : undefined,
  category: context.category?.name,
  brand: { '@type': 'Brand', name: 'وقار' },
  offers: {
    '@type': 'Offer',
    url: context.url,
    price: product.price,
    priceCurrency: 'SAR',
    availability: isOutOfStock(product)
      ? 'https://schema.org/OutOfStock'
      : 'https://schema.org/InStock',
  },
});
