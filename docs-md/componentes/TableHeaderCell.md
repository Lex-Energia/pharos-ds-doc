---
title: "TableHeaderCell"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/TableHeaderCell"
source: /componentes/TableHeaderCell
---

# TableHeaderCell

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Wrapper <th> que lê TableContext para aplicar padding de density, peso semibold, cor de texto secondary e bordas divider quando usado dentro de Table.

## Importação

```tsx
import {TableHeaderCell} from '@pharos-ds/core/TableHeaderCell';
```

## Exemplos

### Área interativa

```tsx
import {TableHeaderCell} from '@pharos-ds/core/TableHeaderCell';

<TableHeaderCell
  density="balanced"
 />
```

Valores explorados na demo interativa:

- `density`: `compact` · `balanced` · `spacious` (padrão `balanced`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | não | — | Conteúdo da célula de header. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/TableHeaderCell` · Docs atualizadas: `npx @pharos-ds/cli component TableHeaderCell`
