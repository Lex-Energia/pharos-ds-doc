---
title: "SelectorOption"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/SelectorOption"
source: /componentes/SelectorOption
---

# SelectorOption

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Componente auxiliar para renderização personalizada de itens dentro da prop renderOption de um Selector.

## Importação

```tsx
import {SelectorOption} from '@pharos-ds/core/SelectorOption';
```

## Exemplos

### Área interativa

```tsx
import {Selector, SelectorOption} from '@pharos-ds/core/Selector';

<Selector
  size="md"
  hasDescription
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `hasDescription`: boolean (padrão `true`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `ReactNode` | sim | — | Texto do rótulo principal do item. |
| `icon` | `IconType` | não | — | Ícone exibido antes do rótulo. Veja `pharos docs icons` para nomes semânticos válidos. |
| `description` | `ReactNode` | não | — | Texto de descrição secundário exibido abaixo do rótulo. |
| `endContent` | `ReactNode` | não | — | Conteúdo adicional renderizado após o rótulo e a descrição. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/SelectorOption` · Docs atualizadas: `npx @pharos-ds/cli component SelectorOption`
