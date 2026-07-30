'use client';

import {useState, type ReactNode} from 'react';
import {Tab, TabList, TabMenu} from '@pharos-ds/core/TabList';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  proportional,
  pixel,
} from '@pharos-ds/core/Table';
import {Text} from '@pharos-ds/core/Text';
import {TextArea} from '@pharos-ds/core/TextArea';
import {TextInput} from '@pharos-ds/core/TextInput';
import {Theme} from '@pharos-ds/core/theme';
import {Thumbnail} from '@pharos-ds/core/Thumbnail';
import {TimeInput} from '@pharos-ds/core/TimeInput';
import type {ISOTimeString} from '@pharos-ds/core/TimeInput';
import {Timestamp} from '@pharos-ds/core/Timestamp';
import {Toast} from '@pharos-ds/core/Toast';
import {ToggleButton, ToggleButtonGroup} from '@pharos-ds/core/ToggleButton';
import {Token} from '@pharos-ds/core/Token';
import {Tokenizer} from '@pharos-ds/core/Tokenizer';
import {Toolbar} from '@pharos-ds/core/Toolbar';
import {Tooltip} from '@pharos-ds/core/Tooltip';
import {
  TopNav,
  TopNavHeading,
  TopNavItem,
  TopNavMegaMenu,
  TopNavMegaMenuFeaturedCard,
  TopNavMegaMenuItem,
  TopNavMenu,
} from '@pharos-ds/core/TopNav';
import {TreeList} from '@pharos-ds/core/TreeList';
import type {TreeListItemData} from '@pharos-ds/core/TreeList';
import {
  Typeahead,
  TypeaheadItem,
  createStaticSource,
} from '@pharos-ds/core/Typeahead';
import type {SearchableItem} from '@pharos-ds/core/Typeahead';
import {VisuallyHidden} from '@pharos-ds/core/VisuallyHidden';
import {Button} from '@pharos-ds/core/Button';
import {pharosTheme} from '@pharos-ds/theme-pharos';
import {demo, selectControl, booleanControl} from '../helpers';
import {controlsFromCatalog} from '../controlsFromCatalog';
import {DEMO_IMAGE_1, DEMO_IMAGE_2} from '../images';
import type {ControlValue, InteractiveDemoConfig} from '../types';

// ---------------------------------------------------------------------------
// Shared demo data
// ---------------------------------------------------------------------------

const TABLE_ROWS = [
  {id: '1', name: 'Alice', role: 'Engenheira', status: 'Ativo'},
  {id: '2', name: 'Bob', role: 'Designer', status: 'Ausente'},
  {id: '3', name: 'Carol', role: 'GP', status: 'Ativo'},
];

const TABLE_COLUMNS = [
  {key: 'name', header: 'Nome', width: proportional(1)},
  {key: 'role', header: 'Função', width: proportional(1)},
  {key: 'status', header: 'Status', width: pixel(120)},
];

const TYPEAHEAD_ITEMS: SearchableItem[] = [
  {id: '1', label: 'Maçã'},
  {id: '2', label: 'Banana'},
  {id: '3', label: 'Cereja'},
  {id: '4', label: 'Tamara'},
  {id: '5', label: 'Sabugueiro'},
];

const typeaheadSource = createStaticSource(TYPEAHEAD_ITEMS);

const TOKENIZER_ITEMS: SearchableItem[] = [
  {id: '1', label: 'Alice Johnson'},
  {id: '2', label: 'Bob Smith'},
  {id: '3', label: 'Carol White'},
  {id: '4', label: 'Diana Prince'},
];

const tokenizerSource = createStaticSource(TOKENIZER_ITEMS);

const TREE_ITEMS: TreeListItemData[] = [
  {
    id: 'src',
    label: 'src',
    isExpanded: true,
    children: [
      {id: 'components', label: 'components', isExpanded: true, children: [
        {id: 'button', label: 'Button.tsx'},
        {id: 'input', label: 'TextInput.tsx'},
      ]},
      {id: 'hooks', label: 'hooks'},
    ],
  },
  {id: 'package', label: 'package.json'},
];

const TAB_MENU_OPTIONS = [
  {value: 'archived', label: 'Arquivados'},
  {value: 'drafts', label: 'Rascunhos'},
  {value: 'spam', label: 'Spam'},
];

