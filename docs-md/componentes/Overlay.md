---
title: "Overlay"
group: "Overlay"
category: "Overlay"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Overlay"
source: /componentes/Overlay
---

# Overlay

**Grupo:** Overlay · **Categoria:** Overlay · **Pacote:** `@pharos-ds/core`

Overlay sobrepõe ações ou conteúdo de apoio sobre mídia, cards, vídeo ou outras superfícies delimitadas, com scrim opcional e comportamento de revelação.

## Importação

```tsx
import {Overlay} from '@pharos-ds/core/Overlay';
```

## Exemplos

### Área interativa

```tsx
import {Overlay} from '@pharos-ds/core/Overlay';

<Overlay
  showOn="hover"
  scrim="dark"
  position="fill"
 />
```

Valores explorados na demo interativa:

- `showOn`: `hover` · `always` · `focus` (padrão `hover`)
- `scrim`: `dark` · `light` (padrão `dark`)
- `position`: `fill` · `bottom` · `top` (padrão `fill`)

## Boas práticas

- **Faça:** Use overlays para ações curtas e contextuais ou rótulos que pertencem diretamente à mídia ou superfície subjacente.
- **Faça:** Mantenha o conteúdo do overlay compacto para permanecer legível sobre o scrim e não obscurecer informações visuais importantes.
- **Evite:** Não use Overlay para conteúdo flutuante ancorado fora da superfície. Use Popover, Tooltip ou Dialog para esses padrões.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `content` | `ReactNode` | sim | — | Conteúdo renderizado dentro do scrim do overlay. |
| `children` | `ReactNode` | não | — | Conteúdo base como imagem, vídeo, card ou superfície de mídia sobre a qual o overlay fica. |
| `showOn` | `'hover' \| 'always' \| 'focus' \| 'hover-or-focus'` | não | `'always'` | Gatilho de visibilidade. O modo hover também revela no focus para acessibilidade por teclado; hover-or-focus é alias de hover. |
| `isOpen` | `boolean` | não | — | Substituição de visibilidade controlada. Quando definido, tem precedência sobre showOn e o comportamento de toggle por toque. |
| `scrim` | `'dark' \| 'light' \| false` | não | `'dark'` | Modo de fundo do scrim. Defina como false para renderizar conteúdo do overlay sem fundo de scrim. |
| `position` | `'fill' \| 'bottom' \| 'top'` | não | `'fill'` | Onde o scrim aparece dentro da superfície base. |
| `align` | `'start' \| 'center' \| 'end'` | não | `'end'` | Alinhamento do conteúdo do overlay dentro do scrim. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |
| `className` | `string` | não | — | Nome(s) de classe CSS anexados ao elemento raiz. Prefira xstyle para estilização quando possível. |
| `style` | `React.CSSProperties` | não | — | Estilos inline aplicados ao elemento raiz. Prefira xstyle para estilização do design system. |
| `ref` | `Ref<HTMLDivElement>` | não | — | Ref encaminhada ao elemento raiz do overlay. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Overlay` · Docs atualizadas: `npx @pharos-ds/cli component Overlay`
