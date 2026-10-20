# Componentes

154 componentes React do pacote `@pharos-ds/core`, agrupados como na galeria do site. Cada arquivo traz descrição, importação, exemplos, boas práticas e tabela de props.

Regra para agentes: nunca invente props. Consulte o arquivo do componente ou rode `npx @pharos-ds/cli component <Nome>`.

## Índice por grupo

### AppShell

- [AppShell](./AppShell.md) — O layout mais externo de uma aplicação.

### AspectRatio

- [AspectRatio](./AspectRatio.md) — Mantém uma proporção fixa entre largura e altura para seus filhos, independentemente do tamanho da tela.

### Avatar

- [Avatar](./Avatar.md) — Avatar representa uma pessoa ou equipe com foto de perfil, iniciais ou um ícone padrão.
- [AvatarGroup](./AvatarGroup.md) — AvatarGroup exibe múltiplos avatares em uma linha sobreposta com um indicador de overflow opcional.
- [AvatarGroupOverflow](./AvatarGroupOverflow.md) — AvatarGroupOverflow aparece no final de um AvatarGroup para resumir pessoas que não são exibidas individualmente.
- [AvatarStatusDot](./AvatarStatusDot.md) — Indicador de status em forma de ponto que lê o tamanho do avatar a partir do contexto e escala proporcionalmente.

### Badge

- [Badge](./Badge.md) — Badge destaca um status ou categoria de relance.

### Banner

- [Banner](./Banner.md) — Banner exibe uma mensagem persistente no topo de uma página ou seção.

### Blockquote

- [Blockquote](./Blockquote.md) — Bloco de citação estilizado com borda esquerda em cor de destaque e texto secundário.

### Breadcrumbs

- [BreadcrumbItem](./BreadcrumbItem.md) — Item individual de breadcrumb que renderiza como link quando href é fornecido, ou como texto simples para a página atual.
- [Breadcrumbs](./Breadcrumbs.md) — Breadcrumbs exibem uma trilha de links da raiz até a página atual.

### Button

- [Button](./Button.md) — Button dispara uma ação quando clicado.
- [ButtonGroup](./ButtonGroup.md) — ButtonGroup une ações relacionadas em um único controle conectado.
- [IconButton](./IconButton.md) — Um button que exibe apenas um ícone sem texto visível.
- [ToggleButton](./ToggleButton.md) — ToggleButton alterna entre estados selecionado e não selecionado para representar uma escolha persistente ligado/desligado.
- [ToggleButtonGroup](./ToggleButtonGroup.md) — Agrupa toggle buttons para comportamento exclusivo (single) ou multi-seleção.

### Calendar

- [Calendar](./Calendar.md) — Calendar permite ao usuário escolher uma data ou intervalo de datas em uma grade mensal.

### Card

- [Card](./Card.md) — Card é um container com borda e elevação para itens discretos e autocontidos: coisas que você poderia reordenar, remover ou interagir de forma independente.
- [ClickableCard](./ClickableCard.md) — Card interativo para alvos de navegação ou ação.
- [SelectableCard](./SelectableCard.md) — Um card que alterna entre estados selected e unselected com uma borda accent.

### Carousel

- [Carousel](./Carousel.md) — Carousel rola uma linha de itens horizontalmente quando eles excedem a largura disponível.

### Chat

- [ChatComposer](./ChatComposer.md) — Shell de layout para um chat composer.
- [ChatComposerDrawer](./ChatComposerDrawer.md) — Painel drawer recolhível que fica acima do input de chat dentro do ChatComposer.
- [ChatComposerInput](./ChatComposerInput.md) — Input de rich text para o compositor de chat.
- [ChatDictationButton](./ChatDictationButton.md) — ChatDictationButton é um botão de alternância que inicia e para a ditado por voz dentro de um compositor de chat.
- [ChatLayout](./ChatLayout.md) — ChatLayout é o shell de layout para interfaces de chat em página inteira.
- [ChatLayoutScrollButton](./ChatLayoutScrollButton.md) — Botão flutuante de scroll para o final que aparece quando o usuário se afasta das mensagens mais recentes.
- [ChatMessage](./ChatMessage.md) — Wrapper de contexto do remetente: trata avatar, nome, metadados e alinhamento com base no papel do remetente.
- [ChatMessageBubble](./ChatMessageBubble.md) — Contêiner de conteúdo estilizado para o "bubble" do chat.
- [ChatMessageList](./ChatMessageList.md) — Container de mensagens presentacional com context de density e suporte a infinite scroll.
- [ChatMessageMetadata](./ChatMessageMetadata.md) — Linha de metadata composicional para mensagens de chat.
- [ChatSendButton](./ChatSendButton.md) — Botão circular de enviar/parar para o compositor de chat.
- [ChatSystemMessage](./ChatSystemMessage.md) — Mensagem de sistema centralizada para conteúdo sem sender, como separadores de data, mudanças de membros e avisos de status.
- [ChatTokenizedText](./ChatTokenizedText.md) — Renderiza uma string de texto com padrões de token substituídos por componentes Badge inline.
- [ChatToolCalls](./ChatToolCalls.md) — ChatToolCalls exibe invocações de tool ou function call de uma resposta LLM.

