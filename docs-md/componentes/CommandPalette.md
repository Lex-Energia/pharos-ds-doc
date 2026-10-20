---
title: "CommandPalette"
group: "CommandPalette"
category: "Overlay"
package: "@pharos-ds/core"
import: "@pharos-ds/core/CommandPalette"
source: /componentes/CommandPalette
---

# CommandPalette

**Grupo:** CommandPalette · **Categoria:** Overlay · **Pacote:** `@pharos-ds/core`

CommandPalette é um dialog pesquisável para acesso rápido a comandos, navegação e ações. Use como launcher acionado por teclado, alimentado por SearchSource para filtragem e seleção.

## Importação

```tsx
import {CommandPalette} from '@pharos-ds/core/CommandPalette';
```

## Exemplos

### Área interativa

```tsx
import {CommandPalette} from '@pharos-ds/core/CommandPalette';

<CommandPalette
  isInline
 />
```

Valores explorados na demo interativa:

- `isInline`: boolean (padrão `true`)

## Boas práticas

- **Faça:** Forneça um searchSource com resultados de bootstrap, para que usuários vejam opções úteis antes de digitar.
- **Faça:** Use auxiliaryData.group nos itens para organizar resultados automaticamente em seções rotuladas.
- **Evite:** Use CommandPalette para dropdowns ou menus simples; use Menu ou Selector para seleções inline.
- **Evite:** Adicione grupos ou itens demais; cure resultados para manter a palette rápida e escaneável.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `isOpen` | `boolean` | sim | — | Se o dialog da command palette está visível. |
| `onOpenChange` | `(isOpen: boolean) => void` | sim | — | Chamado quando a visibilidade da palette muda. |
| `searchSource` | `SearchSource<T>` | sim | — | Search source que fornece itens via search(query) e bootstrap(). Use createStaticSource para listas estáticas. |
| `input` | `ReactNode` | não | `<CommandPaletteInput />` | Slot de input. Padrão: CommandPaletteInput com comportamento padrão. |
| `footer` | `ReactNode` | não | `<CommandPaletteFooter />` | Slot de footer. Padrão: CommandPaletteFooter mostrando dicas de teclado. |
| `renderItem` | `(item: T, isSelected: boolean) => ReactNode` | não | — | Função de renderização por item. Auto-agrupamento por auxiliaryData.group é preservado. Quando omitida, renderiza texto do rótulo. |
| `emptySearchText` | `ReactNode` | não | `'No results'` | Conteúdo exibido quando uma query de busca não retorna resultados. |
| `emptyBootstrapText` | `ReactNode` | não | `'Type to search'` | Conteúdo exibido quando não há query de busca e bootstrap() não retorna nada. |
| `value` | `string` | não | — | Valor selecionado controlado para modo picker. |
| `onValueChange` | `(value: string) => void` | não | — | Chamado quando o valor selecionado muda no modo picker. |
| `label` | `string` | não | `'Command palette'` | Rótulo acessível para o dialog da command palette. |
| `width` | `number \| string` | não | `640` | Largura do dialog. |
| `maxHeight` | `number \| string` | não | `480` | Altura máxima do dialog. |
| `isInline` | `boolean` | não | `false` | Renderiza o conteúdo da command palette inline, sem comportamento modal. Desabilita automaticamente auto-focus do input e auto-scroll inicial do item destacado. Apenas para previews e showcases de documentação. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/CommandPalette` · Docs atualizadas: `npx @pharos-ds/cli component CommandPalette`
