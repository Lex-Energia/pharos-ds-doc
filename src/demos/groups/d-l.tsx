'use client';

import {useState, type ComponentType, type CSSProperties, type ReactNode} from 'react';
import {type ISODateString} from '@pharos-ds/core/Calendar';
import {DateInput} from '@pharos-ds/core/DateInput';
import {DateRangeInput, type DateRange} from '@pharos-ds/core/DateRangeInput';
import {DateTimeInput, type ISODateTimeString} from '@pharos-ds/core/DateTimeInput';
import {Dialog, DialogHeader} from '@pharos-ds/core/Dialog';
import {Divider} from '@pharos-ds/core/Divider';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSubMenu,
} from '@pharos-ds/core/DropdownMenu';
import {EmptyState} from '@pharos-ds/core/EmptyState';
import {Field, FieldLabel, FieldStatus} from '@pharos-ds/core/Field';
import {FileInput} from '@pharos-ds/core/FileInput';
import {FormLayout} from '@pharos-ds/core/FormLayout';
import {Grid, GridSpan} from '@pharos-ds/core/Grid';
import {HoverCard} from '@pharos-ds/core/HoverCard';
import {Icon, type IconName} from '@pharos-ds/core/Icon';
import {IconButton} from '@pharos-ds/core/IconButton';
import {InputGroup, InputGroupText} from '@pharos-ds/core/InputGroup';
import {InternationalizationProvider} from '@pharos-ds/core/i18n';
import {Item} from '@pharos-ds/core/Item';
import {Kbd} from '@pharos-ds/core/Kbd';
import {
  Layout,
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  LayoutPanel,
} from '@pharos-ds/core/Layout';
import {Lightbox} from '@pharos-ds/core/Lightbox';
import {Link, LinkProvider} from '@pharos-ds/core/Link';
import {List, ListItem} from '@pharos-ds/core/List';
import {Button} from '@pharos-ds/core/Button';
import {TextInput} from '@pharos-ds/core/TextInput';
import {Text} from '@pharos-ds/core/Text';
import {Pagination} from '@pharos-ds/core/Pagination';
import {Plus} from 'lucide-react';
import frMessages from '@pharos-ds/core/locales/fr-FR.json';
import {demo, selectControl, booleanControl} from '../helpers';
import {controlsFromCatalog} from '../controlsFromCatalog';
import type {ControlValue, InteractiveDemoConfig} from '../types';

type DemoProps = Record<string, ControlValue>;

const GRID_BOX_COLORS = ['#dbeafe', '#dcfce7', '#fef3c7', '#fce7f3', '#ede9fe', '#cffafe'];

function GridBox({label, color}: {label: string; color: string}) {
  const style: CSSProperties = {
    background: color,
    padding: 16,
    borderRadius: 8,
    minHeight: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <div style={style}>
      <Text type="body">{label}</Text>
    </div>
  );
}

function DemoLinkComponent({
  href,
  children,
  className,
  style,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <a href={href} className={className} style={style}>
      {children}
    </a>
  );
}

function DateInputPreview(props: DemoProps) {
  const [value, setValue] = useState<ISODateString | undefined>(
    '2026-07-30' as ISODateString,
  );
  return (
    <div style={{maxWidth: 320}}>
      <DateInput
        label="Data"
        value={value}
        onChange={setValue}
        size={props.size as 'sm' | 'md' | 'lg'}
        isDisabled={Boolean(props.isDisabled)}
        hasClear={Boolean(props.hasClear)}
        format={props.format as 'date' | 'date_long' | 'date_weekday' | 'system_date'}
      />
    </div>
  );
}

function DateRangeInputPreview(props: DemoProps) {
  const [value, setValue] = useState<DateRange | null>({
    start: '2026-07-01' as ISODateString,
    end: '2026-07-30' as ISODateString,
  });
  return (
    <div style={{maxWidth: 360}}>
      <DateRangeInput
        label="Período"
        value={value}
        onChange={setValue}
        size={props.size as 'sm' | 'md' | 'lg'}
        isDisabled={Boolean(props.isDisabled)}
        hasClear={Boolean(props.hasClear)}
      />
    </div>
  );
}

