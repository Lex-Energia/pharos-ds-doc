import Link from 'next/link';
import {Button} from '@pharos-ds/core/Button';
import {Badge} from '@pharos-ds/core/Badge';
import {Heading, Text} from '@pharos-ds/core/Text';
import {VStack, HStack} from '@pharos-ds/core/Layout';
import {catalog} from '@/lib/catalog';
import {templatesCatalog} from '@/lib/catalog';

const componentCount = Object.keys(catalog.components).length;
const templateCount = templatesCatalog.templates.length;

export default function HomePage() {
  return (
    <div
      style={{
        background: 'var(--docs-hero-gradient)',
        minHeight: 'calc(100vh - var(--docs-header-height))',
      }}>
      <section className="docs-page" style={{paddingBlock: 'clamp(48px, 10vh, 120px)'}}>
        <VStack gap={8}>
          <VStack gap={4} className="motion-fade-up">
            <Badge label="Alexandria · Beta" variant="info" />
            <Heading level={1}>
              Pharos
            </Heading>
            <Text type="body" color="secondary" style={{maxWidth: 560, fontSize: 18}}>
              Design system open source da Alexandria — componentes acessíveis,
              temas brandáveis e templates prontos para envio. Feito para
              pessoas e agentes.
            </Text>
            <HStack gap={3} wrap="wrap" className="motion-fade-up-delay-1">
              <Link href="/docs/instalacao" style={{textDecoration: 'none'}}>
                <Button label="Começar" variant="primary" size="lg" />
              </Link>
              <Link href="/componentes" style={{textDecoration: 'none'}}>
                <Button label="Ver componentes" variant="secondary" size="lg" />
              </Link>
            </HStack>
          </VStack>

          <div
            className="motion-fade-up-delay-2 docs-demo-frame"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 16,
            }}>
            <Stat
              label="Componentes"
              value={componentCount > 0 ? String(componentCount) : '100+'}
              href="/componentes"
            />
            <Stat
              label="Templates"
              value={templateCount > 0 ? String(templateCount) : '40+'}
              href="/templates"
            />
            <Stat label="Tema oficial" value="Pharos" href="/temas" />
            <Stat label="Stack" value="React 19" href="/docs/nextjs" />
          </div>

          <VStack gap={4} style={{marginTop: 24}}>
            <Heading level={2}>Comece em minutos</Heading>
            <pre
              style={{
                margin: 0,
                padding: 20,
                borderRadius: 12,
                overflow: 'auto',
                background:
                  'color-mix(in srgb, var(--color-text-primary) 6%, transparent)',
                border:
                  '1px solid color-mix(in srgb, var(--color-text-primary) 10%, transparent)',
                fontSize: 14,
                lineHeight: 1.6,
              }}>
              <code>{`pnpm add @pharos-ds/core @pharos-ds/theme-pharos
pnpm add -D @pharos-ds/cli`}</code>
            </pre>
            <Text type="body" color="secondary">
              Depois importe o CSS, envolva com{' '}
              <code>{'<Theme>'}</code> e use os componentes. Guia completo em{' '}
              <Link href="/docs/instalacao">Instalação</Link>.
            </Text>
          </VStack>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 16,
              marginTop: 16,
            }}>
            <FeatureCard
              title="Documentação"
              description="Instalação, Next.js, CLI, tokens e agentes."
              href="/docs"
            />
            <FeatureCard
              title="Componentes"
              description="Galeria com exemplos ao vivo e tabela de props."
              href="/componentes"
            />
            <FeatureCard
              title="Templates"
              description="Páginas prontas via CLI para acelerar o lançamento."
              href="/templates"
            />
            <FeatureCard
              title="Temas"
              description="Tema Pharos, dark mode e customização."
              href="/temas"
            />
          </div>
        </VStack>
      </section>
    </div>
  );
}

function Stat({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <Link href={href} className="docs-card">
      <VStack gap={1}>
        <Text type="supporting" color="secondary">
          {label}
        </Text>
        <Heading level={3}>{value}</Heading>
      </VStack>
    </Link>
  );
}

function FeatureCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="docs-card">
      <VStack gap={2}>
        <Heading level={3}>{title}</Heading>
        <Text type="body" color="secondary">
          {description}
        </Text>
      </VStack>
    </Link>
  );
}
