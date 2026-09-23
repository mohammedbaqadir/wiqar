/**
 * Materials — the store's theme, kept as data so the whole shop repaints from
 * one source of truth.
 *
 * The ground is a warm greige (never pure white), the ink near-black, and the
 * accent shows up in small doses only. That is how the shops this one belongs
 * beside are built: Hardgraft's greige ground, Huckberry's near-black type on
 * flat borderless product cards. There is no dark mode — photography owns the
 * screen, and a shop has one setting.
 *
 * Roles:
 *   room*     — the ground: page, quiet strips, the service bar
 *   exhibit*  — product surfaces: photo mounts and panels, a step lighter than the room
 *   ink*      — ink on exhibits
 *   roomInk*  — ink on the room
 *   deep*     — the footer band
 *   accent*   — the store's one colour, used sparingly (rules, active marks)
 *   signal    — the one red: a fact past its limit (last units)
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

export const materials: Materials = {
  room: '#edeae3',
  room2: '#e4e0d6',
  room3: '#cfcabd',
  exhibit: '#f7f5ef',
  exhibit2: '#ece8de',
  ink: '#111110',
  ink2: '#3f3f3c',
  ink3: '#60605b',
  roomInk: '#111110',
  roomInk2: '#3f3f3c',
  roomInk3: '#60605b',
  deep: '#1c1b19',
  deepInk: '#f2efe6',
  deepInk2: '#b5b0a4',
  accent: '#b08d57',
  accentD: '#7a5c30',
  accentL: '#c9a97a',
  signal: '#9c3221',
  hairline: 'rgba(17, 17, 16, 0.14)',
  hairlineInk: 'rgba(17, 17, 16, 0.14)',
};

/** Serialises the materials into the CSS custom properties the app reads. */
export const themeVars = (m: Materials): string =>
  [
    `--wq-room:${m.room}`,
    `--wq-room-2:${m.room2}`,
    `--wq-room-3:${m.room3}`,
    `--wq-exhibit:${m.exhibit}`,
    `--wq-exhibit-2:${m.exhibit2}`,
    `--wq-ink:${m.ink}`,
    `--wq-ink-2:${m.ink2}`,
    `--wq-ink-3:${m.ink3}`,
    `--wq-room-ink:${m.roomInk}`,
    `--wq-room-ink-2:${m.roomInk2}`,
    `--wq-room-ink-3:${m.roomInk3}`,
    `--wq-deep:${m.deep}`,
    `--wq-deep-ink:${m.deepInk}`,
    `--wq-deep-ink-2:${m.deepInk2}`,
    `--wq-accent:${m.accent}`,
    `--wq-accent-d:${m.accentD}`,
    `--wq-accent-l:${m.accentL}`,
    `--wq-signal:${m.signal}`,
    `--wq-hairline:${m.hairline}`,
    `--wq-hairline-ink:${m.hairlineInk}`,
  ].join(';');
