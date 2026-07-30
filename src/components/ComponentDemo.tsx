'use client';

import {VStack} from '@pharos-ds/core/Layout';
import {Heading, Text} from '@pharos-ds/core/Text';
import {getDemos} from '@/demos/registry';
import {CodeBlock} from './CodeBlock';

export function ComponentDemo({name}: {name: string}) {
  const demos = getDemos(name);

  if (demos.length === 0) {
    return (
      <div className="docs-demo-frame">
        <Text type="body" color="secondary">
          Demo interativa ainda não curada para este componente. Use a tabela de
          props abaixo e a CLI:{' '}
          <code>npx @pharos-ds/cli component {name}</code>
        </Text>
      </div>
    );
  }

  return (
    <VStack gap={6}>
      {demos.map(demo => (
        <VStack key={demo.title} gap={3}>
          <Heading level={3}>{demo.title}</Heading>
          <div className="docs-demo-frame">{demo.render()}</div>
          <CodeBlock code={demo.code} title="Exemplo" />
        </VStack>
      ))}
    </VStack>
  );
}
