export type ThemeMode = 'light' | 'dark' | 'system';

export const THEME_COOKIE = 'pharos-docs-theme';
export const THEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 ano

export function parseThemeMode(
  value: string | undefined | null,
): ThemeMode | null {
  if (value === 'light' || value === 'dark' || value === 'system') return value;
  return null;
}

export function serializeThemeCookie(mode: ThemeMode): string {
  return `${THEME_COOKIE}=${mode};path=/;max-age=${THEME_COOKIE_MAX_AGE};samesite=lax`;
}
