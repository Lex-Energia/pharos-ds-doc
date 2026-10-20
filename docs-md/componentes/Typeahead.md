---
title: "Typeahead"
group: "Typeahead"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Typeahead"
source: /componentes/Typeahead
---

# Typeahead

**Grupo:** Typeahead · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

Um input pesquisável para selecionar um único item de um dataset grande ou dinâmico. Resultados aparecem conforme o usuário digita, com suporte a fontes de dados assíncronas, busca com debounce e renderização personalizada de itens. Use-o quando a lista de opções for grande demais para um dropdown Selector.

## Importação

```tsx
import {Typeahead} from '@pharos-ds/core/Typeahead';
```

## Exemplos

### Área interativa

```tsx
import {Typeahead} from '@pharos-ds/core/Typeahead';

<Typeahead
  size="md"
  isDisabled={false}
  hasEntriesOnFocus={false}
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `isDisabled`: boolean (padrão `false`)
- `hasEntriesOnFocus`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Forneça placeholder text descritivo que sugira o que usuários podem buscar.
- **Faça:** Mostre suggestions no focus quando usuários se beneficiarem de ver opções populares ou recentes antes de digitar.
- **Faça:** Adicione um search delay para fontes de dados remotas para evitar requisições de rede excessivas.
- **Faça:** Use dentro de InputGroup quando o typeahead precisar de um addon prefix ou suffix de uma linha.
- **Evite:** Use para listas de opções curtas e estáticas; use Selector para melhor descoberta.
- **Evite:** Use para multi-seleção; use Tokenizer em vez disso.
- **Evite:** Coloque múltiplos Typeaheads adjacentes sem labels claros que os diferenciem.
- **Evite:** Envolva um Typeahead desabilitado em Tooltip para explicar por que está desabilitado; triggers desabilitados engolem os eventos de hover que o wrapper precisa. Use a prop disabledMessage em vez disso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Label acessível para o input. |
| `searchSource` | `SearchSource<T>` | sim | — | Fonte de dados fornecendo métodos search e bootstrap para popular o dropdown. |
| `value` | `T \| null` | sim | — | Item atualmente selecionado, ou null se nada estiver selecionado. |
| `onChange` | `(item: T \| null) => void` | sim | — | Chamado quando a seleção muda. |
| `placeholder` | `string` | não | — | Texto placeholder do input. |
| `hasEntriesOnFocus` | `boolean` | não | `false` | Mostra resultados bootstrap no focus antes de digitar. |
| `hasClear` | `boolean` | não | `true` | Mostra botão de limpar para desselecionar o value atual. |
| `isDisabled` | `boolean` | não | `false` | Desabilita o input. |
| `disabledMessage` | `string` | não | — | Explica por que o input está desabilitado. Com isDisabled, exibe um tooltip no hover/foco via teclado e mantém o campo focável via aria-disabled (ativação permanece bloqueada). Use isto em vez de envolver um Typeahead desabilitado em Tooltip. Controles desabilitados engolem os eventos de hover que um Tooltip externo precisa. |
| `maxMenuItems` | `number` | não | `10` | Número máximo de itens de dropdown a exibir. |
| `status` | `{type: 'warning' \| 'error' \| 'success', message?: string}` | não | — | Objeto de status de validação com type e message para estados de error/warning/success. |
| `statusVariant` | `'attached' \| 'detached'` | não | `'attached'` | Como a mensagem de status é posicionada em relação ao input. attached sobrepõe diretamente abaixo do input (tratamento com borda); detached flutua abaixo como elemento separado com espaçamento. |
| `renderItem` | `(item: T) => ReactNode` | não | — | Função de renderização personalizada para itens de dropdown. O padrão renderiza TypeaheadItem. |
| `isLabelHidden` | `boolean` | não | `false` | Oculta visualmente o label mantendo-o acessível. |
| `description` | `string` | não | — | Texto auxiliar exibido abaixo do label. |
| `isRequired` | `boolean` | não | `false` | Marca o campo como obrigatório. |
| `isOptional` | `boolean` | não | `false` | Exibe um indicador optional no label. |
| `labelTooltip` | `string` | não | — | Texto de tooltip exibido no label. |
| `emptySearchResultsText` | `string` | não | `'No results found'` | Texto exibido quando a busca não retorna resultados. |
| `hasAutoFocus` | `boolean` | não | `false` | Auto-focus no input ao montar. |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Size do input e token. |
| `debounceMs` | `number` | não | `150` | Atraso de debounce em ms antes de disparar a busca. Defina como 0 para fontes síncronas. |
| `onChangeQuery` | `(query: string) => void` | não | — | Callback disparado quando o texto da query de busca muda. |
| `onOpenChange` | `(isOpen: boolean) => void` | não | — | Callback quando o dropdown abre ou fecha. |
| `width` | `SizeValue` | não | — | Largura do campo (número = pixels, string usada como está, ex.: "100%"). Dimensiona o campo inteiro (label, controle e status) para que permaneçam alinhados. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(): não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Typeahead` · Docs atualizadas: `npx @pharos-ds/cli component Typeahead`
