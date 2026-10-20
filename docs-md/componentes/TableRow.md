---
title: "TableRow"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/TableRow"
source: /componentes/TableRow
---

# TableRow

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Wrapper <tr> que lê TableContext para aplicar estilos striped, hover e divider quando usado dentro de Table.

## Importação

```tsx
import {TableRow} from '@pharos-ds/core/TableRow';
```

## Exemplos

### Área interativa

```tsx
import {TableRow} from '@pharos-ds/core/TableRow';

<TableRow
  isStriped={false}
  hasHover={false}
 />
```

Valores explorados na demo interativa:

- `isStriped`: boolean (padrão `false`)
- `hasHover`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | Elementos de célula da linha. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/TableRow` · Docs atualizadas: `npx @pharos-ds/cli component TableRow`