### Checkbox

- [CheckboxInput](./CheckboxInput.md) — CheckboxInput alterna um único valor ligado/desligado.
- [CheckboxList](./CheckboxList.md) — CheckboxList exibe um pequeno grupo de checkboxes para que os usuários ativem ou desativem várias opções de uma vez.
- [CheckboxListItem](./CheckboxListItem.md) — Item de checkbox individual com label, description e slot de end content.

### Citation

- [Citation](./Citation.md) — Citations exibem referências inline a fontes externas.

### CodeBlock

- [CodeBlock](./CodeBlock.md) — CodeBlock renderiza código com realce de sintaxe, números de linha, botão de copiar e seções colapsáveis opcionais.

### Collapsible

- [Collapsible](./Collapsible.md) — Collapsible oculta e revela conteúdo atrás de um botão trigger.
- [CollapsibleGroup](./CollapsibleGroup.md) — Coordena múltiplas instâncias Collapsible para que apenas uma (modo single) ou qualquer número (modo multiple) possa estar aberta por vez.

### CommandPalette

- [CommandPalette](./CommandPalette.md) — CommandPalette é um dialog pesquisável para acesso rápido a comandos, navegação e ações.
- [CommandPaletteEmpty](./CommandPaletteEmpty.md) — Exibição de estado vazio para a área de resultados.
- [CommandPaletteFooter](./CommandPaletteFooter.md) — Footer exibindo dicas de navegação por teclado.
- [CommandPaletteGroup](./CommandPaletteGroup.md) — Agrupamento visual com um label de heading.
- [CommandPaletteInput](./CommandPaletteInput.md) — Slot de input de busca.
- [CommandPaletteItem](./CommandPaletteItem.md) — Item selecionável.
- [CommandPaletteList](./CommandPaletteList.md) — Container de resultados com scroll.

### ContextMenu

- [ContextMenu](./ContextMenu.md) — Um menu de contexto acionado por clique direito que aparece na posição do cursor.

### DateInput

- [DateInput](./DateInput.md) — DateInput permite que o usuário digite ou escolha uma data em um popover de calendário.
- [DateRangeInput](./DateRangeInput.md) — DateRangeInput permite que os usuários selecionem uma data inicial e final a partir de um popover de calendário com dois meses.
- [DateTimeInput](./DateTimeInput.md) — DateTimeInput combina um calendar popover com um time input para selecionar data e hora em um único fluxo de interação.

### Dialog

- [AlertDialog](./AlertDialog.md) — AlertDialog solicita ao usuário que confirme uma ação destrutiva ou irreversível antes que ela aconteça.
- [Dialog](./Dialog.md) — Dialog exibe uma overlay modal que bloqueia interação com a página até o usuário responder.
- [DialogHeader](./DialogHeader.md) — Cabeçalho para dialogs com título, subtítulo opcional, botão de fechar e slots start/end content.

### Divider

- [Divider](./Divider.md) — Separador visual que divide o conteúdo em seções distintas.

### DropdownMenu

- [DropdownMenu](./DropdownMenu.md) — Um dropdown menu que exibe uma lista de itens acionáveis em um popup acionado por um button.
- [DropdownMenuCheckboxItem](./DropdownMenuCheckboxItem.md) — Um item de menu marcável (role="menuitemcheckbox") que alterna um boolean independente.
- [DropdownMenuItem](./DropdownMenuItem.md) — Componente auxiliar para renderização customizada de itens com estilo consistente.
- [DropdownMenuRadioGroup](./DropdownMenuRadioGroup.md) — Grupo de seleção única de itens de menu radio (role="group" de menuitemradio).
- [DropdownMenuRadioItem](./DropdownMenuRadioItem.md) — Uma única opção em um DropdownMenuRadioGroup (role="menuitemradio").
- [DropdownMenuSubMenu](./DropdownMenuSubMenu.md) — Uma única linha de menu que revela um flyout aninhado com seus próprios itens.

### EmptyState

- [EmptyState](./EmptyState.md) — EmptyState mostra um placeholder quando uma área de conteúdo não tem dados.

### Field

- [Field](./Field.md) — Field é um wrapper de baixo nível para controles personalizados, nativos ou de terceiros que ainda não fornecem UI de rótulo, descrição e status de campo.
- [FieldLabel](./FieldLabel.md) — Componente de label standalone com indicadores optional/required e suporte a tooltip.
- [FieldStatus](./FieldStatus.md) — FieldStatus renderiza feedback de validação para fields e controles similares a fields.
- [InputGroup](./InputGroup.md) — InputGroup conecta um input com addons de prefix/suffix em uma única unidade visual.
- [InputGroupText](./InputGroupText.md) — Elemento de texto prefixo ou sufixo renderizado dentro de InputGroup.

### FileInput

- [FileInput](./FileInput.md) — FileInput fornece upload de arquivos com suporte opcional a drag-and-drop.

