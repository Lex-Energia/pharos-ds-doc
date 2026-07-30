'use client';

import {VStack} from '@pharos-ds/core/Layout';
import {Text} from '@pharos-ds/core/Text';
import {getDemos} from '@/demos/registry';
import {InteractiveDemo} from '@/demos/InteractiveDemo';

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
        <InteractiveDemo key={demo.title} config={demo} />
      ))}
    </VStack>
  );
}
