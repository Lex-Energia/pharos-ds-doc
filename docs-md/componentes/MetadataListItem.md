---
title: "MetadataListItem"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/MetadataListItem"
source: /componentes/MetadataListItem
---

# MetadataListItem

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Um único valor de metadata rotulado dentro de um MetadataList.

## Importação

```tsx
import {MetadataListItem} from '@pharos-ds/core/MetadataListItem';
```

## Exemplos

### Área interativa

```tsx
import {MetadataListItem} from '@pharos-ds/core/MetadataList';

<MetadataListItem
  hasIcon
  labelPosition="top"
 />
```

Valores explorados na demo interativa:

- `hasIcon`: boolean (padrão `true`)
- `labelPosition`: `start` · `top` (padrão `top`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | Valor de conteúdo deste item de metadata. |
| `label` | `string` | sim | — | Texto do rótulo deste item de metadata. |
| `icon` | `ReactNode` | não | — | Ícone renderizado antes do texto do rótulo. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/MetadataListItem` · Docs atualizadas: `npx @pharos-ds/cli component MetadataListItem`
