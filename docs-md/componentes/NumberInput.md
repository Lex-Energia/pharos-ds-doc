---
title: "NumberInput"
group: "Misc"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/NumberInput"
source: /componentes/NumberInput
---

# NumberInput

**Grupo:** Misc · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

Um form input para valores numéricos com validação integrada, restrições min/max e controles de step. Use NumberInput para quantidades, medidas, porcentagens e inputs similares.

## Importação

```tsx
import {NumberInput} from '@pharos-ds/core/NumberInput';
```

## Exemplos

### Área interativa

```tsx
import {NumberInput} from '@pharos-ds/core/NumberInput';

<NumberInput
  size="md"
  isDisabled={false}
  isIntegerOnly={false}
  units="none"
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `isDisabled`: boolean (padrão `false`)
- `isIntegerOnly`: boolean (padrão `false`)
- `units`: `none` · `%` (padrão `none`)

## Boas práticas

- **Faça:** Defina min, max e step para orientar usuários a valores válidos.
- **Faça:** Mostre units (ex.: "%" ou "GB") para que usuários saibam o que o número representa.
- **Evite:** Use NumberInput para texto livre que por acaso contém números; use TextInput em vez disso.
- **Evite:** Defina isOptional e isRequired no mesmo campo.
- **Evite:** Envolva um NumberInput desabilitado em Tooltip para explicar por que está desabilitado; controles desabilitados engolem os eventos de hover que o wrapper precisa. Use a prop disabledMessage em vez disso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Texto do label do input (sempre renderizado para acessibilidade). |
| `value` | `number \| null \| undefined` | sim | — | Valor atual do input. |
| `onChange` | `(value: number) => void` | sim | — | Callback disparado quando o valor do input muda (apenas em input válido). |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Variante de size. |
| `isLabelHidden` | `boolean` | não | — | Oculta visualmente o label (ainda acessível a leitores de tela). |
| `description` | `string` | não | — | Texto de description exibido entre o label e o input. |
| `isOptional` | `boolean` | não | — | Se o campo é opcional (mutuamente exclusivo com isRequired). |
| `isRequired` | `boolean` | não | — | Se o campo é obrigatório (mutuamente exclusivo com isOptional). |
| `isDisabled` | `boolean` | não | — | Se o input está desabilitado. |
| `disabledMessage` | `string` | não | — | Explica por que o input está desabilitado. Com isDisabled, exibe um tooltip no hover/foco via teclado e mantém o input focável via aria-disabled (o campo torna-se read-only). Use isto em vez de envolver um NumberInput desabilitado em Tooltip. |
| `placeholder` | `string` | não | — | Texto placeholder. |
| `labelTooltip` | `string` | não | — | Texto de tooltip a exibir em um ícone de info no final do label. |
| `startIcon` | `IconType` | não | — | Ícone a exibir no início do input. Veja `pharos docs icons` para nomes semânticos válidos. |
| `labelIcon` | `IconType` | não | — | Ícone a exibir antes do texto do label. Veja `pharos docs icons` para nomes semânticos válidos. |
| `status` | `{type: 'error' \| 'warning' \| 'success', message?: string}` | não | — | Status de validação com mensagem opcional. |
| `statusVariant` | `'attached' \| 'detached' \| 'tooltip'` | não | `'attached'` | Como a mensagem de status é posicionada em relação ao input. attached sobrepõe diretamente abaixo do input (tratamento com borda); detached flutua abaixo como elemento separado com espaçamento; tooltip oculta a caixa de mensagem e a exibe em um tooltip no ícone de status. |
| `min` | `number \| null` | não | — | Valor mínimo permitido. |
| `max` | `number \| null` | não | — | Valor máximo permitido. |
| `step` | `number \| null` | não | `1` | Incremento de step do input. |
| `units` | `string \| null` | não | — | Texto de units a exibir no final do input (ex.: "%" ou "GB"). |
| `isIntegerOnly` | `boolean` | não | — | Permite apenas valores inteiros (sem ponto flutuante). |
| `hasClear` | `boolean` | não | `false` | Exibe um botão de limpar (×) quando o input tem um valor. Quando true, o callback onChange também aceita null para sinalizar que o usuário limpou o input. |
| `htmlName` | `string` | não | — | Atributo HTML name para submissões de formulário. |
| `autoComplete` | `string` | não | — | Atributo HTML autocomplete. |
| `width` | `SizeValue` | não | — | Largura do campo (número = pixels, string usada como está, ex.: "100%"). Dimensiona o campo inteiro (label, controle e status) para que permaneçam alinhados. |
| `hasAutoFocus` | `boolean` | não | — | Se deve focar o input ao montar. |
| `onFocus` | `(e: FocusEvent<HTMLInputElement>) => void` | não | — | Callback disparado quando o input recebe foco. |
| `onBlur` | `(e: FocusEvent<HTMLInputElement>) => void` | não | — | Callback disparado quando o input perde foco. |
| `onEnter` | `() => void` | não | — | Callback disparado quando o usuário pressiona a tecla Enter. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/NumberInput` · Docs atualizadas: `npx @pharos-ds/cli component NumberInput`
