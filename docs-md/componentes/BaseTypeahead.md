---
title: "BaseTypeahead"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/BaseTypeahead"
source: /componentes/BaseTypeahead
---

# BaseTypeahead

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Motor de combobox sem estilo que fornece input, busca, navegação por teclado e dropdown. Sem div wrapper, sem estilo de borda, sem renderização de tokens. Usado por Typeahead e Tokenizer para composições customizadas.

## Importação

```tsx
import {BaseTypeahead} from '@pharos-ds/core/BaseTypeahead';
```

## Exemplos

### Área interativa

```tsx
import {BaseTypeahead, createStaticSource} from '@pharos-ds/core/Typeahead';

<BaseTypeahead
  size="md"
  hasEntriesOnFocus={false}
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `hasEntriesOnFocus`: boolean (padrão `false`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use Typeahead ou Tokenizer para campos padrão; eles envolvem BaseTypeahead com a div wrapper, estilo de borda e renderização de tokens que ele intencionalmente omite.
- **Faça:** Forneça sua própria div wrapper com borda e layout ao compor diretamente, já que BaseTypeahead não renderiza chrome visual próprio.
- **Faça:** Passe anchorRef apontando para seu wrapper, para que o dropdown se posicione em relação ao chrome customizado do input, não apenas ao elemento input nu.
- **Evite:** Espere uma div wrapper, borda ou renderização de tokens. BaseTypeahead é apenas um motor; todo o chrome visual é responsabilidade de quem chama.
- **Evite:** Use BaseTypeahead quando Typeahead ou Tokenizer bastariam; o trabalho extra de wrapper e estilo só se justifica para composições verdadeiramente customizadas.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `searchSource` | `SearchSource<T>` | sim | — | Fonte de dados que fornece métodos de busca e bootstrap. |
| `value` | `T \| null` | sim | — | Item atualmente selecionado. |
| `onChange` | `(item: T \| null) => void` | sim | — | Chamado quando a seleção muda. |
| `renderItem` | `(item: T) => ReactNode` | não | — | Função de renderização customizada para itens do dropdown. |
| `placeholder` | `string` | não | `'Search...'` | Texto placeholder do input. |
| `hasEntriesOnFocus` | `boolean` | não | `false` | Mostra resultados de bootstrap ao focar, antes de digitar. |
| `maxMenuItems` | `number` | não | `10` | Número máximo de itens do dropdown a exibir. |
| `emptySearchResultsText` | `string` | não | `'No results found'` | Texto exibido quando a busca não retorna resultados. |
| `isDisabled` | `boolean` | não | `false` | Se o input está desabilitado. |
| `hasAutoFocus` | `boolean` | não | `false` | Foca automaticamente o input ao montar. |
| `debounceMs` | `number` | não | `150` | Atraso de debounce em ms antes de disparar a busca. Defina 0 para fontes síncronas. |
| `anchorRef` | `RefObject<HTMLElement \| null>` | não | — | Ref para o elemento âncora do posicionamento do dropdown. Se não fornecida, o próprio input é usado. |
| `inputXStyle` | `StyleXStyles` | não | — | Estilos StyleX adicionais para o elemento input. |
| `onKeyDown` | `(e: React.KeyboardEvent<HTMLInputElement>) => void` | não | — | Handler adicional de keydown chamado antes da navegação interna por teclado. Chame e.preventDefault() para pular o tratamento interno. |
| `onChangeQuery` | `(query: string) => void` | não | — | Callback disparado quando o texto da query de busca muda. |
| `onOpenChange` | `(isOpen: boolean) => void` | não | — | Callback quando o dropdown abre ou fecha. |
| `inputId` | `string` | não | — | ID do elemento input (para associação com label). |
| `ariaDescribedBy` | `string` | não | — | IDs adicionais de aria-describedby. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/BaseTypeahead` · Docs atualizadas: `npx @pharos-ds/cli component BaseTypeahead`
