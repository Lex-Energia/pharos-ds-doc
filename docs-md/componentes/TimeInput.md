---
title: "TimeInput"
group: "Misc"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/TimeInput"
source: /componentes/TimeInput
---

# TimeInput

**Grupo:** Misc · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

TimeInput permite que os usuários insiram um horário do dia e o converte para um formato padrão. Também permite ajustar horários com as teclas de seta. Use em formulários, fluxos de agendamento ou qualquer interface em que o usuário precise selecionar um horário específico.

## Importação

```tsx
import {TimeInput} from '@pharos-ds/core/TimeInput';
```

## Exemplos

### Área interativa

```tsx
import {TimeInput} from '@pharos-ds/core/TimeInput';

<TimeInput
  hourFormat="12h"
  size="md"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `hourFormat`: `12h` · `24h` (padrão `12h`)
- `size`: `sm` · `md` · `lg` (padrão `md`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Escolha o formato de hora (12h ou 24h) que corresponda ao locale do seu público: 12 horas com AM/PM para UIs focadas nos EUA, 24 horas para contextos internacionais ou técnicos.
- **Faça:** Defina restrições min e max quando o contexto tiver um intervalo válido, como horário comercial ou janelas de evento, para que os usuários não enviem um horário fora do limite.
- **Faça:** Forneça description ou placeholder que indique o formato ou propósito esperado, como "Horário comercial: 9 AM – 5 PM".
- **Faça:** Use a prop status para exibir erros de validação inline: mostre uma mensagem como "Time must be during business hours" para que os usuários saibam exatamente o que corrigir.
- **Faça:** Ative hasClear quando o campo for opcional, para que os usuários possam remover um horário selecionado anteriormente.
- **Faça:** Posicione TimeInput dentro de InputGroup quando o horário precisar de um addon de prefixo ou sufixo em linha única, como rótulo início/fim ou marcador de fuso horário.
- **Evite:** Não use TimeInput para seleção combinada de data e hora; combine-o com um DateInput separado.
- **Evite:** Não oculte o rótulo; mesmo com pouco espaço, mantenha o rótulo visível ou forneça description para que o propósito fique claro.
- **Evite:** Envolva um TimeInput desabilitado em Tooltip para explicar por que está desabilitado; triggers desabilitados absorvem os eventos de hover que o wrapper precisa. Use a prop disabledMessage em vez disso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Texto do rótulo do input (obrigatório para acessibilidade). |
| `isLabelHidden` | `boolean` | não | `false` | Oculta visualmente o rótulo mantendo-o acessível a leitores de tela. |
| `description` | `string` | não | — | Texto de descrição exibido entre o rótulo e o input. |
| `isOptional` | `boolean` | não | `false` | Exibe um indicador "(optional)" ao lado do rótulo. Mutuamente exclusivo com isRequired. |
| `isRequired` | `boolean` | não | `false` | Marca o campo como obrigatório e define aria-required. Mutuamente exclusivo com isOptional. |
| `isDisabled` | `boolean` | não | `false` | Desabilita o input e suprime interações. |
| `disabledMessage` | `string` | não | — | Explica por que o input está desabilitado. Com isDisabled, exibe um tooltip no hover/foco por teclado e mantém o campo focável via aria-disabled (a ativação permanece bloqueada). Use isto em vez de envolver um TimeInput desabilitado em Tooltip. Controles desabilitados absorvem os eventos de hover que um Tooltip externo precisa. |
| `value` | `ISOTimeString` | não | — | Valor de hora controlado em formato ISO (HH:MM ou HH:MM:SS). |
| `onChange` | `(value: ISOTimeString \| undefined) => void` | não | — | Callback disparado quando o horário muda. Recebe undefined quando o input é limpo. |
| `changeAction` | `(value: ISOTimeString \| undefined) => void \| Promise<void>` | não | — | Ação assíncrona disparada após onChange. Envolvida em uma React transition para UI otimista; aciona o spinner de carregamento enquanto pendente. |
| `isLoading` | `boolean` | não | `false` | Coloca o input em estado de carregamento, exibindo um spinner. |
| `min` | `ISOTimeString` | não | — | Horário mínimo selecionável em formato ISO. Valores fora do intervalo são rejeitados. |
| `max` | `ISOTimeString` | não | — | Horário máximo selecionável em formato ISO. Valores fora do intervalo são rejeitados. |
| `hasSeconds` | `boolean` | não | `false` | Inclui segundos na exibição e parsing do horário. |
| `hasClear` | `boolean` | não | `false` | Exibe um botão de limpar quando há valor definido e o input não está desabilitado. |
| `hourFormat` | `'12h' \| '24h'` | não | `'12h'` | Controla o formato de exibição. '12h' exibe AM/PM (ex.: '2:30 PM'); '24h' usa notação de 24 horas (ex.: '14:30'). |
| `increment` | `number` | não | `1` | Número de minutos a adicionar ou subtrair quando o usuário pressiona a seta para cima ou para baixo. |
| `placeholder` | `string` | não | `'Select a time'` | Texto placeholder exibido quando nenhum horário está selecionado. Quando o input está em focus e vazio, uma dica de formato substitui este texto. |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Controla a altura do elemento input. |
| `status` | `{type: 'warning' \| 'error' \| 'success', message?: string}` | não | — | Indicador de status que colore a borda e exibe um ícone. Quando uma message é fornecida, é renderizada abaixo do input. |
| `statusVariant` | `'attached' \| 'detached' \| 'tooltip'` | não | `'attached'` | Como a mensagem de status é posicionada em relação ao input. attached sobrepõe diretamente abaixo do input (tratamento com borda); detached flutua abaixo como elemento separado com espaçamento; tooltip oculta a caixa de mensagem e a exibe em um tooltip no ícone de status. |
| `labelTooltip` | `string` | não | — | Texto de tooltip renderizado como ícone de info no final da linha do rótulo. |
| `width` | `SizeValue` | não | — | Largura do campo (número = pixels, string usada como está, ex.: "100%"). Dimensiona o campo inteiro (rótulo, controle e status) para que permaneçam alinhados. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/TimeInput` · Docs atualizadas: `npx @pharos-ds/cli component TimeInput`
