---
title: "DropdownMenuRadioGroup"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/DropdownMenuRadioGroup"
source: /componentes/DropdownMenuRadioGroup
---

# DropdownMenuRadioGroup

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Grupo de seleção única de itens de menu radio (role="group" de menuitemradio). Possui o valor selecionado e organiza seus itens com o gap entre itens do menu.

## Importação

```tsx
import {DropdownMenuRadioGroup} from '@pharos-ds/core/DropdownMenuRadioGroup';
```

## Exemplos

### Área interativa

```tsx
import {DropdownMenuRadioGroup} from '@pharos-ds/core/DropdownMenu';

<DropdownMenuRadioGroup
  hasCloseOnSelect
 />
```

Valores explorados na demo interativa:

- `hasCloseOnSelect`: boolean (padrão `true`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `value` | `string \| undefined` | não | — | O valor atualmente selecionado no grupo. Passe undefined quando nada estiver selecionado ainda. |
| `onChange` | `(value: string) => void` | não | — | Callback disparado quando o valor selecionado muda. |
| `aria-label` | `string` | não | — | Rótulo acessível do grupo. Obrigatório (ou aria-labelledby) para que leitores de tela anunciem os radios como um conjunto nomeado, ex.: "Sort by". |
| `aria-labelledby` | `string` | não | — | O id de um elemento que rotula o grupo, como alternativa a aria-label. |
| `hasCloseOnSelect` | `boolean` | não | `true` | Se selecionar um valor fecha o menu. Itens radio fecham por padrão na seleção (commit de escolha única). |
| `children` | `ReactNode` | não | — | Os DropdownMenuRadioItems que compõem o grupo. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/DropdownMenuRadioGroup` · Docs atualizadas: `npx @pharos-ds/cli component DropdownMenuRadioGroup`
