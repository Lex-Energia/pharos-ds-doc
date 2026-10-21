'use client';

import {useState} from 'react';
import {Markdown} from '@pharos-ds/core/Markdown';
import {MediaTheme} from '@pharos-ds/core/theme';
import {MetadataList, MetadataListItem} from '@pharos-ds/core/MetadataList';
import {MobileNav} from '@pharos-ds/core/MobileNav';
import {MoreMenu} from '@pharos-ds/core/MoreMenu';
import {MultiSelector} from '@pharos-ds/core/MultiSelector';
import {NavIcon} from '@pharos-ds/core/NavIcon';
import {NumberInput} from '@pharos-ds/core/NumberInput';
import {Outline} from '@pharos-ds/core/Outline';
import {OverflowList} from '@pharos-ds/core/OverflowList';
import {Overlay} from '@pharos-ds/core/Overlay';
import {Pagination} from '@pharos-ds/core/Pagination';
import {Popover} from '@pharos-ds/core/Popover';
import {PowerSearch} from '@pharos-ds/core/PowerSearch';
import type {
  PowerSearchConfig,
  PowerSearchFilter,
} from '@pharos-ds/core/PowerSearch';
import {ProgressBar} from '@pharos-ds/core/ProgressBar';
import {RadioList, RadioListItem} from '@pharos-ds/core/RadioList';
import {Section} from '@pharos-ds/core/Section';
import {
  SegmentedControl,
  SegmentedControlItem,
} from '@pharos-ds/core/SegmentedControl';
import {SelectableCard} from '@pharos-ds/core/SelectableCard';
import {Selector, SelectorOption} from '@pharos-ds/core/Selector';
import {
  SideNav,
  SideNavCollapseButton,
  SideNavHeading,
  SideNavItem,
  SideNavSection,
} from '@pharos-ds/core/SideNav';
import {Skeleton} from '@pharos-ds/core/Skeleton';
import type {SkeletonRadius} from '@pharos-ds/core/Skeleton';
import {Slider} from '@pharos-ds/core/Slider';
import {Spinner} from '@pharos-ds/core/Spinner';
import {Stack} from '@pharos-ds/core/Stack';
import {StatusDot} from '@pharos-ds/core/StatusDot';
import {Switch} from '@pharos-ds/core/Switch';
import {Button} from '@pharos-ds/core/Button';
import {Badge} from '@pharos-ds/core/Badge';
import {Text} from '@pharos-ds/core/Text';
import {
  Home,
  Folder,
  Settings,
  LayoutGrid,
  List,
  Table2,
  Calendar,
} from 'lucide-react';
import type {ControlValue, InteractiveDemoConfig} from '../types';
import {demo, selectControl, booleanControl} from '../helpers';

const MARKDOWN_SAMPLE =
  '# Título\n\nTexto **negrito** e _itálico_.\n\n- Item um\n- Item dois';

const OUTLINE_ITEMS = [
  {id: 'intro', label: 'Introdução', level: 1},
  {id: 'features', label: 'Recursos', level: 2},
  {id: 'api', label: 'API', level: 1},
];

const SELECTOR_OPTIONS = ['Maçã', 'Banana', 'Laranja', 'Uva'];
const MULTI_OPTIONS = ['Nome', 'E-mail', 'Função', 'Status', 'Departamento'];

const POWER_SEARCH_CONFIG: PowerSearchConfig = {
  name: 'DemoSearch',
  fields: [
    {
      key: 'status',
      label: 'Status',
      operators: [
        {
          key: 'is',
          label: 'é',
          value: {
            type: 'enum',
            values: [
              {value: 'open', label: 'Aberto'},
              {value: 'closed', label: 'Fechado'},
            ],
          },
        },
      ],
    },
    {
      key: 'title',
      label: 'Título',
      operators: [{key: 'contains', label: 'contém', value: {type: 'string'}}],
    },
  ],
};

const MORE_MENU_ITEMS = [
  {label: 'Editar', onClick: () => {}},
  {label: 'Duplicar', onClick: () => {}},
  {label: 'Excluir', onClick: () => {}},
];

const SIDE_NAV_FRAME = {width: 280, maxHeight: 360, overflow: 'hidden' as const};

function parseSkeletonRadius(value: ControlValue): SkeletonRadius {
  const raw = String(value);
  if (raw === 'none' || raw === 'rounded') return raw;
  return Number(raw) as SkeletonRadius;
}

