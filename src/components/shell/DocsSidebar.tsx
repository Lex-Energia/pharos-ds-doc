'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {VStack} from '@pharos-ds/core/Layout';
import {Text} from '@pharos-ds/core/Text';
import type {DocMeta} from '@/lib/docs';

export function DocsSidebar({docs}: {docs: DocMeta[]}) {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: 'var(--docs-sidebar-width)',
        flexShrink: 0,
        position: 'sticky',
        top: 'var(--docs-header-height)',
        alignSelf: 'flex-start',
        maxHeight: 'calc(100vh - var(--docs-header-height))',
        overflow: 'auto',
        paddingBlock: 'var(--spacing-6)',
        paddingInlineEnd: 'var(--spacing-4)',
      }}>
      <VStack gap={3}>
        <Text type="supporting" color="secondary" weight="bold">
          Guias
        </Text>
        <nav aria-label="Documentação">
          <VStack gap={1}>
            {docs.map(doc => {
              const href = `/docs/${doc.slug}`;
              const active = pathname === href;
              return (
                <Link
                  key={doc.slug}
                  href={href}
                  style={{
                    textDecoration: 'none',
                    color: active
                      ? 'var(--color-text-primary)'
                      : 'var(--color-text-secondary)',
                    fontWeight: active ? 600 : 500,
                    fontSize: 14,
                    padding: '8px 10px',
                    borderRadius: 8,
                    background: active
                      ? 'color-mix(in srgb, var(--color-accent) 12%, transparent)'
                      : 'transparent',
                  }}>
                  {doc.title}
                </Link>
              );
            })}
          </VStack>
        </nav>
      </VStack>
    </aside>
  );
}