function DateTimeInputPreview(props: DemoProps) {
  const [value, setValue] = useState<ISODateTimeString | undefined>(
    '2026-07-30T14:30' as ISODateTimeString,
  );
  return (
    <div style={{maxWidth: 360}}>
      <DateTimeInput
        label="Data e hora"
        value={value}
        onChange={setValue}
        size={props.size as 'sm' | 'md' | 'lg'}
        hourFormat={props.hourFormat as '12h' | '24h'}
        hasSeconds={Boolean(props.hasSeconds)}
        isDisabled={Boolean(props.isDisabled)}
      />
    </div>
  );
}

function DialogPreview(props: DemoProps) {
  const [open, setOpen] = useState(false);
  const variant = props.variant as 'standard' | 'fullscreen';
  const purpose = props.purpose as 'required' | 'form' | 'info';

  const body = (
    <>
      <DialogHeader
        title="Confirmar ação"
        subtitle="Revise os detalhes antes de continuar."
        onOpenChange={setOpen}
      />
      <Text type="body">Conteúdo do diálogo para demonstração interativa.</Text>
    </>
  );

  return (
    <>
      <Button label="Abrir diálogo" variant="secondary" onClick={() => setOpen(true)} />
      <Dialog
        isOpen={open}
        onOpenChange={setOpen}
        variant={variant}
        purpose={purpose}
        isInline
        width={420}>
        {body}
      </Dialog>
    </>
  );
}

function DialogHeaderPreview(props: DemoProps) {
  return (
    <Dialog isOpen onOpenChange={() => {}} isInline width={420}>
      <DialogHeader
        title="Título do diálogo"
        subtitle={props.hasSubtitle ? 'Subtítulo opcional' : undefined}
        hasDivider={Boolean(props.hasDivider)}
        onOpenChange={() => {}}
      />
      <Text type="body">Corpo do diálogo.</Text>
    </Dialog>
  );
}

function DropdownMenuPreview(props: DemoProps) {
  return (
    <DropdownMenu
      button={{label: 'Ações', variant: 'secondary'}}
      hasChevron={Boolean(props.hasChevron)}
      items={[
        {label: 'Editar', onClick: () => {}},
        {label: 'Duplicar', onClick: () => {}},
        {type: 'divider'},
        {label: 'Excluir', onClick: () => {}},
      ]}
    />
  );
}

function DropdownMenuCheckboxItemPreview(props: DemoProps) {
  const [checked, setChecked] = useState(true);
  return (
    <DropdownMenu button={{label: 'Visualização', variant: 'secondary'}}>
      <DropdownMenuCheckboxItem
        label="Mostrar arquivados"
        value={checked}
        onChange={setChecked}
        isDisabled={Boolean(props.isDisabled)}
        hasCloseOnSelect={Boolean(props.hasCloseOnSelect)}
      />
    </DropdownMenu>
  );
}

function DropdownMenuItemPreview(props: DemoProps) {
  return (
    <DropdownMenu button={{label: 'Menu', variant: 'secondary'}}>
      <DropdownMenuItem
        label="Renomear"
        description={props.hasDescription ? 'Alterar o nome do item' : undefined}
        icon="copy"
        isDisabled={Boolean(props.isDisabled)}
        onClick={() => {}}
      />
    </DropdownMenu>
  );
}

function DropdownMenuRadioGroupPreview(props: DemoProps) {
  const [sort, setSort] = useState('recent');
  return (
    <DropdownMenu button={{label: 'Ordenar', variant: 'secondary'}}>
      <DropdownMenuRadioGroup
        aria-label="Ordenar por"
        value={sort}
        onChange={setSort}
        hasCloseOnSelect={Boolean(props.hasCloseOnSelect)}>
        <DropdownMenuRadioItem label="Mais recentes" value="recent" />
        <DropdownMenuRadioItem label="Nome (A–Z)" value="name" />
      </DropdownMenuRadioGroup>
    </DropdownMenu>
  );
}