### HoverCard

- [HoverCard](./HoverCard.md) — HoverCard mostra informações adicionais quando o usuário passa o mouse ou foca um elemento trigger.

### Icon

- [Icon](./Icon.md) — Ícones são pequenos símbolos visuais que representam ações, objetos ou conceitos.

### Item

- [Item](./Item.md) — Um primitivo de item único e flexível que unifica o padrão "start content + label + description + end content" em todo o Pharos.

### Kbd

- [Kbd](./Kbd.md) — Renderiza um atalho de teclado como badges de tecla estilizados.

### Layout

- [Center](./Center.md) — Center alinha o conteúdo ao centro de seu contêiner.
- [FormLayout](./FormLayout.md) — Contêiner de layout que organiza campos de formulário com espaçamento e direção consistentes.
- [Grid](./Grid.md) — Um container de layout CSS grid para organizar filhos em linhas e colunas.
- [GridSpan](./GridSpan.md) — Item de grid que ocupa múltiplas colunas ou linhas.
- [Layout](./Layout.md) — Layout fornece componentes composáveis para construir shells de página estruturados com slots de header, sidebar, content e footer.
- [LayoutContent](./LayoutContent.md) — Área de conteúdo principal rolável.
- [LayoutFooter](./LayoutFooter.md) — Barra inferior para action bars, pagination e status bars.
- [LayoutHeader](./LayoutHeader.md) — Barra superior para títulos de página, app bars e toolbars.
- [LayoutPanel](./LayoutPanel.md) — Sidebar para navegação, configurações ou painéis de inspector.
- [Section](./Section.md) — Section é a forma correta de criar regiões de página e agrupar conteúdo relacionado.
- [Stack](./Stack.md) — Stack organiza itens em linha ou coluna com espaçamento consistente.

### Lightbox

- [Lightbox](./Lightbox.md) — Overlay em tela cheia para visualizar imagens e vídeos em resolução completa.

### Link

- [Link](./Link.md) — Um anchor estilizado para navegação de texto inline e standalone.

### List

- [List](./List.md) — Coleção vertical de itens com espaçamento, divisores e marcadores opcionais consistentes.
- [ListItem](./ListItem.md) — Item de lista com label, description, slots start/end content e padrões interativos.

### Markdown

- [Markdown](./Markdown.md) — Renderiza uma string markdown como componentes estilizados do Pharos.

### MetadataList

- [MetadataList](./MetadataList.md) — MetadataList exibe pares chave-valor para atributos de objetos como qualidade, condição e status, em um layout estruturado.
- [MetadataListItem](./MetadataListItem.md) — Um único valor de metadata rotulado dentro de um MetadataList.

### MoreMenu

- [MoreMenu](./MoreMenu.md) — MoreMenu é um botão de três pontos que abre uma lista de ações.

### Navigation

- [MobileNav](./MobileNav.md) — Um drawer deslizante para navegação mobile.
- [NavIcon](./NavIcon.md) — NavIcon é um contêiner circular de ícone com fundo em cor de destaque.
- [SideNav](./SideNav.md) — Um componente de navegação sidebar para organizar páginas de aplicação com sections, itens aninhados e ícones.
- [SideNavCollapseButton](./SideNavCollapseButton.md) — Botão toggle para colapsar sidenav.
- [SideNavHeading](./SideNavHeading.md) — Heading de produto/suite/conta com lógica inteligente de boundary de interação para links e um popover de menu.
- [SideNavItem](./SideNavItem.md) — Item de navegação com ícone, estado selecionado, end content opcional e suporte a aninhamento via children.
- [SideNavSection](./SideNavSection.md) — Agrupamento de section com title, subtitle e end content opcionais.
- [TopNav](./TopNav.md) — TopNav é uma barra de navegação horizontal para navegação em nível de produto em headers de aplicação.
- [TopNavHeading](./TopNavHeading.md) — Heading de produto/suite/conta para o slot heading do TopNav.
- [TopNavItem](./TopNavItem.md) — Item de link de navegação para uso no startContent do TopNav: renderiza como anchor com estados de hover e selected.
- [TopNavMegaMenu](./TopNavMegaMenu.md) — Item de navegação que exibe um painel de mega menu em largura total no hover.
- [TopNavMegaMenuFeaturedCard](./TopNavMegaMenuFeaturedCard.md) — Card featured padrão para o slot featured do TopNavMegaMenu.
- [TopNavMegaMenuItem](./TopNavMegaMenuItem.md) — Um item individual dentro de um TopNavMegaMenu.
- [TopNavMenu](./TopNavMenu.md) — Item de navegação que exibe um popover menu acionado por hover com itens ricos contendo ícone, título e description opcional.

### NumberInput

- [NumberInput](./NumberInput.md) — Um form input para valores numéricos com validação integrada, restrições min/max e controles de step.

### Outline

- [Outline](./Outline.md) — Uma sidebar de sumário para páginas de documentação, centros de ajuda, wikis e páginas longas de configurações.

### OverflowList

