---
title: "RadioList"
group: "Radio"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/RadioList"
source: /componentes/RadioList
---

# RadioList

**Grupo:** Radio · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

Um grupo de opções em que apenas uma pode ser selecionada por vez. Todas as opções ficam visíveis simultaneamente, facilitando comparar escolhas. Use-o quando usuários precisarem escolher uma opção de um conjunto pequeno.

## Importação

```tsx
import {RadioList} from '@pharos-ds/core/RadioList';
```

## Exemplos

### Área interativa

```tsx
import {RadioList, RadioListItem} from '@pharos-ds/core/RadioList';

<RadioList
  orientation="vertical"
  size="md"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `orientation`: `vertical` · `horizontal` (padrão `vertical`)
- `size`: `sm` · `md` (padrão `md`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Mantenha o número de opções pequeno: tipicamente de 2 a 7 escolhas.
- **Faça:** Use labels claros e concisos que diferenciem cada opção de relance.
- **Faça:** Pré-selecione uma opção padrão quando houver um padrão sensato; não deixe o grupo vazio a menos que a escolha seja opcional.
- **Evite:** Use quando múltiplas seleções forem necessárias; use CheckboxList em vez disso.
- **Evite:** Use para listas longas; use Selector para melhor descoberta.
- **Evite:** Use layout horizontal com mais de 4 opções; quebra de forma estranha.
- **Evite:** Envolva um RadioList desabilitado em Tooltip para explicar por que está desabilitado; controles desabilitados engolem os eventos de hover que o wrapper precisa. Use a prop disabledMessage em vez disso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Texto do label do radio group (sempre renderizado para acessibilidade). |
| `value` | `string` | sim | — | O value atualmente selecionado. |
| `onChange` | `(value: string) => void` | sim | — | Callback disparado quando o value selecionado muda. |
| `children` | `ReactNode` | sim | — | Elementos RadioListItem. |
| `isLabelHidden` | `boolean` | não | `false` | Se deve ocultar visualmente o label. |
| `description` | `string` | não | — | Texto de description exibido abaixo do label. |
| `orientation` | `'vertical' \| 'horizontal'` | não | `'vertical'` | Direção do layout dos radio items. |
| `isDisabled` | `boolean` | não | `false` | Se todos os radio items estão desabilitados. |
| `htmlName` | `string` | não | — | Atributo HTML name compartilhado pelos radio inputs, útil para submissões de formulário. Quando omitido, um name interno único ainda agrupa os radios. |
| `disabledMessage` | `string` | não | — | Explica por que o grupo está desabilitado. Aplica-se ao estado desabilitado do grupo inteiro (isDisabled), não por item. Com isDisabled, exibe um tooltip no hover/foco via teclado e mantém os radios focáveis via aria-disabled (seleção permanece bloqueada). Use isto em vez de envolver um RadioList desabilitado em Tooltip. Controles desabilitados engolem os eventos de hover que um Tooltip externo precisa. |
| `isRequired` | `boolean` | não | `false` | Se o radio group é obrigatório. |
| `isOptional` | `boolean` | não | `false` | Se o campo é opcional (mutuamente exclusivo com isRequired). |
| `status` | `{type: 'warning' \| 'error' \| 'success', message?: string}` | não | — | Indicador de status ({ type, message }). |
| `size` | `'sm' \| 'md'` | não | `'md'` | Size dos controles radio. |
| `labelTooltip` | `string` | não | — | Texto de tooltip para um ícone de info ao lado do label. |
| `width` | `SizeValue` | não | — | Largura do campo (número = pixels, string usada como está, ex.: "100%"). Dimensiona o campo inteiro (label, controle e status) para que permaneçam alinhados. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(): não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/RadioList` · Docs atualizadas: `npx @pharos-ds/cli component RadioList`
