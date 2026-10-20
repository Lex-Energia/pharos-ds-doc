---
title: "ContextMenu"
group: "ContextMenu"
category: "Action"
package: "@pharos-ds/core"
import: "@pharos-ds/core/ContextMenu"
source: /componentes/ContextMenu
---

# ContextMenu

**Grupo:** ContextMenu · **Categoria:** Action · **Pacote:** `@pharos-ds/core`

Um menu de contexto acionado por clique direito que aparece na posição do cursor. Use para fornecer ações contextuais para elementos ou regiões específicas sem poluir a UI com botões visíveis.

## Importação

```tsx
import {ContextMenu} from '@pharos-ds/core/ContextMenu';
```

## Exemplos

### Área interativa

```tsx
import {ContextMenu} from '@pharos-ds/core/ContextMenu';

<ContextMenu
  size="md"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Mantenha itens de menu concisos e orientados à ação; usuários esperam acesso rápido a ações contextuais.
- **Faça:** Use sections e dividers para agrupar ações relacionadas quando o menu tiver muitos itens.
- **Faça:** Garanta que todas as ações do menu de contexto também estejam acessíveis via outros elementos de UI para usuários apenas de teclado.
- **Evite:** Use um ContextMenu como única forma de acessar ações importantes; nem todos os usuários sabem clicar com o botão direito.
- **Evite:** Coloque mais de 10–12 itens em um único menu sem agrupá-los em sections.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | A área trigger: clique direito neste conteúdo para abrir o menu. |
| `items` | `ContextMenuOption[]` | sim | — | Array de entradas de menu. Cada entrada é um de: um item de ação `{label, onClick?, icon?, isDisabled?}`, um divider `{type: "divider"}`, ou uma section `{type: "section", title?, items: [...action items]}`. |
| `menuContent` | `ReactNode` | não | — | Conteúdo JSX de menu customizado para modo compound. Use em vez de items para menus dinâmicos ou com estado. |
| `menuWidth` | `number \| string` | não | `'160px'` | Largura customizada do menu. |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Tamanho dos itens de menu: controla a densidade de padding. |
| `label` | `string` | não | `'Context menu'` | Nome acessível para a superfície do menu, anunciado quando abre. |
| `isDisabled` | `boolean` | não | `false` | Quando true, clique direito exibe o menu de contexto nativo do browser. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ContextMenu` · Docs atualizadas: `npx @pharos-ds/cli component ContextMenu`