- [OverflowList](./OverflowList.md) — Lista horizontal que oculta automaticamente itens quando excedem a largura disponível.

### Overlay

- [Overlay](./Overlay.md) — Overlay sobrepõe ações ou conteúdo de apoio sobre mídia, cards, vídeo ou outras superfícies delimitadas, com scrim opcional e comportamento de revelação.

### Pagination

- [Pagination](./Pagination.md) — Pagination permite que usuários percorram páginas de conteúdo.

### Popover

- [Popover](./Popover.md) — Uma overlay acionada por clique ancorada a um botão ou elemento trigger.

### PowerSearch

- [PowerSearch](./PowerSearch.md) — PowerSearch é uma barra de filtros estruturada em que cada token representa um campo, operador e valor.

### ProgressBar

- [ProgressBar](./ProgressBar.md) — Barra horizontal que mostra o progresso de conclusão de uma tarefa.

### Radio

- [RadioList](./RadioList.md) — Um grupo de opções em que apenas uma pode ser selecionada por vez.
- [RadioListItem](./RadioListItem.md) — Item de radio individual com slots de label, description e content.

### SegmentedControl

- [SegmentedControl](./SegmentedControl.md) — Grupo de botões segmentados que permite ao usuário fazer uma seleção única entre um pequeno conjunto de opções mutuamente exclusivas.
- [SegmentedControlItem](./SegmentedControlItem.md) — Item de segmento individual renderizado como radio button dentro do segmented control.

### Selector

- [MultiSelector](./MultiSelector.md) — Dropdown com checkbox para selecionar múltiplos valores de uma lista.
- [Selector](./Selector.md) — Dropdown selector para escolher um único valor de uma lista de opções.
- [SelectorOption](./SelectorOption.md) — Componente auxiliar para renderização personalizada de itens dentro da prop renderOption de um Selector.

### Skeleton

- [Skeleton](./Skeleton.md) — Um placeholder animado com shimmer que antecipa a forma do conteúdo enquanto carrega.

### Slider

- [Slider](./Slider.md) — Controle arrastável para selecionar um valor numérico ou intervalo dentro de limites definidos.

### Spinner

- [Spinner](./Spinner.md) — Indicador de carregamento animado para processos com duração desconhecida, como busca de dados ou envio de formulário.

### StatusDot

- [StatusDot](./StatusDot.md) — Um pequeno ponto colorido que comunica status como presença online/offline ou níveis de severidade.

### Switch

- [Switch](./Switch.md) — Controle toggle para estados ligado/desligado que entram em vigor imediatamente.

### Table

- [Table](./Table.md) — Table exibe dados estruturados em linhas e colunas com dimensionalidade consistente.
- [TableCell](./TableCell.md) — Wrapper de <td> que lê TableContext para aplicar padding de density, font size e bordas de divider quando usado dentro de Table.
- [TableHeaderCell](./TableHeaderCell.md) — Wrapper <th> que lê TableContext para aplicar padding de density, peso semibold, cor de texto secondary e bordas divider quando usado dentro de Table.
- [TableRow](./TableRow.md) — Wrapper <tr> que lê TableContext para aplicar estilos striped, hover e divider quando usado dentro de Table.

### Tabs

- [Tab](./Tab.md) — Item de aba individual que renderiza como botão ou link âncora, com estilização de estado selecionado e ícones opcionais.
- [TabList](./TabList.md) — TabList fornece navegação estilo tab para organizar conteúdo em seções categorizadas.
- [TabMenu](./TabMenu.md) — Trigger de menu overflow que abre um dropdown de opções de tab adicionais, exibindo o label da opção selecionada como texto do trigger.

### Text

- [Text](./Text.md) — Text renderiza texto de corpo e headings estilizados do tema.

### TextArea

- [TextArea](./TextArea.md) — TextArea é um input de texto multi-linha para coletar conteúdo mais longo como comentários, descrições ou mensagens.

### TextInput

- [TextInput](./TextInput.md) — TextInput coleta texto de formulário curto como nomes, e-mails ou consultas de busca.

### Thumbnail

- [Thumbnail](./Thumbnail.md) — Thumbnail exibe uma preview compacta e quadrada de um anexo de imagem.

### TimeInput

- [TimeInput](./TimeInput.md) — TimeInput permite que os usuários insiram um horário do dia e o converte para um formato padrão.

### Timestamp

- [Timestamp](./Timestamp.md) — Timestamp formata um valor de data ou hora em texto legível por humanos.

### Toast

- [Toast](./Toast.md) — Toast exibe uma notificação breve e não bloqueante para confirmar uma ação ou apresentar informação temporária.

### Token

- [Token](./Token.md) — Token é um elemento pequeno e inline para representar pedaços discretos de dados associados, como tags, categorias ou seleções.

### Tokenizer

- [Tokenizer](./Tokenizer.md) — Tokenizer é um input multi-select que permite aos usuários buscar, selecionar e gerenciar múltiplos itens exibidos como chips removíveis.

### Toolbar

- [Toolbar](./Toolbar.md) — Toolbar é uma barra horizontal com áreas left, center e right.

