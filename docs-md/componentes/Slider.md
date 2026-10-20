---
title: "Slider"
group: "Misc"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Slider"
source: /componentes/Slider
---

# Slider

**Grupo:** Misc · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

Controle arrastável para selecionar um valor numérico ou intervalo dentro de limites definidos. Suporta valor único e seleção de intervalo, marcas de tick, formatação customizada de valor e orientação vertical. Use quando usuários precisam explorar um intervalo contínuo, como volume, preço ou porcentagem.

## Importação

```tsx
import {Slider} from '@pharos-ds/core/Slider';
```

## Exemplos

### Área interativa

```tsx
import {Slider} from '@pharos-ds/core/Slider';

<Slider
  orientation="horizontal"
  valueDisplay="tooltip"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `orientation`: `horizontal` · `vertical` (padrão `horizontal`)
- `valueDisplay`: `tooltip` · `text` · `none` (padrão `tooltip`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Sempre forneça um rótulo, mesmo oculto visualmente, para que o slider seja acessível a leitores de tela.
- **Faça:** Formate valores com unidades significativas como "$50" ou "75%" em vez de números brutos.
- **Evite:** Use para entrada numérica precisa; combine com um text input ou use NumberInput.
- **Evite:** Defina um step tão grande que apenas algumas posições sejam possíveis; use SegmentedControl ou radio buttons.
- **Evite:** Envolva um slider desabilitado em Tooltip para explicar por que está desabilitado; controles desabilitados absorvem os eventos de hover que o wrapper precisa. Use a prop disabledMessage.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Texto do rótulo (sempre renderizado para acessibilidade). |
| `value` | `number \| [number, number]` | sim | — | Valor atual: um `number` para modo thumb único ou `[number, number]` para modo intervalo. |
| `onChange` | `(value: number) => void \| (value: [number, number]) => void` | não | — | Callback disparado na mudança de valor durante o arraste. |
| `onChangeEnd` | `(value: number) => void \| (value: [number, number]) => void` | não | — | Callback disparado quando o arraste termina. |
| `min` | `number` | não | `0` | Valor mínimo. |
| `max` | `number` | não | `100` | Valor máximo. |
| `step` | `number` | não | `1` | Incremento de step. |
| `orientation` | `'horizontal' \| 'vertical'` | não | `'horizontal'` | Orientação do slider. |
| `formatValue` | `(value: number) => string` | não | — | Função customizada de formatação de valor usada para exibição e `aria-valuetext`. |
| `valueDisplay` | `'tooltip' \| 'text' \| 'none'` | não | `'tooltip'` | Como o valor atual é exibido. |
| `marks` | `Array<{ value: number; label?: string }>` | não | — | Marcas de tick em posições especificadas com rótulos opcionais. |
| `minStepsBetweenThumbs` | `number` | não | `0` | Número mínimo de steps entre thumbs no modo intervalo; impede que thumbs se sobreponham. |
| `isDisabled` | `boolean` | não | `false` | Se o slider está desabilitado. |
| `htmlName` | `string` | não | — | Atributo HTML name para envio de formulários. Renderiza inputs hidden com o valor atual (duas entradas no modo intervalo). |
| `disabledMessage` | `string` | não | — | Explica por que o slider está desabilitado. Com isDisabled, mostra tooltip em hover/foco por teclado e mantém o thumb focável via aria-disabled (mudanças de valor permanecem bloqueadas). Use isso em vez de envolver um Slider desabilitado em Tooltip. Controles desabilitados absorvem os eventos de hover que um Tooltip externo precisa. |
| `isOptional` | `boolean` | não | `false` | Se o campo é opcional. |
| `isRequired` | `boolean` | não | `false` | Se o campo é obrigatório. |
| `isLabelHidden` | `boolean` | não | `false` | Se o rótulo deve ser ocultado visualmente. |
| `description` | `string` | não | — | Texto de description renderizado abaixo do rótulo. |
| `status` | `{type: 'warning' \| 'error' \| 'success', message?: string}` | não | — | Objeto indicador de status (`{ type, message }`) para feedback de validação. |
| `labelTooltip` | `string` | não | — | Texto de tooltip para um ícone de info exibido ao lado do rótulo. |
| `width` | `SizeValue` | não | — | Largura do campo (número = pixels, string usada como está, ex. "100%"). Dimensiona o campo inteiro (rótulo, controle e status) para mantê-los alinhados. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Slider` · Docs atualizadas: `npx @pharos-ds/cli component Slider`
