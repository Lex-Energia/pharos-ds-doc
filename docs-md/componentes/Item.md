---
title: "Item"
group: "Item"
category: "Table & List"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Item"
source: /componentes/Item
---

# Item

**Grupo:** Item · **Categoria:** Table & List · **Pacote:** `@pharos-ds/core`

Um primitivo de item único e flexível que unifica o padrão "start content + label + description + end content" em todo o Pharos. Use-o onde precisar de uma linha estruturada: dropdown menus, selectors, listas de contatos, notificações, navegadores de arquivos e feeds de atividade.

## Importação

```tsx
import {Item} from '@pharos-ds/core/Item';
```

## Exemplos

### Área interativa

```tsx
import {Item} from '@pharos-ds/core/Item';

<Item
  density="compact"
  align="center"
  isSelected={false}
 />
```

Valores explorados na demo interativa:

- `density`: `compact` · `balanced` · `spacious` (padrão `compact`)
- `align`: `center` · `start` (padrão `center`)
- `isSelected`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use slots nomeados (startContent, label, description, endContent) para o layout comum. Eles cobrem 80% dos casos.
- **Faça:** Use density="compact" para menus e listas densas, "balanced" para linhas padrão e "spacious" para layouts mais arejados.
- **Faça:** Defina labelLines e descriptionLines para controlar truncamento quando o comprimento do conteúdo varia.
- **Faça:** Use align="start" quando start ou end content for mais alto que uma única linha de texto.
- **Evite:** Não aninhe elementos interativos (buttons, links) dentro de um Item interativo; cria foco e alvos de clique confusos.
- **Evite:** Não use Item para navegação entre views; use componentes de navegação adequados em vez disso.
- **Evite:** Não adicione comportamento específico de read/unread ou inbox diretamente; componha um wrapper fino como PreviewItem em vez disso.

## Props

Nenhuma prop documentada. Rode `npx @pharos-ds/cli component Item`.

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Item` · Docs atualizadas: `npx @pharos-ds/cli component Item`
