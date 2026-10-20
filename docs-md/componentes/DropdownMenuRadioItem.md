---
title: "DropdownMenuRadioItem"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/DropdownMenuRadioItem"
source: /componentes/DropdownMenuRadioItem
---

# DropdownMenuRadioItem

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Uma única opção em um DropdownMenuRadioGroup (role="menuitemradio"). Deve ser usado dentro de um DropdownMenuRadioGroup.

## Importação

```tsx
import {DropdownMenuRadioItem} from '@pharos-ds/core/DropdownMenuRadioItem';
```

## Exemplos

### Área interativa

```tsx
import {DropdownMenuRadioItem} from '@pharos-ds/core/DropdownMenu';

<DropdownMenuRadioItem
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `isDisabled`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `value` | `string` | não | — | O value que este item representa dentro de seu grupo. O value do grupo corresponde a isto para determinar o estado checked. |
| `label` | `ReactNode` | não | — | Texto do label principal identificando a opção. |
| `description` | `ReactNode` | não | — | Texto de description secundário exibido abaixo do label. |
| `icon` | `IconType` | não | — | Ícone a exibir antes do label. Veja `npx pharos docs icons` para nomes semânticos válidos. |
| `isDisabled` | `boolean` | não | `false` | Se este radio item individual está desabilitado. Itens desabilitados permanecem focáveis (via aria-disabled) para que continuem descobríveis por teclado e tecnologias assistivas, mas a seleção é bloqueada. |
| `endContent` | `ReactNode` | não | — | Conteúdo a renderizar após o label e description, como um badge ou metadados. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/DropdownMenuRadioItem` · Docs atualizadas: `npx @pharos-ds/cli component DropdownMenuRadioItem`