### Tooltip

- [Tooltip](./Tooltip.md) — Dica de texto curta que aparece no hover ou focus, ancorada a um elemento trigger.

### TreeList

- [TreeList](./TreeList.md) — Estrutura de árvore expansível para exibir dados hierárquicos com linhas conectoras de ramificação.

### Typeahead

- [BaseTypeahead](./BaseTypeahead.md) — Motor de combobox sem estilo que fornece input, busca, navegação por teclado e dropdown.
- [Typeahead](./Typeahead.md) — Um input pesquisável para selecionar um único item de um dataset grande ou dinâmico.
- [TypeaheadItem](./TypeaheadItem.md) — Renderizador padrão de item de dropdown para resultados de typeahead.

### Utilities

- [InternationalizationProvider](./InternationalizationProvider.md) — Envolve seu app para definir o locale ativo e (opcionalmente) mesclar catálogos de tradução adicionais e substituições por locale.
- [LinkProvider](./LinkProvider.md) — Envolve sua app para substituir a tag <a> padrão por um componente de link específico do framework (ex.: Next.js Link) para roteamento client-side em todos os componentes Pharos.
- [MediaTheme](./MediaTheme.md) — Fornece overrides de tokens para conteúdo renderizado em superfícies invertidas: overlays de mídia, scrims, toasts e tooltips.
- [Theme](./Theme.md) — Envolve uma subárvore com um theme Pharos específico.

### VisuallyHidden

- [VisuallyHidden](./VisuallyHidden.md) — Renderiza conteúdo na árvore de acessibilidade enquanto o oculta visualmente.

## Lista alfabética

