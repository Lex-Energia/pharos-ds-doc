'use client';

import {useEffect, useState} from 'react';
import {SiteHeader} from './SiteHeader';
import {SiteFooter} from './SiteFooter';
import {SearchDialog} from './SearchDialog';
import type {SearchItem} from '@/lib/search-index';

export function AppShell({
  children,
  searchItems,
}: {
  children: React.ReactNode;
  searchItems: SearchItem[];
}) {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <SiteHeader onOpenSearch={() => setSearchOpen(true)} />
      <main>{children}</main>
      <SiteFooter />
      <SearchDialog
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        items={searchItems}
      />
    </>
  );
}
