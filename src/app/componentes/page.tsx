import type {Metadata} from 'next';
import {Heading, Text} from '@pharos-ds/core/Text';
import {VStack, HStack} from '@pharos-ds/core/Layout';
import {Badge} from '@pharos-ds/core/Badge';
import {getComponentNames, catalog} from '@/lib/catalog';
import {ComponentPreviewCard} from '@/components/components/ComponentPreviewCard';

export const metadata: Metadata = {
  title: 'Componentes',
  description: 'Galeria de componentes React do Pharos.',
};

export default function ComponentsPage() {
  const names = getComponentNames();
  const total = Object.keys(catalog.components).length;

  return (
    <div className="docs-components-content">
      <VStack gap={8}>
        <VStack gap={3} className="motion-fade-up docs-components-hero">
          <HStack gap={3} vAlign="center" style={{justifyContent: 'center'}}>
            <Heading level={1}>Explore a biblioteca</Heading>
            <Badge label={`${total}`} variant="info" />
          </HStack>
          <Text
            type="body"
            color="secondary"
            style={{maxWidth: 560, textAlign: 'center', marginInline: 'auto'}}>
            Cada componente com exemplos prontos para copiar — variantes,
            estados e padrões.
          </Text>
        </VStack>

        <div className="docs-preview-grid">
          {names.map(name => (
            <ComponentPreviewCard
              key={name}
              name={name}
              href={`/componentes/${name}`}
            />
          ))}
        </div>
      </VStack>
    </div>
  );
}
