import type {Metadata} from 'next';
import Link from 'next/link';
import {Heading, Text} from '@pharos-ds/core/Text';
import {VStack, HStack} from '@pharos-ds/core/Layout';
import {Badge} from '@pharos-ds/core/Badge';
import {getGroupedComponents, catalog} from '@/lib/catalog';
import {hasDemo} from '@/demos/names';
import {ComponentSearch} from '@/components/ComponentSearch';

export const metadata: Metadata = {
  title: 'Componentes',
  description: 'Galeria de componentes React do Pharos.',
};

export default function ComponentsPage() {
  const groups = getGroupedComponents();
  const total = Object.keys(catalog.components).length;

  return (
    <div className="docs-page" style={{paddingBlock: 48}}>
      <VStack gap={8}>
        <VStack gap={3} className="motion-fade-up">
          <HStack gap={3} vAlign="center">
            <Heading level={1}>Componentes</Heading>
            <Badge label={`${total}`} variant="info" />
          </HStack>
          <Text type="body" color="secondary" style={{maxWidth: 640}}>
            Componentes acessíveis e themeable. Props geradas a partir da CLI —
            a mesma fonte que agentes e humanos devem consultar.
          </Text>
          <ComponentSearch />
        </VStack>

        {groups.map(group => (
          <VStack key={group.group} gap={3}>
            <Heading level={2}>{group.group}</Heading>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: 12,
              }}>
              {group.items.map(item => (
                <Link
                  key={item.name}
                  href={`/componentes/${item.name}`}
                  className="docs-card">
                  <VStack gap={2}>
                    <HStack gap={2} vAlign="center" wrap="wrap">
                      <Text weight="bold">{item.name}</Text>
                      {hasDemo(item.name) ? (
                        <Badge label="Demo" variant="success" />
                      ) : null}
                    </HStack>
                    <Text type="supporting" color="secondary">
                      {item.description
                        ? item.description.slice(0, 100) +
                          (item.description.length > 100 ? '…' : '')
                        : item.importPath}
                    </Text>
                  </VStack>
                </Link>
              ))}
            </div>
          </VStack>
        ))}
      </VStack>
    </div>
  );
}
