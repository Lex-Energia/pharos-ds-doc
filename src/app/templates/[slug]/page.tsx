import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {Heading, Text} from '@pharos-ds/core/Text';
import {VStack} from '@pharos-ds/core/Layout';
import {Badge} from '@pharos-ds/core/Badge';
import {templatesCatalog} from '@/lib/catalog';
import {CodeBlock} from '@/components/CodeBlock';

type Props = {params: Promise<{slug: string}>};

export async function generateStaticParams() {
  return templatesCatalog.templates.map(t => ({
    slug: t.id,
  }));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const id = decodeURIComponent(slug);
  const template = templatesCatalog.templates.find(t => t.id === id);
  if (!template) return {};
  return {
    title: template.name,
    description: template.description || `Template ${template.name}`,
  };
}

export default async function TemplatePage({params}: Props) {
  const {slug} = await params;
  const id = decodeURIComponent(slug);
  const template = templatesCatalog.templates.find(t => t.id === id);
  if (!template) notFound();

  return (
    <div className="docs-page" style={{paddingBlock: 48}}>
      <VStack gap={6}>
        <Link
          href="/templates"
          style={{fontSize: 14, color: 'var(--color-text-secondary)'}}>
          ← Templates
        </Link>
        <VStack gap={3}>
          <Heading level={1}>{template.name}</Heading>
          <Badge label={template.type || 'page'} variant="info" />
          <Text type="body" color="secondary">
            {template.description ||
              'Template de página do Pharos CLI. Use o comando abaixo para inspecionar ou copiar.'}
          </Text>
        </VStack>

        <div className="docs-demo-frame">
          <VStack gap={2}>
            <Text weight="bold">Como usar</Text>
            <Text type="body" color="secondary">
              A CLI resolve o template a partir de{' '}
              <code>@pharos-ds/cli</code> e pode gerar um skeleton no seu
              projeto.
            </Text>
          </VStack>
        </div>

        <CodeBlock
          code={`npx @pharos-ds/cli template ${template.id}
npx @pharos-ds/cli template ${template.id} --skeleton`}
          title="CLI"
        />

        <Text type="supporting" color="secondary">
          Pacote: {template.package}
        </Text>
      </VStack>
    </div>
  );
}
