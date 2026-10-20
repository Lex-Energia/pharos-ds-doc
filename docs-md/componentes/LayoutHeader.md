---
title: "LayoutHeader"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/LayoutHeader"
source: /componentes/LayoutHeader
---

# LayoutHeader

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Barra superior para títulos de página, app bars e toolbars.

## Importação

```tsx
import {LayoutHeader} from '@pharos-ds/core/LayoutHeader';
```

## Exemplos

### Área interativa

```tsx
import {LayoutHeader} from '@pharos-ds/core/Layout';

<LayoutHeader
  hasDivider={false}
 />
```

Valores explorados na demo interativa:

- `hasDivider`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | não | — | Conteúdo do header. |
| `hasDivider` | `boolean` | não | `false` | Borda na borda inferior. |
| `height` | `SizeValue` | não | — | Altura do header. Números são tratados como pixels, strings são usadas como estão. |
| `label` | `string` | não | — | Label acessível para o elemento landmark. |
| `role` | `AriaRole` | não | — | Role de landmark ARIA. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/LayoutHeader` · Docs atualizadas: `npx @pharos-ds/cli component LayoutHeader`
