---
title: "TreeList"
group: "TreeList"
category: "Table & List"
package: "@pharos-ds/core"
import: "@pharos-ds/core/TreeList"
source: /componentes/TreeList
---

# TreeList

**Grupo:** TreeList · **Categoria:** Table & List · **Pacote:** `@pharos-ds/core`

Estrutura de árvore expansível para exibir dados hierárquicos com linhas conectoras de ramificação. Use em exploradores de arquivos, navegadores de categorias aninhadas ou qualquer interface que visualize relações pai-filho.

## Importação

```tsx
import {TreeList} from '@pharos-ds/core/TreeList';
```

## Exemplos

### Área interativa

```tsx
import {TreeList} from '@pharos-ds/core/TreeList';

<TreeList
  density="balanced"
  variant="lineGuides"
 />
```

Valores explorados na demo interativa:

- `density`: `compact` · `balanced` · `spacious` (padrão `balanced`)
- `variant`: `lineGuides` · `noGuides` (padrão `lineGuides`)

## Boas práticas

- **Faça:** Forneça rótulos e ícones significativos para cada nó para facilitar a leitura da hierarquia.
- **Faça:** Pré-expanda ramificações importantes para que os usuários vejam conteúdo-chave imediatamente.
- **Evite:** Aninhe mais de 4–5 níveis de profundidade; achate a estrutura ou use outro padrão.
- **Evite:** Use uma árvore para dados planos e não hierárquicos; use uma List em vez disso.

## Props

Nenhuma prop documentada. Rode `npx @pharos-ds/cli component TreeList`.

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/TreeList` · Docs atualizadas: `npx @pharos-ds/cli component TreeList`