const TOP_NAV_MENU_ITEMS = [
  {title: 'Análises', description: 'Acompanhe o comportamento dos usuários', href: '#analytics'},
  {title: 'Relatórios', description: 'Gere insights', href: '#reports'},
];

// ---------------------------------------------------------------------------
// Stateful preview helpers
// ---------------------------------------------------------------------------

function TabListPreview({
  size,
  layout,
  hasDivider,
}: Record<string, ControlValue>) {
  const [value, setValue] = useState('overview');
  return (
    <TabList
      value={value}
      onChange={setValue}
      size={size as 'sm' | 'md' | 'lg'}
      layout={layout as 'hug' | 'fill'}
      hasDivider={Boolean(hasDivider)}>
      <Tab value="overview" label="Visão geral" />
      <Tab value="details" label="Detalhes" />
      <Tab value="activity" label="Atividade" />
    </TabList>
  );
}

function TabPreview({isLabelHidden}: Record<string, ControlValue>) {
  const [value, setValue] = useState('inbox');
  return (
    <TabList value={value} onChange={setValue} size="md">
      <Tab value="inbox" label="Caixa de entrada" isLabelHidden={Boolean(isLabelHidden)} />
      <Tab value="sent" label="Enviados" />
    </TabList>
  );
}

function TabMenuPreview({label}: Record<string, ControlValue>) {
  const [value, setValue] = useState('inbox');
  return (
    <TabList value={value} onChange={setValue} size="md" hasDivider>
      <Tab value="inbox" label="Caixa de entrada" />
      <Tab value="sent" label="Enviados" />
      <TabMenu label={String(label)} options={TAB_MENU_OPTIONS} />
    </TabList>
  );
}

function TextInputPreview({
  size,
  isDisabled,
}: Record<string, ControlValue>) {
  const [value, setValue] = useState('Pharos Design System');
  return (
    <TextInput
      label="Nome do projeto"
      value={value}
      onChange={setValue}
      size={size as 'sm' | 'md' | 'lg'}
      isDisabled={Boolean(isDisabled)}
      width={320}
    />
  );
}

function TextAreaPreview({
  size,
  isDisabled,
}: Record<string, ControlValue>) {
  const [value, setValue] = useState('Descreva seu caso de uso…');
  return (
    <TextArea
      label="Descrição"
      value={value}
      onChange={setValue}
      size={size as 'sm' | 'md' | 'lg'}
      isDisabled={Boolean(isDisabled)}
      rows={3}
      width={360}
    />
  );
}

function TimeInputPreview({
  hourFormat,
  size,
  isDisabled,
}: Record<string, ControlValue>) {
  const [value, setValue] = useState<ISOTimeString | undefined>(
    '09:30' as ISOTimeString,
  );
  return (
    <TimeInput
      label="Horário da reunião"
      value={value}
      onChange={setValue}
      hourFormat={hourFormat as '12h' | '24h'}
      size={size as 'sm' | 'md' | 'lg'}
      isDisabled={Boolean(isDisabled)}
      width={240}
    />
  );
}

function ToastPreview({
  type,
  isAutoHide,
}: Record<string, ControlValue>) {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return (
      <Button label="Mostrar toast" variant="secondary" onClick={() => setVisible(true)} />
    );
  }
  return (
    <Toast
      type={type as 'info' | 'error'}
      body={type === 'error' ? 'Algo deu errado' : 'Alterações salvas'}
      isAutoHide={Boolean(isAutoHide)}
      autoHideDuration={5000}
      onDismiss={() => setVisible(false)}
    />
  );
}

function ToggleButtonPreview({
  size,
  isDisabled,
}: Record<string, ControlValue>) {
  const [pressed, setPressed] = useState(false);
  return (
    <ToggleButton
      label="Negrito"
      isPressed={pressed}
      onPressedChange={setPressed}
      size={size as 'sm' | 'md' | 'lg'}
      isDisabled={Boolean(isDisabled)}
    />
  );
}

