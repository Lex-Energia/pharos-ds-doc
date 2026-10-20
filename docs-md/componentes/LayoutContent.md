---
title: "LayoutContent"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/LayoutContent"
source: /componentes/LayoutContent
---

# LayoutContent

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Área de conteúdo principal rolável.

## Importação

```tsx
import {LayoutContent} from '@pharos-ds/core/LayoutContent';
```

## Exemplos

### Área interativa

```tsx
import {LayoutContent} from '@pharos-ds/core/Layout';

<LayoutContent
  isScrollable
 />
```

Valores explorados na demo interativa:

- `isScrollable`: boolean (padrão `true`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | não | — | Conteúdo. |
| `padding` | `0 \| 0.5 \| 1 \| 1.5 \| 2 \| 3 \| 4 \| 5 \| 6 \| 8 \| 10` | não | — | Padding interno usando a escala de espaçamento. Substitui o padding padrão do contêiner de layout. |
| `isScrollable` | `boolean` | não | `true` | Habilita overflow rolável. |
| `label` | `string` | não | — | Rótulo acessível para o elemento landmark. |
| `role` | `AriaRole` | não | — | Role de landmark ARIA. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/LayoutContent` · Docs atualizadas: `npx @pharos-ds/cli component LayoutContent`
