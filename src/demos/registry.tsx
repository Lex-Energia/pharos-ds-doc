'use client';

import {useState, type ReactNode} from 'react';
import {Button} from '@pharos-ds/core/Button';
import {Badge} from '@pharos-ds/core/Badge';
import {TextInput} from '@pharos-ds/core/TextInput';
import {Text, Heading} from '@pharos-ds/core/Text';
import {VStack, HStack} from '@pharos-ds/core/Layout';
import {Switch} from '@pharos-ds/core/Switch';
import {CheckboxInput} from '@pharos-ds/core/CheckboxInput';
import {Avatar} from '@pharos-ds/core/Avatar';
import {Divider} from '@pharos-ds/core/Divider';
import {Banner} from '@pharos-ds/core/Banner';
import {Link} from '@pharos-ds/core/Link';
import {Spinner} from '@pharos-ds/core/Spinner';
import {ProgressBar} from '@pharos-ds/core/ProgressBar';
import {Tooltip} from '@pharos-ds/core/Tooltip';
import {IconButton} from '@pharos-ds/core/IconButton';
import {Plus} from 'lucide-react';

export type DemoEntry = {
  title: string;
  code: string;
  render: () => ReactNode;
};

function DemoButtons() {
  return (
    <HStack gap={3} vAlign="center" wrap="wrap">
      <Button label="Primary" variant="primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Ghost" variant="ghost" />
      <Button label="Destructive" variant="destructive" />
      <Button label="Loading" variant="primary" isLoading />
    </HStack>
  );
}

function DemoBadge() {
  return (
    <HStack gap={3} vAlign="center" wrap="wrap">
      <Badge label="Info" variant="info" />
      <Badge label="Success" variant="success" />
      <Badge label="Warning" variant="warning" />
      <Badge label="Error" variant="error" />
    </HStack>
  );
}

function DemoTextInput() {
  const [value, setValue] = useState('');
  return (
    <div style={{maxWidth: 360}}>
      <TextInput
        label="E-mail"
        placeholder="voce@alexandria.dev"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

function DemoLayout() {
  return (
    <VStack gap={3}>
      <HStack gap={3}>
        <Badge label="HStack" variant="info" />
        <Badge label="gap={3}" variant="success" />
      </HStack>
      <Text type="body" color="secondary">
        Layout primitives: VStack, HStack, Grid — spacing via tokens.
      </Text>
    </VStack>
  );
}

function DemoSwitch() {
  const [on, setOn] = useState(true);
  return <Switch label="Notificações" value={on} onChange={setOn} />;
}

function DemoCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <CheckboxInput
      label="Aceito os termos"
      value={checked}
      onChange={setChecked}
    />
  );
}

function DemoAvatar() {
  return (
    <HStack gap={3} vAlign="center">
      <Avatar name="Ami Pena" />
      <Avatar name="Alexandria" />
      <Avatar name="Pharos DS" />
    </HStack>
  );
}

function DemoBanner() {
  return (
    <Banner
      status="info"
      title="Pharos"
      description="Design system da Alexandria — acessível e themeable."
    />
  );
}

function DemoLink() {
  return (
    <HStack gap={4}>
      <Link href="/docs/instalacao">Instalação</Link>
      <Link href="/componentes">Componentes</Link>
    </HStack>
  );
}

function DemoSpinner() {
  return (
    <HStack gap={4} vAlign="center">
      <Spinner />
      <Text type="body" color="secondary">
        Carregando…
      </Text>
    </HStack>
  );
}

function DemoProgressBar() {
  return <ProgressBar value={72} label="Progresso" hasValueLabel />;
}

function DemoHeading() {
  return (
    <VStack gap={2}>
      <Heading level={2}>Heading</Heading>
      <Text type="body">Texto body com token de tipografia.</Text>
      <Text type="supporting" color="secondary">
        Meta / secondary
      </Text>
    </VStack>
  );
}

function DemoDivider() {
  return (
    <VStack gap={3}>
      <Text>Acima</Text>
      <Divider />
      <Text>Abaixo</Text>
    </VStack>
  );
}

function DemoIconButton() {
  return (
    <IconButton label="Adicionar" icon={<Plus size={16} />} />
  );
}

function DemoTooltip() {
  return (
    <Tooltip content="Dica útil">
      <Button label="Passe o mouse" variant="secondary" />
    </Tooltip>
  );
}

