import { useCallback, useEffect, useState } from 'react';
import { STORAGE_KEYS } from '@/constants/site';
import type { Theme } from '@/types/portfolio';

const isTheme = (value: string | null): value is Theme => value === 'light' || value === 'dark';

const getInitialTheme = (): Theme => {
  if (typeof document !== 'undefined' && isTheme(document.documentElement.dataset.theme ?? null)) {
    return document.documentElement.dataset.theme as Theme;
  }

  return globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEYS.theme, theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#06101c' : '#f5f8fb');
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, setTheme, toggleTheme };
}
