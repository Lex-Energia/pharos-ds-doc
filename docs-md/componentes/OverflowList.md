---
title: "OverflowList"
group: "Misc"
category: "Table & List"
package: "@pharos-ds/core"
import: "@pharos-ds/core/OverflowList"
source: /componentes/OverflowList
---

# OverflowList

**Grupo:** Misc · **Categoria:** Table & List · **Pacote:** `@pharos-ds/core`

Lista horizontal que oculta automaticamente itens quando excedem a largura disponível. Use OverflowList para breadcrumbs, toolbars, listas de tags ou qualquer linha que precise recolher graciosamente em tamanhos menores.

## Importação

```tsx
import {OverflowList} from '@pharos-ds/core/OverflowList';
```

## Exemplos

### Área interativa

```tsx
import {OverflowList} from '@pharos-ds/core/OverflowList';

<OverflowList
  gap="2"
  collapseFrom="end"
  maxVisibleItems="none"
 />
```

Valores explorados na demo interativa:

- `gap`: `1` · `2` · `3` (padrão `2`)
- `collapseFrom`: `start` · `end` (padrão `end`)
- `maxVisibleItems`: `none` · `2` · `3` (padrão `none`)

## Boas práticas

- **Faça:** Forneça um overflowRenderer significativo: badge "+N more", dropdown ou indicador de contagem.
- **Faça:** Defina minVisibleItems para manter itens-chave visíveis, e maxVisibleItems para limitar a linha a uma contagem fixa independentemente da largura disponível.
- **Faça:** Use maxRows para permitir que itens quebrem em um número limitado de linhas (ex.: tag cloud de duas linhas) antes de recolher o restante no indicador.
- **Evite:** Use OverflowList para uma pilha vertical; wrap multi-linha horizontal é suportado via maxRows, mas itens ainda fluem da esquerda para a direita, não de cima para baixo.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | Itens a renderizar. Cada filho deve ser um único elemento. |
| `overflowRenderer` | `(overflowItems: OverflowItem[]) => ReactNode` | não | — | Função de renderização para o indicador de overflow. Recebe a lista de itens ocultos (cada um com child e index). Chamada apenas quando itens estão transbordando. |
| `gap` | `0 \| 0.5 \| 1 \| 1.5 \| 2 \| 3 \| 4 \| 5 \| 6 \| 8 \| 10` | não | `2` | Espaçamento entre itens como step de token de spacing (0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10). |
| `minVisibleItems` | `number` | não | `0` | Número mínimo de itens a sempre mostrar, mesmo quando transbordando. |
| `maxVisibleItems` | `number` | não | `undefined (no cap)` | Número máximo de itens a mostrar, mesmo quando todos cabem. Parceiro de teto de minVisibleItems; itens extras recolhem no indicador de overflow. Se menor que minVisibleItems, o piso vence. |
| `maxRows` | `number` | não | `undefined (single line)` | Quebra itens em até este número de linhas antes de recolher o restante no indicador de overflow. Um número, não um boolean. Deixe undefined (ou defina 1) para comportamento de linha única. Assume altura de linha uniforme. |
| `collapseFrom` | `'start' \| 'end'` | não | `'end'` | De qual extremidade recolher itens quando ocorre overflow. |
| `behavior` | `'observeSelf' \| 'observeParent'` | não | `'observeSelf'` | Controla qual elemento é medido para largura disponível. 'observeSelf' usa a própria largura do container. 'observeParent' observa o elemento pai, útil quando a lista deve permanecer dimensionada ao conteúdo enquanto ainda detecta espaço disponível. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/OverflowList` · Docs atualizadas: `npx @pharos-ds/cli component OverflowList`
