---
title: "TypeaheadItem"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/TypeaheadItem"
source: /componentes/TypeaheadItem
---

# TypeaheadItem

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Renderizador padrão de item de dropdown para resultados de typeahead. Exibe label com icon, description e avatar opcionais. Exportado para uso em implementações customizadas de renderItem.

## Importação

```tsx
import {TypeaheadItem} from '@pharos-ds/core/TypeaheadItem';
```

## Exemplos

### Área interativa

```tsx
import {TypeaheadItem} from '@pharos-ds/core/TypeaheadItem';

<TypeaheadItem
  hasDescription
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `hasDescription`: boolean (padrão `true`)
- `isDisabled`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `item` | `SearchableItem` | sim | — | O item de resultado de busca a renderizar. |
| `icon` | `ReactNode` | não | — | Ícone ou avatar a exibir antes do label. |
| `description` | `string` | não | — | Texto de descrição exibido abaixo do label. |
| `isDisabled` | `boolean` | não | `false` | Se este item está visualmente desabilitado. |
| `group` | `string` | não | — | Label de grupo para agrupar itens visualmente. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/TypeaheadItem` · Docs atualizadas: `npx @pharos-ds/cli component TypeaheadItem`
