---
title: "TopNavMegaMenuItem"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/TopNavMegaMenuItem"
source: /componentes/TopNavMegaMenuItem
---

# TopNavMegaMenuItem

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Um item individual dentro de um TopNavMegaMenu. Renderiza a si mesmo nos modos desktop (grid popover) e mobile drawer via context de render mode.

## Importação

```tsx
import {TopNavMegaMenuItem} from '@pharos-ds/core/TopNavMegaMenuItem';
```

## Exemplos

### Área interativa

```tsx
import {TopNavMegaMenuItem} from '@pharos-ds/core/TopNavMegaMenuItem';

<TopNavMegaMenuItem
  hasDescription
  isLink
 />
```

Valores explorados na demo interativa:

- `hasDescription`: boolean (padrão `true`)
- `isLink`: boolean (padrão `true`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `title` | `string` | sim | — | Título de exibição para o item de menu. |
| `description` | `string` | não | — | Texto de descrição opcional exibido abaixo do title. |
| `icon` | `ReactNode` | não | — | Elemento de ícone opcional exibido à esquerda. |
| `href` | `string` | não | — | URL para navegar quando clicado. |
| `onClick` | `() => void` | não | — | Callback quando o item é clicado. |
| `as` | `LinkComponentType` | não | — | Componente customizado a renderizar em vez de <a> para itens de link. Substitui o padrão de nível de provider definido por LinkProvider. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/TopNavMegaMenuItem` · Docs atualizadas: `npx @pharos-ds/cli component TopNavMegaMenuItem`
