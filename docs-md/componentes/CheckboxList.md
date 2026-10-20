---
title: "CheckboxList"
group: "Checkbox"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/CheckboxList"
source: /componentes/CheckboxList
---

# CheckboxList

**Grupo:** Checkbox · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

CheckboxList exibe um pequeno grupo de checkboxes para que os usuários ativem ou desativem várias opções de uma vez. Coloque-o em páginas de configurações, painéis de filtro ou formulários em que todas as opções devem estar visíveis sem rolagem. Para um checkbox isolado (como "Concordo com os termos"), use CheckboxInput. Se apenas uma opção puder ser escolhida, use RadioList. Se a lista for longa o suficiente para precisar de busca ou rolagem, use MultiSelector.

## Importação

```tsx
import {CheckboxList} from '@pharos-ds/core/CheckboxList';
```

## Exemplos

### Área interativa

```tsx
import {CheckboxList, CheckboxListItem} from '@pharos-ds/core/CheckboxList';

<CheckboxList
  label="Notificações"
  density="balanced"
  hasDividers={false}
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `density`: `compact` · `balanced` · `spacious` (padrão `balanced`)
- `hasDividers`: boolean (padrão `false`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Mantenha a lista curta: três a sete opções é o ideal. Além disso, mude para MultiSelector, que adiciona busca e rolagem.
- **Faça:** Ative dividers (hasDividers) quando os itens tiverem texto de ajuda abaixo; sem eles, rótulos e descrições se confundem.
- **Faça:** Escreva um rótulo de grupo que diga o que as opções representam: "Formatos de exportação" informa mais do que "Opções".
- **Evite:** Exiba um CheckboxList quando o usuário puder escolher apenas uma coisa; para isso serve o RadioList.
- **Evite:** Coloque botões ou links no slot trailing (endContent); a linha inteira já é clicável, então um botão aninhado cria dois alvos de clique concorrentes.
- **Evite:** Envolva um CheckboxList desabilitado em Tooltip para explicar por que está desabilitado; controles desabilitados absorvem os eventos de hover que o wrapper precisa. Use a prop disabledMessage em vez disso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Texto do rótulo do grupo de checkboxes (sempre renderizado para acessibilidade). |
| `children` | `ReactNode` | sim | — | Elementos CheckboxListItem. |
| `value` | `string[]` | não | — | Os valores atualmente selecionados (modo collection). |
| `onChange` | `(values: string[]) => void` | não | — | Callback disparado quando os valores selecionados mudam. |
| `changeAction` | `(values: string[]) => void \| Promise<void>` | não | — | Ação assíncrona na mudança com atualizações otimistas. Enquanto a promise está pendente, o item alternado exibe um spinner dentro do checkbox e é marcado com aria-busy. |
| `isLabelHidden` | `boolean` | não | `false` | Se o rótulo deve ser ocultado visualmente. |
| `description` | `string` | não | — | Texto de descrição exibido abaixo do rótulo. |
| `density` | `'compact' \| 'balanced' \| 'spacious'` | não | `'balanced'` | Densidade de espaçamento dos itens da lista. |
| `hasDividers` | `boolean` | não | `false` | Se deve exibir dividers entre os itens. |
| `isDisabled` | `boolean` | não | `false` | Se todos os itens de checkbox estão desabilitados. |
| `disabledMessage` | `string` | não | — | Explica por que o grupo está desabilitado. Aplica-se ao estado desabilitado do grupo inteiro (isDisabled), não por item. Com isDisabled, exibe um tooltip no hover/foco por teclado e mantém os checkboxes focáveis via aria-disabled (a alternância permanece bloqueada). Use isto em vez de envolver um CheckboxList desabilitado em Tooltip. Controles desabilitados absorvem os eventos de hover que um Tooltip externo precisa. |
| `status` | `{type: 'warning' \| 'error' \| 'success', message?: string}` | não | — | Indicador de status ({ type, message }). |
| `width` | `SizeValue` | não | — | Largura do campo (número = pixels, string usada como está, ex.: "100%"). Dimensiona o campo inteiro (rótulo, controle e status) para que permaneçam alinhados. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout. Deve ser um valor stylex.create(). |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/CheckboxList` · Docs atualizadas: `npx @pharos-ds/cli component CheckboxList`