| Componente | Grupo | Categoria | Import |
| --- | --- | --- | --- |
| [AlertDialog](./AlertDialog.md) | Dialog | Overlay | `@pharos-ds/core/AlertDialog` |
| [AppShell](./AppShell.md) | AppShell | Layout | `@pharos-ds/core/AppShell` |
| [AspectRatio](./AspectRatio.md) | Misc | Layout | `@pharos-ds/core/AspectRatio` |
| [Avatar](./Avatar.md) | Avatar | Content | `@pharos-ds/core/Avatar` |
| [AvatarGroup](./AvatarGroup.md) | Avatar | Content | `@pharos-ds/core/AvatarGroup` |
| [AvatarGroupOverflow](./AvatarGroupOverflow.md) | Misc | — | `@pharos-ds/core/AvatarGroupOverflow` |
| [AvatarStatusDot](./AvatarStatusDot.md) | Misc | — | `@pharos-ds/core/AvatarStatusDot` |
| [Badge](./Badge.md) | Misc | Feedback & Status | `@pharos-ds/core/Badge` |
| [Banner](./Banner.md) | Misc | Feedback & Status | `@pharos-ds/core/Banner` |
| [BaseTypeahead](./BaseTypeahead.md) | Misc | — | `@pharos-ds/core/BaseTypeahead` |
| [Blockquote](./Blockquote.md) | Misc | Content | `@pharos-ds/core/Blockquote` |
| [BreadcrumbItem](./BreadcrumbItem.md) | Misc | — | `@pharos-ds/core/BreadcrumbItem` |
| [Breadcrumbs](./Breadcrumbs.md) | Breadcrumbs | Navigation | `@pharos-ds/core/Breadcrumbs` |
| [Button](./Button.md) | Button | Action | `@pharos-ds/core/Button` |
| [ButtonGroup](./ButtonGroup.md) | Button | Action | `@pharos-ds/core/ButtonGroup` |
| [Calendar](./Calendar.md) | Misc | Data Input | `@pharos-ds/core/Calendar` |
| [Card](./Card.md) | Card | Container | `@pharos-ds/core/Card` |
| [Carousel](./Carousel.md) | Misc | Container | `@pharos-ds/core/Carousel` |
| [Center](./Center.md) | Layout | Layout | `@pharos-ds/core/Center` |
| [ChatComposer](./ChatComposer.md) | Misc | — | `@pharos-ds/core/ChatComposer` |
| [ChatComposerDrawer](./ChatComposerDrawer.md) | Misc | — | `@pharos-ds/core/ChatComposerDrawer` |
| [ChatComposerInput](./ChatComposerInput.md) | Misc | — | `@pharos-ds/core/ChatComposerInput` |
| [ChatDictationButton](./ChatDictationButton.md) | Chat | Chat | `@pharos-ds/core/ChatDictationButton` |
| [ChatLayout](./ChatLayout.md) | Misc | — | `@pharos-ds/core/ChatLayout` |
| [ChatLayoutScrollButton](./ChatLayoutScrollButton.md) | Misc | — | `@pharos-ds/core/ChatLayoutScrollButton` |
| [ChatMessage](./ChatMessage.md) | Misc | — | `@pharos-ds/core/ChatMessage` |
| [ChatMessageBubble](./ChatMessageBubble.md) | Misc | — | `@pharos-ds/core/ChatMessageBubble` |
| [ChatMessageList](./ChatMessageList.md) | Misc | — | `@pharos-ds/core/ChatMessageList` |
| [ChatMessageMetadata](./ChatMessageMetadata.md) | Misc | — | `@pharos-ds/core/ChatMessageMetadata` |
| [ChatSendButton](./ChatSendButton.md) | Misc | — | `@pharos-ds/core/ChatSendButton` |
| [ChatSystemMessage](./ChatSystemMessage.md) | Misc | — | `@pharos-ds/core/ChatSystemMessage` |
| [ChatTokenizedText](./ChatTokenizedText.md) | Misc | — | `@pharos-ds/core/ChatTokenizedText` |
| [ChatToolCalls](./ChatToolCalls.md) | Chat | Chat | `@pharos-ds/core/ChatToolCalls` |
| [CheckboxInput](./CheckboxInput.md) | Checkbox | Data Input | `@pharos-ds/core/CheckboxInput` |
| [CheckboxList](./CheckboxList.md) | Checkbox | Data Input | `@pharos-ds/core/CheckboxList` |
| [CheckboxListItem](./CheckboxListItem.md) | Misc | — | `@pharos-ds/core/CheckboxListItem` |
| [Citation](./Citation.md) | Citation | Content | `@pharos-ds/core/Citation` |
| [ClickableCard](./ClickableCard.md) | Card | Container | `@pharos-ds/core/ClickableCard` |
| [CodeBlock](./CodeBlock.md) | Misc | Content | `@pharos-ds/core/CodeBlock` |
| [Collapsible](./Collapsible.md) | Collapsible | Container | `@pharos-ds/core/Collapsible` |
| [CollapsibleGroup](./CollapsibleGroup.md) | Misc | — | `@pharos-ds/core/CollapsibleGroup` |
| [CommandPalette](./CommandPalette.md) | CommandPalette | Overlay | `@pharos-ds/core/CommandPalette` |
| [CommandPaletteEmpty](./CommandPaletteEmpty.md) | Misc | — | `@pharos-ds/core/CommandPaletteEmpty` |
| [CommandPaletteFooter](./CommandPaletteFooter.md) | Misc | — | `@pharos-ds/core/CommandPaletteFooter` |
| [CommandPaletteGroup](./CommandPaletteGroup.md) | Misc | — | `@pharos-ds/core/CommandPaletteGroup` |
| [CommandPaletteInput](./CommandPaletteInput.md) | Misc | — | `@pharos-ds/core/CommandPaletteInput` |
| [CommandPaletteItem](./CommandPaletteItem.md) | Misc | — | `@pharos-ds/core/CommandPaletteItem` |
| [CommandPaletteList](./CommandPaletteList.md) | Misc | — | `@pharos-ds/core/CommandPaletteList` |
| [ContextMenu](./ContextMenu.md) | ContextMenu | Action | `@pharos-ds/core/ContextMenu` |
| [DateInput](./DateInput.md) | DateInput | Data Input | `@pharos-ds/core/DateInput` |
| [DateRangeInput](./DateRangeInput.md) | DateInput | Data Input | `@pharos-ds/core/DateRangeInput` |
| [DateTimeInput](./DateTimeInput.md) | DateInput | Data Input | `@pharos-ds/core/DateTimeInput` |
| [Dialog](./Dialog.md) | Dialog | Overlay | `@pharos-ds/core/Dialog` |
| [DialogHeader](./DialogHeader.md) | Misc | — | `@pharos-ds/core/DialogHeader` |
| [Divider](./Divider.md) | Misc | Layout | `@pharos-ds/core/Divider` |
| [DropdownMenu](./DropdownMenu.md) | DropdownMenu | Action | `@pharos-ds/core/DropdownMenu` |
| [DropdownMenuCheckboxItem](./DropdownMenuCheckboxItem.md) | Misc | — | `@pharos-ds/core/DropdownMenuCheckboxItem` |
| [DropdownMenuItem](./DropdownMenuItem.md) | Misc | — | `@pharos-ds/core/DropdownMenuItem` |
| [DropdownMenuRadioGroup](./DropdownMenuRadioGroup.md) | Misc | — | `@pharos-ds/core/DropdownMenuRadioGroup` |
| [DropdownMenuRadioItem](./DropdownMenuRadioItem.md) | Misc | — | `@pharos-ds/core/DropdownMenuRadioItem` |
| [DropdownMenuSubMenu](./DropdownMenuSubMenu.md) | Misc | — | `@pharos-ds/core/DropdownMenuSubMenu` |
| [EmptyState](./EmptyState.md) | Misc | Content | `@pharos-ds/core/EmptyState` |
| [Field](./Field.md) | Field | Data Input | `@pharos-ds/core/Field` |
| [FieldLabel](./FieldLabel.md) | Misc | — | `@pharos-ds/core/FieldLabel` |
| [FieldStatus](./FieldStatus.md) | Field | Data Input | `@pharos-ds/core/FieldStatus` |
| [FileInput](./FileInput.md) | Misc | Data Input | `@pharos-ds/core/FileInput` |
| [FormLayout](./FormLayout.md) | Layout | Layout | `@pharos-ds/core/FormLayout` |
| [Grid](./Grid.md) | Layout | Layout | `@pharos-ds/core/Grid` |
| [GridSpan](./GridSpan.md) | Misc | — | `@pharos-ds/core/GridSpan` |
| [HoverCard](./HoverCard.md) | HoverCard | Overlay | `@pharos-ds/core/HoverCard` |
| [Icon](./Icon.md) | Misc | Content | `@pharos-ds/core/Icon` |
| [IconButton](./IconButton.md) | Button | Action | `@pharos-ds/core/IconButton` |
| [InputGroup](./InputGroup.md) | Field | Data Input | `@pharos-ds/core/InputGroup` |
| [InputGroupText](./InputGroupText.md) | Misc | — | `@pharos-ds/core/InputGroupText` |
| [InternationalizationProvider](./InternationalizationProvider.md) | Utilities | Utility | `@pharos-ds/core/InternationalizationProvider` |
| [Item](./Item.md) | Item | Table & List | `@pharos-ds/core/Item` |
| [Kbd](./Kbd.md) | Misc | Content | `@pharos-ds/core/Kbd` |
| [Layout](./Layout.md) | Layout | Layout | `@pharos-ds/core/Layout` |
| [LayoutContent](./LayoutContent.md) | Misc | — | `@pharos-ds/core/LayoutContent` |
| [LayoutFooter](./LayoutFooter.md) | Misc | — | `@pharos-ds/core/LayoutFooter` |
| [LayoutHeader](./LayoutHeader.md) | Misc | — | `@pharos-ds/core/LayoutHeader` |
| [LayoutPanel](./LayoutPanel.md) | Misc | — | `@pharos-ds/core/LayoutPanel` |
| [Lightbox](./Lightbox.md) | Misc | Overlay | `@pharos-ds/core/Lightbox` |
| [Link](./Link.md) | Misc | Action | `@pharos-ds/core/Link` |
| [LinkProvider](./LinkProvider.md) | Utilities | Utility | `@pharos-ds/core/LinkProvider` |
| [List](./List.md) | List | Table & List | `@pharos-ds/core/List` |
| [ListItem](./ListItem.md) | Misc | — | `@pharos-ds/core/ListItem` |
| [Markdown](./Markdown.md) | Misc | Content | `@pharos-ds/core/Markdown` |
| [MediaTheme](./MediaTheme.md) | Utilities | Utility | `@pharos-ds/core/MediaTheme` |
| [MetadataList](./MetadataList.md) | MetadataList | Table & List | `@pharos-ds/core/MetadataList` |
| [MetadataListItem](./MetadataListItem.md) | Misc | — | `@pharos-ds/core/MetadataListItem` |
| [MobileNav](./MobileNav.md) | Navigation | Navigation | `@pharos-ds/core/MobileNav` |
| [MoreMenu](./MoreMenu.md) | Misc | Action | `@pharos-ds/core/MoreMenu` |
| [MultiSelector](./MultiSelector.md) | Selector | Data Input | `@pharos-ds/core/MultiSelector` |
| [NavIcon](./NavIcon.md) | Navigation | Navigation | `@pharos-ds/core/NavIcon` |
| [NumberInput](./NumberInput.md) | Misc | Data Input | `@pharos-ds/core/NumberInput` |
| [Outline](./Outline.md) | Outline | Navigation | `@pharos-ds/core/Outline` |
| [OverflowList](./OverflowList.md) | Misc | Table & List | `@pharos-ds/core/OverflowList` |
| [Overlay](./Overlay.md) | Overlay | Overlay | `@pharos-ds/core/Overlay` |
| [Pagination](./Pagination.md) | Misc | Navigation | `@pharos-ds/core/Pagination` |
| [Popover](./Popover.md) | Popover | Overlay | `@pharos-ds/core/Popover` |
| [PowerSearch](./PowerSearch.md) | Misc | Data Input | `@pharos-ds/core/PowerSearch` |
| [ProgressBar](./ProgressBar.md) | Misc | Feedback & Status | `@pharos-ds/core/ProgressBar` |
| [RadioList](./RadioList.md) | Radio | Data Input | `@pharos-ds/core/RadioList` |
| [RadioListItem](./RadioListItem.md) | Misc | — | `@pharos-ds/core/RadioListItem` |
| [Section](./Section.md) | Layout | Layout | `@pharos-ds/core/Section` |
| [SegmentedControl](./SegmentedControl.md) | SegmentedControl | Action | `@pharos-ds/core/SegmentedControl` |
| [SegmentedControlItem](./SegmentedControlItem.md) | Misc | — | `@pharos-ds/core/SegmentedControlItem` |
| [SelectableCard](./SelectableCard.md) | Card | Container | `@pharos-ds/core/SelectableCard` |
| [Selector](./Selector.md) | Selector | Data Input | `@pharos-ds/core/Selector` |
| [SelectorOption](./SelectorOption.md) | Misc | — | `@pharos-ds/core/SelectorOption` |
| [SideNav](./SideNav.md) | Navigation | Navigation | `@pharos-ds/core/SideNav` |
| [SideNavCollapseButton](./SideNavCollapseButton.md) | Misc | — | `@pharos-ds/core/SideNavCollapseButton` |
| [SideNavHeading](./SideNavHeading.md) | Misc | — | `@pharos-ds/core/SideNavHeading` |
| [SideNavItem](./SideNavItem.md) | Misc | — | `@pharos-ds/core/SideNavItem` |
| [SideNavSection](./SideNavSection.md) | Misc | — | `@pharos-ds/core/SideNavSection` |
| [Skeleton](./Skeleton.md) | Misc | Feedback & Status | `@pharos-ds/core/Skeleton` |
| [Slider](./Slider.md) | Misc | Data Input | `@pharos-ds/core/Slider` |
| [Spinner](./Spinner.md) | Misc | Feedback & Status | `@pharos-ds/core/Spinner` |
| [Stack](./Stack.md) | Layout | Layout | `@pharos-ds/core/Stack` |
| [StatusDot](./StatusDot.md) | Misc | Feedback & Status | `@pharos-ds/core/StatusDot` |
| [Switch](./Switch.md) | Misc | Data Input | `@pharos-ds/core/Switch` |
| [Tab](./Tab.md) | Misc | — | `@pharos-ds/core/Tab` |
| [Table](./Table.md) | Table | Table & List | `@pharos-ds/core/Table` |
| [TableCell](./TableCell.md) | Misc | — | `@pharos-ds/core/TableCell` |
| [TableHeaderCell](./TableHeaderCell.md) | Misc | — | `@pharos-ds/core/TableHeaderCell` |
| [TableRow](./TableRow.md) | Misc | — | `@pharos-ds/core/TableRow` |
| [TabList](./TabList.md) | Tabs | Navigation | `@pharos-ds/core/TabList` |
| [TabMenu](./TabMenu.md) | Misc | — | `@pharos-ds/core/TabMenu` |
| [Text](./Text.md) | Misc | Content | `@pharos-ds/core/Text` |
| [TextArea](./TextArea.md) | Misc | Data Input | `@pharos-ds/core/TextArea` |
| [TextInput](./TextInput.md) | Misc | Data Input | `@pharos-ds/core/TextInput` |
| [Theme](./Theme.md) | Utilities | Utility | `@pharos-ds/core/Theme` |
| [Thumbnail](./Thumbnail.md) | Misc | Content | `@pharos-ds/core/Thumbnail` |
| [TimeInput](./TimeInput.md) | Misc | Data Input | `@pharos-ds/core/TimeInput` |
| [Timestamp](./Timestamp.md) | Misc | Content | `@pharos-ds/core/Timestamp` |
| [Toast](./Toast.md) | Toast | Overlay | `@pharos-ds/core/Toast` |
| [ToggleButton](./ToggleButton.md) | Button | Action | `@pharos-ds/core/ToggleButton` |
| [ToggleButtonGroup](./ToggleButtonGroup.md) | Misc | — | `@pharos-ds/core/ToggleButtonGroup` |
| [Token](./Token.md) | Misc | Content | `@pharos-ds/core/Token` |
| [Tokenizer](./Tokenizer.md) | Misc | Data Input | `@pharos-ds/core/Tokenizer` |
| [Toolbar](./Toolbar.md) | Misc | Action | `@pharos-ds/core/Toolbar` |
| [Tooltip](./Tooltip.md) | Tooltip | Overlay | `@pharos-ds/core/Tooltip` |
| [TopNav](./TopNav.md) | Navigation | Navigation | `@pharos-ds/core/TopNav` |
| [TopNavHeading](./TopNavHeading.md) | Misc | — | `@pharos-ds/core/TopNavHeading` |
| [TopNavItem](./TopNavItem.md) | Misc | — | `@pharos-ds/core/TopNavItem` |
| [TopNavMegaMenu](./TopNavMegaMenu.md) | Misc | — | `@pharos-ds/core/TopNavMegaMenu` |
| [TopNavMegaMenuFeaturedCard](./TopNavMegaMenuFeaturedCard.md) | Misc | — | `@pharos-ds/core/TopNavMegaMenuFeaturedCard` |
| [TopNavMegaMenuItem](./TopNavMegaMenuItem.md) | Misc | — | `@pharos-ds/core/TopNavMegaMenuItem` |
| [TopNavMenu](./TopNavMenu.md) | Misc | — | `@pharos-ds/core/TopNavMenu` |
| [TreeList](./TreeList.md) | TreeList | Table & List | `@pharos-ds/core/TreeList` |
| [Typeahead](./Typeahead.md) | Typeahead | Data Input | `@pharos-ds/core/Typeahead` |
| [TypeaheadItem](./TypeaheadItem.md) | Misc | — | `@pharos-ds/core/TypeaheadItem` |
| [VisuallyHidden](./VisuallyHidden.md) | Misc | Utility | `@pharos-ds/core/VisuallyHidden` |
