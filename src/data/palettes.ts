/**
 * The palette catalogue.
 *
 * A palette is a set of MATERIALS, each with a day and a night rendering:
 *   room*    — the architecture: page ground, quiet strips, rules
 *   exhibit* — the lit surfaces: cards, sheets, plates (they stay lit at night)
 *   ink*     — text on exhibits (constant per palette)
 *   roomInk* — text on the room (flips to bone at night)
 *   deep*    — case interiors and gallery bands (always dark)
 *   deepInk* — text sitting on `deep` (always light)
 *   accent*  — the brass/champagne family (gains a glow at night)
 *   signal   — the one red: a fact past its limit
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
  /** chip colour for the palette menu */
  swatch: string;
  day: Materials;
  night: Materials;
}

export const palettes: Palette[] = [
  {
    id: 'bluestone',
    name: 'حجر أزرق',
    note: 'عظم ورقّي، أردواز أزرق، شمبانيا',
    swatch: '#c6a664',
    day: {
      room: '#f3efe6',
      room2: '#eae4d6',
      room3: '#d8d1c0',
      exhibit: '#fbf8f1',
      exhibit2: '#efe9dc',
      ink: '#1c2637',
      ink2: '#33445c',
      ink3: '#64748b',
      roomInk: '#1c2637',
      roomInk2: '#33445c',
      roomInk3: '#64748b',
      deep: '#22303f',
      deepInk: '#efe9dc',
      deepInk2: '#b9c0c6',
      accent: '#c6a664',
      accentD: '#a9884a',
      accentL: '#dcc189',
      signal: '#a8452f',
      hairline: 'rgba(28, 38, 55, 0.15)',
      hairlineInk: 'rgba(28, 38, 55, 0.16)',
    },
    night: {
      room: '#171b20',
      room2: '#1e242b',
      room3: '#2b333d',
      exhibit: '#f4f0e6',
      exhibit2: '#e6e0d2',
      ink: '#1c2637',
      ink2: '#33445c',
      ink3: '#64748b',
      roomInk: '#ece6d9',
      roomInk2: '#c6c0b3',
      roomInk3: '#8d96a3',
      deep: '#0e1520',
      deepInk: '#f1ece0',
      deepInk2: '#a9b4bf',
      accent: '#d0b273',
      accentD: '#a9884a',
      accentL: '#e2c98e',
      signal: '#b2503a',
      hairline: 'rgba(236, 230, 217, 0.14)',
      hairlineInk: 'rgba(28, 38, 55, 0.16)',
    },
  },
  {
    id: 'olive',
    name: 'زيتوني',
    note: 'حجر دافئ، لبّاد زيتوني، نحاس عتيق',
    swatch: '#a98a52',
    day: {
      room: '#f4f2ee',
      room2: '#e9e5dd',
      room3: '#d8d3c8',
      exhibit: '#fbfaf7',
      exhibit2: '#efeadf',
      ink: '#26262a',
      ink2: '#3c3c42',
      ink3: '#6a6a70',
      roomInk: '#26262a',
      roomInk2: '#3c3c42',
      roomInk3: '#6a6a70',
      deep: '#4b5341',
      deepInk: '#efeadf',
      deepInk2: '#b9bdb0',
      accent: '#a98a52',
      accentD: '#8a6f3f',
      accentL: '#c8ac74',
      signal: '#b0432f',
      hairline: 'rgba(38, 38, 42, 0.16)',
      hairlineInk: 'rgba(38, 38, 42, 0.16)',
    },
    night: {
      room: '#171a16',
      room2: '#1e211c',
      room3: '#2a2e26',
      exhibit: '#f5f2ea',
      exhibit2: '#e8e3d6',
      ink: '#26262a',
      ink2: '#3c3c42',
      ink3: '#6a6a70',
      roomInk: '#ece8df',
      roomInk2: '#c9c4b8',
      roomInk3: '#8f8a80',
      deep: '#101309',
      deepInk: '#f0ece0',
      deepInk2: '#b3b7a8',
      accent: '#bd9b5e',
      accentD: '#8a6f3f',
      accentL: '#d2b479',
      signal: '#b0432f',
      hairline: 'rgba(236, 232, 223, 0.14)',
      hairlineInk: 'rgba(38, 38, 42, 0.16)',
    },
  },
  {
    id: 'graphite',
    name: 'رصاص دافئ',
    note: 'رصاص شاحب، حبر أزرق-أسود، ذهب باهت',
    swatch: '#c9a86a',
    day: {
      room: '#f0f0ee',
      room2: '#e6e6e3',
      room3: '#d5d5d1',
      exhibit: '#fbfbfa',
      exhibit2: '#eeeeec',
      ink: '#1f2226',
      ink2: '#3a3f45',
      ink3: '#6c737b',
      roomInk: '#1f2226',
      roomInk2: '#3a3f45',
      roomInk3: '#6c737b',
      deep: '#34383d',
      deepInk: '#eff0f1',
      deepInk2: '#b8bcc1',
      accent: '#c9a86a',
      accentD: '#a3864b',
      accentL: '#ddc38e',
      signal: '#a8452f',
      hairline: 'rgba(31, 34, 38, 0.15)',
      hairlineInk: 'rgba(31, 34, 38, 0.16)',
    },
    night: {
      room: '#16181b',
      room2: '#1d2024',
      room3: '#292d32',
      exhibit: '#f3f3f1',
      exhibit2: '#e5e5e2',
      ink: '#1f2226',
      ink2: '#3a3f45',
      ink3: '#6c737b',
      roomInk: '#e9e9e6',
      roomInk2: '#c3c5c8',
      roomInk3: '#8c9095',
      deep: '#0d0f11',
      deepInk: '#f0f0f0',
      deepInk2: '#a8adb3',
      accent: '#d3b378',
      accentD: '#a3864b',
      accentL: '#e4cc9c',
      signal: '#b2503a',
      hairline: 'rgba(233, 233, 230, 0.14)',
      hairlineInk: 'rgba(31, 34, 38, 0.16)',
    },
  },
  {
    id: 'paper-tea',
    name: 'ورق وشاي',
    note: 'ورق معتّق، أكسيد الدم، بلا ذهب',
    swatch: '#8f3b2e',
    day: {
      room: '#f2ead8',
      room2: '#e8dfc9',
      room3: '#d8ccb1',
      exhibit: '#faf4e6',
      exhibit2: '#ece1ca',
      ink: '#2a2118',
      ink2: '#4a3c2c',
      ink3: '#7d6a53',
      roomInk: '#2a2118',
      roomInk2: '#4a3c2c',
      roomInk3: '#7d6a53',
      deep: '#2e241a',
      deepInk: '#f2ead8',
      deepInk2: '#c3b49b',
      accent: '#8f3b2e',
      accentD: '#6f2a20',
      accentL: '#b05a49',
      signal: '#9c3221',
      hairline: 'rgba(42, 33, 24, 0.16)',
      hairlineInk: 'rgba(42, 33, 24, 0.16)',
    },
    night: {
      room: '#191511',
      room2: '#211b16',
      room3: '#2e261e',
      exhibit: '#f6efe0',
      exhibit2: '#e7dcc6',
      ink: '#2a2118',
      ink2: '#4a3c2c',
      ink3: '#7d6a53',
      roomInk: '#efe7d6',
      roomInk2: '#c8bda9',
      roomInk3: '#8f8371',
      deep: '#100c09',
      deepInk: '#f4ecdc',
      deepInk2: '#bfb098',
      accent: '#ab5a42',
      accentD: '#6f2a20',
      accentL: '#c07a63',
      signal: '#b2503a',
      hairline: 'rgba(239, 231, 214, 0.14)',
      hairlineInk: 'rgba(42, 33, 24, 0.16)',
    },
  },
  {
    id: 'ink-silver',
    name: 'حبر وفضة',
    note: 'أبيض بارد، فضة رصاصية، بلا دفء',
    swatch: '#8d949e',
    day: {
      room: '#f1f2f4',
      room2: '#e7e9ec',
      room3: '#d6d9de',
      exhibit: '#fbfcfd',
      exhibit2: '#eceef1',
      ink: '#14171c',
      ink2: '#343a44',
      ink3: '#6a7280',
      roomInk: '#14171c',
      roomInk2: '#343a44',
      roomInk3: '#6a7280',
      deep: '#24282e',
      deepInk: '#eef0f3',
      deepInk2: '#b3b9c1',
      accent: '#8d949e',
      accentD: '#6b737d',
      accentL: '#aab1ba',
      signal: '#a8452f',
      hairline: 'rgba(20, 23, 28, 0.15)',
      hairlineInk: 'rgba(20, 23, 28, 0.16)',
    },
    night: {
      room: '#121417',
      room2: '#191c20',
      room3: '#242830',
      exhibit: '#f4f5f7',
      exhibit2: '#e6e8eb',
      ink: '#14171c',
      ink2: '#343a44',
      ink3: '#6a7280',
      roomInk: '#e8eaee',
      roomInk2: '#bfc4cb',
      roomInk3: '#8a919b',
      deep: '#0b0d0f',
      deepInk: '#eef0f3',
      deepInk2: '#a6acb4',
      accent: '#a7aeb8',
      accentD: '#6b737d',
      accentL: '#c3c9d1',
      signal: '#b2503a',
      hairline: 'rgba(232, 234, 238, 0.14)',
      hairlineInk: 'rgba(20, 23, 28, 0.16)',
    },
  },
];

export const defaultPalette = palettes[0];

export const paletteById = (id: string | null | undefined): Palette =>
  palettes.find((palette) => palette.id === id) ?? defaultPalette;
