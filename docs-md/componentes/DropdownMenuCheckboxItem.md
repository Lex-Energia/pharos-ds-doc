---
title: "DropdownMenuCheckboxItem"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/DropdownMenuCheckboxItem"
source: /componentes/DropdownMenuCheckboxItem
---

# DropdownMenuCheckboxItem

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Um item de menu marcável (role="menuitemcheckbox") que alterna um boolean independente. Use para opções on/off dentro de um DropdownMenu; para escolha one-of-N use DropdownMenuRadioGroup.

## Importação

```tsx
import {DropdownMenuCheckboxItem} from '@pharos-ds/core/DropdownMenuCheckboxItem';
```

## Exemplos

### Área interativa

```tsx
import {DropdownMenuCheckboxItem} from '@pharos-ds/core/DropdownMenu';

<DropdownMenuCheckboxItem
  isDisabled={false}
  hasCloseOnSelect={false}
 />
```

Valores explorados na demo interativa:

- `isDisabled`: boolean (padrão `false`)
- `hasCloseOnSelect`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `ReactNode` | não | — | Texto do label principal que identifica o item. |
| `description` | `ReactNode` | não | — | Texto de descrição secundário exibido abaixo do label. |
| `icon` | `IconType` | não | — | Ícone a exibir antes do label. Veja `npx pharos docs icons` para nomes semânticos válidos. |
| `value` | `boolean` | não | — | Se o item está marcado. Controlado; combine com onChange. |
| `onChange` | `(checked: boolean) => void` | não | — | Callback disparado com o próximo estado checked quando o item é alternado. |
| `isDisabled` | `boolean` | não | `false` | Se o item está desabilitado. Itens desabilitados permanecem focáveis (via aria-disabled) para serem descobertos por teclado e tecnologias assistivas, mas a ativação é bloqueada. |
| `hasCloseOnSelect` | `boolean` | não | `false` | Se alternar o item fecha o menu. Itens checkbox permanecem abertos por padrão para que vários possam ser alternados em uma única sessão. |
| `endContent` | `ReactNode` | não | — | Conteúdo a renderizar após o label e description, como uma dica de atalho de teclado ou badge. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/DropdownMenuCheckboxItem` · Docs atualizadas: `npx @pharos-ds/cli component DropdownMenuCheckboxItem`