function MobileNavDemo(props: Record<string, ControlValue>) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button label="Abrir menu" variant="secondary" onClick={() => setIsOpen(true)} />
      <MobileNav
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        header="Navegação"
        side={props.side as 'start' | 'end' | 'auto'}
        width={Number(props.width)}>
        <SideNavItem label="Início" href="#" icon={<Home size={16} />} isSelected />
        <SideNavItem label="Projetos" href="#" icon={<Folder size={16} />} />
        <SideNavItem label="Configurações" href="#" icon={<Settings size={16} />} />
      </MobileNav>
    </>
  );
}

function MultiSelectorDemo(props: Record<string, ControlValue>) {
  const [value, setValue] = useState<string[]>(['Nome', 'E-mail']);
  return (
    <div style={{maxWidth: 320}}>
      <MultiSelector
        label="Colunas"
        options={MULTI_OPTIONS}
        value={value}
        onChange={setValue}
        size={props.size as 'sm' | 'md' | 'lg'}
        triggerDisplay={props.triggerDisplay as 'count' | 'labels' | 'badges'}
        hasSelectAll={Boolean(props.hasSelectAll)}
        hasSearch={Boolean(props.hasSearch)}
      />
    </div>
  );
}

function NumberInputDemo(props: Record<string, ControlValue>) {
  const [value, setValue] = useState<number | null>(12);
  const units = props.units === 'none' ? undefined : String(props.units);
  return (
    <div style={{maxWidth: 280}}>
      <NumberInput
        label="Quantidade"
        value={value}
        onChange={setValue}
        size={props.size as 'sm' | 'md' | 'lg'}
        isDisabled={Boolean(props.isDisabled)}
        isIntegerOnly={Boolean(props.isIntegerOnly)}
        units={units}
        min={0}
        max={100}
      />
    </div>
  );
}

function PaginationDemo(props: Record<string, ControlValue>) {
  const [page, setPage] = useState(3);
  return (
    <Pagination
      page={page}
      onChange={setPage}
      totalItems={120}
      pageSize={10}
      variant={props.variant as 'pages' | 'count' | 'compact' | 'dots' | 'none'}
      size={props.size as 'sm' | 'md'}
      isDisabled={Boolean(props.isDisabled)}
    />
  );
}

function PopoverDemo(props: Record<string, ControlValue>) {
  return (
    <Popover
      label="Detalhes"
      placement={props.placement as 'below' | 'above' | 'start' | 'end'}
      alignment={props.alignment as 'start' | 'center' | 'end'}
      hasAutoFocus={false}
      content={
        <div style={{padding: 12}}>
          <Text type="body">Conteúdo do popover.</Text>
        </div>
      }>
      <Button label="Abrir popover" variant="secondary" />
    </Popover>
  );
}

function PowerSearchDemo(props: Record<string, ControlValue>) {
  const [filters, setFilters] = useState<ReadonlyArray<PowerSearchFilter>>([]);
  return (
    <div style={{maxWidth: 420}}>
      <PowerSearch
        config={POWER_SEARCH_CONFIG}
        filters={filters}
        onChange={newFilters => setFilters([...newFilters])}
        size={props.size as 'sm' | 'md' | 'lg'}
        isDisabled={Boolean(props.isDisabled)}
        hasClear={Boolean(props.hasClear)}
        placeholder="Filtrar resultados…"
      />
    </div>
  );
}

function RadioListDemo(props: Record<string, ControlValue>) {
  const [value, setValue] = useState('email');
  return (
    <RadioList
      label="Canal de notificação"
      value={value}
      onChange={setValue}
      orientation={props.orientation as 'vertical' | 'horizontal'}
      size={props.size as 'sm' | 'md'}
      isDisabled={Boolean(props.isDisabled)}>
      <RadioListItem label="E-mail" value="email" />
      <RadioListItem label="SMS" value="sms" />
      <RadioListItem label="Push" value="push" />
    </RadioList>
  );
}

function SegmentedControlDemo(props: Record<string, ControlValue>) {
  const [value, setValue] = useState('grid');
  return (
    <SegmentedControl
      label="Modo de visualização"
      value={value}
      onChange={setValue}
      size={props.size as 'sm' | 'md'}
      layout={props.layout as 'hug' | 'fill'}
      isDisabled={Boolean(props.isDisabled)}>
      <SegmentedControlItem value="grid" label="Grade" icon={<LayoutGrid size={14} />} />
      <SegmentedControlItem value="list" label="Lista" icon={<List size={14} />} />
      <SegmentedControlItem value="table" label="Tabela" icon={<Table2 size={14} />} />
    </SegmentedControl>
  );
}

