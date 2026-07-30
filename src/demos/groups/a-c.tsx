'use client';

import {useRef, useState} from 'react';
import {AlertDialog} from '@pharos-ds/core/AlertDialog';
import {AppShell} from '@pharos-ds/core/AppShell';
import {AspectRatio} from '@pharos-ds/core/AspectRatio';
import {Avatar, AvatarStatusDot} from '@pharos-ds/core/Avatar';
import {AvatarGroup, AvatarGroupOverflow} from '@pharos-ds/core/AvatarGroup';
import {Badge} from '@pharos-ds/core/Badge';
import {Banner} from '@pharos-ds/core/Banner';
import {BaseTypeahead, createStaticSource} from '@pharos-ds/core/Typeahead';
import {Blockquote} from '@pharos-ds/core/Blockquote';
import {Breadcrumbs, BreadcrumbItem} from '@pharos-ds/core/Breadcrumbs';
import {Button} from '@pharos-ds/core/Button';
import {ButtonGroup} from '@pharos-ds/core/ButtonGroup';
import {Calendar, type ISODateString} from '@pharos-ds/core/Calendar';
import {Card} from '@pharos-ds/core/Card';
import {Carousel} from '@pharos-ds/core/Carousel';
import {Center} from '@pharos-ds/core/Center';
import {
  ChatComposer,
  ChatComposerDrawer,
  ChatComposerInput,
  ChatDictationButton,
  ChatLayout,
  ChatLayoutScrollButton,
  ChatMessage,
  ChatMessageBubble,
  ChatMessageList,
  ChatMessageMetadata,
  ChatSendButton,
  ChatSystemMessage,
  ChatTokenizedText,
  ChatToolCalls,
  useChatDictation,
} from '@pharos-ds/core/Chat';
import {CheckboxInput} from '@pharos-ds/core/CheckboxInput';
import {CheckboxList, CheckboxListItem} from '@pharos-ds/core/CheckboxList';
import {Citation} from '@pharos-ds/core/Citation';
import {ClickableCard} from '@pharos-ds/core/ClickableCard';
import {CodeBlock} from '@pharos-ds/core/CodeBlock';
import {Collapsible, CollapsibleGroup} from '@pharos-ds/core/Collapsible';
import {
  CommandPalette,
  CommandPaletteEmpty,
  CommandPaletteFooter,
  CommandPaletteGroup,
  CommandPaletteInput,
  CommandPaletteItem,
  CommandPaletteList,
} from '@pharos-ds/core/CommandPalette';
import {ContextMenu} from '@pharos-ds/core/ContextMenu';
import {VStack, HStack} from '@pharos-ds/core/Layout';
import {Text, Heading} from '@pharos-ds/core/Text';
import {demo, selectControl, booleanControl} from '../helpers';
import type {ControlValue, InteractiveDemoConfig} from '../types';

const DEMO_SEARCH_ITEMS = [
  {id: 'home', label: 'Home'},
  {id: 'settings', label: 'Settings'},
  {id: 'docs', label: 'Documentation'},
];

const demoSearchSource = createStaticSource(DEMO_SEARCH_ITEMS);

const commandSource = createStaticSource([
  {id: 'new', label: 'New file'},
  {id: 'open', label: 'Open project'},
  {id: 'settings', label: 'Settings'},
]);

const CONTEXT_MENU_ITEMS = [
  {type: 'item' as const, label: 'Copy', onSelect: () => {}},
  {type: 'item' as const, label: 'Paste', onSelect: () => {}},
  {type: 'divider' as const},
  {type: 'item' as const, label: 'Delete', onSelect: () => {}, variant: 'destructive' as const},
];

const MENTION_TOKENS = [{value: '@ami', label: '@Ami', variant: 'blue' as const}];

function ratioFromPreset(preset: string): number {
  switch (preset) {
    case 'square':
      return 1;
    case '4:3':
      return 4 / 3;
    default:
      return 16 / 9;
  }
}

function ChatDictationButtonDemo({size}: {size: ControlValue}) {
  const dictation = useChatDictation();
  return (
    <ChatDictationButton
      dictation={dictation}
      size={size as 'sm' | 'md'}
      isHiddenWhenUnsupported={false}
    />
  );
}

