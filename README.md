# وقار — Wiqar

A curated goods store — ceramics, writing, textiles, leather, optics, audio, light, tools.
Arabic-first (RTL), statically built with Astro.

**Live:** https://mohammedbaqadir.github.io/wiqar/

## Stack

- **Astro** (static output) + **TypeScript**; **Bun** for install, build and run
- **Tailwind CSS v4** + **Starwind UI** components
- Self-hosted Arabic typefaces: Naseeb, Amiri, IBM Plex Arabic / Mono
- `@astrojs/sitemap`, photos optimised to AVIF + WebP at build time

## Structure

```
src/pages/       routes: home, catalog, category/[slug], product/[slug], search, 404
src/layouts/     Base.astro — theme vars, meta/OG, skip link, cart, image fade-in
src/components/  world/ (the store's own parts) · starwind/ (vendored UI)
src/lib/         api · cart · search · images · schema · format · url
src/data/        catalog.json (API-shaped) · theme.ts (the one palette)
src/assets/      photos (optimised at build) · fonts
src/styles/      world.css (tokens & base) · world-fonts.css · starwind.css
```

## How the data flows

`src/data/catalog.json` → `src/lib/api.ts` → pages, at build time. Nothing else reads the
catalogue: swapping the mock for a real backend means rewriting `api.ts` and nothing else.

Cart, search suggestions, sorting, the gallery and product options run client-side as five
small plain-TypeScript scripts — no UI framework.

## Commands

| | |
|---|---|
| `bun install` | install dependencies |
| `bun run dev` | dev server (see `AGENTS.md` for background mode) |
| `bun run build` | build to `dist/` |
| `bun run preview` | serve the build locally |

## Deploy

Push to `main` — GitHub Actions builds and publishes to GitHub Pages (`wiqar`).

Product photos are placeholders from royalty-free stock; sources are listed in
`src/assets/photos/CREDITS.txt` and each is replaced by real product photography.