function ToggleButtonGroupPreview({
  type,
  orientation,
  size,
}: Record<string, ControlValue>) {
  const [single, setSingle] = useState<string | null>('list');
  const [multiple, setMultiple] = useState<string[]>(['bold']);
  const buttons = (
    <>
      <ToggleButton label="Lista" value="list" />
      <ToggleButton label="Grade" value="grid" />
      <ToggleButton label="Negrito" value="bold" />
    </>
  );

  if (type === 'multiple') {
    return (
      <ToggleButtonGroup
        label="Opções de visualização"
        type="multiple"
        orientation={orientation as 'horizontal' | 'vertical'}
        size={size as 'sm' | 'md' | 'lg'}
        value={multiple}
        onChange={setMultiple}>
        {buttons}
      </ToggleButtonGroup>
    );
  }

  return (
    <ToggleButtonGroup
      label="Opções de visualização"
      type="single"
      orientation={orientation as 'horizontal' | 'vertical'}
      size={size as 'sm' | 'md' | 'lg'}
      value={single}
      onChange={setSingle}>
      {buttons}
    </ToggleButtonGroup>
  );
}

function TokenizerPreview({
  size,
  hasCreate,
  isDisabled,
}: Record<string, ControlValue>) {
  const [value, setValue] = useState<SearchableItem[]>([
    {id: '1', label: 'Alice Johnson'},
  ]);
  return (
    <Tokenizer
      label="Membros da equipe"
      searchSource={tokenizerSource}
      value={value}
      onChange={setValue}
      placeholder="Buscar pessoas…"
      size={size as 'sm' | 'md' | 'lg'}
      hasCreate={Boolean(hasCreate)}
      isDisabled={Boolean(isDisabled)}
      width={400}
    />
  );
}

function TypeaheadPreview({
  size,
  isDisabled,
  hasEntriesOnFocus,
}: Record<string, ControlValue>) {
  const [value, setValue] = useState<SearchableItem | null>(null);
  return (
    <Typeahead
      label="Fruta"
      searchSource={typeaheadSource}
      value={value}
      onChange={setValue}
      placeholder="Buscar frutas…"
      size={size as 'sm' | 'md' | 'lg'}
      isDisabled={Boolean(isDisabled)}
      hasEntriesOnFocus={Boolean(hasEntriesOnFocus)}
      width={320}
    />
  );
}

function TopNavShell({children}: {children: ReactNode}) {
  return <div style={{width: '100%', overflowX: 'auto'}}>{children}</div>;
}