function DropdownMenuRadioItemPreview(props: DemoProps) {
  const [view, setView] = useState('list');
  return (
    <DropdownMenu button={{label: 'Exibição', variant: 'secondary'}}>
      <DropdownMenuRadioGroup aria-label="Modo de exibição" value={view} onChange={setView}>
        <DropdownMenuRadioItem label="Lista" value="list" />
        <DropdownMenuRadioItem
          label="Grade"
          value="grid"
          isDisabled={Boolean(props.isDisabled)}
        />
      </DropdownMenuRadioGroup>
    </DropdownMenu>
  );
}

function DropdownMenuSubMenuPreview(props: DemoProps) {
  return (
    <DropdownMenu button={{label: 'Mover', variant: 'secondary'}}>
      <DropdownMenuSubMenu
        label="Mover para pasta"
        icon="menu"
        isDisabled={Boolean(props.isDisabled)}
        hasSpinner={Boolean(props.hasSpinner)}>
        <DropdownMenuItem label="Projetos" onClick={() => {}} />
        <DropdownMenuItem label="Arquivo" onClick={() => {}} />
      </DropdownMenuSubMenu>
    </DropdownMenu>
  );
}

function FieldPreview(props: DemoProps) {
  const statusType = props.statusType as string;
  const status =
    statusType === 'none'
      ? undefined
      : {
          type: statusType as 'warning' | 'error' | 'success',
          message: 'Mensagem de validação.',
        };

  return (
    <div style={{maxWidth: 320}}>
      <Field
        label="Campo customizado"
        inputID="demo-field"
        isRequired={Boolean(props.isRequired)}
        status={status}
        statusVariant={props.statusVariant as 'attached' | 'detached'}>
        <input
          id="demo-field"
          type="text"
          placeholder="Controle nativo"
          style={{width: '100%', padding: '8px 12px'}}
        />
      </Field>
    </div>
  );
}

function FieldLabelPreview(props: DemoProps) {
  return (
    <div style={{maxWidth: 320}}>
      <FieldLabel
        label="Nome completo"
        inputID="demo-field-label"
        isLabelHidden={Boolean(props.isLabelHidden)}
        isRequired={Boolean(props.isRequired)}
        isOptional={Boolean(props.isOptional)}
      />
      <input id="demo-field-label" type="text" style={{width: '100%', padding: '8px 12px'}} />
    </div>
  );
}

function FieldStatusPreview(props: DemoProps) {
  return (
    <div style={{maxWidth: 320, position: 'relative', paddingBottom: 48}}>
      <input type="text" style={{width: '100%', padding: '8px 12px'}} aria-invalid />
      <FieldStatus
        type={props.type as 'error' | 'warning' | 'success'}
        message="Este campo é obrigatório."
        variant={props.variant as 'attached' | 'detached'}
      />
    </div>
  );
}

function FileInputPreview(props: DemoProps) {
  const [files, setFiles] = useState<File | File[] | null>(null);
  return (
    <div style={{maxWidth: 360}}>
      <FileInput
        label="Anexo"
        value={files}
        onChange={setFiles}
        mode={props.mode as 'input' | 'dropzone'}
        isMultiple={Boolean(props.isMultiple)}
        isDisabled={Boolean(props.isDisabled)}
      />
    </div>
  );
}

function InputGroupPreview(props: DemoProps) {
  const [value, setValue] = useState('');
  return (
    <div style={{maxWidth: 360}}>
      <InputGroup
        label="Site"
        size={props.size as 'sm' | 'md' | 'lg'}
        isDisabled={Boolean(props.isDisabled)}>
        <InputGroupText>https://</InputGroupText>
        <TextInput
          label="Domínio"
          isLabelHidden
          value={value}
          onChange={setValue}
          placeholder="exemplo.com"
        />
      </InputGroup>
    </div>
  );
}

function InputGroupTextPreview(props: DemoProps) {
  const [value, setValue] = useState('');
  const position = props.position as string;
  return (
    <div style={{maxWidth: 360}}>
      <InputGroup label="Valor">
        {position === 'prefix' ? (
          <InputGroupText>{props.text as string}</InputGroupText>
        ) : null}
        <TextInput
          label="Valor"
          isLabelHidden
          value={value}
          onChange={setValue}
        />
        {position === 'suffix' ? (
          <InputGroupText>{props.text as string}</InputGroupText>
        ) : null}
      </InputGroup>
    </div>
  );
}