function SegmentedControlItemDemo(props: Record<string, ControlValue>) {
  const [value, setValue] = useState('a');
  return (
    <SegmentedControl label="Opções" value={value} onChange={setValue} size="sm">
      <SegmentedControlItem value="a" label="Alfa" />
      <SegmentedControlItem
        value="b"
        label="Beta"
        isLabelHidden={Boolean(props.isLabelHidden)}
        icon={<Settings size={14} />}
      />
      <SegmentedControlItem value="c" label="Gama" isDisabled={Boolean(props.isDisabled)} />
    </SegmentedControl>
  );
}

function SelectableCardDemo(props: Record<string, ControlValue>) {
  const [selected, setSelected] = useState(false);
  return (
    <SelectableCard
      label="Plano Pro"
      isSelected={selected}
      onChange={setSelected}
      variant={props.variant as 'default' | 'muted'}
      elevation={props.elevation as 'none' | 'low' | 'med' | 'high'}
      isDisabled={Boolean(props.isDisabled)}
      width={220}>
      <Text type="body" weight="bold">
        Plano Pro
      </Text>
      <Text type="supporting" color="secondary">
        Recursos avançados
      </Text>
    </SelectableCard>
  );
}

function SelectorDemo(props: Record<string, ControlValue>) {
  const [value, setValue] = useState('Maçã');
  return (
    <div style={{maxWidth: 280}}>
      <Selector
        label="Fruta"
        options={SELECTOR_OPTIONS}
        value={value}
        onChange={setValue}
        size={props.size as 'sm' | 'md' | 'lg'}
        hasSearch={Boolean(props.hasSearch)}
        isDisabled={Boolean(props.isDisabled)}
      />
    </div>
  );
}

function SelectorOptionDemo(props: Record<string, ControlValue>) {
  const [value, setValue] = useState('a');
  const options = [
    {value: 'a', label: 'Ami Pena', description: 'ami@exemplo.dev'},
    {value: 'b', label: 'Alexandria', description: 'team@alexandria.dev'},
  ];
  return (
    <div style={{maxWidth: 300}}>
      <Selector
        label="Responsável"
        options={options.map(o => o.value)}
        value={value}
        onChange={setValue}
        size={props.size as 'sm' | 'md' | 'lg'}
        renderOption={opt => {
          const data = options.find(o => o.value === opt.value);
          return (
            <SelectorOption
              label={data?.label ?? opt.label}
              description={Boolean(props.hasDescription) ? data?.description : undefined}
            />
          );
        }}
      />
    </div>
  );
}

function SideNavDemo(props: Record<string, ControlValue>) {
  return (
    <div style={SIDE_NAV_FRAME}>
      <SideNav
        collapsible={Boolean(props.collapsible)}
        header={
          <SideNavHeading heading="Pharos" headingHref="#" icon={<NavIcon icon={<Home size={16} />} />} />
        }>
        <SideNavSection title="Principal">
          <SideNavItem label="Painel" href="#" icon={<Home size={16} />} isSelected />
          <SideNavItem label="Projetos" href="#" icon={<Folder size={16} />} />
        </SideNavSection>
      </SideNav>
    </div>
  );
}

function SideNavCollapseButtonDemo(props: Record<string, ControlValue>) {
  return (
    <div style={SIDE_NAV_FRAME}>
      <SideNav
        collapsible
        footerIcons={
          <SideNavCollapseButton label={Boolean(props.hasLabel) ? 'Recolher' : undefined} />
        }>
        <SideNavSection title="Menu">
          <SideNavItem label="Início" href="#" icon={<Home size={16} />} isSelected />
          <SideNavItem label="Ajustes" href="#" icon={<Settings size={16} />} />
        </SideNavSection>
      </SideNav>
    </div>
  );
}

function SideNavHeadingDemo(props: Record<string, ControlValue>) {
  return (
    <div style={SIDE_NAV_FRAME}>
      <SideNav
        header={
          <SideNavHeading
            icon={<NavIcon icon={<Home size={16} />} />}
            superheading={Boolean(props.hasSuperheading) ? 'Suite' : undefined}
            heading="Meu App"
            headingHref="#"
            subheading={Boolean(props.hasSubheading) ? 'Conta Business' : undefined}
          />
        }>
        <SideNavItem label="Início" href="#" icon={<Home size={16} />} isSelected />
      </SideNav>
    </div>
  );
}

