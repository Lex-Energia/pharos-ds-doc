---
title: "ListItem"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/ListItem"
source: /componentes/ListItem
---

# ListItem

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Item de lista com label, description, slots start/end content e padrões interativos.

## Importação

```tsx
import {ListItem} from '@pharos-ds/core/ListItem';
```

## Exemplos

### Área interativa

```tsx
import {ListItem} from '@pharos-ds/core/List';

<ListItem
  label="Item da lista"
  description="Descrição do item"
  isSelected={false}
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `isSelected`: boolean (padrão `false`)
- `isDisabled`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Texto principal. |
| `description` | `ReactNode` | não | — | Conteúdo secundário abaixo do label. Uma string simples recebe truncamento de linha única automaticamente; um ReactNode permite que componentes filhos controlem sua própria quebra e line-clamp. |
| `startContent` | `ReactNode` | não | — | Conteúdo renderizado antes da área do label (ex.: ícone, avatar). |
| `endContent` | `ReactNode` | não | — | Conteúdo renderizado após a área do label (ex.: badge, chevron). |
| `onClick` | `(e: MouseEvent) => void` | não | — | Handler de clique; habilita o padrão de botão invisível. |
| `href` | `string` | não | — | URL do link; habilita o padrão de âncora invisível. |
| `target` | `string` | não | — | Atributo target do link, aplicável apenas quando href é fornecido. target="_blank" adiciona automaticamente noopener noreferrer. |
| `rel` | `string` | não | — | Tokens de relação do link. noopener noreferrer são mesclados automaticamente para target="_blank". |
| `isDisabled` | `boolean` | não | `false` | Estado desabilitado; define aria-disabled no item. |
| `isSelected` | `boolean` | não | `false` | Estado selecionado; define aria-selected no item. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ListItem` · Docs atualizadas: `npx @pharos-ds/cli component ListItem`
