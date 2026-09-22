/**
 * The store's materials.
 *
 * One world, deliberately: a warm greige room, near-black ink, and a single
 * restrained accent. This follows the shops this store belongs beside —
 * Hardgraft's greige (never pure white), Huckberry's near-black type and flat
 * borderless product cards. Colour is not a feature shoppers switch; it is the
 * store's material. The accent works in small doses (rules, active states,
 * small marks) while actions are ink.
 *
 * Roles:
 *   room*     — the ground: page, quiet strips, rules
 *   exhibit*  — product surfaces (cards, panels) — one step lighter than the room
 *   ink*      — text
 *   deep*     — photographic mounts and footer band (a photographic ground)
 *   accent*   — the brand mark, used sparingly
 *   signal    — the one red: a fact past its limit
 *
 * A night rendering stays available (merchant/dev switch only, never a shopper
 * control) using the "room darkens, exhibits stay lit" rule.
 */

export interface Materials {
  room: string;
  room2: string;
  room3: string;
  exhibit: string;
  exhibit2: string;
  ink: string;
  ink2: string;
  ink3: string;
  roomInk: string;
  roomInk2: string;
  roomInk3: string;
  deep: string;
  deepInk: string;
  deepInk2: string;
  accent: string;
  accentD: string;
  accentL: string;
  signal: string;
  hairline: string;
  hairlineInk: string;
}

export interface Palette {
  id: string;
  name: string;
  note: string;
  swatch: string;
  day: Materials;
  night: Materials;
}

const waqarDay: Materials = {
  room: '#edeae3',
  room2: '#e4e0d6',
  room3: '#cfcabd',
  exhibit: '#f7f5ef',
  exhibit2: '#ece8de',
  ink: '#111110',
  ink2: '#3f3f3c',
  ink3: '#6e6e69',
  roomInk: '#111110',
  roomInk2: '#3f3f3c',
  roomInk3: '#6e6e69',
  deep: '#1c1b19',
  deepInk: '#f2efe6',
  deepInk2: '#b5b0a4',
  accent: '#b08d57',
  accentD: '#8a6a3a',
  accentL: '#c9a97a',
  signal: '#9c3221',
  hairline: 'rgba(17, 17, 16, 0.14)',
  hairlineInk: 'rgba(17, 17, 16, 0.14)',
};

const waqarNight: Materials = {
  room: '#151412',
  room2: '#1c1b18',
  room3: '#2a2824',
  exhibit: '#f4f1e8',
  exhibit2: '#e6e1d5',
  ink: '#111110',
  ink2: '#3f3f3c',
  ink3: '#6e6e69',
  roomInk: '#efece3',
  roomInk2: '#c4bfb4',
  roomInk3: '#8d8880',
  deep: '#0c0b0a',
  deepInk: '#f2efe6',
  deepInk2: '#a9a49a',
  accent: '#c19a5e',
  accentD: '#8a6a3a',
  accentL: '#d4b98c',
  signal: '#b2503a',
  hairline: 'rgba(239, 236, 227, 0.13)',
  hairlineInk: 'rgba(17, 17, 16, 0.14)',
};

export const palettes: Palette[] = [
  {
    id: 'waqar',
    name: 'وقار',
    note: 'أرضية رمادية دافئة، حبر قريب من الأسود، لمحة نحاسية',
    swatch: '#b08d57',
    day: waqarDay,
    night: waqarNight,
  },
];

export const defaultPalette = palettes[0];

export const paletteById = (id: string | null | undefined): Palette =>
  palettes.find((palette) => palette.id === id) ?? defaultPalette;
