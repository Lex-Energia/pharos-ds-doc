---
title: "SideNav"
group: "Navigation"
category: "Navigation"
package: "@pharos-ds/core"
import: "@pharos-ds/core/SideNav"
source: /componentes/SideNav
---

# SideNav

**Grupo:** Navigation · **Categoria:** Navigation · **Pacote:** `@pharos-ds/core`

Um componente de navegação sidebar para organizar páginas de aplicação com sections, itens aninhados e ícones. Use SideNav como navegação primária quando um app tiver 5 ou mais destinos ou exigir agrupamento hierárquico.

## Importação

```tsx
import {SideNav} from '@pharos-ds/core/SideNav';
```

## Exemplos

### Área interativa

```tsx
import {SideNav, SideNavSection, SideNavItem} from '@pharos-ds/core/SideNav';

<SideNav
  collapsible={false}
 />
```

Valores explorados na demo interativa:

- `collapsible`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use sections para agrupar itens de navegação relacionados e ajudar usuários a encontrar seu destino.
- **Faça:** Emparelhe variantes de ícone outline e filled para que o estado selecionado seja visualmente distinto.
- **Evite:** Inclua um SideNavHeading quando um TopNav já fornece identidade do app; isso duplica branding.
- **Evite:** Use para filtrar conteúdo; use tabs ou filter buttons em vez disso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `header` | `ReactNode` | não | — | Área de header (tipicamente SideNavHeading). Sticky. |
| `topContent` | `ReactNode` | não | — | Conteúdo abaixo do header, ex.: um botão de criar. |
| `children` | `ReactNode` | não | — | Sections e itens de navegação. Com scroll. |
| `footer` | `ReactNode` | não | — | Área de footer acima da icon bar. |
| `footerIcons` | `ReactNode` | não | — | Icon bar do footer. |
| `collapsible` | `boolean \| { defaultIsCollapsed?: boolean; isCollapsed?: boolean; onCollapsedChange?: (isCollapsed: boolean) => void; hasButton?: boolean; buttonLabel?: string }` | não | `false` | Habilita comportamento de collapse. true para não controlado com button toggle padrão, ou um objeto para modo controlado e config avançada (defaultIsCollapsed, isCollapsed + onCollapsedChange, hasButton, buttonLabel). |
| `resizable` | `boolean \| { defaultWidth?: number; minWidth?: number; maxWidth?: number; autoSaveId?: string; onWidthChange?: (width: number) => void }` | não | `false` | Habilita um resize handle na borda inline-end. true para padrões (260px inicial, intervalo 180-480px), ou um objeto ResizableConfig (defaultWidth, minWidth, maxWidth, autoSaveId para persistência em localStorage, onWidthChange). O handle fica oculto enquanto colapsado. |
| `handleRef` | `Ref<SideNavImperativeCollapseHandle>` | não | — | Handle imperativo de collapse para instâncias SideNavCollapseButton renderizadas fora deste SideNav. Separado de `ref`, que continua expondo o HTMLElement raiz. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(): não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/SideNav` · Docs atualizadas: `npx @pharos-ds/cli component SideNav`