const demos: Record<string, DemoEntry[]> = {
  Button: [
    {
      title: 'Variantes',
      code: `import {Button} from '@pharos-ds/core/Button';

<Button label="Primary" variant="primary" />
<Button label="Secondary" variant="secondary" />
<Button label="Ghost" variant="ghost" />
<Button label="Destructive" variant="destructive" />`,
      render: () => <DemoButtons />,
    },
  ],
  Badge: [
    {
      title: 'Variantes semânticas',
      code: `import {Badge} from '@pharos-ds/core/Badge';

<Badge label="Info" variant="info" />
<Badge label="Success" variant="success" />`,
      render: () => <DemoBadge />,
    },
  ],
  TextInput: [
    {
      title: 'Controlado',
      code: `import {TextInput} from '@pharos-ds/core/TextInput';

<TextInput label="E-mail" value={value} onChange={setValue} />`,
      render: () => <DemoTextInput />,
    },
  ],
  Layout: [
    {
      title: 'Stacks',
      code: `import {VStack, HStack} from '@pharos-ds/core/Layout';

<VStack gap={3}>
  <HStack gap={3}>...</HStack>
</VStack>`,
      render: () => <DemoLayout />,
    },
  ],
  Stack: [
    {
      title: 'Stack / HStack / VStack',
      code: `import {VStack, HStack} from '@pharos-ds/core/Layout';

<VStack gap={3}>
  <HStack gap={3} vAlign="center">{children}</HStack>
</VStack>`,
      render: () => <DemoLayout />,
    },
  ],
  Switch: [
    {
      title: 'Toggle',
      code: `import {Switch} from '@pharos-ds/core/Switch';

<Switch label="Notificações" value={on} onChange={setOn} />`,
      render: () => <DemoSwitch />,
    },
  ],
  CheckboxInput: [
    {
      title: 'Checkbox',
      code: `import {CheckboxInput} from '@pharos-ds/core/CheckboxInput';

<CheckboxInput label="Aceito os termos" value={checked} onChange={setChecked} />`,
      render: () => <DemoCheckbox />,
    },
  ],
  Avatar: [
    {
      title: 'Iniciais',
      code: `import {Avatar} from '@pharos-ds/core/Avatar';

<Avatar name="Ami Pena" />`,
      render: () => <DemoAvatar />,
    },
  ],
  Banner: [
    {
      title: 'Info',
      code: `import {Banner} from '@pharos-ds/core/Banner';

<Banner status="info" title="Pharos" description="..." />`,
      render: () => <DemoBanner />,
    },
  ],
  Link: [
    {
      title: 'Links',
      code: `import {Link} from '@pharos-ds/core/Link';

<Link href="/docs">Docs</Link>`,
      render: () => <DemoLink />,
    },
  ],
  Spinner: [
    {
      title: 'Loading',
      code: `import {Spinner} from '@pharos-ds/core/Spinner';

<Spinner />`,
      render: () => <DemoSpinner />,
    },
  ],
  ProgressBar: [
    {
      title: 'Progresso',
      code: `import {ProgressBar} from '@pharos-ds/core/ProgressBar';

<ProgressBar value={72} label="Progresso" hasValueLabel />`,
      render: () => <DemoProgressBar />,
    },
  ],
  Text: [
    {
      title: 'Tipografia',
      code: `import {Text, Heading} from '@pharos-ds/core/Text';

<Heading level={2}>Heading</Heading>
<Text type="body">Body</Text>`,
      render: () => <DemoHeading />,
    },
  ],
  Divider: [
    {
      title: 'Divisor',
      code: `import {Divider} from '@pharos-ds/core';

<Divider />`,
      render: () => <DemoDivider />,
    },
  ],
  IconButton: [
    {
      title: 'Ícone',
      code: `import {IconButton} from '@pharos-ds/core/IconButton';

<IconButton label="Adicionar" icon={<Plus />} />`,
      render: () => <DemoIconButton />,
    },
  ],
  Tooltip: [
    {
      title: 'Tooltip',
      code: `import {Tooltip} from '@pharos-ds/core/Tooltip';

<Tooltip content="Dica">
  <Button label="Hover" />
</Tooltip>`,
      render: () => <DemoTooltip />,
    },
  ],
};

export function getDemos(componentName: string): DemoEntry[] {
  return demos[componentName] ?? [];
}