export const demosAC: Record<string, InteractiveDemoConfig[]> = {
  AlertDialog: [
    demo({
      title: 'Playground',
      importLine: "import {AlertDialog} from '@pharos-ds/core/AlertDialog';",
      controls: [
        booleanControl('isInline', true),
        selectControl('actionVariant', ['destructive', 'primary', 'secondary'], 'destructive'),
        booleanControl('isActionLoading'),
      ],
      fixedProps: {
        title: 'Delete project?',
        description: 'This action cannot be undone.',
        actionLabel: 'Delete',
      },
      render: p => {
        function AlertDialogDemo() {
          const [open, setOpen] = useState(false);
          const inline = Boolean(p.isInline);
          return (
            <VStack gap={3}>
              {!inline ? (
                <Button label="Open dialog" variant="secondary" onClick={() => setOpen(true)} />
              ) : null}
              <AlertDialog
                isOpen={inline || open}
                isInline={inline}
                onOpenChange={setOpen}
                title="Delete project?"
                description="This action cannot be undone."
                actionLabel="Delete"
                actionVariant={p.actionVariant as 'destructive' | 'primary' | 'secondary'}
                isActionLoading={Boolean(p.isActionLoading)}
                onAction={() => setOpen(false)}
              />
            </VStack>
          );
        }
        return <AlertDialogDemo />;
      },
    }),
  ],

  AppShell: [
    demo({
      title: 'Playground',
      importLine: "import {AppShell} from '@pharos-ds/core/AppShell';",
      controls: [
        selectControl('variant', ['elevated', 'wash', 'surface', 'section'], 'elevated'),
        selectControl('height', ['fill', 'auto'], 'auto'),
      ],
      render: p => (
        <div style={{height: 220, border: '1px solid var(--color-border-default, #e5e5e5)', borderRadius: 8, overflow: 'hidden'}}>
          <AppShell
            variant={p.variant as 'elevated' | 'wash' | 'surface' | 'section'}
            height={p.height as 'fill' | 'auto'}
            mobileNav={false}>
            <Center height="100%" minHeight={180}>
              <Text type="body">Main content area</Text>
            </Center>
          </AppShell>
        </div>
      ),
    }),
  ],

  AspectRatio: [
    demo({
      title: 'Playground',
      importLine: "import {AspectRatio} from '@pharos-ds/core/AspectRatio';",
      controls: [
        selectControl('ratioPreset', ['16:9', '4:3', 'square'], '16:9', 'ratio'),
        selectControl('shape', ['rectangle', 'ellipse'], 'rectangle'),
        selectControl('fit', ['cover', 'contain', 'center'], 'cover'),
      ],
      render: p => (
        <div style={{maxWidth: 320}}>
          <AspectRatio
            ratio={ratioFromPreset(String(p.ratioPreset))}
            shape={p.shape as 'rectangle' | 'ellipse'}
            fit={p.fit as 'cover' | 'contain' | 'center'}>
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 14,
              }}>
              Media
            </div>
          </AspectRatio>
        </div>
      ),
    }),
  ],

  Avatar: [
    demo({
      title: 'Playground',
      importLine: "import {Avatar} from '@pharos-ds/core/Avatar';",
      controls: [
        selectControl('size', ['xsm', 'sm', 'md', 'lg', 'xl'], 'md'),
      ],
      fixedProps: {name: 'Ami Pena'},
      render: p => <Avatar name="Ami Pena" size={p.size as 'xsm' | 'sm' | 'md' | 'lg' | 'xl'} />,
    }),
  ],

  AvatarGroup: [
    demo({
      title: 'Playground',
      importLine: "import {AvatarGroup, Avatar} from '@pharos-ds/core/AvatarGroup';",
      controls: [selectControl('size', ['xsm', 'sm', 'md', 'lg', 'xl'], 'md')],
      render: p => (
        <AvatarGroup size={p.size as 'xsm' | 'sm' | 'md' | 'lg' | 'xl'}>
          <Avatar name="Ami Pena" />
          <Avatar name="Alexandria" />
          <Avatar name="Pharos DS" />
        </AvatarGroup>
      ),
    }),
  ],

  AvatarGroupOverflow: [
    demo({
      title: 'Playground',
      importLine: "import {AvatarGroupOverflow, AvatarGroup, Avatar} from '@pharos-ds/core/AvatarGroup';",
      controls: [selectControl('size', ['sm', 'md', 'lg'], 'md')],
      fixedProps: {count: 5},
      render: p => (
        <AvatarGroup size={p.size as 'sm' | 'md' | 'lg'}>
          <Avatar name="Ami Pena" />
          <Avatar name="Alexandria" />
          <AvatarGroupOverflow count={5} />
        </AvatarGroup>
      ),
    }),
  ],

  AvatarStatusDot: [
    demo({
      title: 'Playground',
      importLine: "import {AvatarStatusDot, Avatar} from '@pharos-ds/core/Avatar';",
      controls: [
        selectControl('variant', ['success', 'neutral', 'error'], 'success'),
        selectControl('size', ['sm', 'md', 'lg'], 'md'),
      ],
      fixedProps: {label: 'Online'},
      render: p => (
        <Avatar
          name="Ami Pena"
          size={p.size as 'sm' | 'md' | 'lg'}
          status={
            <AvatarStatusDot
              variant={p.variant as 'success' | 'neutral' | 'error'}
              label="Online"
            />
          }
        />
      ),
    }),
  ],

  Badge: [
    demo({
      title: 'Playground',
      importLine: "import {Badge} from '@pharos-ds/core/Badge';",
      controls: [
        selectControl('variant', ['neutral', 'info', 'success', 'warning', 'error'], 'info'),
      ],
      fixedProps: {label: 'Badge'},
      render: p => <Badge label="Badge" variant={p.variant as 'neutral' | 'info' | 'success' | 'warning' | 'error'} />,
    }),
  ],

  Banner: [
    demo({
      title: 'Playground',
      importLine: "import {Banner} from '@pharos-ds/core/Banner';",
      controls: [
        selectControl('status', ['info', 'warning', 'error', 'success'], 'info'),
        selectControl('container', ['card', 'section'], 'card'),
        booleanControl('isDismissable'),
      ],
      fixedProps: {
        title: 'System update',
        description: 'A new version is available.',
      },
      render: p => (
        <Banner
          status={p.status as 'info' | 'warning' | 'error' | 'success'}
          container={p.container as 'card' | 'section'}
          title="System update"
          description="A new version is available."
          isDismissable={Boolean(p.isDismissable)}
        />
      ),
    }),
  ],

  BaseTypeahead: [
    demo({
      title: 'Playground',
      importLine: "import {BaseTypeahead, createStaticSource} from '@pharos-ds/core/Typeahead';",
      controls: [
        selectControl('size', ['sm', 'md', 'lg'], 'md'),
        booleanControl('hasEntriesOnFocus'),
        booleanControl('isDisabled'),
      ],
      render: p => {
        function BaseTypeaheadDemo() {
          const [value, setValue] = useState<(typeof DEMO_SEARCH_ITEMS)[number] | null>(null);
          const anchorRef = useRef<HTMLDivElement>(null);
          return (
            <div ref={anchorRef} style={{maxWidth: 280, padding: 8, border: '1px solid var(--color-border-default, #e5e5e5)', borderRadius: 8}}>
              <BaseTypeahead
                searchSource={demoSearchSource}
                value={value}
                onChange={setValue}
                anchorRef={anchorRef}
                placeholder="Search…"
                size={p.size as 'sm' | 'md' | 'lg'}
                hasEntriesOnFocus={Boolean(p.hasEntriesOnFocus)}
                isDisabled={Boolean(p.isDisabled)}
                debounceMs={0}
              />
            </div>
          );
        }
        return <BaseTypeaheadDemo />;
      },
    }),
  ],

  Blockquote: [
    demo({
      title: 'Playground',
      importLine: "import {Blockquote} from '@pharos-ds/core/Blockquote';",
      controls: [booleanControl('hasCite', true, 'cite')],
      render: p => (
        <Blockquote cite={p.hasCite ? 'Pharos Design System' : undefined}>
          Design is not just what it looks like — design is how it works.
        </Blockquote>
      ),
    }),
  ],

  BreadcrumbItem: [
    demo({
      title: 'Playground',
      importLine: "import {BreadcrumbItem, Breadcrumbs} from '@pharos-ds/core/Breadcrumbs';",
      controls: [booleanControl('isCurrent')],
      fixedProps: {children: 'Components'},
      render: p => (
        <Breadcrumbs>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem isCurrent={Boolean(p.isCurrent)}>Components</BreadcrumbItem>
        </Breadcrumbs>
      ),
    }),
  ],

  Breadcrumbs: [
    demo({
      title: 'Playground',
      importLine: "import {Breadcrumbs, BreadcrumbItem} from '@pharos-ds/core/Breadcrumbs';",
      controls: [selectControl('variant', ['default', 'supporting'], 'default')],
      render: p => (
        <Breadcrumbs variant={p.variant as 'default' | 'supporting'}>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
          <BreadcrumbItem>Button</BreadcrumbItem>
        </Breadcrumbs>
      ),
    }),
  ],

  Button: [
    demo({
      title: 'Playground',
      importLine: "import {Button} from '@pharos-ds/core/Button';",
      controls: [
        selectControl('variant', ['primary', 'secondary', 'ghost', 'destructive'], 'secondary'),
        selectControl('size', ['sm', 'md', 'lg'], 'md'),
        booleanControl('isLoading'),
        booleanControl('isDisabled'),
      ],
      fixedProps: {label: 'Button'},
      render: p => (
        <Button
          label="Button"
          variant={p.variant as 'primary' | 'secondary' | 'ghost' | 'destructive'}
          size={p.size as 'sm' | 'md' | 'lg'}
          isLoading={Boolean(p.isLoading)}
          isDisabled={Boolean(p.isDisabled)}
        />
      ),
    }),
  ],

  ButtonGroup: [
    demo({
      title: 'Playground',
      importLine: "import {ButtonGroup, Button} from '@pharos-ds/core/ButtonGroup';",
      controls: [
        selectControl('orientation', ['horizontal', 'vertical'], 'horizontal'),
        selectControl('size', ['sm', 'md', 'lg'], 'md'),
        booleanControl('isDisabled'),
      ],
      fixedProps: {label: 'Text actions'},
      render: p => (
        <ButtonGroup
          label="Text actions"
          orientation={p.orientation as 'horizontal' | 'vertical'}
          size={p.size as 'sm' | 'md' | 'lg'}
          isDisabled={Boolean(p.isDisabled)}>
          <Button label="Copy" />
          <Button label="Cut" />
          <Button label="Paste" />
        </ButtonGroup>
      ),
    }),
  ],

  Calendar: [
    demo({
      title: 'Playground',
      importLine: "import {Calendar} from '@pharos-ds/core/Calendar';",
      controls: [
        selectControl('numberOfMonths', ['1', '2'], '1'),
        booleanControl('hasWeekNumbers'),
        booleanControl('hasOutsideDays', true),
      ],
      render: p => {
        function CalendarDemo() {
          const [value, setValue] = useState<ISODateString | undefined>(
            '2026-07-30' as ISODateString,
          );
          return (
            <Calendar
              mode="single"
              value={value}
              onChange={next => setValue(next)}
              numberOfMonths={Number(p.numberOfMonths) as 1 | 2}
              hasWeekNumbers={Boolean(p.hasWeekNumbers)}
              hasOutsideDays={Boolean(p.hasOutsideDays)}
            />
          );
        }
        return <CalendarDemo />;
      },
    }),
  ],

  Card: [
    demo({
      title: 'Playground',
      importLine: "import {Card} from '@pharos-ds/core/Card';",
      controls: [
        selectControl('variant', ['default', 'muted', 'transparent'], 'default'),
        selectControl('padding', ['2', '4', '6'], '4'),
      ],
      render: p => (
        <Card variant={p.variant as 'default' | 'muted' | 'transparent'} padding={Number(p.padding) as 2 | 4 | 6}>
          <Text type="body">Card content with Pharos spacing tokens.</Text>
        </Card>
      ),
    }),
  ],

  Carousel: [
    demo({
      title: 'Playground',
      importLine: "import {Carousel} from '@pharos-ds/core/Carousel';",
      controls: [
        booleanControl('hasButtons', true),
        booleanControl('hasSnap'),
        booleanControl('hasEdgeFade', true),
      ],
      render: p => (
        <Carousel
          gap={2}
          hasButtons={Boolean(p.hasButtons)}
          hasSnap={Boolean(p.hasSnap)}
          hasEdgeFade={Boolean(p.hasEdgeFade)}>
          {['Alpha', 'Beta', 'Gamma', 'Delta'].map(label => (
            <Card key={label} padding={3} width={140}>
              <Text type="body">{label}</Text>
            </Card>
          ))}
        </Carousel>
      ),
    }),
  ],

  Center: [
    demo({
      title: 'Playground',
      importLine: "import {Center} from '@pharos-ds/core/Center';",
      controls: [
        selectControl('axis', ['both', 'horizontal', 'vertical'], 'both'),
        booleanControl('isInline'),
      ],
      render: p => (
        <Center
          axis={p.axis as 'both' | 'horizontal' | 'vertical'}
          isInline={Boolean(p.isInline)}
          width={280}
          height={120}
          style={{background: 'var(--color-background-muted, #f5f5f5)', borderRadius: 8}}>
          <Badge label="Centered" variant="info" />
        </Center>
      ),
    }),
  ],

  ChatComposer: [
    demo({
      title: 'Playground',
      importLine: "import {ChatComposer} from '@pharos-ds/core/Chat';",
      controls: [
        selectControl('density', ['compact', 'balanced', 'spacious'], 'balanced'),
        selectControl('elevation', ['low', 'none'], 'low'),
        booleanControl('isDisabled'),
      ],
      render: p => {
        function ChatComposerDemo() {
          const [value, setValue] = useState('');
          return (
            <div style={{maxWidth: 480}}>
              <ChatComposer
                value={value}
                onChange={setValue}
                onSubmit={next => setValue('')}
                placeholder="Type a message…"
                density={p.density as 'compact' | 'balanced' | 'spacious'}
                elevation={p.elevation as 'low' | 'none'}
                isDisabled={Boolean(p.isDisabled)}
              />
            </div>
          );
        }
        return <ChatComposerDemo />;
      },
    }),
  ],

  ChatComposerDrawer: [
    demo({
      title: 'Playground',
      importLine: "import {ChatComposerDrawer} from '@pharos-ds/core/Chat';",
      controls: [
        booleanControl('defaultIsCollapsed'),
      ],
      fixedProps: {count: 2, label: 'Attachments'},
      render: p => (
        <div style={{maxWidth: 400}}>
          <ChatComposerDrawer
            count={2}
            label="Attachments"
            defaultIsCollapsed={Boolean(p.defaultIsCollapsed)}>
            <HStack gap={2} wrap="wrap">
              <Badge label="spec.pdf" variant="neutral" />
              <Badge label="mockup.png" variant="neutral" />
            </HStack>
          </ChatComposerDrawer>
        </div>
      ),
    }),
  ],

  ChatComposerInput: [
    demo({
      title: 'Playground',
      importLine: "import {ChatComposerInput} from '@pharos-ds/core/Chat';",
      controls: [
        booleanControl('isDisabled'),
        booleanControl('hasHistory', true),
      ],
      render: p => {
        function ChatComposerInputDemo() {
          const [value, setValue] = useState('');
          return (
            <div style={{maxWidth: 400, border: '1px solid var(--color-border-default, #e5e5e5)', borderRadius: 8, padding: 8}}>
              <ChatComposerInput
                value={value}
                onChange={setValue}
                placeholder="Message input…"
                isDisabled={Boolean(p.isDisabled)}
                hasHistory={Boolean(p.hasHistory)}
                onSubmit={setValue}
              />
            </div>
          );
        }
        return <ChatComposerInputDemo />;
      },
    }),
  ],

  ChatDictationButton: [
    demo({
      title: 'Playground',
      importLine: "import {ChatDictationButton, useChatDictation} from '@pharos-ds/core/Chat';",
      controls: [selectControl('size', ['sm', 'md'], 'md')],
      render: p => <ChatDictationButtonDemo size={p.size} />,
    }),
  ],

  ChatLayout: [
    demo({
      title: 'Playground',
      importLine: "import {ChatLayout, ChatComposer, ChatMessageList, ChatMessage, ChatMessageBubble} from '@pharos-ds/core/Chat';",
      controls: [selectControl('density', ['compact', 'balanced', 'spacious'], 'balanced')],
      render: p => {
        function ChatLayoutDemo() {
          const [value, setValue] = useState('');
          return (
            <div style={{height: 320, border: '1px solid var(--color-border-default, #e5e5e5)', borderRadius: 8, overflow: 'hidden'}}>
              <ChatLayout
                density={p.density as 'compact' | 'balanced' | 'spacious'}
                composer={
                  <ChatComposer
                    value={value}
                    onChange={setValue}
                    onSubmit={next => setValue('')}
                    placeholder="Reply…"
                  />
                }>
                <ChatMessageList>
                  <ChatMessage sender="assistant" name="Navi">
                    <ChatMessageBubble>Hello! How can I help?</ChatMessageBubble>
                  </ChatMessage>
                </ChatMessageList>
              </ChatLayout>
            </div>
          );
        }
        return <ChatLayoutDemo />;
      },
    }),
  ],

  ChatLayoutScrollButton: [
    demo({
      title: 'Playground',
      importLine: "import {ChatLayoutScrollButton} from '@pharos-ds/core/Chat';",
      controls: [
        booleanControl('isVisible', true),
        booleanControl('hasLabel', true, 'label'),
      ],
      render: p => (
        <ChatLayoutScrollButton
          isVisible={Boolean(p.isVisible)}
          label={p.hasLabel ? 'New messages' : undefined}
          onClick={() => {}}
        />
      ),
    }),
  ],

  ChatMessage: [
    demo({
      title: 'Playground',
      importLine: "import {ChatMessage, ChatMessageBubble, Avatar} from '@pharos-ds/core/Chat';",
      controls: [
        selectControl('sender', ['user', 'assistant'], 'assistant'),
        selectControl('density', ['compact', 'balanced', 'spacious'], 'balanced'),
      ],
      render: p => (
        <div style={{maxWidth: 420}}>
          <ChatMessage
            sender={p.sender as 'user' | 'assistant'}
            density={p.density as 'compact' | 'balanced' | 'spacious'}
            name={p.sender === 'assistant' ? 'Navi' : 'You'}
            avatar={p.sender === 'assistant' ? <Avatar name="Navi" size="sm" /> : undefined}>
            <ChatMessageBubble>Minimal chat message demo.</ChatMessageBubble>
          </ChatMessage>
        </div>
      ),
    }),
  ],

  ChatMessageBubble: [
    demo({
      title: 'Playground',
      importLine: "import {ChatMessageBubble, ChatMessage} from '@pharos-ds/core/Chat';",
      controls: [selectControl('variant', ['filled', 'ghost'], 'filled')],
      render: p => (
        <div style={{maxWidth: 360}}>
          <ChatMessage sender="assistant" name="Navi">
            <ChatMessageBubble variant={p.variant as 'filled' | 'ghost'}>
              Bubble content with selectable variant.
            </ChatMessageBubble>
          </ChatMessage>
        </div>
      ),
    }),
  ],

  ChatMessageList: [
    demo({
      title: 'Playground',
      importLine: "import {ChatMessageList, ChatMessage, ChatMessageBubble} from '@pharos-ds/core/Chat';",
      controls: [selectControl('density', ['compact', 'balanced', 'spacious'], 'balanced')],
      render: p => (
        <div style={{maxWidth: 420}}>
          <ChatMessageList density={p.density as 'compact' | 'balanced' | 'spacious'}>
            <ChatMessage sender="user">
              <ChatMessageBubble>First message</ChatMessageBubble>
            </ChatMessage>
            <ChatMessage sender="assistant" name="Navi">
              <ChatMessageBubble>Second message</ChatMessageBubble>
            </ChatMessage>
          </ChatMessageList>
        </div>
      ),
    }),
  ],

  ChatMessageMetadata: [
    demo({
      title: 'Playground',
      importLine: "import {ChatMessageMetadata, ChatMessage, ChatMessageBubble} from '@pharos-ds/core/Chat';",
      controls: [selectControl('status', ['sending', 'sent', 'delivered', 'read', 'error'], 'read')],
      fixedProps: {timestamp: '2:30 PM'},
      render: p => (
        <div style={{maxWidth: 360}}>
          <ChatMessage sender="user">
            <ChatMessageBubble>Delivered message</ChatMessageBubble>
            <ChatMessageMetadata
              timestamp="2:30 PM"
              status={p.status as 'sending' | 'sent' | 'delivered' | 'read' | 'error'}
            />
          </ChatMessage>
        </div>
      ),
    }),
  ],

  ChatSendButton: [
    demo({
      title: 'Playground',
      importLine: "import {ChatSendButton} from '@pharos-ds/core/Chat';",
      controls: [
        selectControl('size', ['sm', 'md'], 'md'),
        booleanControl('isStopShown'),
        booleanControl('isDisabled'),
      ],
      render: p => (
        <ChatSendButton
          size={p.size as 'sm' | 'md'}
          isStopShown={Boolean(p.isStopShown)}
          isDisabled={Boolean(p.isDisabled)}
          onSend={() => {}}
          onStop={() => {}}
        />
      ),
    }),
  ],

  ChatSystemMessage: [
    demo({
      title: 'Playground',
      importLine: "import {ChatSystemMessage} from '@pharos-ds/core/Chat';",
      controls: [selectControl('variant', ['default', 'divider'], 'default')],
      fixedProps: {children: 'Conversation started'},
      render: p => (
        <ChatSystemMessage variant={p.variant as 'default' | 'divider'}>
          Conversation started
        </ChatSystemMessage>
      ),
    }),
  ],

  ChatTokenizedText: [
    demo({
      title: 'Playground',
      importLine: "import {ChatTokenizedText} from '@pharos-ds/core/Chat';",
      controls: [booleanControl('hasTokens', true, 'tokens')],
      fixedProps: {children: 'Hello @ami, welcome back!'},
      render: p => (
        <ChatTokenizedText tokens={p.hasTokens ? MENTION_TOKENS : undefined}>
          Hello @ami, welcome back!
        </ChatTokenizedText>
      ),
    }),
  ],

  ChatToolCalls: [
    demo({
      title: 'Playground',
      importLine: "import {ChatToolCalls} from '@pharos-ds/core/Chat';",
      controls: [
        selectControl('status', ['pending', 'running', 'complete', 'error'], 'complete'),
        booleanControl('defaultIsExpanded', true),
      ],
      render: p => (
        <div style={{maxWidth: 420}}>
          <ChatToolCalls
            calls={[
              {
                name: 'read_file',
                status: p.status as 'pending' | 'running' | 'complete' | 'error',
                target: 'Button.tsx',
                duration: '120ms',
              },
            ]}
            defaultIsExpanded={Boolean(p.defaultIsExpanded)}
          />
        </div>
      ),
    }),
  ],

  CheckboxInput: [
    demo({
      title: 'Playground',
      importLine: "import {CheckboxInput} from '@pharos-ds/core/CheckboxInput';",
      controls: [
        selectControl('size', ['sm', 'md'], 'md'),
        booleanControl('isDisabled'),
        booleanControl('isLoading'),
      ],
      fixedProps: {label: 'Accept terms'},
      render: p => {
        function CheckboxDemo() {
          const [checked, setChecked] = useState(false);
          return (
            <CheckboxInput
              label="Accept terms"
              value={checked}
              onChange={setChecked}
              size={p.size as 'sm' | 'md'}
              isDisabled={Boolean(p.isDisabled)}
              isLoading={Boolean(p.isLoading)}
            />
          );
        }
        return <CheckboxDemo />;
      },
    }),
  ],

  CheckboxList: [
    demo({
      title: 'Playground',
      importLine: "import {CheckboxList, CheckboxListItem} from '@pharos-ds/core/CheckboxList';",
      controls: [
        selectControl('density', ['compact', 'balanced', 'spacious'], 'balanced'),
        booleanControl('hasDividers'),
        booleanControl('isDisabled'),
      ],
      fixedProps: {label: 'Notifications'},
      render: p => {
        function CheckboxListDemo() {
          const [values, setValues] = useState<string[]>(['email']);
          return (
            <div style={{maxWidth: 320}}>
              <CheckboxList
                label="Notifications"
                value={values}
                onChange={setValues}
                density={p.density as 'compact' | 'balanced' | 'spacious'}
                hasDividers={Boolean(p.hasDividers)}
                isDisabled={Boolean(p.isDisabled)}>
                <CheckboxListItem label="Email" value="email" />
                <CheckboxListItem label="Push" value="push" />
                <CheckboxListItem label="SMS" value="sms" />
              </CheckboxList>
            </div>
          );
        }
        return <CheckboxListDemo />;
      },
    }),
  ],

  CheckboxListItem: [
    demo({
      title: 'Playground',
      importLine: "import {CheckboxListItem, CheckboxList} from '@pharos-ds/core/CheckboxList';",
      controls: [booleanControl('isDisabled')],
      fixedProps: {label: 'Email alerts', value: 'email'},
      render: p => {
        function CheckboxListItemDemo() {
          const [values, setValues] = useState<string[]>(['email']);
          return (
            <div style={{maxWidth: 280}}>
              <CheckboxList label="Channel" value={values} onChange={setValues}>
                <CheckboxListItem
                  label="Email alerts"
                  value="email"
                  isDisabled={Boolean(p.isDisabled)}
                />
              </CheckboxList>
            </div>
          );
        }
        return <CheckboxListItemDemo />;
      },
    }),
  ],

  Citation: [
    demo({
      title: 'Playground',
      importLine: "import {Citation} from '@pharos-ds/core/Citation';",
      controls: [selectControl('variant', ['label', 'number'], 'label')],
      fixedProps: {number: 1, source: {title: 'Pharos docs'}},
      render: p => (
        <Citation
          number={1}
          variant={p.variant as 'label' | 'number'}
          source={{title: 'Pharos docs', url: 'https://example.com'}}
        />
      ),
    }),
  ],

  ClickableCard: [
    demo({
      title: 'Playground',
      importLine: "import {ClickableCard} from '@pharos-ds/core/ClickableCard';",
      controls: [
        selectControl('variant', ['default', 'muted'], 'default'),
        booleanControl('isDisabled'),
      ],
      fixedProps: {label: 'Open project settings'},
      render: p => (
        <ClickableCard
          label="Open project settings"
          variant={p.variant as 'default' | 'muted'}
          isDisabled={Boolean(p.isDisabled)}
          onClick={() => {}}
          width={280}>
          <Heading level={4}>Project settings</Heading>
          <Text type="supporting" color="secondary">
            Manage team, billing, and integrations.
          </Text>
        </ClickableCard>
      ),
    }),
  ],

  CodeBlock: [
    demo({
      title: 'Playground',
      importLine: "import {CodeBlock} from '@pharos-ds/core/CodeBlock';",
      controls: [
        selectControl('size', ['sm', 'md'], 'md'),
        selectControl('container', ['card', 'section'], 'card'),
        booleanControl('hasLineNumbers'),
        booleanControl('hasCopyButton', true),
      ],
      fixedProps: {
        code: "const greeting = 'Hello, Pharos!';\nconsole.log(greeting);",
        language: 'javascript',
      },
      render: p => (
        <CodeBlock
          code={"const greeting = 'Hello, Pharos!';\nconsole.log(greeting);"}
          language="javascript"
          size={p.size as 'sm' | 'md'}
          container={p.container as 'card' | 'section'}
          hasLineNumbers={Boolean(p.hasLineNumbers)}
          hasCopyButton={Boolean(p.hasCopyButton)}
        />
      ),
    }),
  ],

  Collapsible: [
    demo({
      title: 'Playground',
      importLine: "import {Collapsible} from '@pharos-ds/core/Collapsible';",
      controls: [
        booleanControl('defaultIsOpen', true),
        booleanControl('isDisabled'),
      ],
      fixedProps: {trigger: 'Details'},
      render: p => (
        <Collapsible
          trigger="Details"
          defaultIsOpen={Boolean(p.defaultIsOpen)}
          isDisabled={Boolean(p.isDisabled)}>
          <Text type="body">Collapsible body content.</Text>
        </Collapsible>
      ),
    }),
  ],

  CollapsibleGroup: [
    demo({
      title: 'Playground',
      importLine: "import {CollapsibleGroup, Collapsible} from '@pharos-ds/core/Collapsible';",
      controls: [
        selectControl('type', ['single', 'multiple'], 'single'),
        booleanControl('hasDividers', true),
      ],
      render: p => (
        <CollapsibleGroup
          type={p.type as 'single' | 'multiple'}
          hasDividers={Boolean(p.hasDividers)}
          defaultValue="faq1">
          <Collapsible trigger="What is Pharos?" value="faq1">
            <Text type="body">Pharos is a design system for internal tools.</Text>
          </Collapsible>
          <Collapsible trigger="How do I start?" value="faq2">
            <Text type="body">Install the package and import components.</Text>
          </Collapsible>
        </CollapsibleGroup>
      ),
    }),
  ],

  CommandPalette: [
    demo({
      title: 'Playground',
      importLine: "import {CommandPalette} from '@pharos-ds/core/CommandPalette';",
      controls: [booleanControl('isInline', true)],
      render: p => {
        function CommandPaletteDemo() {
          const [open, setOpen] = useState(false);
          const inline = Boolean(p.isInline);
          return (
            <VStack gap={3}>
              {!inline ? (
                <Button label="Open palette" variant="secondary" onClick={() => setOpen(true)} />
              ) : null}
              <CommandPalette
                isOpen={inline || open}
                isInline={inline}
                onOpenChange={setOpen}
                searchSource={commandSource}
                input={<CommandPaletteInput hasAutoFocus={!inline} />}
                footer={<CommandPaletteFooter />}
              />
            </VStack>
          );
        }
        return <CommandPaletteDemo />;
      },
    }),
  ],

  CommandPaletteEmpty: [
    demo({
      title: 'Playground',
      importLine: "import {CommandPaletteEmpty} from '@pharos-ds/core/CommandPalette';",
      controls: [],
      render: () => (
        <div style={{maxWidth: 360, padding: 16, border: '1px solid var(--color-border-default, #e5e5e5)', borderRadius: 8}}>
          <CommandPaletteEmpty>No results found</CommandPaletteEmpty>
        </div>
      ),
    }),
  ],

  CommandPaletteFooter: [
    demo({
      title: 'Playground',
      importLine: "import {CommandPaletteFooter} from '@pharos-ds/core/CommandPalette';",
      controls: [],
      render: () => (
        <div style={{maxWidth: 360, border: '1px solid var(--color-border-default, #e5e5e5)', borderRadius: 8, overflow: 'hidden'}}>
          <CommandPaletteFooter />
        </div>
      ),
    }),
  ],

  CommandPaletteGroup: [
    demo({
      title: 'Playground',
      importLine: "import {CommandPaletteGroup, CommandPaletteItem, CommandPaletteList} from '@pharos-ds/core/CommandPalette';",
      controls: [],
      fixedProps: {heading: 'Navigation'},
      render: () => (
        <div style={{maxWidth: 360, border: '1px solid var(--color-border-default, #e5e5e5)', borderRadius: 8, overflow: 'hidden'}}>
          <CommandPaletteList>
            <CommandPaletteGroup heading="Navigation">
              <CommandPaletteItem value="home">Home</CommandPaletteItem>
              <CommandPaletteItem value="docs">Docs</CommandPaletteItem>
            </CommandPaletteGroup>
          </CommandPaletteList>
        </div>
      ),
    }),
  ],

  CommandPaletteInput: [
    demo({
      title: 'Playground',
      importLine: "import {CommandPaletteInput} from '@pharos-ds/core/CommandPalette';",
      controls: [booleanControl('hasAutoFocus', false)],
      render: p => {
        function CommandPaletteInputDemo() {
          const [query, setQuery] = useState('');
          return (
            <div style={{maxWidth: 360, border: '1px solid var(--color-border-default, #e5e5e5)', borderRadius: 8, overflow: 'hidden'}}>
              <CommandPaletteInput
                value={query}
                onValueChange={setQuery}
                placeholder="Search commands…"
                hasAutoFocus={Boolean(p.hasAutoFocus)}
              />
            </div>
          );
        }
        return <CommandPaletteInputDemo />;
      },
    }),
  ],

  CommandPaletteItem: [
    demo({
      title: 'Playground',
      importLine: "import {CommandPaletteItem, CommandPaletteList} from '@pharos-ds/core/CommandPalette';",
      controls: [booleanControl('isDisabled')],
      fixedProps: {value: 'settings', children: 'Settings'},
      render: p => (
        <div style={{maxWidth: 360, border: '1px solid var(--color-border-default, #e5e5e5)', borderRadius: 8, overflow: 'hidden'}}>
          <CommandPaletteList>
            <CommandPaletteItem value="settings" isDisabled={Boolean(p.isDisabled)}>
              Settings
            </CommandPaletteItem>
          </CommandPaletteList>
        </div>
      ),
    }),
  ],

  CommandPaletteList: [
    demo({
      title: 'Playground',
      importLine: "import {CommandPaletteList, CommandPaletteItem} from '@pharos-ds/core/CommandPalette';",
      controls: [],
      render: () => (
        <div style={{maxWidth: 360, border: '1px solid var(--color-border-default, #e5e5e5)', borderRadius: 8, overflow: 'hidden'}}>
          <CommandPaletteList>
            <CommandPaletteItem value="home">Home</CommandPaletteItem>
            <CommandPaletteItem value="settings">Settings</CommandPaletteItem>
          </CommandPaletteList>
        </div>
      ),
    }),
  ],

  ContextMenu: [
    demo({
      title: 'Playground',
      importLine: "import {ContextMenu} from '@pharos-ds/core/ContextMenu';",
      controls: [
        selectControl('size', ['sm', 'md', 'lg'], 'md'),
        booleanControl('isDisabled'),
      ],
      render: p => (
        <ContextMenu
          size={p.size as 'sm' | 'md' | 'lg'}
          isDisabled={Boolean(p.isDisabled)}
          items={CONTEXT_MENU_ITEMS}>
          <Center
            width={240}
            height={120}
            style={{background: 'var(--color-background-muted, #f5f5f5)', borderRadius: 8}}>
            <Text type="supporting" color="secondary">
              Right-click here
            </Text>
          </Center>
        </ContextMenu>
      ),
    }),
  ],
};
