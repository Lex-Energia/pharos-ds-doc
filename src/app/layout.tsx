import type {Metadata} from 'next';
import './globals.css';
import {Providers} from '@/lib/pharos/providers';
import {AppShell} from '@/components/shell/AppShell';
import {buildSearchIndex} from '@/lib/search-index';

export const metadata: Metadata = {
  title: {
    default: 'Pharos — Design System da Alexandria',
    template: '%s · Pharos',
  },
  description:
    'Documentação oficial do Pharos: componentes React acessíveis, temas, templates e guias de instalação.',
  metadataBase: new URL('https://pharos-docs.vercel.app'),
  openGraph: {
    title: 'Pharos — Design System da Alexandria',
    description:
      'Design system open source, customizável e pronto para agentes.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const searchItems = buildSearchIndex();

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Providers>
          <AppShell searchItems={searchItems}>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
