/**
 * Prefixes internal links with Astro's BASE_URL so the same build works
 * locally and under GitHub Pages' /<repo>/ path.
 */
export const url = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
};
