'use client';

import Link from 'next/link';
import {Theme} from '@pharos-ds/core/theme';
import {LinkProvider} from '@pharos-ds/core/Link';
import {pharosTheme} from '@pharos-ds/theme-pharos/built';
import {ThemeModeProvider, useThemeMode} from './theme-mode';

function ThemedTree({children}: {children: React.ReactNode}) {
  const {resolved} = useThemeMode();
  return (
    <Theme theme={pharosTheme} mode={resolved}>
      <LinkProvider component={Link}>{children}</LinkProvider>
    </Theme>
  );
}

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <ThemeModeProvider>
      <ThemedTree>{children}</ThemedTree>
    </ThemeModeProvider>
  );
}
