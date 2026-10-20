---
title: "SelectableCard"
group: "Card"
category: "Container"
package: "@pharos-ds/core"
import: "@pharos-ds/core/SelectableCard"
source: /componentes/SelectableCard
---

# SelectableCard

**Grupo:** Card · **Categoria:** Container · **Pacote:** `@pharos-ds/core`

Um card que alterna entre estados selected e unselected com uma borda accent. Para navegação use ClickableCard.

## Importação

```tsx
import {SelectableCard} from '@pharos-ds/core/SelectableCard';
```

## Exemplos

### Área interativa

```tsx
import {SelectableCard} from '@pharos-ds/core/SelectableCard';

<SelectableCard
  variant="default"
  elevation="none"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `variant`: `default` · `muted` (padrão `default`)
- `elevation`: `none` · `low` · `med` · `high` (padrão `none`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use para seletores de plano, filter chips ou grids de opções.
- **Faça:** Para single-select rastreie um ID; para multi-select use um Set.
- **Evite:** Use para navegação; use ClickableCard para isso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Label de acessibilidade. |
| `isSelected` | `boolean` | sim | — | Estado de seleção controlado. |
| `onChange` | `(isSelected: boolean) => void` | sim | — | Chamado quando alternado. |
| `isDisabled` | `boolean` | não | `false` | Desabilita o card. |
| `children` | `ReactNode` | não | — | Conteúdo do card. |
| `padding` | `0 \| 0.5 \| 1 \| 1.5 \| 2 \| 3 \| 4 \| 5 \| 6 \| 8 \| 10` | não | `4` | Padding interno. |
| `variant` | `'default' \| 'transparent' \| 'muted' \| 'blue' \| 'cyan' \| 'gray' \| 'green' \| 'orange' \| 'pink' \| 'purple' \| 'red' \| 'teal' \| 'yellow'` | não | `'default'` | Variante de cor de fundo. |
| `elevation` | `'none' \| 'low' \| 'med' \| 'high'` | não | `'none'` | Profundidade da sombra em repouso. O anel de seleção compõe por cima, então um card selected mantém sua sombra. |
| `width` | `SizeValue` | não | — | Largura do card. |
| `height` | `SizeValue` | não | — | Altura do card. |
| `maxWidth` | `SizeValue` | não | — | Largura máxima do card. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/SelectableCard` · Docs atualizadas: `npx @pharos-ds/cli component SelectableCard`
