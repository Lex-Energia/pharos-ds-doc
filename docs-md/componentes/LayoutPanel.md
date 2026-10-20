---
title: "LayoutPanel"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/LayoutPanel"
source: /componentes/LayoutPanel
---

# LayoutPanel

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Sidebar para navegação, configurações ou painéis de inspector.

## Importação

```tsx
import {LayoutPanel} from '@pharos-ds/core/LayoutPanel';
```

## Exemplos

### Área interativa

```tsx
import {LayoutPanel} from '@pharos-ds/core/Layout';

<LayoutPanel
  hasDivider={false}
 />
```

Valores explorados na demo interativa:

- `hasDivider`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | não | — | Conteúdo do painel. |
| `hasDivider` | `boolean` | não | `false` | Borda na borda apropriada. |
| `padding` | `0 \| 0.5 \| 1 \| 1.5 \| 2 \| 3 \| 4 \| 5 \| 6 \| 8 \| 10` | não | — | Padding interno usando a escala de spacing. Sobrescreve o padding padrão do container de layout. |
| `isScrollable` | `boolean` | não | `true` | Ativa overflow rolável. |
| `label` | `string` | não | — | Rótulo acessível para o elemento landmark. |
| `role` | `AriaRole` | não | — | Papel ARIA landmark. |
| `width` | `number \| string` | não | — | Largura do painel. Números são tratados como pixels; strings são usadas como estão. Ignorado quando resizable é fornecido; o hook controla a largura. |
| `resizable` | `ResizableProps` | não | — | Props de resize de useResizable(). Quando fornecido, o hook controla a largura do painel e um ResizeHandle deve ser posicionado adjacente ao painel. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/LayoutPanel` · Docs atualizadas: `npx @pharos-ds/cli component LayoutPanel`
