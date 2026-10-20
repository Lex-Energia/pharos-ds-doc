---
title: "SegmentedControlItem"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/SegmentedControlItem"
source: /componentes/SegmentedControlItem
---

# SegmentedControlItem

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Item de segmento individual renderizado como radio button dentro do segmented control.

## Importação

```tsx
import {SegmentedControlItem} from '@pharos-ds/core/SegmentedControlItem';
```

## Exemplos

### Área interativa

```tsx
import {SegmentedControlItem} from '@pharos-ds/core/SegmentedControl';

<SegmentedControlItem
  isLabelHidden={false}
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `isLabelHidden`: boolean (padrão `false`)
- `isDisabled`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `value` | `string` | sim | — | Value único para este segmento, correspondido contra o value pai. |
| `label` | `string` | sim | — | Label acessível para este segmento. Renderizado como texto visível a menos que isLabelHidden seja true. |
| `isLabelHidden` | `boolean` | não | `false` | Se o label está visualmente oculto. Quando true, apenas o ícone é exibido e label é usado como aria-label. |
| `icon` | `ReactNode` | não | — | Elemento de ícone exibido antes do label. |
| `isDisabled` | `boolean` | não | `false` | Se este item individual está desabilitado. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/SegmentedControlItem` · Docs atualizadas: `npx @pharos-ds/cli component SegmentedControlItem`
