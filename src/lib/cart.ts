/**
 * The cart, kept in the visitor's browser until the backend owns it.
 *
 * One source of truth for every page: the drawer, the header count and the
 * product page all read and write through here. Pointing this at Salla later
 * replaces the storage calls, not the shape.
 *
 * Every function touches localStorage inside a try/catch: private-mode Safari
 * throws on access, and a cart is never worth breaking the page for.
 */

export interface CartLine {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  /** last known stock; null means the store does not track it */
  max: number | null;
}

export interface CartTotals {
  count: number;
  subtotal: number;
  freeShippingAt: number;
  toFreeShipping: number;
}

const STORAGE_KEY = 'wq-cart';
export const FREE_SHIPPING_AT = 500;

type Listener = (lines: CartLine[]) => void;
const listeners = new Set<Listener>();

const isLine = (value: unknown): value is CartLine => {
  if (typeof value !== 'object' || value === null) return false;
  const line = value as Partial<CartLine>;
  return (
    typeof line.id === 'number' &&
    typeof line.slug === 'string' &&
    typeof line.name === 'string' &&
    typeof line.price === 'number' &&
    typeof line.image === 'string' &&
    typeof line.quantity === 'number' &&
    (line.max === null || typeof line.max === 'number')
  );
};

/** Keeps a quantity sane: at least one, never past the shelf. */
export const clampQuantity = (quantity: number, max: number | null): number => {
  const whole = Math.max(1, Math.floor(quantity) || 1);
  return max === null ? whole : Math.min(whole, Math.max(1, max));
};

export const readCart = (): CartLine[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isLine) : [];
  } catch {
    return [];
  }
};

const writeCart = (lines: CartLine[]): CartLine[] => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
    /* storage unavailable: the cart still works for this page view */
  }
  listeners.forEach((listener) => listener(lines));
  return lines;
};

/** Returns an unsubscribe function. */
export const subscribe = (listener: Listener): (() => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const addLine = (line: Omit<CartLine, 'quantity'>, quantity = 1): CartLine[] => {
  const lines = readCart();
  const existing = lines.find((item) => item.id === line.id);
  if (existing) {
    existing.quantity = clampQuantity(existing.quantity + quantity, existing.max);
  } else {
    lines.push({ ...line, quantity: clampQuantity(quantity, line.max) });
  }
  return writeCart(lines);
};

export const setQuantity = (id: number, quantity: number): CartLine[] =>
  writeCart(
    readCart().map((line) =>
      line.id === id ? { ...line, quantity: clampQuantity(quantity, line.max) } : line
    )
  );

export const removeLine = (id: number): CartLine[] =>
  writeCart(readCart().filter((line) => line.id !== id));

export const clearCart = (): CartLine[] => writeCart([]);

export const totals = (lines: CartLine[]): CartTotals => {
  const count = lines.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = lines.reduce((sum, line) => sum + line.price * line.quantity, 0);
  return {
    count,
    subtotal,
    freeShippingAt: FREE_SHIPPING_AT,
    toFreeShipping: Math.max(0, FREE_SHIPPING_AT - subtotal),
  };
};
