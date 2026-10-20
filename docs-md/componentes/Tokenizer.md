---
title: "Tokenizer"
group: "Misc"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Tokenizer"
source: /componentes/Tokenizer
---

# Tokenizer

**Grupo:** Misc · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

Tokenizer é um input multi-select que permite aos usuários buscar, selecionar e gerenciar múltiplos itens exibidos como chips removíveis. Use quando usuários precisam montar um conjunto de seleções a partir de uma fonte de dados pesquisável, como adicionar membros da equipe, aplicar tags ou escolher filtros.

## Importação

```tsx
import {Tokenizer} from '@pharos-ds/core/Tokenizer';
```

## Exemplos

### Área interativa

```tsx
import {Tokenizer} from '@pharos-ds/core/Tokenizer';

<Tokenizer
  size="md"
  hasCreate={false}
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `hasCreate`: boolean (padrão `false`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Escreva um placeholder que diga ao usuário o que pode buscar, como "Buscar pessoas..." ou "Adicionar tags...", para que o input não seja um mistério em branco.
- **Faça:** Defina maxEntries quando o número de seleções deve ser limitado, como restringir uma revisão a 5 aprovadores.
- **Faça:** Use hasCreate para tagging free-form onde usuários precisam inserir valores que não existem na fonte de busca.
- **Faça:** Exiba status de validação com a prop status para que usuários saibam imediatamente quando uma seleção está ausente ou inválida.
- **Evite:** Não use Tokenizer para seleção de item único; use Typeahead em vez disso. Tokenizer é para montar conjuntos de dois ou mais itens.
- **Evite:** Evite aplicar cores customizadas a tokens individuais dentro de um Tokenizer; use o estilo de token padrão para consistência visual no conjunto.
- **Evite:** Não oculte o label; todo Tokenizer precisa de um label visível para que usuários entendam o que estão selecionando. Use isLabelHidden apenas quando o contexto ao redor torna o propósito óbvio.
- **Evite:** Não envolva um Tokenizer desabilitado em Tooltip para explicar por que está desabilitado; controles desabilitados engolem os eventos de hover que o wrapper precisa. Use a prop disabledMessage em vez disso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Label acessível para o input. |
| `searchSource` | `SearchSource<T>` | sim | — | Fonte de dados que fornece métodos de search e bootstrap para popular o dropdown. |
| `value` | `T[]` | sim | — | Array de itens atualmente selecionados. |
| `onChange` | `(items: T[], change: TokenizerChange<T>) => void` | sim | — | Chamado quando a seleção muda. O argumento change inclui o item afetado e type ('add' \| 'create' \| 'remove' \| 'reorder'). Adições e remoções (incluindo Backspace em input vazio) são anunciadas a screen readers via live region polite. |
| `placeholder` | `string` | não | — | Texto placeholder do input. Exibido apenas quando nenhum token está selecionado. |
| `maxEntries` | `number` | não | — | Número máximo de seleções permitidas. Input é ocultado quando o limite é atingido. |
| `hasClear` | `boolean` | não | `false` | Exibe um botão de limpar tudo para remoção em massa de todos os tokens. |
| `renderToken` | `(item: T, onRemove: () => void) => ReactNode` | não | — | Função de render customizada para tokens selecionados. Padrão renderiza Token com label e onRemove. |
| `renderItem` | `(item: T) => ReactNode` | não | — | Função de render customizada para itens do dropdown. Padrão renderiza TypeaheadItem. |
| `isDisabled` | `boolean` | não | `false` | Desabilita o input e todas as interações com tokens. |
| `htmlName` | `string` | não | — | Atributo HTML name para envios de formulário. Renderiza um hidden input por id de item selecionado. |
| `disabledMessage` | `string` | não | — | Explica por que o tokenizer está desabilitado. Com isDisabled, exibe tooltip no hover/focus de teclado e mantém o input focável via aria-disabled (input permanece bloqueado). Use em vez de envolver um Tokenizer desabilitado em Tooltip. Controles desabilitados engolem os eventos de hover que um Tooltip externo precisa. |
| `status` | `{type: 'warning' \| 'error' \| 'success', message?: string}` | não | — | Objeto de status de validação com type e message para estados error/warning/success. |
| `statusVariant` | `'attached' \| 'detached'` | não | `'attached'` | Como a mensagem de status é posicionada em relação ao input. attached sobrepõe diretamente abaixo do input (tratamento com borda); detached flutua abaixo como elemento separado com spacing. |
| `isLabelHidden` | `boolean` | não | `false` | Oculta visualmente o label mantendo-o acessível. |
| `description` | `string` | não | — | Texto de ajuda exibido abaixo do label. |
| `isRequired` | `boolean` | não | `false` | Marca o field como required. |
| `isOptional` | `boolean` | não | `false` | Exibe indicador optional no label. |
| `labelTooltip` | `string` | não | — | Texto de tooltip exibido no label. |
| `hasEntriesOnFocus` | `boolean` | não | `false` | Exibe resultados bootstrap no focus antes de digitar. |
| `maxMenuItems` | `number` | não | `10` | Número máximo de itens do dropdown a exibir. |
| `emptySearchResultsText` | `string` | não | `'No results found'` | Texto exibido quando a busca não retorna resultados. |
| `hasAutoFocus` | `boolean` | não | `false` | Auto-foca o input no mount. |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Tamanho do input e tokens. |
| `debounceMs` | `number` | não | `150` | Atraso de debounce em ms antes de disparar a busca. Defina 0 para fontes síncronas. |
| `hasCreate` | `boolean` | não | `false` | Permite usuários criar novos tokens a partir de input free-text. Quando true, uma opção "Create" aparece no dropdown para texto digitado que não corresponde a resultados existentes. O change type de onChange é 'create' para esses itens. |
| `onChangeQuery` | `(query: string) => void` | não | — | Callback disparado quando o texto da query de busca muda. |
| `startIcon` | `ReactNode \| IconType` | não | — | Ícone a exibir no início do input, antes de quaisquer tokens. Aceita um nome de ícone semântico, um componente de ícone SVG ou um ReactNode diretamente. |
| `endContent` | `ReactNode` | não | — | Conteúdo a exibir no final da linha do input. Útil para botões, contagem de resultados ou outros controles. |
| `handleRef` | `React.Ref<TokenizerHandle>` | não | — | Handle imperativo expondo focusInput(), focusFirstToken(), focusLastToken(), clearInput() e selectAll(). |
| `width` | `SizeValue` | não | — | Largura do field (number = pixels, string usada como está, ex.: "100%"). Dimensiona todo o field (label, controle e status) para que permaneçam alinhados. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(); não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Tokenizer` · Docs atualizadas: `npx @pharos-ds/cli component Tokenizer`
