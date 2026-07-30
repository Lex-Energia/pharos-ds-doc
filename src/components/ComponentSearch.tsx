'use client';

import {useMemo, useState} from 'react';
import Link from 'next/link';
import {TextInput} from '@pharos-ds/core/TextInput';
import {VStack, HStack} from '@pharos-ds/core/Layout';
import {Text} from '@pharos-ds/core/Text';
import {Badge} from '@pharos-ds/core/Badge';
import {catalog} from '@/lib/catalog';
import {hasDemo} from '@/demos/names';

export function ComponentSearch() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return Object.values(catalog.components)
      .filter(
        c =>
          c.name.toLowerCase().includes(q) ||
          c.group.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q),
      )
      .slice(0, 12);
  }, [query]);

  return (
    <VStack gap={3} style={{maxWidth: 480}}>
      <TextInput
        label="Buscar componentes"
        isLabelHidden
        placeholder="Button, Banner, Chat…"
        value={query}
        onChange={setQuery}
      />
      {results.length > 0 ? (
        <VStack gap={1}>
          {results.map(item => (
            <Link
              key={item.name}
              href={`/componentes/${item.name}`}
              className="docs-card"
              style={{padding: '10px 12px'}}>
              <HStack gap={2} vAlign="center" wrap="wrap">
                <Text weight="bold">{item.name}</Text>
                <Text type="supporting" color="secondary">
                  {item.group}
                </Text>
                {hasDemo(item.name) ? (
                  <Badge label="Demo" variant="success" />
                ) : null}
              </HStack>
            </Link>
          ))}
        </VStack>
      ) : null}
    </VStack>
  );
}