function InternationalizationProviderPreview(props: DemoProps) {
  const locale = props.locale as string;
  const [page, setPage] = useState(2);

  return (
    <InternationalizationProvider
      locale={locale}
      messages={locale === 'fr-FR' ? {'fr-FR': frMessages} : undefined}>
      <Pagination page={page} onChange={setPage} totalPages={5} variant="pages" />
    </InternationalizationProvider>
  );
}

function HoverCardPreview(props: DemoProps) {
  return (
    <HoverCard
      placement={props.placement as 'above' | 'below' | 'start' | 'end'}
      hasHoverIndication={props.hasHoverIndication === 'true'}
      content={
        <Text type="body">
          Informação complementar exibida ao passar o mouse ou focar.
        </Text>
      }>
      <Button label="Passe o mouse" variant="ghost" />
    </HoverCard>
  );
}

function LightboxPreview(props: DemoProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button label="Abrir lightbox" variant="secondary" onClick={() => setOpen(true)} />
      <Lightbox
        isOpen={open}
        onOpenChange={setOpen}
        hasZoom={Boolean(props.hasZoom)}
        media={{
          src: 'https://picsum.photos/800/600',
          alt: 'Imagem de demonstração',
          caption: 'Legenda da imagem',
        }}
      />
    </>
  );
}

function LinkProviderPreview() {
  return (
    <LinkProvider component={DemoLinkComponent as ComponentType<{href: string; children: ReactNode; className?: string; style?: CSSProperties}>}>
      <Link href="/docs/componentes">Link com provider customizado</Link>
    </LinkProvider>
  );
}

function LayoutShellPreview(props: DemoProps) {
  return (
    <div style={{height: 220, border: '1px solid var(--color-border-subtle, #ddd)', borderRadius: 8, overflow: 'hidden'}}>
      <Layout
        height={props.height as 'fill' | 'auto'}
        header={
          <LayoutHeader hasDivider>
            <Text type="body">Cabeçalho</Text>
          </LayoutHeader>
        }
        start={
          <LayoutPanel width={120}>
            <Text type="supporting" color="secondary">
              Painel
            </Text>
          </LayoutPanel>
        }
        content={
          <LayoutContent padding={3}>
            <Text type="body">Conteúdo principal</Text>
          </LayoutContent>
        }
        footer={
          <LayoutFooter hasDivider>
            <Text type="supporting" color="secondary">
              Rodapé
            </Text>
          </LayoutFooter>
        }
      />
    </div>
  );
}

