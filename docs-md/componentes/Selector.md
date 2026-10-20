---
title: "Selector"
group: "Selector"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Selector"
source: /componentes/Selector
---

# Selector

**Grupo:** Selector · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

Dropdown selector para escolher um único valor de uma lista de opções. Suporta rótulos, validação, descriptions e estados required/optional. Use em formulários e configurações ao apresentar um número moderado de opções.

## Importação

```tsx
import {Selector} from '@pharos-ds/core/Selector';
```

## Exemplos

### Área interativa

```tsx
import {Selector} from '@pharos-ds/core/Selector';

<Selector
  size="md"
  hasSearch={false}
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `hasSearch`: boolean (padrão `false`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Forneça um rótulo visível para que usuários entendam o que estão selecionando.
- **Faça:** Use sections e dividers para organizar opções quando a lista exceder ~8 itens.
- **Faça:** Use renderOption para linhas de opção customizadas. Não passe SelectorOption diretamente como JSX children.
- **Faça:** Defina um placeholder significativo que indique a seleção esperada (ex. "Choose a country", não "Select...").
- **Faça:** Use dentro de InputGroup apenas quando o selector precisar de um addon curto de prefixo ou sufixo como parte de uma superfície de input decorada.
- **Evite:** Use para menus de ação; use Dropdown Menu para disparar comandos ou navegação.
- **Evite:** Use quando há apenas duas opções; use SegmentedControl ou radio buttons.
- **Evite:** Use Selector para navegação; links devem ser links, não opções de dropdown.
- **Evite:** Use para escolhas sim/não ou ligado/desligado; use Switch ou CheckboxInput.
- **Evite:** Coloque mais de ~20 opções sem sections; considere Typeahead para listas grandes.
- **Evite:** Envolva um Selector desabilitado em Tooltip para explicar por que está desabilitado; triggers desabilitados absorvem os eventos de hover que o wrapper precisa. Use a prop disabledMessage.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Texto do rótulo para acessibilidade. |
| `options` | `SelectorOption[]` | sim | — | Array de itens: strings, objetos com value/label/icon/disabled, dividers ({type: "divider"}), ou sections ({type: "section", title, items}). |
| `value` | `string` | não | — | Valor atualmente selecionado. |
| `onChange` | `(value: string) => void` | não | — | Callback disparado quando a seleção muda. |
| `hasClear` | `boolean` | não | `false` | Mostra um botão de limpar (×) quando um valor está selecionado. Quando true, onChange também aceita null para sinalizar que o usuário limpou a seleção. |
| `hasSearch` | `boolean` | não | `false` | Se deve mostrar um input de busca para filtrar opções. Conforme o usuário digita, a contagem de correspondências (ou "No results found") é anunciada a leitores de tela via live region polite. |
| `searchPlaceholder` | `string` | não | `'Search...'` | Texto placeholder do input de busca. |
| `placeholder` | `string` | não | `'Select...'` | Texto placeholder exibido quando nenhum valor está selecionado. |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Variant de tamanho do selector. |
| `isDisabled` | `boolean` | não | `false` | Desabilita o selector. |
| `htmlName` | `string` | não | — | Atributo HTML name para envio de formulários. Renderiza um input hidden com o valor selecionado, como um select nativo. |
| `disabledMessage` | `string` | não | — | Explica por que o selector está desabilitado. Com isDisabled, mostra tooltip em hover/foco por teclado e mantém o trigger focável via aria-disabled (ativação permanece bloqueada). Use isso em vez de envolver um Selector desabilitado em Tooltip. Controles desabilitados absorvem os eventos de hover que um Tooltip externo precisa. |
| `isLabelHidden` | `boolean` | não | `false` | Oculta visualmente o rótulo, mantendo-o acessível. |
| `description` | `string` | não | — | Texto auxiliar exibido abaixo do rótulo. |
| `isOptional` | `boolean` | não | `false` | Marca o campo como opcional. |
| `isRequired` | `boolean` | não | `false` | Marca o campo como obrigatório. |
| `status` | `{type: 'error' \| 'warning' \| 'success', message?: string}` | não | — | Status de validação com message opcional. |
| `statusVariant` | `'attached' \| 'detached'` | não | `'attached'` | Como a mensagem de status é posicionada em relação ao input. attached sobrepõe diretamente abaixo do input (tratamento com borda); detached flutua abaixo como elemento separado com espaçamento. |
| `renderOption` | `(option: SelectorOptionData) => ReactNode` | não | — | Função de renderização customizada para cada opção selecionável no dropdown. Use isso em vez de JSX children; dividers e sections são renderizados pelo selector. |
| `width` | `SizeValue` | não | — | Largura do campo (número = pixels, string usada como está, ex. "100%"). Dimensiona o campo inteiro (rótulo, controle e status) para mantê-los alinhados. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Selector` · Docs atualizadas: `npx @pharos-ds/cli component Selector`
