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
import type {ControlValue, InteractiveDemoConfig} from '../types';

// ---------------------------------------------------------------------------
// Shared demo data
// ---------------------------------------------------------------------------

const TABLE_ROWS = [
  {id: '1', name: 'Alice', role: 'Engineer', status: 'Active'},
  {id: '2', name: 'Bob', role: 'Designer', status: 'Away'},
  {id: '3', name: 'Carol', role: 'PM', status: 'Active'},
];

const TABLE_COLUMNS = [
  {key: 'name', header: 'Name', width: proportional(1)},
  {key: 'role', header: 'Role', width: proportional(1)},
  {key: 'status', header: 'Status', width: pixel(120)},
];

const TYPEAHEAD_ITEMS: SearchableItem[] = [
  {id: '1', label: 'Apple'},
  {id: '2', label: 'Banana'},
  {id: '3', label: 'Cherry'},
  {id: '4', label: 'Date'},
  {id: '5', label: 'Elderberry'},
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
  {value: 'archived', label: 'Archived'},
  {value: 'drafts', label: 'Drafts'},
  {value: 'spam', label: 'Spam'},
];

const TOP_NAV_MENU_ITEMS = [
  {title: 'Analytics', description: 'Track user behavior', href: '#analytics'},
  {title: 'Reports', description: 'Generate insights', href: '#reports'},
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
      <Tab value="overview" label="Overview" />
      <Tab value="details" label="Details" />
      <Tab value="activity" label="Activity" />
    </TabList>
  );
}

function TabPreview({isLabelHidden}: Record<string, ControlValue>) {
  const [value, setValue] = useState('inbox');
  return (
    <TabList value={value} onChange={setValue} size="md">
      <Tab value="inbox" label="Inbox" isLabelHidden={Boolean(isLabelHidden)} />
      <Tab value="sent" label="Sent" />
    </TabList>
  );
}