function SideNavItemDemo(props: Record<string, ControlValue>) {
  return (
    <div style={SIDE_NAV_FRAME}>
      <SideNav>
        <SideNavSection title="Itens">
          <SideNavItem
            label="Selecionado"
            href="#"
            icon={<Home size={16} />}
            isSelected={Boolean(props.isSelected)}
          />
          <SideNavItem
            label="Desabilitado"
            href="#"
            icon={<Folder size={16} />}
            isDisabled={Boolean(props.isDisabled)}
          />
          <SideNavItem
            label="Com badge"
            href="#"
            icon={<Settings size={16} />}
            endContent={Boolean(props.hasEndContent) ? <Badge label="3" variant="info" /> : undefined}
          />
        </SideNavSection>
      </SideNav>
    </div>
  );
}

function SideNavSectionDemo(props: Record<string, ControlValue>) {
  return (
    <div style={SIDE_NAV_FRAME}>
      <SideNav>
        <SideNavSection
          title="Área de trabalho"
          subtitle={Boolean(props.hasSubtitle) ? 'Equipe principal' : undefined}
          isHeaderHidden={Boolean(props.isHeaderHidden)}
          collapsible={Boolean(props.collapsible)}>
          <SideNavItem label="Visão geral" href="#" icon={<Home size={16} />} isSelected />
          <SideNavItem label="Arquivos" href="#" icon={<Folder size={16} />} />
        </SideNavSection>
        <SideNavSection title="Conta">
          <SideNavItem label="Preferências" href="#" icon={<Settings size={16} />} />
        </SideNavSection>
      </SideNav>
    </div>
  );
}

function SliderDemo(props: Record<string, ControlValue>) {
  const [value, setValue] = useState(40);
  return (
    <div style={{maxWidth: 320}}>
      <Slider
        label="Volume"
        value={value}
        onChange={setValue}
        orientation={props.orientation as 'horizontal' | 'vertical'}
        valueDisplay={props.valueDisplay as 'tooltip' | 'text' | 'none'}
        isDisabled={Boolean(props.isDisabled)}
      />
    </div>
  );
}

function SwitchDemo(props: Record<string, ControlValue>) {
  const [value, setValue] = useState(true);
  return (
    <Switch
      label="Notificações"
      value={value}
      onChange={setValue}
      size={props.size as 'sm' | 'md'}
      isDisabled={Boolean(props.isDisabled)}
      isLoading={Boolean(props.isLoading)}
    />
  );
}

function RadioListItemDemo(props: Record<string, ControlValue>) {
  const [value, setValue] = useState('a');
  return (
    <RadioList label="Plano" value={value} onChange={setValue}>
      <RadioListItem label="Básico" value="a" />
      <RadioListItem
        label="Pro"
        value="b"
        description={Boolean(props.hasDescription) ? 'Mais recursos' : undefined}
      />
      <RadioListItem
        label="Empresarial"
        value="c"
        isDisabled={Boolean(props.isItemDisabled)}
      />
    </RadioList>
  );
}

