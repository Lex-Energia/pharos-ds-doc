---
title: "TableCell"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/TableCell"
source: /componentes/TableCell
---

# TableCell

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Wrapper de <td> que lê TableContext para aplicar padding de density, font size e bordas de divider quando usado dentro de Table.

## Importação

```tsx
import {TableCell} from '@pharos-ds/core/TableCell';
```

## Exemplos

### Área interativa

```tsx
import {TableCell} from '@pharos-ds/core/TableCell';

<TableCell
  density="balanced"
  isStriped={false}
  hasHover={false}
 />
```

Valores explorados na demo interativa:

- `density`: `compact` · `balanced` · `spacious` (padrão `balanced`)
- `isStriped`: boolean (padrão `false`)
- `hasHover`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | não | — | Conteúdo da célula. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/TableCell` · Docs atualizadas: `npx @pharos-ds/cli component TableCell`
