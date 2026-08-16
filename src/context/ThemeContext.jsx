import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react';
import { getThemeTokens, pickRandomAccent } from '../config/theme';

const ThemeContext = createContext(null);
const STORAGE_KEY = 'portfolio-theme';

function getInitialMode() {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(getInitialMode);
  // Rolled once per page load — a fresh accent color from config/theme.js's
  // `accentPalette` pool is picked on every reload (repeats are allowed).
  const [accent] = useState(pickRandomAccent);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const tokens = getThemeTokens(mode, accent);

    for (const [key, value] of Object.entries(tokens)) {
      root.style.setProperty(`--${key}`, value);
    }

    root.setAttribute('data-theme', mode);
    root.style.colorScheme = mode;
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode, accent]);

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(() => ({ mode, setMode, toggleMode, accent }), [mode, toggleMode, accent]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
