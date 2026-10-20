---
title: "CheckboxListItem"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/CheckboxListItem"
source: /componentes/CheckboxListItem
---

# CheckboxListItem

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Item de checkbox individual com label, description e slot de end content. Funciona em modo collection (dentro de CheckboxList) ou modo standalone (dentro de List).

## Importação

```tsx
import {CheckboxListItem} from '@pharos-ds/core/CheckboxListItem';
```

## Exemplos

### Área interativa

```tsx
import {CheckboxListItem, CheckboxList} from '@pharos-ds/core/CheckboxList';

<CheckboxListItem
  label="Alertas por e-mail"
  value="email"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `isDisabled`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `ReactNode` | sim | — | Label de texto principal do item. Uma string simples nomeia o checkbox automaticamente; um label rico (ReactNode) deve ser pareado com aria-label para que leitores de tela recebam um nome conciso. |
| `aria-label` | `string` | não | — | Nome acessível em texto simples para o checkbox quando label é um ReactNode. Aplicado ao controle do checkbox. Sem ele, itens com label rico anunciam apenas o genérico "Checkbox" para leitores de tela. |
| `value` | `string` | não | — | Chave de identidade (obrigatória dentro de CheckboxList). |
| `description` | `string` | não | — | Texto secundário abaixo do label. |
| `endContent` | `ReactNode` | não | — | Conteúdo renderizado após a área do label. |
| `isDisabled` | `boolean` | não | `false` | Se este item individual está desabilitado. |
| `isLoading` | `boolean` | não | `false` | Se este item está carregando. Exibe um spinner dentro do checkbox e bloqueia interação neste item. Em modo collection, o item alternado também mostra isso automaticamente enquanto o changeAction pai está pendente. |
| `isChecked` | `boolean \| 'indeterminate'` | não | — | Estado checked direto (apenas modo standalone). |
| `onCheck` | `(checked: boolean) => void` | não | — | Handler de check direto (apenas modo standalone). |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/CheckboxListItem` · Docs atualizadas: `npx @pharos-ds/cli component CheckboxListItem`
