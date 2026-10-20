---
title: "ClickableCard"
group: "Card"
category: "Container"
package: "@pharos-ds/core"
import: "@pharos-ds/core/ClickableCard"
source: /componentes/ClickableCard
---

# ClickableCard

**Grupo:** Card · **Categoria:** Container · **Pacote:** `@pharos-ds/core`

Card interativo para alvos de navegação ou ação. Elementos interativos aninhados funcionam de forma independente.

## Importação

```tsx
import {ClickableCard} from '@pharos-ds/core/ClickableCard';
```

## Exemplos

### Área interativa

```tsx
import {ClickableCard} from '@pharos-ds/core/ClickableCard';

<ClickableCard
  label="Abrir configurações do projeto"
  variant="default"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `variant`: `default` · `muted` (padrão `default`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use para cards que navegam para uma página de detalhes ou disparam uma única ação.
- **Faça:** Aninhe botões ou links livremente dentro; eles tratam seus próprios eventos.
- **Evite:** Use para alternar seleção; use SelectableCard para isso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Rótulo de acessibilidade. |
| `onClick` | `(event: MouseEvent) => void` | não | — | Handler de clique: dispara apenas na superfície do card. |
| `href` | `string` | não | — | URL de navegação. |
| `target` | `string` | não | `'_self'` | Target do link. |
| `isDisabled` | `boolean` | não | `false` | Desabilita o card. |
| `children` | `ReactNode` | não | — | Conteúdo do card. |
| `padding` | `0 \| 0.5 \| 1 \| 1.5 \| 2 \| 3 \| 4 \| 5 \| 6 \| 8 \| 10` | não | `4` | Padding interno. |
| `variant` | `'default' \| 'transparent' \| 'muted' \| 'blue' \| 'cyan' \| 'gray' \| 'green' \| 'orange' \| 'pink' \| 'purple' \| 'red' \| 'teal' \| 'yellow'` | não | `'default'` | Variant de cor de fundo. |
| `elevation` | `'none' \| 'low' \| 'med' \| 'high'` | não | `'none'` | Profundidade de sombra em repouso. Frequentemente elevada para sinalizar que o card inteiro é clicável. |
| `width` | `SizeValue` | não | — | Largura do card. |
| `height` | `SizeValue` | não | — | Altura do card. |
| `maxWidth` | `SizeValue` | não | — | Largura máxima do card. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ClickableCard` · Docs atualizadas: `npx @pharos-ds/cli component ClickableCard`