export const demosDL: Record<string, InteractiveDemoConfig[]> = {
  DateInput: [
    demo({
      title: 'Playground',
      importLine: "import {DateInput} from '@pharos-ds/core/DateInput';",
      controls: controlsFromCatalog('DateInput', ['size', 'format', 'hasClear', 'isDisabled']),
      fixedProps: {label: 'Data'},
      render: props => <DateInputPreview {...props} />,
    }),
  ],
  DateRangeInput: [
    demo({
      title: 'Playground',
      importLine: "import {DateRangeInput} from '@pharos-ds/core/DateRangeInput';",
      controls: controlsFromCatalog('DateRangeInput', ['size', 'hasClear', 'isDisabled']),
      fixedProps: {label: 'Período'},
      render: props => <DateRangeInputPreview {...props} />,
    }),
  ],
  DateTimeInput: [
    demo({
      title: 'Playground',
      importLine: "import {DateTimeInput} from '@pharos-ds/core/DateTimeInput';",
      controls: controlsFromCatalog('DateTimeInput', [
        'size',
        'hourFormat',
        'hasSeconds',
        'isDisabled',
      ]),
      fixedProps: {label: 'Data e hora'},
      render: props => <DateTimeInputPreview {...props} />,
    }),
  ],
  Dialog: [
    demo({
      title: 'Playground',
      importLine: "import {Dialog} from '@pharos-ds/core/Dialog';",
      controls: controlsFromCatalog('Dialog', ['variant', 'purpose']),
      fixedProps: {isInline: true},
      render: props => <DialogPreview {...props} />,
    }),
  ],
  DialogHeader: [
    demo({
      title: 'Playground',
      importLine: "import {DialogHeader} from '@pharos-ds/core/Dialog';",
      controls: [
        booleanControl('hasDivider', true),
        booleanControl('hasSubtitle', true, 'subtitle'),
      ],
      render: props => <DialogHeaderPreview {...props} />,
    }),
  ],
  Divider: [
    demo({
      title: 'Playground',
      importLine: "import {Divider} from '@pharos-ds/core/Divider';",
      controls: controlsFromCatalog('Divider', ['orientation', 'variant', 'isFullBleed']),
      render: props => (
        <div style={{display: 'flex', flexDirection: props.orientation === 'vertical' ? 'row' : 'column', gap: 16, alignItems: 'center', minHeight: props.orientation === 'vertical' ? 80 : undefined}}>
          <Text>Acima</Text>
          <Divider
            orientation={props.orientation as 'horizontal' | 'vertical'}
            variant={props.variant as 'subtle' | 'strong'}
            isFullBleed={Boolean(props.isFullBleed)}
          />
          <Text>Abaixo</Text>
        </div>
      ),
    }),
  ],
  DropdownMenu: [
    demo({
      title: 'Playground',
      importLine: "import {DropdownMenu} from '@pharos-ds/core/DropdownMenu';",
      controls: [booleanControl('hasChevron', true)],
      render: props => <DropdownMenuPreview {...props} />,
    }),
  ],
  DropdownMenuCheckboxItem: [
    demo({
      title: 'Playground',
      importLine:
        "import {DropdownMenuCheckboxItem} from '@pharos-ds/core/DropdownMenu';",
      controls: controlsFromCatalog('DropdownMenuCheckboxItem', [
        'isDisabled',
        'hasCloseOnSelect',
      ]),
      render: props => <DropdownMenuCheckboxItemPreview {...props} />,
    }),
  ],
  DropdownMenuItem: [
    demo({
      title: 'Playground',
      importLine: "import {DropdownMenuItem} from '@pharos-ds/core/DropdownMenu';",
      controls: [
        booleanControl('isDisabled', false),
        booleanControl('hasDescription', true, 'description'),
      ],
      render: props => <DropdownMenuItemPreview {...props} />,
    }),
  ],
  DropdownMenuRadioGroup: [
    demo({
      title: 'Playground',
      importLine:
        "import {DropdownMenuRadioGroup} from '@pharos-ds/core/DropdownMenu';",
      controls: controlsFromCatalog('DropdownMenuRadioGroup', ['hasCloseOnSelect']),
      render: props => <DropdownMenuRadioGroupPreview {...props} />,
    }),
  ],
  DropdownMenuRadioItem: [
    demo({
      title: 'Playground',
      importLine: "import {DropdownMenuRadioItem} from '@pharos-ds/core/DropdownMenu';",
      controls: controlsFromCatalog('DropdownMenuRadioItem', ['isDisabled']),
      render: props => <DropdownMenuRadioItemPreview {...props} />,
    }),
  ],
  DropdownMenuSubMenu: [
    demo({
      title: 'Playground',
      importLine: "import {DropdownMenuSubMenu} from '@pharos-ds/core/DropdownMenu';",
      controls: controlsFromCatalog('DropdownMenuSubMenu', ['isDisabled', 'hasSpinner']),
      render: props => <DropdownMenuSubMenuPreview {...props} />,
    }),
  ],
  EmptyState: [
    demo({
      title: 'Playground',
      importLine: "import {EmptyState} from '@pharos-ds/core/EmptyState';",
      controls: controlsFromCatalog('EmptyState', ['isCompact']),
      fixedProps: {
        title: 'Nenhum item encontrado',
        description: 'Crie um novo item para começar.',
      },
      render: props => (
        <EmptyState
          title="Nenhum item encontrado"
          description="Crie um novo item para começar."
          isCompact={Boolean(props.isCompact)}
          actions={<Button label="Criar item" variant="primary" />}
        />
      ),
    }),
  ],
  Field: [
    demo({
      title: 'Playground',
      importLine: "import {Field} from '@pharos-ds/core/Field';",
      controls: [
        booleanControl('isRequired', false),
        selectControl('statusType', ['none', 'error', 'warning', 'success'], 'none', 'status'),
        selectControl('statusVariant', ['attached', 'detached']),
      ],
      render: props => <FieldPreview {...props} />,
    }),
  ],
  FieldLabel: [
    demo({
      title: 'Playground',
      importLine: "import {FieldLabel} from '@pharos-ds/core/Field';",
      controls: controlsFromCatalog('FieldLabel', [
        'isLabelHidden',
        'isRequired',
        'isOptional',
      ]),
      fixedProps: {label: 'Nome completo', inputID: 'demo-field-label'},
      render: props => <FieldLabelPreview {...props} />,
    }),
  ],
  FieldStatus: [
    demo({
      title: 'Playground',
      importLine: "import {FieldStatus} from '@pharos-ds/core/Field';",
      controls: controlsFromCatalog('FieldStatus', ['type', 'variant']),
      fixedProps: {message: 'Este campo é obrigatório.'},
      render: props => <FieldStatusPreview {...props} />,
    }),
  ],
  FileInput: [
    demo({
      title: 'Playground',
      importLine: "import {FileInput} from '@pharos-ds/core/FileInput';",
      controls: controlsFromCatalog('FileInput', ['mode', 'isMultiple', 'isDisabled']),
      fixedProps: {label: 'Anexo'},
      render: props => <FileInputPreview {...props} />,
    }),
  ],
  FormLayout: [
    demo({
      title: 'Playground',
      importLine: "import {FormLayout} from '@pharos-ds/core/FormLayout';",
      controls: controlsFromCatalog('FormLayout', ['direction']),
      render: props => (
        <FormLayout direction={props.direction as 'vertical' | 'horizontal' | 'horizontal-labels'}>
          <TextInput label="Nome" value="" onChange={() => {}} />
          <TextInput label="E-mail" value="" onChange={() => {}} />
        </FormLayout>
      ),
    }),
  ],
  Grid: [
    demo({
      title: 'Playground',
      importLine: "import {Grid} from '@pharos-ds/core/Grid';",
      controls: [
        selectControl('columns', ['2', '3', '4'], '3'),
        selectControl('gap', ['1', '2', '3', '4'], '2'),
        selectControl('align', ['start', 'center', 'end', 'stretch']),
      ],
      render: props => (
        <Grid
          columns={Number(props.columns)}
          gap={Number(props.gap) as 1 | 2 | 3 | 4}
          align={props.align as 'start' | 'center' | 'end' | 'stretch'}>
          {GRID_BOX_COLORS.map((color, index) => (
            <GridBox key={color} label={`Item ${index + 1}`} color={color} />
          ))}
        </Grid>
      ),
    }),
  ],
  GridSpan: [
    demo({
      title: 'Playground',
      importLine: "import {GridSpan} from '@pharos-ds/core/Grid';",
      controls: [selectControl('columns', ['1', '2', 'full'], '2')],
      render: props => (
        <Grid columns={3} gap={2}>
          <GridBox label="A" color={GRID_BOX_COLORS[0]} />
          <GridSpan columns={props.columns === 'full' ? 'full' : Number(props.columns)}>
            <GridBox label="Span" color={GRID_BOX_COLORS[1]} />
          </GridSpan>
          <GridBox label="B" color={GRID_BOX_COLORS[2]} />
          <GridBox label="C" color={GRID_BOX_COLORS[3]} />
        </Grid>
      ),
    }),
  ],
  HoverCard: [
    demo({
      title: 'Playground',
      importLine: "import {HoverCard} from '@pharos-ds/core/HoverCard';",
      controls: [
        selectControl('placement', ['above', 'below', 'start', 'end'], 'above'),
        selectControl('hasHoverIndication', ['true', 'false'], 'true', 'hasHoverIndication'),
      ],
      render: props => <HoverCardPreview {...props} />,
    }),
  ],
  Icon: [
    demo({
      title: 'Playground',
      importLine: "import {Icon} from '@pharos-ds/core/Icon';",
      controls: [
        selectControl('icon', ['search', 'calendar', 'success', 'error', 'info'], 'search'),
        selectControl('size', ['xsm', 'sm', 'md', 'lg']),
        selectControl('color', ['primary', 'secondary', 'accent', 'success', 'error']),
      ],
      render: props => (
        <Icon
          icon={props.icon as IconName}
          size={props.size as 'xsm' | 'sm' | 'md' | 'lg'}
          color={
            props.color as
              | 'primary'
              | 'secondary'
              | 'accent'
              | 'success'
              | 'error'
          }
        />
      ),
    }),
  ],
  IconButton: [
    demo({
      title: 'Playground',
      importLine: "import {IconButton} from '@pharos-ds/core/IconButton';",
      controls: controlsFromCatalog('IconButton', ['variant', 'size', 'isDisabled']),
      fixedProps: {label: 'Adicionar'},
      render: props => (
        <IconButton
          label="Adicionar"
          icon={<Plus size={16} />}
          variant={props.variant as 'primary' | 'secondary' | 'ghost' | 'destructive'}
          size={props.size as 'sm' | 'md' | 'lg'}
          isDisabled={Boolean(props.isDisabled)}
        />
      ),
    }),
  ],
  InputGroup: [
    demo({
      title: 'Playground',
      importLine: "import {InputGroup} from '@pharos-ds/core/InputGroup';",
      controls: controlsFromCatalog('InputGroup', ['size', 'isDisabled']),
      fixedProps: {label: 'Site'},
      render: props => <InputGroupPreview {...props} />,
    }),
  ],
  InputGroupText: [
    demo({
      title: 'Playground',
      importLine: "import {InputGroupText} from '@pharos-ds/core/InputGroup';",
      controls: [
        selectControl('position', ['prefix', 'suffix'], 'prefix'),
        selectControl('text', ['https://', '.com', 'R$'], 'https://'),
      ],
      render: props => <InputGroupTextPreview {...props} />,
    }),
  ],
  InternationalizationProvider: [
    demo({
      title: 'Playground',
      importLine:
        "import {InternationalizationProvider} from '@pharos-ds/core/i18n';",
      controls: [selectControl('locale', ['en', 'fr-FR'], 'en')],
      render: props => <InternationalizationProviderPreview {...props} />,
    }),
  ],
  Item: [
    demo({
      title: 'Playground',
      importLine: "import {Item} from '@pharos-ds/core/Item';",
      controls: [
        selectControl('density', ['compact', 'balanced', 'spacious']),
        selectControl('align', ['center', 'start']),
        booleanControl('isSelected', false),
      ],
      render: props => (
        <Item
          label="Alexandria Pharos"
          description="Design system"
          density={props.density as 'compact' | 'balanced' | 'spacious'}
          align={props.align as 'center' | 'start'}
          isSelected={Boolean(props.isSelected)}
          startContent={<Icon icon="info" size="sm" color="accent" />}
        />
      ),
    }),
  ],
  Kbd: [
    demo({
      title: 'Playground',
      importLine: "import {Kbd} from '@pharos-ds/core/Kbd';",
      controls: [
        selectControl('keys', ['mod+k', 'mod+shift+p', 'escape', 'mod+enter'], 'mod+k'),
      ],
      render: props => <Kbd keys={String(props.keys)} />,
    }),
  ],
  Layout: [
    demo({
      title: 'Playground',
      importLine: "import {Layout} from '@pharos-ds/core/Layout';",
      controls: controlsFromCatalog('Layout', ['height']),
      render: props => <LayoutShellPreview {...props} />,
    }),
  ],
  LayoutContent: [
    demo({
      title: 'Playground',
      importLine: "import {LayoutContent} from '@pharos-ds/core/Layout';",
      controls: controlsFromCatalog('LayoutContent', ['padding', 'isScrollable']),
      render: props => (
        <div style={{height: 120, border: '1px solid var(--color-border-subtle, #ddd)', borderRadius: 8, overflow: 'hidden'}}>
          <LayoutContent
            padding={Number(props.padding) as 0 | 1 | 2 | 3 | 4}
            isScrollable={Boolean(props.isScrollable)}>
            <Text type="body">Conteúdo scrollável do layout.</Text>
            <Text type="body">Linha adicional para demonstrar overflow.</Text>
            <Text type="body">Mais uma linha de conteúdo.</Text>
          </LayoutContent>
        </div>
      ),
    }),
  ],
  LayoutFooter: [
    demo({
      title: 'Playground',
      importLine: "import {LayoutFooter} from '@pharos-ds/core/Layout';",
      controls: controlsFromCatalog('LayoutFooter', ['hasDivider']),
      render: props => (
        <LayoutFooter hasDivider={Boolean(props.hasDivider)}>
          <Text type="supporting" color="secondary">
            Rodapé com ações
          </Text>
        </LayoutFooter>
      ),
    }),
  ],
  LayoutHeader: [
    demo({
      title: 'Playground',
      importLine: "import {LayoutHeader} from '@pharos-ds/core/Layout';",
      controls: controlsFromCatalog('LayoutHeader', ['hasDivider']),
      render: props => (
        <LayoutHeader hasDivider={Boolean(props.hasDivider)}>
          <Text type="body">Cabeçalho da página</Text>
        </LayoutHeader>
      ),
    }),
  ],
  LayoutPanel: [
    demo({
      title: 'Playground',
      importLine: "import {LayoutPanel} from '@pharos-ds/core/Layout';",
      controls: controlsFromCatalog('LayoutPanel', ['hasDivider', 'padding']),
      render: props => (
        <div style={{height: 120, border: '1px solid var(--color-border-subtle, #ddd)', borderRadius: 8, overflow: 'hidden'}}>
          <LayoutPanel
            hasDivider={Boolean(props.hasDivider)}
            padding={Number(props.padding) as 0 | 1 | 2 | 3 | 4}
            width={160}>
            <Text type="supporting" color="secondary">
              Painel lateral
            </Text>
          </LayoutPanel>
        </div>
      ),
    }),
  ],
  Lightbox: [
    demo({
      title: 'Playground',
      importLine: "import {Lightbox} from '@pharos-ds/core/Lightbox';",
      controls: controlsFromCatalog('Lightbox', ['hasZoom']),
      render: props => <LightboxPreview {...props} />,
    }),
  ],
  Link: [
    demo({
      title: 'Playground',
      importLine: "import {Link} from '@pharos-ds/core/Link';",
      controls: [
        booleanControl('hasUnderline', false),
        booleanControl('isExternalLink', false),
        booleanControl('isStandalone', true),
        selectControl('color', ['accent', 'primary', 'secondary'], 'accent'),
      ],
      fixedProps: {href: '/docs/componentes', children: 'Ver componentes'},
      render: props => (
        <Link
          href="/docs/componentes"
          hasUnderline={Boolean(props.hasUnderline)}
          isExternalLink={Boolean(props.isExternalLink)}
          isStandalone={Boolean(props.isStandalone)}
          color={props.color as 'accent' | 'primary' | 'secondary'}>
          Ver componentes
        </Link>
      ),
    }),
  ],
  LinkProvider: [
    demo({
      title: 'Playground',
      importLine: "import {LinkProvider} from '@pharos-ds/core/Link';",
      controls: [],
      render: () => <LinkProviderPreview />,
    }),
  ],
  List: [
    demo({
      title: 'Playground',
      importLine: "import {List} from '@pharos-ds/core/List';",
      controls: controlsFromCatalog('List', ['density', 'hasDividers', 'listStyle']),
      render: props => (
        <List
          density={props.density as 'compact' | 'balanced' | 'spacious'}
          hasDividers={Boolean(props.hasDividers)}
          listStyle={props.listStyle as 'none' | 'disc' | 'decimal' | 'circle'}
          header={<Text type="supporting" color="secondary">Itens</Text>}>
          <ListItem label="Primeiro item" description="Descrição breve" />
          <ListItem label="Segundo item" />
          <ListItem label="Terceiro item" />
        </List>
      ),
    }),
  ],
  ListItem: [
    demo({
      title: 'Playground',
      importLine: "import {ListItem} from '@pharos-ds/core/List';",
      controls: controlsFromCatalog('ListItem', ['isSelected', 'isDisabled']),
      fixedProps: {label: 'Item da lista', description: 'Descrição do item'},
      render: props => (
        <List>
          <ListItem
            label="Item da lista"
            description="Descrição do item"
            isSelected={Boolean(props.isSelected)}
            isDisabled={Boolean(props.isDisabled)}
          />
        </List>
      ),
    }),
  ],
};