function MinimalTable({
  density,
  isStriped,
  hasHover,
}: Record<string, ControlValue>) {
  return (
    <Table
      density={density as 'compact' | 'balanced' | 'spacious'}
      isStriped={Boolean(isStriped)}
      hasHover={Boolean(hasHover)}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Nome</TableHeaderCell>
          <TableHeaderCell>Função</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice</TableCell>
          <TableCell>Engenheira</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob</TableCell>
          <TableCell>Designer</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

export const demosTZ: Record<string, InteractiveDemoConfig[]> = {
  Tab: [
    demo({
      title: 'Área interativa',
      importLine: "import {Tab} from '@pharos-ds/core/Tab';",
      controls: [booleanControl('isLabelHidden', false, 'Ocultar rótulo')],
      render: props => <TabPreview {...props} />,
    }),
  ],

  TabList: [
    demo({
      title: 'Área interativa',
      importLine: "import {TabList} from '@pharos-ds/core/TabList';",
      controls: controlsFromCatalog('TabList', ['size', 'layout', 'hasDivider']),
      render: props => <TabListPreview {...props} />,
    }),
  ],

  TabMenu: [
    demo({
      title: 'Área interativa',
      importLine: "import {TabMenu} from '@pharos-ds/core/TabMenu';",
      controls: [selectControl('label', ['Mais', 'Excedente', 'Outros'], 'Mais')],
      fixedProps: {options: 'TAB_MENU_OPTIONS'},
      render: props => <TabMenuPreview {...props} />,
    }),
  ],

  Table: [
    demo({
      title: 'Área interativa',
      importLine: "import {Table} from '@pharos-ds/core/Table';",
      controls: controlsFromCatalog('Table', [
        'density',
        'isStriped',
        'hasHover',
      ]),
      render: props => (
        <Table
          data={TABLE_ROWS}
          columns={TABLE_COLUMNS}
          idKey="id"
          density={props.density as 'compact' | 'balanced' | 'spacious'}
          isStriped={Boolean(props.isStriped)}
          hasHover={Boolean(props.hasHover)}
        />
      ),
    }),
  ],

  TableCell: [
    demo({
      title: 'Área interativa',
      importLine: "import {TableCell} from '@pharos-ds/core/TableCell';",
      controls: controlsFromCatalog('Table', ['density', 'isStriped', 'hasHover']),
      render: props => <MinimalTable {...props} />,
    }),
  ],

  TableHeaderCell: [
    demo({
      title: 'Área interativa',
      importLine:
        "import {TableHeaderCell} from '@pharos-ds/core/TableHeaderCell';",
      controls: controlsFromCatalog('Table', ['density']),
      render: props => <MinimalTable density={props.density} />,
    }),
  ],

  TableRow: [
    demo({
      title: 'Área interativa',
      importLine: "import {TableRow} from '@pharos-ds/core/TableRow';",
      controls: [
        ...controlsFromCatalog('Table', ['isStriped', 'hasHover']),
      ],
      render: props => <MinimalTable {...props} density="balanced" />,
    }),
  ],

  Text: [
    demo({
      title: 'Área interativa',
      importLine: "import {Text} from '@pharos-ds/core/Text';",
      controls: controlsFromCatalog('Text', ['type', 'color', 'weight']),
      render: props => (
        <Text
          type={props.type as 'body' | 'label' | 'supporting' | 'large' | 'code'}
          color={
            props.color as
              | 'primary'
              | 'secondary'
              | 'disabled'
              | 'accent'
              | 'inherit'
          }
          weight={props.weight as 'normal' | 'medium' | 'semibold' | 'bold'}>
          Pharos ajuda equipes a entregar interfaces consistentes com mais rapidez.
        </Text>
      ),
    }),
  ],

  TextArea: [
    demo({
      title: 'Área interativa',
      importLine: "import {TextArea} from '@pharos-ds/core/TextArea';",
      controls: controlsFromCatalog('TextArea', ['size', 'isDisabled']),
      render: props => <TextAreaPreview {...props} />,
    }),
  ],

  TextInput: [
    demo({
      title: 'Área interativa',
      importLine: "import {TextInput} from '@pharos-ds/core/TextInput';",
      controls: controlsFromCatalog('TextInput', ['size', 'isDisabled']),
      render: props => <TextInputPreview {...props} />,
    }),
  ],

  Theme: [
    demo({
      title: 'Área interativa',
      importLine: "import {Theme} from '@pharos-ds/core/theme';",
      controls: controlsFromCatalog('Theme', ['mode']),
      render: props => (
        <Theme
          theme={pharosTheme}
          mode={props.mode as 'light' | 'dark' | 'system'}>
          <div
            style={{
              padding: 16,
              borderRadius: 8,
              border: '1px solid var(--color-border)',
            }}>
            <Text type="label">Superfície temática</Text>
            <div style={{marginTop: 8}}>
              <Button label="Ação principal" variant="primary" />
            </div>
          </div>
        </Theme>
      ),
    }),
  ],

  Thumbnail: [
    demo({
      title: 'Área interativa',
      importLine: "import {Thumbnail} from '@pharos-ds/core/Thumbnail';",
      controls: controlsFromCatalog('Thumbnail', [
        'isLoading',
        'isDisabled',
        'showRemoveOn',
      ]),
      render: props => (
        <Thumbnail
          src={props.isLoading ? undefined : DEMO_IMAGE_2}
          alt="Usina solar"
          label="usina-solar.jpg"
          isLoading={Boolean(props.isLoading)}
          isDisabled={Boolean(props.isDisabled)}
          showRemoveOn={props.showRemoveOn as 'always' | 'hover'}
          onRemove={() => undefined}
        />
      ),
    }),
  ],

  TimeInput: [
    demo({
      title: 'Área interativa',
      importLine: "import {TimeInput} from '@pharos-ds/core/TimeInput';",
      controls: controlsFromCatalog('TimeInput', [
        'hourFormat',
        'size',
        'isDisabled',
      ]),
      render: props => <TimeInputPreview {...props} />,
    }),
  ],

  Timestamp: [
    demo({
      title: 'Área interativa',
      importLine: "import {Timestamp} from '@pharos-ds/core/Timestamp';",
      controls: controlsFromCatalog('Timestamp', [
        'format',
        'isLive',
        'isTimezoneShown',
      ]),
      render: props => (
        <Timestamp
          value={Date.now() - 1000 * 60 * 45}
          format={
            props.format as
              | 'relative'
              | 'auto'
              | 'date'
              | 'date_time'
              | 'time'
          }
          isLive={Boolean(props.isLive)}
          isTimezoneShown={Boolean(props.isTimezoneShown)}
        />
      ),
    }),
  ],

  Toast: [
    demo({
      title: 'Área interativa',
      importLine: "import {Toast} from '@pharos-ds/core/Toast';",
      controls: [
        selectControl('type', ['info', 'error'], 'info'),
        booleanControl('isAutoHide', true, 'Ocultar automaticamente'),
      ],
      render: props => <ToastPreview {...props} />,
    }),
  ],

  ToggleButton: [
    demo({
      title: 'Área interativa',
      importLine: "import {ToggleButton} from '@pharos-ds/core/ToggleButton';",
      controls: controlsFromCatalog('ToggleButton', ['size', 'isDisabled']),
      render: props => <ToggleButtonPreview {...props} />,
    }),
  ],

  ToggleButtonGroup: [
    demo({
      title: 'Área interativa',
      importLine:
        "import {ToggleButtonGroup} from '@pharos-ds/core/ToggleButton';",
      controls: controlsFromCatalog('ToggleButtonGroup', [
        'type',
        'orientation',
        'size',
      ]),
      render: props => <ToggleButtonGroupPreview {...props} />,
    }),
  ],

  Token: [
    demo({
      title: 'Área interativa',
      importLine: "import {Token} from '@pharos-ds/core/Token';",
      controls: controlsFromCatalog('Token', ['size', 'color', 'isDisabled']),
      render: props => (
        <Token
          label="Sistema de design"
          size={props.size as 'sm' | 'md' | 'lg'}
          color={
            props.color as
              | 'default'
              | 'blue'
              | 'green'
              | 'red'
              | 'purple'
              | 'gray'
          }
          isDisabled={Boolean(props.isDisabled)}
          onRemove={Boolean(props.isDisabled) ? undefined : () => undefined}
        />
      ),
    }),
  ],

  Tokenizer: [
    demo({
      title: 'Área interativa',
      importLine: "import {Tokenizer} from '@pharos-ds/core/Tokenizer';",
      controls: controlsFromCatalog('Tokenizer', [
        'size',
        'hasCreate',
        'isDisabled',
      ]),
      render: props => <TokenizerPreview {...props} />,
    }),
  ],

  Toolbar: [
    demo({
      title: 'Área interativa',
      importLine: "import {Toolbar} from '@pharos-ds/core/Toolbar';",
      controls: [
        selectControl('size', ['sm', 'md', 'lg'], 'md'),
        selectControl('variant', ['transparent', 'section', 'muted'], 'transparent'),
        selectControl('orientation', ['horizontal', 'vertical'], 'horizontal'),
      ],
      render: props => (
        <Toolbar
          label="Ações do documento"
          size={props.size as 'sm' | 'md' | 'lg'}
          variant={props.variant as 'transparent' | 'section' | 'muted'}
          orientation={props.orientation as 'horizontal' | 'vertical'}
          startContent={<Button label="Voltar" variant="ghost" />}
          endContent={<Button label="Salvar" variant="primary" />}
        />
      ),
    }),
  ],

  Tooltip: [
    demo({
      title: 'Área interativa',
      importLine: "import {Tooltip} from '@pharos-ds/core/Tooltip';",
      controls: [
        selectControl('placement', ['above', 'below', 'start', 'end'], 'above'),
        booleanControl('hasHoverIndication', true, 'Indicação ao passar o mouse'),
      ],
      fixedProps: {content: 'Salvar alterações'},
      render: props => (
        <Tooltip
          content="Salvar alterações"
          placement={props.placement as 'above' | 'below' | 'start' | 'end'}
          hasHoverIndication={Boolean(props.hasHoverIndication)}>
          <Button label="Salvar" variant="secondary" />
        </Tooltip>
      ),
    }),
  ],

  TopNav: [
    demo({
      title: 'Área interativa',
      importLine: "import {TopNav} from '@pharos-ds/core/TopNav';",
      controls: [],
      render: () => (
        <TopNavShell>
          <TopNav
            label="Navegação do produto"
            heading={<TopNavHeading heading="Pharos" headingHref="#" />}
            startContent={
              <>
                <TopNavItem label="Início" href="#" isSelected />
                <TopNavItem label="Documentação" href="#" />
                <TopNavMenu label="Produtos" items={TOP_NAV_MENU_ITEMS} />
              </>
            }
            endContent={<Button label="Entrar" variant="secondary" size="sm" />}
          />
        </TopNavShell>
      ),
    }),
  ],

  TopNavHeading: [
    demo({
      title: 'Área interativa',
      importLine: "import {TopNavHeading} from '@pharos-ds/core/TopNavHeading';",
      controls: [
        booleanControl('showSuperheading', true, 'Supertítulo'),
        booleanControl('showSubheading', false, 'Subtítulo'),
      ],
      render: props => (
        <TopNavShell>
          <TopNav
            label="Demonstração de título"
            heading={
              <TopNavHeading
                heading="Pharos"
                headingHref="#"
                superheading={
                  props.showSuperheading ? 'Meta Design Systems' : undefined
                }
                superheadingHref="#"
                subheading={props.showSubheading ? 'Produção' : undefined}
              />
            }
            startContent={<TopNavItem label="Visão geral" href="#" isSelected />}
          />
        </TopNavShell>
      ),
    }),
  ],

  TopNavItem: [
    demo({
      title: 'Área interativa',
      importLine: "import {TopNavItem} from '@pharos-ds/core/TopNavItem';",
      controls: controlsFromCatalog('TopNavItem', [
        'isSelected',
        'isDisabled',
      ]),
      render: props => (
        <TopNavShell>
          <TopNav
            label="Demonstração de item de nav"
            heading={<TopNavHeading heading="Pharos" />}
            startContent={
              <>
                <TopNavItem
                  label="Painel"
                  href="#"
                  isSelected={Boolean(props.isSelected)}
                  isDisabled={Boolean(props.isDisabled)}
                />
                <TopNavItem label="Configurações" href="#" />
              </>
            }
          />
        </TopNavShell>
      ),
    }),
  ],

  TopNavMegaMenu: [
    demo({
      title: 'Área interativa',
      importLine: "import {TopNavMegaMenu} from '@pharos-ds/core/TopNavMegaMenu';",
      controls: [selectControl('label', ['Plataforma', 'Soluções', 'Recursos'], 'Plataforma')],
      render: props => (
        <TopNavShell>
          <TopNav
            label="Demonstração de mega menu"
            heading={<TopNavHeading heading="Pharos" />}
            startContent={
              <>
                <TopNavItem label="Início" href="#" isSelected />
                <TopNavMegaMenu
                  label={String(props.label)}
                  items={
                    <>
                      <TopNavMegaMenuItem
                        title="Componentes"
                        description="Blocos de construção de UI"
                        href="#components"
                      />
                      <TopNavMegaMenuItem
                        title="Tokens"
                        description="Tokens de design"
                        href="#tokens"
                      />
                    </>
                  }
                  featured={
                    <TopNavMegaMenuFeaturedCard
                      title="Primeiros passos"
                      description="Construa sua primeira tela com o Pharos."
                      image={DEMO_IMAGE_1}
                      imageAlt="Usina solar ao entardecer"
                      linkLabel="Ler guia"
                      linkHref="#guide"
                    />
                  }
                />
              </>
            }
          />
        </TopNavShell>
      ),
    }),
  ],

  TopNavMegaMenuFeaturedCard: [
    demo({
      title: 'Área interativa',
      importLine:
        "import {TopNavMegaMenuFeaturedCard} from '@pharos-ds/core/TopNavMegaMenuFeaturedCard';",
      controls: [
        selectControl('title', ['Primeiros passos', 'Novo lançamento', 'Estudo de caso'], 'Primeiros passos'),
        booleanControl('hasDescription', true, 'Descrição'),
      ],
      render: props => (
        <div style={{maxWidth: 280}}>
          <TopNavMegaMenuFeaturedCard
            title={String(props.title)}
            description={
              props.hasDescription
                ? 'Construa sua primeira tela com componentes e tokens Pharos.'
                : undefined
            }
            image={DEMO_IMAGE_2}
            imageAlt="Usina solar"
            linkLabel="Saiba mais"
            linkHref="#"
          />
        </div>
      ),
    }),
  ],

  TopNavMegaMenuItem: [
    demo({
      title: 'Área interativa',
      importLine:
        "import {TopNavMegaMenuItem} from '@pharos-ds/core/TopNavMegaMenuItem';",
      controls: [
        booleanControl('hasDescription', true, 'Descrição'),
        booleanControl('isLink', true, 'Link href'),
      ],
      render: props => (
        <div style={{maxWidth: 320}}>
          <TopNavMegaMenuItem
            title="Componentes"
            description={
              props.hasDescription ? 'Explore botões, entradas e overlays.' : undefined
            }
            href={props.isLink ? '#components' : undefined}
          />
        </div>
      ),
    }),
  ],

  TopNavMenu: [
    demo({
      title: 'Área interativa',
      importLine: "import {TopNavMenu} from '@pharos-ds/core/TopNavMenu';",
      controls: [selectControl('label', ['Produtos', 'Ferramentas', 'Mais'], 'Produtos')],
      render: props => (
        <TopNavShell>
          <TopNav
            label="Demonstração de menu"
            heading={<TopNavHeading heading="Pharos" />}
            startContent={
              <>
                <TopNavItem label="Início" href="#" isSelected />
                <TopNavMenu label={String(props.label)} items={TOP_NAV_MENU_ITEMS} />
              </>
            }
          />
        </TopNavShell>
      ),
    }),
  ],

  TreeList: [
    demo({
      title: 'Área interativa',
      importLine: "import {TreeList} from '@pharos-ds/core/TreeList';",
      controls: [
        selectControl('density', ['compact', 'balanced', 'spacious'], 'balanced'),
        selectControl('variant', ['lineGuides', 'noGuides'], 'lineGuides'),
      ],
      render: props => (
        <TreeList
          items={TREE_ITEMS}
          density={props.density as 'compact' | 'balanced' | 'spacious'}
          variant={props.variant as 'lineGuides' | 'noGuides'}
          header={<Text type="label">Arquivos do projeto</Text>}
        />
      ),
    }),
  ],

  Typeahead: [
    demo({
      title: 'Área interativa',
      importLine: "import {Typeahead} from '@pharos-ds/core/Typeahead';",
      controls: controlsFromCatalog('Typeahead', [
        'size',
        'isDisabled',
        'hasEntriesOnFocus',
      ]),
      render: props => <TypeaheadPreview {...props} />,
    }),
  ],

  TypeaheadItem: [
    demo({
      title: 'Área interativa',
      importLine: "import {TypeaheadItem} from '@pharos-ds/core/TypeaheadItem';",
      controls: [
        booleanControl('hasDescription', true, 'Descrição'),
        booleanControl('isDisabled', false, 'Desabilitado'),
      ],
      render: props => (
        <div
          style={{
            maxWidth: 280,
            padding: 8,
            border: '1px solid var(--color-border)',
            borderRadius: 8,
          }}>
          <TypeaheadItem
            item={{id: '1', label: 'Alice Johnson'}}
            description={
              props.hasDescription ? 'Engenharia · São Francisco' : undefined
            }
            isDisabled={Boolean(props.isDisabled)}
          />
        </div>
      ),
    }),
  ],

  VisuallyHidden: [
    demo({
      title: 'Área interativa',
      importLine: "import {VisuallyHidden} from '@pharos-ds/core/VisuallyHidden';",
      controls: [],
      render: () => (
        <div>
          <Text type="body">
            Rótulo visível:{' '}
            <span aria-hidden="true">Excluir</span>
          </Text>
          <VisuallyHidden>Excluir incidente #4821</VisuallyHidden>
          <Text type="supporting" color="secondary">
            O nome completo da ação fica disponível para leitores de tela via VisuallyHidden,
            mas apenas &quot;Excluir&quot; é exibido visualmente (simulando um controle só com ícone).
          </Text>
        </div>
      ),
    }),
  ],
};
