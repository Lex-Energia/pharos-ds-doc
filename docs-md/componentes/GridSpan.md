---
title: "GridSpan"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/GridSpan"
source: /componentes/GridSpan
---

# GridSpan

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Item de grid que ocupa múltiplas colunas ou linhas.

## Importação

```tsx
import {GridSpan} from '@pharos-ds/core/GridSpan';
```

## Exemplos

### Área interativa

```tsx
import {GridSpan} from '@pharos-ds/core/Grid';

<GridSpan
  columns="2"
 />
```

Valores explorados na demo interativa:

- `columns`: `1` · `2` · `full` (padrão `2`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `columns` | `number \| 'full'` | não | — | Colunas a ocupar; use `'full'` para ocupar a linha inteira. |
| `rows` | `number` | não | — | Linhas a ocupar. |
| `children` | `ReactNode` | não | — | Conteúdo. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/GridSpan` · Docs atualizadas: `npx @pharos-ds/cli component GridSpan`
