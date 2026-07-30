import Link from 'next/link';
import {HStack, VStack} from '@pharos-ds/core/Layout';
import {Text} from '@pharos-ds/core/Text';

export function SiteFooter() {
  return (
    <footer
      style={{
        marginTop: 'var(--spacing-12)',
        borderTop:
          '1px solid color-mix(in srgb, var(--color-text-primary) 10%, transparent)',
        paddingBlock: 'var(--spacing-8)',
      }}>
      <div className="docs-page">
        <VStack gap={4}>
          <HStack gap={4} wrap="wrap">
            <Link href="/docs/instalacao" style={{color: 'inherit'}}>
              Documentação
            </Link>
            <Link href="/componentes" style={{color: 'inherit'}}>
              Componentes
            </Link>
            <Link href="/templates" style={{color: 'inherit'}}>
              Templates
            </Link>
            <Link href="/temas" style={{color: 'inherit'}}>
              Temas
            </Link>
            <a
              href="https://www.npmjs.com/package/@pharos-ds/core"
              target="_blank"
              rel="noreferrer"
              style={{color: 'inherit'}}>
              npm
            </a>
            <a
              href="https://github.com/Caio-Silvestre/alexandria-ds"
              target="_blank"
              rel="noreferrer"
              style={{color: 'inherit'}}>
              GitHub
            </a>
          </HStack>
          <Text type="supporting" color="secondary">
            Pharos — design system da Alexandria. Licença MIT.
          </Text>
        </VStack>
      </div>
    </footer>
  );
}
