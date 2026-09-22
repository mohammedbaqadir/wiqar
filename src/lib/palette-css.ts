import type { Materials } from '@/data/palettes';

/** Serialises one material set into the CSS custom properties the app reads. */
export const paletteVars = (m: Materials): string =>
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
