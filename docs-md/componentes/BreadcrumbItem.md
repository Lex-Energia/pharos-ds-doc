---
title: "BreadcrumbItem"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/BreadcrumbItem"
source: /componentes/BreadcrumbItem
---

# BreadcrumbItem

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Item individual de breadcrumb que renderiza como link quando href é fornecido, ou como texto simples para a página atual.

## Importação

```tsx
import {BreadcrumbItem} from '@pharos-ds/core/BreadcrumbItem';
```

## Exemplos

### Área interativa

```tsx
import {BreadcrumbItem, Breadcrumbs} from '@pharos-ds/core/Breadcrumbs';

<BreadcrumbItem
  children="Componentes"
  isCurrent={false}
 />
```

Valores explorados na demo interativa:

- `isCurrent`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | Conteúdo do label do item de breadcrumb. |
| `href` | `string` | não | — | URL para a qual o breadcrumb aponta; omita para itens não navegáveis. |
| `onClick` | `(e: MouseEvent) => void` | não | — | Handler de clique do item de breadcrumb. |
| `isCurrent` | `boolean` | não | `false` | Marca este item como a página atual, aplicando aria-current="page". |
| `startIcon` | `ReactNode` | não | — | Ícone renderizado antes do label do item. |
| `menu` | `DropdownMenuOption[] \| ReactNode` | não | — | Menu aberto quando o item é ativado, usando a mesma API de item de DropdownMenu/MoreMenu/ContextMenu (um array DropdownMenuOption[] ou filhos DropdownMenuItem compostos). Renderiza um trigger de menu estilizado como link com chevron e aria-haspopup="menu". Tem precedência sobre href/onClick. |
| `menuSize` | `'sm' \| 'md' \| 'lg'` | não | — | Size passado aos itens do menu. O padrão vem da variante do breadcrumb ('supporting' → 'sm', caso contrário 'md'). |
| `as` | `LinkComponentType` | não | — | Componente de link personalizado para renderizar em vez de <a>. Substitui o padrão do LinkProvider no nível do provider. Aplica-se apenas a itens que não são a página atual. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/BreadcrumbItem` · Docs atualizadas: `npx @pharos-ds/cli component BreadcrumbItem`