export const demosMS: Record<string, InteractiveDemoConfig[]> = {
  Markdown: [
    demo({
      title: 'Área interativa',
      importLine: "import {Markdown} from '@pharos-ds/core/Markdown';",
      controls: [
        selectControl('display', ['block', 'inline'], 'block'),
        selectControl('density', ['default', 'compact'], 'default'),
        selectControl('citationStyle', ['label', 'number'], 'label'),
        booleanControl('isStreaming', false),
      ],
      fixedProps: {children: MARKDOWN_SAMPLE},
      render: props => (
        <Markdown
          display={props.display as 'block' | 'inline'}
          density={props.density as 'default' | 'compact'}
          citationStyle={props.citationStyle as 'label' | 'number'}
          isStreaming={Boolean(props.isStreaming)}>
          {MARKDOWN_SAMPLE}
        </Markdown>
      ),
    }),
  ],

  MediaTheme: [
    demo({
      title: 'Área interativa',
      importLine: "import {MediaTheme} from '@pharos-ds/core/theme';",
      controls: [selectControl('mode', ['dark', 'light'], 'dark')],
      render: props => (
        <div
          style={{
            padding: 16,
            borderRadius: 8,
            background:
              props.mode === 'dark'
                ? 'var(--color-background-inverted, #111)'
                : 'var(--color-background-muted, #f3f3f3)',
          }}>
          <MediaTheme mode={props.mode as 'dark' | 'light'}>
            <Button label="Ação em mídia" variant="ghost" />
          </MediaTheme>
        </div>
      ),
    }),
  ],

  MetadataList: [
    demo({
      title: 'Área interativa',
      importLine: "import {MetadataList, MetadataListItem} from '@pharos-ds/core/MetadataList';",
      controls: [
        selectControl('columns', ['single', 'multi', '2'], 'single'),
        selectControl('orientation', ['vertical', 'horizontal'], 'vertical'),
        booleanControl('maxNumOfItems', false, 'Limitar itens'),
      ],
      render: props => (
        <MetadataList
          title="Detalhes"
          columns={
            props.columns === 'single' || props.columns === 'multi'
              ? props.columns
              : Number(props.columns)
          }
          orientation={props.orientation as 'vertical' | 'horizontal'}
          maxNumOfItems={Boolean(props.maxNumOfItems) ? 2 : undefined}>
          <MetadataListItem label="Status">Ativo</MetadataListItem>
          <MetadataListItem label="Criado em">30 jul 2026</MetadataListItem>
          <MetadataListItem label="Responsável">Ami Pena</MetadataListItem>
        </MetadataList>
      ),
    }),
  ],

  MetadataListItem: [
    demo({
      title: 'Área interativa',
      importLine: "import {MetadataListItem} from '@pharos-ds/core/MetadataList';",
      controls: [
        booleanControl('hasIcon', true, 'Com ícone'),
        selectControl('labelPosition', ['start', 'top'], 'top', 'Posição do rótulo'),
      ],
      render: props => (
        <MetadataList
          label={
            props.labelPosition === 'start'
              ? {position: 'start'}
              : {position: 'top'}
          }>
          <MetadataListItem
            label="Evento"
            icon={Boolean(props.hasIcon) ? <Calendar size={14} /> : undefined}>
            Reunião de design
          </MetadataListItem>
          <MetadataListItem label="Local">São Paulo</MetadataListItem>
        </MetadataList>
      ),
    }),
  ],

  MobileNav: [
    demo({
      title: 'Área interativa',
      importLine: "import {MobileNav} from '@pharos-ds/core/MobileNav';",
      controls: [
        selectControl('side', ['start', 'end', 'auto'], 'start'),
        selectControl('width', ['280', '320', '360'], '320'),
      ],
      render: props => <MobileNavDemo {...props} />,
    }),
  ],

  MoreMenu: [
    demo({
      title: 'Área interativa',
      importLine: "import {MoreMenu} from '@pharos-ds/core/MoreMenu';",
      controls: [
        selectControl('variant', ['ghost', 'secondary', 'primary'], 'ghost'),
        selectControl('size', ['sm', 'md', 'lg'], 'md'),
        booleanControl('isDisabled', false),
      ],
      fixedProps: {items: MORE_MENU_ITEMS},
      render: props => (
        <MoreMenu
          items={MORE_MENU_ITEMS}
          variant={props.variant as 'ghost' | 'secondary' | 'primary'}
          size={props.size as 'sm' | 'md' | 'lg'}
          isDisabled={Boolean(props.isDisabled)}
        />
      ),
    }),
  ],

  MultiSelector: [
    demo({
      title: 'Área interativa',
      importLine: "import {MultiSelector} from '@pharos-ds/core/MultiSelector';",
      controls: [
        selectControl('size', ['sm', 'md', 'lg'], 'md'),
        selectControl('triggerDisplay', ['count', 'labels', 'badges'], 'count'),
        booleanControl('hasSelectAll', false),
        booleanControl('hasSearch', false),
      ],
      render: props => <MultiSelectorDemo {...props} />,
    }),
  ],

  NavIcon: [
    demo({
      title: 'Área interativa',
      importLine: "import {NavIcon} from '@pharos-ds/core/NavIcon';",
      controls: [],
      render: () => <NavIcon icon={<Home size={16} />} />,
    }),
  ],

  NumberInput: [
    demo({
      title: 'Área interativa',
      importLine: "import {NumberInput} from '@pharos-ds/core/NumberInput';",
      controls: [
        selectControl('size', ['sm', 'md', 'lg'], 'md'),
        booleanControl('isDisabled', false),
        booleanControl('isIntegerOnly', false),
        selectControl('units', ['none', '%'], 'none'),
      ],
      render: props => <NumberInputDemo {...props} />,
    }),
  ],

  Outline: [
    demo({
      title: 'Área interativa',
      importLine: "import {Outline} from '@pharos-ds/core/Outline';",
      controls: [selectControl('density', ['default', 'compact'], 'default')],
      fixedProps: {items: OUTLINE_ITEMS},
      render: props => (
        <Outline items={OUTLINE_ITEMS} density={props.density as 'default' | 'compact'} />
      ),
    }),
  ],

  OverflowList: [
    demo({
      title: 'Área interativa',
      importLine: "import {OverflowList} from '@pharos-ds/core/OverflowList';",
      controls: [
        selectControl('gap', ['1', '2', '3'], '2'),
        selectControl('collapseFrom', ['start', 'end'], 'end'),
        selectControl('maxVisibleItems', ['none', '2', '3'], 'none'),
      ],
      render: props => (
        <div style={{maxWidth: 260}}>
          <OverflowList
            gap={Number(props.gap) as 1 | 2 | 3}
            collapseFrom={props.collapseFrom as 'start' | 'end'}
            maxVisibleItems={
              props.maxVisibleItems === 'none' ? undefined : Number(props.maxVisibleItems)
            }
            overflowRenderer={items => (
              <Button label={`+${items.length}`} variant="ghost" size="sm" />
            )}>
            <Button label="Salvar" variant="secondary" size="sm" />
            <Button label="Editar" variant="ghost" size="sm" />
            <Button label="Compartilhar" variant="ghost" size="sm" />
            <Button label="Arquivar" variant="ghost" size="sm" />
            <Button label="Excluir" variant="ghost" size="sm" />
          </OverflowList>
        </div>
      ),
    }),
  ],

  Overlay: [
    demo({
      title: 'Área interativa',
      importLine: "import {Overlay} from '@pharos-ds/core/Overlay';",
      controls: [
        selectControl('showOn', ['hover', 'always', 'focus'], 'hover'),
        selectControl('scrim', ['dark', 'light'], 'dark'),
        selectControl('position', ['fill', 'bottom', 'top'], 'fill'),
      ],
      render: props => (
        <div style={{width: 240}}>
          <Overlay
            showOn={props.showOn as 'hover' | 'always' | 'focus'}
            scrim={props.scrim as 'dark' | 'light'}
            position={props.position as 'fill' | 'bottom' | 'top'}
            content={<Button label="Ver" variant="ghost" size="sm" />}>
            <div
              style={{
                height: 120,
                borderRadius: 8,
                background: 'var(--color-background-muted, #e8e8e8)',
                display: 'grid',
                placeItems: 'center',
              }}>
              <Text type="supporting" color="secondary">
                Passe o mouse
              </Text>
            </div>
          </Overlay>
        </div>
      ),
    }),
  ],

  Pagination: [
    demo({
      title: 'Área interativa',
      importLine: "import {Pagination} from '@pharos-ds/core/Pagination';",
      controls: [
        selectControl('variant', ['pages', 'count', 'compact', 'dots', 'none'], 'pages'),
        selectControl('size', ['sm', 'md'], 'md'),
        booleanControl('isDisabled', false),
      ],
      render: props => <PaginationDemo {...props} />,
    }),
  ],

  Popover: [
    demo({
      title: 'Área interativa',
      importLine: "import {Popover} from '@pharos-ds/core/Popover';",
      controls: [
        selectControl('placement', ['below', 'above', 'start', 'end'], 'below'),
        selectControl('alignment', ['start', 'center', 'end'], 'start'),
      ],
      render: props => PopoverDemo(props),
    }),
  ],

  PowerSearch: [
    demo({
      title: 'Área interativa',
      importLine: "import {PowerSearch} from '@pharos-ds/core/PowerSearch';",
      controls: [
        selectControl('size', ['sm', 'md', 'lg'], 'md'),
        booleanControl('isDisabled', false),
        booleanControl('hasClear', true),
      ],
      render: props => <PowerSearchDemo {...props} />,
    }),
  ],

  ProgressBar: [
    demo({
      title: 'Área interativa',
      importLine: "import {ProgressBar} from '@pharos-ds/core/ProgressBar';",
      controls: [
        selectControl('variant', ['accent', 'success', 'warning', 'neutral', 'error'], 'accent'),
        booleanControl('isIndeterminate', false),
        booleanControl('hasValueLabel', true),
      ],
      fixedProps: {label: 'Progresso', value: 68},
      render: props => (
        <div style={{maxWidth: 360}}>
          <ProgressBar
            label="Progresso"
            value={68}
            variant={props.variant as 'accent' | 'success' | 'warning' | 'neutral' | 'error'}
            isIndeterminate={Boolean(props.isIndeterminate)}
            hasValueLabel={Boolean(props.hasValueLabel)}
          />
        </div>
      ),
    }),
  ],

  RadioList: [
    demo({
      title: 'Área interativa',
      importLine: "import {RadioList, RadioListItem} from '@pharos-ds/core/RadioList';",
      controls: [
        selectControl('orientation', ['vertical', 'horizontal'], 'vertical'),
        selectControl('size', ['sm', 'md'], 'md'),
        booleanControl('isDisabled', false),
      ],
      render: props => <RadioListDemo {...props} />,
    }),
  ],

  RadioListItem: [
    demo({
      title: 'Área interativa',
      importLine: "import {RadioListItem} from '@pharos-ds/core/RadioList';",
      controls: [
        booleanControl('hasDescription', true),
        booleanControl('isItemDisabled', false, 'Item desabilitado'),
      ],
      render: props => <RadioListItemDemo {...props} />,
    }),
  ],

  Section: [
    demo({
      title: 'Área interativa',
      importLine: "import {Section} from '@pharos-ds/core/Section';",
      controls: [
        selectControl('variant', ['section', 'transparent', 'muted'], 'section'),
        selectControl('padding', ['2', '4', '6'], '4'),
        booleanControl('hasDividers', false, 'Divisores'),
      ],
      render: props => (
        <Section
          variant={props.variant as 'section' | 'transparent' | 'muted'}
          padding={Number(props.padding) as 2 | 4 | 6}
          dividers={Boolean(props.hasDividers) ? (['top', 'bottom'] as const) : undefined}
          width={280}>
          <Text type="body">Conteúdo da seção</Text>
        </Section>
      ),
    }),
  ],

  SegmentedControl: [
    demo({
      title: 'Área interativa',
      importLine:
        "import {SegmentedControl, SegmentedControlItem} from '@pharos-ds/core/SegmentedControl';",
      controls: [
        selectControl('size', ['sm', 'md'], 'md'),
        selectControl('layout', ['hug', 'fill'], 'hug'),
        booleanControl('isDisabled', false),
      ],
      render: props => <SegmentedControlDemo {...props} />,
    }),
  ],

  SegmentedControlItem: [
    demo({
      title: 'Área interativa',
      importLine:
        "import {SegmentedControlItem} from '@pharos-ds/core/SegmentedControl';",
      controls: [
        booleanControl('isLabelHidden', false, 'Ocultar rótulo (Beta)'),
        booleanControl('isDisabled', false, 'Desabilitar Gamma'),
      ],
      render: props => <SegmentedControlItemDemo {...props} />,
    }),
  ],

  SelectableCard: [
    demo({
      title: 'Área interativa',
      importLine: "import {SelectableCard} from '@pharos-ds/core/SelectableCard';",
      controls: [
        selectControl('variant', ['default', 'muted'], 'default'),
        selectControl('elevation', ['none', 'low', 'med', 'high'], 'none'),
        booleanControl('isDisabled', false),
      ],
      render: props => <SelectableCardDemo {...props} />,
    }),
  ],

  Selector: [
    demo({
      title: 'Área interativa',
      importLine: "import {Selector} from '@pharos-ds/core/Selector';",
      controls: [
        selectControl('size', ['sm', 'md', 'lg'], 'md'),
        booleanControl('hasSearch', false),
        booleanControl('isDisabled', false),
      ],
      render: props => <SelectorDemo {...props} />,
    }),
  ],

  SelectorOption: [
    demo({
      title: 'Área interativa',
      importLine: "import {Selector, SelectorOption} from '@pharos-ds/core/Selector';",
      controls: [
        selectControl('size', ['sm', 'md', 'lg'], 'md'),
        booleanControl('hasDescription', true),
      ],
      render: props => <SelectorOptionDemo {...props} />,
    }),
  ],

  SideNav: [
    demo({
      title: 'Área interativa',
      importLine: "import {SideNav, SideNavSection, SideNavItem} from '@pharos-ds/core/SideNav';",
      controls: [booleanControl('collapsible', false)],
      render: props => SideNavDemo(props),
    }),
  ],

  SideNavCollapseButton: [
    demo({
      title: 'Área interativa',
      importLine:
        "import {SideNav, SideNavCollapseButton} from '@pharos-ds/core/SideNav';",
      controls: [booleanControl('hasLabel', true, 'Rótulo no botão')],
      render: props => SideNavCollapseButtonDemo(props),
    }),
  ],

  SideNavHeading: [
    demo({
      title: 'Área interativa',
      importLine: "import {SideNav, SideNavHeading} from '@pharos-ds/core/SideNav';",
      controls: [
        booleanControl('hasSuperheading', false),
        booleanControl('hasSubheading', true),
      ],
      render: props => SideNavHeadingDemo(props),
    }),
  ],

  SideNavItem: [
    demo({
      title: 'Área interativa',
      importLine: "import {SideNav, SideNavItem} from '@pharos-ds/core/SideNav';",
      controls: [
        booleanControl('isSelected', true),
        booleanControl('isDisabled', false),
        booleanControl('hasEndContent', true, 'Badge no fim'),
      ],
      render: props => SideNavItemDemo(props),
    }),
  ],

  SideNavSection: [
    demo({
      title: 'Área interativa',
      importLine: "import {SideNav, SideNavSection, SideNavItem} from '@pharos-ds/core/SideNav';",
      controls: [
        booleanControl('hasSubtitle', true),
        booleanControl('isHeaderHidden', false),
        booleanControl('collapsible', false),
      ],
      render: props => SideNavSectionDemo(props),
    }),
  ],

  Skeleton: [
    demo({
      title: 'Área interativa',
      importLine: "import {Skeleton} from '@pharos-ds/core/Skeleton';",
      controls: [
        selectControl(
          'radius',
          ['none', '0', '1', '2', '3', '4', 'rounded'],
          '3',
        ),
      ],
      fixedProps: {width: 240, height: 20},
      render: props => (
        <Skeleton
          width={240}
          height={20}
          radius={parseSkeletonRadius(props.radius)}
        />
      ),
    }),
  ],

  Slider: [
    demo({
      title: 'Área interativa',
      importLine: "import {Slider} from '@pharos-ds/core/Slider';",
      controls: [
        selectControl('orientation', ['horizontal', 'vertical'], 'horizontal'),
        selectControl('valueDisplay', ['tooltip', 'text', 'none'], 'tooltip'),
        booleanControl('isDisabled', false),
      ],
      render: props => <SliderDemo {...props} />,
    }),
  ],

  Spinner: [
    demo({
      title: 'Área interativa',
      importLine: "import {Spinner} from '@pharos-ds/core/Spinner';",
      controls: [
        selectControl('size', ['sm', 'md', 'lg', 'xl'], 'md'),
        selectControl('shade', ['default', 'onMedia', 'subtle', 'inherit'], 'default'),
      ],
      render: props => (
        <Spinner
          size={props.size as 'sm' | 'md' | 'lg' | 'xl'}
          shade={props.shade as 'default' | 'onMedia' | 'subtle' | 'inherit'}
        />
      ),
    }),
  ],

  Stack: [
    demo({
      title: 'Área interativa',
      importLine: "import {Stack} from '@pharos-ds/core/Stack';",
      controls: [
        selectControl('direction', ['vertical', 'horizontal'], 'vertical'),
        selectControl('gap', ['1', '2', '3', '4'], '2'),
        selectControl('wrap', ['nowrap', 'wrap'], 'nowrap'),
        selectControl('align', ['start', 'center', 'stretch'], 'start'),
      ],
      render: props => (
        <Stack
          direction={props.direction as 'vertical' | 'horizontal'}
          gap={Number(props.gap) as 1 | 2 | 3 | 4}
          wrap={props.wrap as 'nowrap' | 'wrap'}
          align={props.align as 'start' | 'center' | 'stretch'}>
          <Badge label="Alfa" variant="info" />
          <Badge label="Beta" variant="success" />
          <Badge label="Gama" variant="warning" />
        </Stack>
      ),
    }),
  ],

  StatusDot: [
    demo({
      title: 'Área interativa',
      importLine: "import {StatusDot} from '@pharos-ds/core/StatusDot';",
      controls: [
        selectControl('variant', ['success', 'warning', 'error', 'accent', 'neutral'], 'success'),
        booleanControl('isPulsing', false),
      ],
      fixedProps: {label: 'Online'},
      render: props => (
        <StatusDot
          variant={props.variant as 'success' | 'warning' | 'error' | 'accent' | 'neutral'}
          label="Online"
          isPulsing={Boolean(props.isPulsing)}
        />
      ),
    }),
  ],

  Switch: [
    demo({
      title: 'Área interativa',
      importLine: "import {Switch} from '@pharos-ds/core/Switch';",
      controls: [
        selectControl('size', ['sm', 'md'], 'md'),
        booleanControl('isDisabled', false),
        booleanControl('isLoading', false),
      ],
      render: props => <SwitchDemo {...props} />,
    }),
  ],
};
