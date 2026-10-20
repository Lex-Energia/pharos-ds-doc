---
title: "RadioListItem"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/RadioListItem"
source: /componentes/RadioListItem
---

# RadioListItem

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Item de radio individual com slots de label, description e content.

## Importação

```tsx
import {RadioListItem} from '@pharos-ds/core/RadioListItem';
```

## Exemplos

### Área interativa

```tsx
import {RadioListItem} from '@pharos-ds/core/RadioList';

<RadioListItem
  hasDescription
  isItemDisabled={false}
 />
```

Valores explorados na demo interativa:

- `hasDescription`: boolean (padrão `true`)
- `isItemDisabled`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Texto do label para o item de radio. |
| `value` | `string` | sim | — | Valor deste item de radio. |
| `description` | `string` | não | — | Texto de descrição exibido abaixo do label. |
| `isDisabled` | `boolean` | não | `false` | Se este item de radio individual está desabilitado. |
| `startContent` | `ReactNode` | não | — | Conteúdo a renderizar antes do círculo do radio. |
| `endContent` | `ReactNode` | não | — | Conteúdo a renderizar após o label. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/RadioListItem` · Docs atualizadas: `npx @pharos-ds/cli component RadioListItem`
