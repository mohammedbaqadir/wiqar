import { getImage, type ImageMetadata } from 'astro:assets';

/**
 * Product photos live in src/assets so Astro can optimise them at build time —
 * responsive widths plus AVIF and WebP. The catalogue keeps plain paths, because
 * that is what the store API will hand back, and this module resolves a path to
 * the imported asset.
 */
const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/photos/*.jpg', {
  eager: true,
});

const photos = new Map<string, ImageMetadata>(
  Object.entries(files).map(([path, module]) => [path.replace('/src/assets/', ''), module.default])
);

/** 'photos/mug.jpg' → the asset, or undefined when the catalogue points at a missing file. */
export const photo = (path: string): ImageMetadata | undefined => photos.get(path);

/** One optimised URL, for the places that need a URL rather than markup (the cart). */
export const photoUrl = async (path: string, width: number): Promise<string | undefined> => {
  const source = photos.get(path);
  if (!source) return undefined;
  const image = await getImage({ src: source, width, format: 'webp' });
  return image.src;
};

/** Share cards want a raster file, not the AVIF/WebP the pages use. */
export const shareImage = async (path: string, width = 1200): Promise<string | undefined> => {
  const source = photos.get(path);
  if (!source) return undefined;
  const image = await getImage({ src: source, width, format: 'jpeg', quality: 78 });
  return image.src;
};
