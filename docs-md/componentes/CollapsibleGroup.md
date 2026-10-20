---
title: "CollapsibleGroup"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/CollapsibleGroup"
source: /componentes/CollapsibleGroup
---

# CollapsibleGroup

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Coordena múltiplas instâncias Collapsible para que apenas uma (modo single) ou qualquer número (modo multiple) possa estar aberta por vez. Não renderiza elemento DOM wrapper a menos que dividers estejam habilitados.

## Importação

```tsx
import {CollapsibleGroup} from '@pharos-ds/core/CollapsibleGroup';
```

## Exemplos

### Área interativa

```tsx
import {CollapsibleGroup, Collapsible} from '@pharos-ds/core/Collapsible';

<CollapsibleGroup
  type="single"
  hasDividers
 />
```

Valores explorados na demo interativa:

- `type`: `single` · `multiple` (padrão `single`)
- `hasDividers`: boolean (padrão `true`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `type` | `'single' \| 'multiple'` | não | `'single'` | Se um ou muitos itens podem estar abertos simultaneamente. |
| `defaultValue` | `string \| string[]` | não | — | Item(ns) aberto(s) padrão para uso não controlado. Use uma string para modo single e um array para modo multiple. |
| `value` | `string \| string[]` | não | — | Item(ns) aberto(s) controlado(s). |
| `onChange` | `(value: string \| string[]) => void` | não | — | Callback invocado quando o conjunto de itens abertos muda. |
| `hasDividers` | `boolean` | não | `false` | Se deve desenhar dividers hairline entre os itens do grupo. Quando definido, o grupo renderiza um div wrapper e os itens assumem densidade 'balanced' por padrão. Combine com filhos Collapsible bare; itens envolvidos em Card fornecem sua própria separação. |
| `density` | `'compact' \| 'balanced' \| 'spacious'` | não | — | Densidade de linha controlando padding de trigger e bloco de conteúdo nos itens do grupo. Padrão 'balanced' quando dividers são exibidos; caso contrário os itens mantêm o visual unpadded padrão. |
| `children` | `ReactNode` | sim | — | Instâncias Collapsible a coordenar. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/CollapsibleGroup` · Docs atualizadas: `npx @pharos-ds/cli component CollapsibleGroup`
