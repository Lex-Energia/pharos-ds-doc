'use client';

import Link from 'next/link';
import {Theme} from '@pharos-ds/core/theme';
import {LinkProvider} from '@pharos-ds/core/Link';
import {pharosTheme} from '@pharos-ds/theme-pharos/built';
import {
  ThemeModeProvider,
  useThemeMode,
  type ThemeMode,
} from './theme-mode';

function ThemedTree({children}: {children: React.ReactNode}) {
  const {resolved} = useThemeMode();
  return (
    <Theme theme={pharosTheme} mode={resolved}>
      <LinkProvider component={Link}>{children}</LinkProvider>
    </Theme>
  );
}

export function Providers({
  children,
  initialMode = 'system',
}: {
  children: React.ReactNode;
  initialMode?: ThemeMode;
}) {
  return (
    <ThemeModeProvider initialMode={initialMode}>
      <ThemedTree>{children}</ThemedTree>
    </ThemeModeProvider>
  );
}
