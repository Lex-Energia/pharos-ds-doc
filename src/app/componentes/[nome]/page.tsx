import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {Heading, Text} from '@pharos-ds/core/Text';
import {VStack, HStack} from '@pharos-ds/core/Layout';
import {Badge} from '@pharos-ds/core/Badge';
import {
  getComponent,
  getComponentNames,
} from '@/lib/catalog';
import {ComponentDemo} from '@/components/ComponentDemo';
import {CodeBlock} from '@/components/CodeBlock';
import {hasDemo} from '@/demos/names';

type Props = {params: Promise<{nome: string}>};

export async function generateStaticParams() {
  return getComponentNames().map(nome => ({nome}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {nome} = await params;
  const component = getComponent(nome);
  if (!component) return {};
  return {
    title: component.name,
    description: component.description || `Componente ${component.name}`,
  };
}

export default async function ComponentPage({params}: Props) {
  const {nome} = await params;
  const component = getComponent(nome);
  if (!component) notFound();

  const importCode = `import {${component.name}} from '${component.importPath}';`;

  return (
    <div className="docs-page" style={{paddingBlock: 48}}>
      <VStack gap={8}>
        <VStack gap={3}>
          <Link
            href="/componentes"
            style={{fontSize: 14, color: 'var(--color-text-secondary)'}}>
            ← Componentes
          </Link>
          <HStack gap={3} vAlign="center" wrap="wrap">
            <Heading level={1}>{component.name}</Heading>
            {component.group ? (
              <Badge label={component.group} variant="info" />
            ) : null}
            {hasDemo(component.name) ? (
              <Badge label="Exemplo" variant="success" />
            ) : null}
          </HStack>
          {component.description ? (
            <Text type="body" color="secondary" style={{maxWidth: 720}}>
              {component.description}
            </Text>
          ) : null}
          <CodeBlock code={importCode} title="Importação" />
        </VStack>

        <VStack gap={3}>
          <Heading level={2}>Exemplos</Heading>
          <ComponentDemo name={component.name} />
        </VStack>

        {component.bestPractices.length > 0 ? (
          <VStack gap={3}>
            <Heading level={2}>Boas práticas</Heading>
            <ul style={{margin: 0, paddingInlineStart: 20}}>
              {component.bestPractices.map((bp, i) => (
                <li key={i} style={{marginBottom: 8, lineHeight: 1.6}}>
                  <Text type="body">
                    <strong>{bp.guidance ? 'Faça: ' : 'Evite: '}</strong>
                    {bp.description}
                  </Text>
                </li>
              ))}
            </ul>
          </VStack>
        ) : null}

        <VStack gap={3}>
          <Heading level={2}>Props</Heading>
          {component.props.length === 0 ? (
            <Text color="secondary">
              Nenhuma prop documentada. Rode{' '}
              <code>npx @pharos-ds/cli component {component.name}</code>.
            </Text>
          ) : (
            <div style={{overflowX: 'auto'}} className="docs-prose">
              <table>
                <thead>
                  <tr>
                    <th>Prop</th>
                    <th>Tipo</th>
                    <th>Padrão</th>
                    <th>Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {component.props.map(prop => (
                    <tr key={prop.name}>
                      <td>
                        <code>{prop.name}</code>
                        {prop.required ? ' *' : ''}
                      </td>
                      <td>
                        <code>{prop.type}</code>
                      </td>
                      <td>
                        {prop.default ? <code>{prop.default}</code> : '—'}
                      </td>
                      <td>{prop.description || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </VStack>

        <Text type="supporting" color="secondary">
          Pacote: {component.package} · Import: {component.importPath}
        </Text>
      </VStack>
    </div>
  );
}
