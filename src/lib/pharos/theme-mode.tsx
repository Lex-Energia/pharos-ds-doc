'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  parseThemeMode,
  serializeThemeCookie,
  THEME_COOKIE,
  type ThemeMode,
} from './theme-cookie';

export type {ThemeMode};
export {THEME_COOKIE, parseThemeMode};

type ThemeModeContextValue = {
  mode: ThemeMode;
  resolved: 'light' | 'dark';
  setMode: (mode: ThemeMode) => void;
  toggle: () => void;
};

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

const LEGACY_STORAGE_KEY = 'pharos-docs-theme';

function getSystemMode(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function writeThemeCookie(mode: ThemeMode) {
  document.cookie = serializeThemeCookie(mode);
}

function readThemeCookie(): ThemeMode | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${THEME_COOKIE}=`));
  if (!match) return null;
  return parseThemeMode(match.split('=').slice(1).join('='));
}

export function ThemeModeProvider({
  children,
  initialMode = 'system',
}: {
  children: ReactNode;
  initialMode?: ThemeMode;
}) {
  const [mode, setModeState] = useState<ThemeMode>(initialMode);
  const [resolved, setResolved] = useState<'light' | 'dark'>(() =>
    initialMode === 'system' ? 'light' : initialMode,
  );

  // Migra preferência antiga de localStorage → cookie (uma vez).
  useEffect(() => {
    const fromCookie = readThemeCookie();
    if (fromCookie) {
      if (fromCookie !== mode) setModeState(fromCookie);
      return;
    }

    const legacy = parseThemeMode(
      window.localStorage.getItem(LEGACY_STORAGE_KEY),
    );
    if (legacy) {
      writeThemeCookie(legacy);
      window.localStorage.removeItem(LEGACY_STORAGE_KEY);
      setModeState(legacy);
    } else {
      writeThemeCookie(mode);
    }
    // Só na montagem — sincroniza cookie / migração legada.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const next = mode === 'system' ? getSystemMode() : mode;
    setResolved(next);

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      if (mode === 'system') {
        setResolved(getSystemMode());
      }
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [mode]);

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
    writeThemeCookie(next);
  }, []);

  const toggle = useCallback(() => {
    setMode(resolved === 'dark' ? 'light' : 'dark');
  }, [resolved, setMode]);

  const value = useMemo(
    () => ({mode, resolved, setMode, toggle}),
    [mode, resolved, setMode, toggle],
  );

  return (
    <ThemeModeContext.Provider value={value}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) {
    throw new Error('useThemeMode must be used within ThemeModeProvider');
  }
  return ctx;
}