function TabMenuPreview({label}: Record<string, ControlValue>) {
  const [value, setValue] = useState('inbox');
  return (
    <TabList value={value} onChange={setValue} size="md" hasDivider>
      <Tab value="inbox" label="Inbox" />
      <Tab value="sent" label="Sent" />
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
      label="Project name"
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
  const [value, setValue] = useState('Describe your use case…');
  return (
    <TextArea
      label="Description"
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
      label="Meeting time"
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
      <Button label="Show toast" variant="secondary" onClick={() => setVisible(true)} />
    );
  }
  return (
    <Toast
      type={type as 'info' | 'error'}
      body={type === 'error' ? 'Something went wrong' : 'Changes saved'}
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
      label="Bold"
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
      <ToggleButton label="List" value="list" />
      <ToggleButton label="Grid" value="grid" />
      <ToggleButton label="Bold" value="bold" />
    </>
  );

  if (type === 'multiple') {
    return (
      <ToggleButtonGroup
        label="View options"
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
      label="View options"
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
      label="Team members"
      searchSource={tokenizerSource}
      value={value}
      onChange={setValue}
      placeholder="Search people…"
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
      label="Fruit"
      searchSource={typeaheadSource}
      value={value}
      onChange={setValue}
      placeholder="Search fruits…"
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
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice</TableCell>
          <TableCell>Engineer</TableCell>
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
      title: 'Playground',
      importLine: "import {Tab} from '@pharos-ds/core/Tab';",
      controls: [booleanControl('isLabelHidden', false, 'Hide label')],
      render: props => <TabPreview {...props} />,
    }),
  ],

  TabList: [
    demo({
      title: 'Playground',
      importLine: "import {TabList} from '@pharos-ds/core/TabList';",
      controls: controlsFromCatalog('TabList', ['size', 'layout', 'hasDivider']),
      render: props => <TabListPreview {...props} />,
    }),
  ],

  TabMenu: [
    demo({
      title: 'Playground',
      importLine: "import {TabMenu} from '@pharos-ds/core/TabMenu';",
      controls: [selectControl('label', ['More', 'Overflow', 'Other'], 'More')],
      fixedProps: {options: 'TAB_MENU_OPTIONS'},
      render: props => <TabMenuPreview {...props} />,
    }),
  ],

  Table: [
    demo({
      title: 'Playground',
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
      title: 'Playground',
      importLine: "import {TableCell} from '@pharos-ds/core/TableCell';",
      controls: controlsFromCatalog('Table', ['density', 'isStriped', 'hasHover']),
      render: props => <MinimalTable {...props} />,
    }),
  ],

  TableHeaderCell: [
    demo({
      title: 'Playground',
      importLine:
        "import {TableHeaderCell} from '@pharos-ds/core/TableHeaderCell';",
      controls: controlsFromCatalog('Table', ['density']),
      render: props => <MinimalTable density={props.density} />,
    }),
  ],

  TableRow: [
    demo({
      title: 'Playground',
      importLine: "import {TableRow} from '@pharos-ds/core/TableRow';",
      controls: [
        ...controlsFromCatalog('Table', ['isStriped', 'hasHover']),
      ],
      render: props => <MinimalTable {...props} density="balanced" />,
    }),
  ],

  Text: [
    demo({
      title: 'Playground',
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
          Pharos helps teams ship consistent interfaces faster.
        </Text>
      ),
    }),
  ],

  TextArea: [
    demo({
      title: 'Playground',
      importLine: "import {TextArea} from '@pharos-ds/core/TextArea';",
      controls: controlsFromCatalog('TextArea', ['size', 'isDisabled']),
      render: props => <TextAreaPreview {...props} />,
    }),
  ],

  TextInput: [
    demo({
      title: 'Playground',
      importLine: "import {TextInput} from '@pharos-ds/core/TextInput';",
      controls: controlsFromCatalog('TextInput', ['size', 'isDisabled']),
      render: props => <TextInputPreview {...props} />,
    }),
  ],

  Theme: [
    demo({
      title: 'Playground',
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
            <Text type="label">Themed surface</Text>
            <div style={{marginTop: 8}}>
              <Button label="Primary action" variant="primary" />
            </div>
          </div>
        </Theme>
      ),
    }),
  ],

  Thumbnail: [
    demo({
      title: 'Playground',
      importLine: "import {Thumbnail} from '@pharos-ds/core/Thumbnail';",
      controls: controlsFromCatalog('Thumbnail', [
        'isLoading',
        'isDisabled',
        'showRemoveOn',
      ]),
      render: props => (
        <Thumbnail
          src={
            props.isLoading
              ? undefined
              : 'https://picsum.photos/seed/pharos-demo/80/80'
          }
          alt="Preview"
          label="screenshot.png"
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
      title: 'Playground',
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
      title: 'Playground',
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
      title: 'Playground',
      importLine: "import {Toast} from '@pharos-ds/core/Toast';",
      controls: [
        selectControl('type', ['info', 'error'], 'info'),
        booleanControl('isAutoHide', true, 'Auto hide'),
      ],
      render: props => <ToastPreview {...props} />,
    }),
  ],

  ToggleButton: [
    demo({
      title: 'Playground',
      importLine: "import {ToggleButton} from '@pharos-ds/core/ToggleButton';",
      controls: controlsFromCatalog('ToggleButton', ['size', 'isDisabled']),
      render: props => <ToggleButtonPreview {...props} />,
    }),
  ],

  ToggleButtonGroup: [
    demo({
      title: 'Playground',
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
      title: 'Playground',
      importLine: "import {Token} from '@pharos-ds/core/Token';",
      controls: controlsFromCatalog('Token', ['size', 'color', 'isDisabled']),
      render: props => (
        <Token
          label="Design system"
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
      title: 'Playground',
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
      title: 'Playground',
      importLine: "import {Toolbar} from '@pharos-ds/core/Toolbar';",
      controls: [
        selectControl('size', ['sm', 'md', 'lg'], 'md'),
        selectControl('variant', ['transparent', 'section', 'muted'], 'transparent'),
        selectControl('orientation', ['horizontal', 'vertical'], 'horizontal'),
      ],
      render: props => (
        <Toolbar
          label="Document actions"
          size={props.size as 'sm' | 'md' | 'lg'}
          variant={props.variant as 'transparent' | 'section' | 'muted'}
          orientation={props.orientation as 'horizontal' | 'vertical'}
          startContent={<Button label="Back" variant="ghost" />}
          endContent={<Button label="Save" variant="primary" />}
        />
      ),
    }),
  ],

  Tooltip: [
    demo({
      title: 'Playground',
      importLine: "import {Tooltip} from '@pharos-ds/core/Tooltip';",
      controls: [
        selectControl('placement', ['above', 'below', 'start', 'end'], 'above'),
        booleanControl('hasHoverIndication', true, 'Hover indication'),
      ],
      fixedProps: {content: 'Save changes'},
      render: props => (
        <Tooltip
          content="Save changes"
          placement={props.placement as 'above' | 'below' | 'start' | 'end'}
          hasHoverIndication={Boolean(props.hasHoverIndication)}>
          <Button label="Save" variant="secondary" />
        </Tooltip>
      ),
    }),
  ],

  TopNav: [
    demo({
      title: 'Playground',
      importLine: "import {TopNav} from '@pharos-ds/core/TopNav';",
      controls: [],
      render: () => (
        <TopNavShell>
          <TopNav
            label="Product navigation"
            heading={<TopNavHeading heading="Pharos" headingHref="#" />}
            startContent={
              <>
                <TopNavItem label="Home" href="#" isSelected />
                <TopNavItem label="Docs" href="#" />
                <TopNavMenu label="Products" items={TOP_NAV_MENU_ITEMS} />
              </>
            }
            endContent={<Button label="Sign in" variant="secondary" size="sm" />}
          />
        </TopNavShell>
      ),
    }),
  ],

  TopNavHeading: [
    demo({
      title: 'Playground',
      importLine: "import {TopNavHeading} from '@pharos-ds/core/TopNavHeading';",
      controls: [
        booleanControl('showSuperheading', true, 'Superheading'),
        booleanControl('showSubheading', false, 'Subheading'),
      ],
      render: props => (
        <TopNavShell>
          <TopNav
            label="Heading demo"
            heading={
              <TopNavHeading
                heading="Pharos"
                headingHref="#"
                superheading={
                  props.showSuperheading ? 'Meta Design Systems' : undefined
                }
                superheadingHref="#"
                subheading={props.showSubheading ? 'Production' : undefined}
              />
            }
            startContent={<TopNavItem label="Overview" href="#" isSelected />}
          />
        </TopNavShell>
      ),
    }),
  ],

  TopNavItem: [
    demo({
      title: 'Playground',
      importLine: "import {TopNavItem} from '@pharos-ds/core/TopNavItem';",
      controls: controlsFromCatalog('TopNavItem', [
        'isSelected',
        'isDisabled',
      ]),
      render: props => (
        <TopNavShell>
          <TopNav
            label="Nav item demo"
            heading={<TopNavHeading heading="Pharos" />}
            startContent={
              <>
                <TopNavItem
                  label="Dashboard"
                  href="#"
                  isSelected={Boolean(props.isSelected)}
                  isDisabled={Boolean(props.isDisabled)}
                />
                <TopNavItem label="Settings" href="#" />
              </>
            }
          />
        </TopNavShell>
      ),
    }),
  ],

  TopNavMegaMenu: [
    demo({
      title: 'Playground',
      importLine: "import {TopNavMegaMenu} from '@pharos-ds/core/TopNavMegaMenu';",
      controls: [selectControl('label', ['Platform', 'Solutions', 'Resources'], 'Platform')],
      render: props => (
        <TopNavShell>
          <TopNav
            label="Mega menu demo"
            heading={<TopNavHeading heading="Pharos" />}
            startContent={
              <>
                <TopNavItem label="Home" href="#" isSelected />
                <TopNavMegaMenu
                  label={String(props.label)}
                  items={
                    <>
                      <TopNavMegaMenuItem
                        title="Components"
                        description="UI building blocks"
                        href="#components"
                      />
                      <TopNavMegaMenuItem
                        title="Tokens"
                        description="Design tokens"
                        href="#tokens"
                      />
                    </>
                  }
                  featured={
                    <TopNavMegaMenuFeaturedCard
                      title="Getting started"
                      description="Build your first screen with Pharos."
                      linkLabel="Read guide"
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
      title: 'Playground',
      importLine:
        "import {TopNavMegaMenuFeaturedCard} from '@pharos-ds/core/TopNavMegaMenuFeaturedCard';",
      controls: [
        selectControl('title', ['Getting started', 'New release', 'Case study'], 'Getting started'),
        booleanControl('hasDescription', true, 'Description'),
      ],
      render: props => (
        <div style={{maxWidth: 280}}>
          <TopNavMegaMenuFeaturedCard
            title={String(props.title)}
            description={
              props.hasDescription
                ? 'Build your first screen with Pharos components and tokens.'
                : undefined
            }
            linkLabel="Learn more"
            linkHref="#"
          />
        </div>
      ),
    }),
  ],

  TopNavMegaMenuItem: [
    demo({
      title: 'Playground',
      importLine:
        "import {TopNavMegaMenuItem} from '@pharos-ds/core/TopNavMegaMenuItem';",
      controls: [
        booleanControl('hasDescription', true, 'Description'),
        booleanControl('isLink', true, 'Link href'),
      ],
      render: props => (
        <div style={{maxWidth: 320}}>
          <TopNavMegaMenuItem
            title="Components"
            description={
              props.hasDescription ? 'Explore buttons, inputs, and overlays.' : undefined
            }
            href={props.isLink ? '#components' : undefined}
          />
        </div>
      ),
    }),
  ],

  TopNavMenu: [
    demo({
      title: 'Playground',
      importLine: "import {TopNavMenu} from '@pharos-ds/core/TopNavMenu';",
      controls: [selectControl('label', ['Products', 'Tools', 'More'], 'Products')],
      render: props => (
        <TopNavShell>
          <TopNav
            label="Menu demo"
            heading={<TopNavHeading heading="Pharos" />}
            startContent={
              <>
                <TopNavItem label="Home" href="#" isSelected />
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
      title: 'Playground',
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
          header={<Text type="label">Project files</Text>}
        />
      ),
    }),
  ],

  Typeahead: [
    demo({
      title: 'Playground',
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
      title: 'Playground',
      importLine: "import {TypeaheadItem} from '@pharos-ds/core/TypeaheadItem';",
      controls: [
        booleanControl('hasDescription', true, 'Description'),
        booleanControl('isDisabled', false, 'Disabled'),
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
              props.hasDescription ? 'Engineering · San Francisco' : undefined
            }
            isDisabled={Boolean(props.isDisabled)}
          />
        </div>
      ),
    }),
  ],

  VisuallyHidden: [
    demo({
      title: 'Playground',
      importLine: "import {VisuallyHidden} from '@pharos-ds/core/VisuallyHidden';",
      controls: [],
      render: () => (
        <div>
          <Text type="body">
            Visible label:{' '}
            <span aria-hidden="true">Delete</span>
          </Text>
          <VisuallyHidden>Delete incident #4821</VisuallyHidden>
          <Text type="supporting" color="secondary">
            The full action name is available to screen readers via VisuallyHidden,
            but only &quot;Delete&quot; is shown visually (simulating an icon-only control).
          </Text>
        </div>
      ),
    }),
  ],
};
