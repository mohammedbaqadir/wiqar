// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mohammedbaqadir.github.io',
  base: '/wiqar-showcase',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
