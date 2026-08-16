/**
 * theme.js — single source of truth for the site's color system.
 *
 * `accentPalette` is the pool of accent colors the site can launch with.
 * On every page load, ThemeContext picks ONE at random and derives its
 * hover/soft/gradient shades from it — so the whole site (buttons, links,
 * gradients, glows, the loading screen) re-colors itself automatically.
 * Add/remove hex codes here to change what can be picked; nothing else
 * needs to change.
 *
 * `light` / `dark` are the two palettes the ThemeToggle switches between.
 */

export const accentPalette = [
  '#f97316', // orange (original)
  '#00b7cd', // cyan
  '#8b2626', // brick red
  '#30afff', // sky blue
  '#760031', // deep maroon
  '#007979', // teal
  '#0d530e', // forest green
];

export const secondaryAccent = '#6366f1'; // indigo — used for the second hero blob, kept constant for contrast

export const light = {
  bg: '#fbfaf8',
  bgAlt: '#f4f2ee',
  surface: '#ffffff',
  surfaceAlt: '#f7f6f3',
  border: 'rgba(15, 15, 20, 0.08)',
  borderStrong: 'rgba(15, 15, 20, 0.14)',
  text: '#17161a',
  textMuted: '#5c5a63',
  textFaint: '#8a8790',
  shadow: 'rgba(20, 18, 12, 0.08)',
  overlay: 'rgba(255, 255, 255, 0.7)',
};

export const dark = {
  bg: '#0b0b0e',
  bgAlt: '#121214',
  surface: '#16161a',
  surfaceAlt: '#1c1c21',
  border: 'rgba(255, 255, 255, 0.08)',
  borderStrong: 'rgba(255, 255, 255, 0.14)',
  text: '#f5f4f2',
  textMuted: '#a8a6ae',
  textFaint: '#6f6d76',
  shadow: 'rgba(0, 0, 0, 0.45)',
  overlay: 'rgba(11, 11, 14, 0.7)',
};

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const value = parseInt(clean, 16);
  return { r: (value >> 16) & 255, g: (value >> 8) & 255, b: value & 255 };
}

function rgba(hex, alpha) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** amount: -1..1, negative darkens toward black, positive lightens toward white */
function shade(hex, amount) {
  const { r, g, b } = hexToRgb(hex);
  const mix = (channel) => {
    const target = amount < 0 ? 0 : 255;
    const value = channel + (target - channel) * Math.abs(amount);
    return Math.max(0, Math.min(255, Math.round(value)));
  };
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

/** Derive the full accent token set (hover/soft/gradient shades) from one base hex. */
export function buildAccentTokens(hex) {
  return {
    accent: hex,
    'accent-hover': shade(hex, -0.18),
    'accent-soft': rgba(hex, 0.14),
    'accent-soft-2': rgba(hex, 0.28),
    'accent-gradient-from': shade(hex, 0.22),
    'accent-gradient-to': hex,
    'accent-secondary': secondaryAccent,
  };
}

/** Pick a random color from the accent pool (any entry may repeat across reloads). */
export function pickRandomAccent() {
  return accentPalette[Math.floor(Math.random() * accentPalette.length)];
}

/** Merge accent + light/dark palette into one flat CSS-variable token map. */
export function getThemeTokens(mode, accentHex) {
  const palette = mode === 'dark' ? dark : light;
  return { ...buildAccentTokens(accentHex), ...palette };
}

export const fontFamily = "'Urbanist', sans-serif";
