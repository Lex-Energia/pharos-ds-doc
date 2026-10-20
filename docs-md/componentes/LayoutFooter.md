---
title: "LayoutFooter"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/LayoutFooter"
source: /componentes/LayoutFooter
---

# LayoutFooter

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Barra inferior para action bars, pagination e status bars.

## Importação

```tsx
import {LayoutFooter} from '@pharos-ds/core/LayoutFooter';
```

## Exemplos

### Área interativa

```tsx
import {LayoutFooter} from '@pharos-ds/core/Layout';

<LayoutFooter
  hasDivider={false}
 />
```

Valores explorados na demo interativa:

- `hasDivider`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | não | — | Conteúdo do footer. |
| `hasDivider` | `boolean` | não | `false` | Borda na borda superior. |
| `height` | `SizeValue` | não | — | Altura do footer. Números são tratados como pixels, strings são usadas como estão. |
| `label` | `string` | não | — | Label acessível para o elemento landmark. |
| `role` | `AriaRole` | não | — | Role ARIA landmark. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/LayoutFooter` · Docs atualizadas: `npx @pharos-ds/cli component LayoutFooter`
