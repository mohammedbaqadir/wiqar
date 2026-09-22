// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mohammedbaqadir.github.io',
  base: '/wiqar-showcase',
  vite: {
    plugins: [tailwindcss()],
  },
});
