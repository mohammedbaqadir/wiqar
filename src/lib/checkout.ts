import { readCart, totals, type CartLine } from '@/lib/cart';

/**
 * The purchase exit.
 *
 * This module is the only place that knows how an order leaves the storefront.
 * Today it turns the browser cart into the shape Salla's cart API expects and
 * reports that the handoff is not configured; when the store is wired up, only
 * `beginCheckout` changes — the pages and the drawer keep calling it.
 *
 * Salla's cart API (verified in the docs) takes lines by id, variant_id or sku
 * with an optional `options` payload, and answers with a `checkout_url` that the
 * shopper is sent to. That response is what fills `CheckoutResult.redirectTo`.
 */

/** A line as the cart API wants it: identity, quantity, chosen options. */
export interface CheckoutLine {
  identifier_type: 'id';
  identifier: number;
  quantity: number;
  options?: Array<{ name: string; value: string }>;
}

/** Flat rate under the free-shipping threshold. Real rates arrive with the API. */
export const SHIPPING_FLAT = 25;

/** What shipping costs on a given basket. */
export const shippingFor = (subtotal: number, freeAt = 500): number =>
  subtotal >= freeAt ? 0 : SHIPPING_FLAT;

export interface CheckoutOrder {
  lines: CheckoutLine[];
  subtotal: number;
  currency: 'SAR';
}

export type CheckoutResult =
  | { status: 'redirect'; redirectTo: string }
  | { status: 'unconfigured' }
  | { status: 'failed'; reason: string };

/** The cart, ready to be sent to whatever handles checkout. */
export const buildOrder = (lines: CartLine[] = readCart()): CheckoutOrder => ({
  lines: lines.map((line) => ({
    identifier_type: 'id',
    identifier: line.id,
    quantity: line.quantity,
    options: line.options?.map((option) => ({ name: option.name, value: option.value })),
  })),
  subtotal: totals(lines).subtotal,
  currency: 'SAR',
});

/**
 * Hand the order over. Returns where the shopper goes next, or why they cannot.
 * No store credentials exist yet, so today it answers `unconfigured`.
 */
export const beginCheckout = async (order: CheckoutOrder = buildOrder()): Promise<CheckoutResult> => {
  if (order.lines.length === 0) return { status: 'failed', reason: 'empty' };

  // When the backend exists: POST the cart, then answer with its checkout_url.
  return { status: 'unconfigured' };
};
