import type {Metadata} from 'next';
import Link from 'next/link';
import {Heading, Text} from '@pharos-ds/core/Text';
import {VStack, HStack} from '@pharos-ds/core/Layout';
import {Button} from '@pharos-ds/core/Button';
import {Badge} from '@pharos-ds/core/Badge';
import {CodeBlock} from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Temas',
  description: 'Theme Pharos oficial e como customizar.',
};

export default function ThemesPage() {
  return (
    <div className="docs-page" style={{paddingBlock: 48}}>
      <VStack gap={8}>
        <VStack gap={3} className="motion-fade-up">
          <Heading level={1}>Temas</Heading>
          <Text type="body" color="secondary" style={{maxWidth: 640}}>
            O tema oficial <strong>Pharos</strong> carrega a marca Alexandria:
            tokens, dark mode e ícones Lucide.
          </Text>
        </VStack>

        <div
          className="docs-demo-frame"
          style={{
            background:
              'linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 18%, transparent), transparent)',
          }}>
          <VStack gap={4}>
            <HStack gap={3} vAlign="center" wrap="wrap">
              <Badge label="theme-pharos" variant="info" />
              <Badge label="público" variant="success" />
            </HStack>
            <Heading level={2}>Pharos</Heading>
            <Text type="body" color="secondary">
              Tema built para consumo direto — sem plugin StyleX no app.
            </Text>
            <HStack gap={3} wrap="wrap">
              <Button label="Primary" variant="primary" />
              <Button label="Secondary" variant="secondary" />
              <Button label="Ghost" variant="ghost" />
            </HStack>
          </VStack>
        </div>

        <VStack gap={3}>
          <Heading level={2}>Instalação</Heading>
          <CodeBlock
            code={`pnpm add @pharos-ds/theme-pharos

import {Theme} from '@pharos-ds/core/theme';
import {pharosTheme} from '@pharos-ds/theme-pharos/built';
import '@pharos-ds/theme-pharos/theme.css';

<Theme theme={pharosTheme} mode="system">
  {children}
</Theme>`}
            title="Theme"
          />
        </VStack>

        <VStack gap={3}>
          <Heading level={2}>Customizar</Heading>
          <Text type="body" color="secondary">
            Defina um tema TypeScript e gere o CSS com a CLI. Guia completo em{' '}
            <Link href="/docs/temas">Docs → Temas</Link>.
          </Text>
          <CodeBlock
            code={`npx @pharos-ds/cli theme build src/themes/meuTema.ts --out src/themes/meuTema.css`}
            title="CLI"
          />
        </VStack>

        <VStack gap={2}>
          <Heading level={3}>Dark mode</Heading>
          <Text type="body" color="secondary">
            Use o toggle no header deste site, ou controle o prop{' '}
            <code>mode</code> de <code>{'<Theme>'}</code> (
            <code>light</code> / <code>dark</code> / <code>system</code>).
          </Text>
        </VStack>
      </VStack>
    </div>
  );
}
