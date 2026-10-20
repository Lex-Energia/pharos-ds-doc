---
title: "SideNavItem"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/SideNavItem"
source: /componentes/SideNavItem
---

# SideNavItem

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Item de navegação com ícone, estado selecionado, end content opcional e suporte a aninhamento via children.

## Importação

```tsx
import {SideNavItem} from '@pharos-ds/core/SideNavItem';
```

## Exemplos

### Área interativa

```tsx
import {SideNav, SideNavItem} from '@pharos-ds/core/SideNav';

<SideNav
  isSelected
  isDisabled={false}
  hasEndContent
 />
```

Valores explorados na demo interativa:

- `isSelected`: boolean (padrão `true`)
- `isDisabled`: boolean (padrão `false`)
- `hasEndContent`: boolean (padrão `true`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Rótulo do item. |
| `as` | `LinkComponentType` | não | — | Componente de link personalizado. |
| `icon` | `IconType` | não | — | Ícone exibido no variant outline (não selecionado). Veja `pharos docs icons` para nomes semânticos válidos. |
| `selectedIcon` | `IconType` | não | — | Ícone exibido quando o item está selecionado (variant filled). Veja `pharos docs icons` para nomes semânticos válidos. |
| `isSelected` | `boolean` | não | `false` | Marca este item como a página atual. |
| `isDisabled` | `boolean` | não | `false` | Estado desabilitado. |
| `href` | `string` | não | — | URL de navegação. |
| `onClick` | `(e: MouseEvent) => void` | não | — | Handler de clique. |
| `endContent` | `ReactNode` | não | — | Conteúdo do lado direito como badges ou contagens. |
| `children` | `ReactNode` | não | — | Subitens para aninhamento. |
| `collapsible` | `boolean \| { defaultIsCollapsed?: boolean, isCollapsed?: boolean, onCollapsedChange?: (isCollapsed: boolean) => void }` | não | `false` | Habilita comportamento de colapsar para itens com children. Passe true para modo não controlado (começa expandido) ou um objeto para modo controlado. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/SideNavItem` · Docs atualizadas: `npx @pharos-ds/cli component SideNavItem`
