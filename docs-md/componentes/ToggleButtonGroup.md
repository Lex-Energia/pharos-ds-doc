---
title: "ToggleButtonGroup"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/ToggleButtonGroup"
source: /componentes/ToggleButtonGroup
---

# ToggleButtonGroup

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Agrupa toggle buttons para comportamento exclusivo (single) ou multi-seleção. Usa discriminated union em type para value/onChange type-safe.

## Importação

```tsx
import {ToggleButtonGroup} from '@pharos-ds/core/ToggleButtonGroup';
```

## Exemplos

### Área interativa

```tsx
import {ToggleButtonGroup} from '@pharos-ds/core/ToggleButton';

<ToggleButtonGroup
  type="single"
  orientation="horizontal"
  size="md"
 />
```

Valores explorados na demo interativa:

- `type`: `single` · `multiple` (padrão `single`)
- `orientation`: `horizontal` · `vertical` (padrão `horizontal`)
- `size`: `sm` · `md` · `lg` (padrão `md`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | Filhos ToggleButton. |
| `label` | `string` | sim | — | Rótulo acessível do grupo (aria-label). |
| `type` | `'single' \| 'multiple'` | não | `'single'` | Modo de seleção. Single permite um botão ativo, multiple permite vários. |
| `value` | `string \| null \| string[]` | sim | — | Valor(es) atualmente selecionado(s). O tipo depende do modo de seleção. |
| `onChange` | `(value: string \| null \| string[]) => void` | sim | — | Chamado quando a seleção muda. |
| `orientation` | `'horizontal' \| 'vertical'` | não | `'horizontal'` | Direção de layout do grupo de botões. |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Tamanho padrão dos botões no grupo. Botões individuais podem substituir. |
| `isDisabled` | `boolean` | não | `false` | Se todos os botões do grupo estão desabilitados. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(). |
| `data-testid` | `string` | não | — | Seletor de teste para frameworks de testes automatizados. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ToggleButtonGroup` · Docs atualizadas: `npx @pharos-ds/cli component ToggleButtonGroup`
