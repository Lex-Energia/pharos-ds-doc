'use client';

import {useEffect, useMemo, useRef, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {TextInput} from '@pharos-ds/core/TextInput';
import {VStack} from '@pharos-ds/core/Layout';
import {Text} from '@pharos-ds/core/Text';

export type SidebarGroup = {
  group: string;
  items: Array<{name: string}>;
};

export function ComponentsSidebar({groups}: {groups: SidebarGroup[]}) {
  const pathname = usePathname();
  const [query, setQuery] = useState('');
  const asideRef = useRef<HTMLElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return groups;
    return groups
      .map(g => ({
        group: g.group,
        items: g.items.filter(item => item.name.toLowerCase().includes(q)),
      }))
      .filter(g => g.items.length > 0);
  }, [groups, query]);

  const total = useMemo(
    () => groups.reduce((acc, g) => acc + g.items.length, 0),
    [groups],
  );

  useEffect(() => {
    const active = asideRef.current?.querySelector(
      '.docs-components-nav-link[data-active="true"]',
    );
    active?.scrollIntoView({block: 'nearest'});
  }, [pathname]);

  return (
    <aside
      ref={asideRef}
      className="docs-components-sidebar"
      aria-label="Componentes">
      <VStack gap={4}>
        <VStack gap={2}>
          <Link href="/componentes" className="docs-components-overview-link">
            <Text
              type="supporting"
              weight="bold"
              color={pathname === '/componentes' ? 'primary' : 'secondary'}>
              Visão geral
            </Text>
          </Link>
          <TextInput
            label="Buscar componentes"
            isLabelHidden
            placeholder="Buscar componentes…"
            value={query}
            onChange={setQuery}
          />
          <Text type="supporting" color="secondary">
            {total} componentes
          </Text>
        </VStack>

        <nav aria-label="Lista de componentes">
          <VStack gap={4}>
            {filtered.map(group => (
              <VStack key={group.group} gap={1}>
                <Text type="supporting" color="secondary" weight="bold">
                  {group.group}
                </Text>
                <ul className="docs-components-nav-list">
                  {group.items.map(item => {
                    const href = `/componentes/${item.name}`;
                    const active = pathname === href;
                    return (
                      <li key={item.name}>
                        <Link
                          href={href}
                          className="docs-components-nav-link"
                          data-active={active ? 'true' : 'false'}>
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </VStack>
            ))}
            {filtered.length === 0 ? (
              <Text type="supporting" color="secondary">
                Nenhum componente encontrado.
              </Text>
            ) : null}
          </VStack>
        </nav>
      </VStack>
    </aside>
  );
}
