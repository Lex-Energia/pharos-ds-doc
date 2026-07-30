import type {Metadata} from 'next';
import Link from 'next/link';
import {Heading, Text} from '@pharos-ds/core/Text';
import {VStack, HStack} from '@pharos-ds/core/Layout';
import {Badge} from '@pharos-ds/core/Badge';
import {templatesCatalog} from '@/lib/catalog';
import {CodeBlock} from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Templates',
  description: 'Templates de página prontos via @pharos-ds/cli.',
};

export default function TemplatesPage() {
  const templates = templatesCatalog.templates;

  return (
    <div className="docs-page" style={{paddingBlock: 48}}>
      <VStack gap={8}>
        <VStack gap={3} className="motion-fade-up">
          <HStack gap={3} vAlign="center">
            <Heading level={1}>Templates</Heading>
            <Badge label={`${templates.length}`} variant="info" />
          </HStack>
          <Text type="body" color="secondary" style={{maxWidth: 640}}>
            Páginas de produção prontas para plugar conteúdo. Liste e copie com
            a CLI.
          </Text>
          <CodeBlock
            code={`npx @pharos-ds/cli template --list
npx @pharos-ds/cli template dashboard`}
            title="CLI"
          />
        </VStack>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 12,
          }}>
          {templates.map(t => (
            <Link
              key={t.id}
              href={`/templates/${encodeURIComponent(t.id)}`}
              className="docs-card">
              <VStack gap={2}>
                <Text weight="bold">{t.name}</Text>
                <Text type="supporting" color="secondary">
                  {t.description || `Template \`${t.id}\``}
                </Text>
                <Badge label={t.type || 'page'} variant="info" />
              </VStack>
            </Link>
          ))}
        </div>
      </VStack>
    </div>
  );
}
