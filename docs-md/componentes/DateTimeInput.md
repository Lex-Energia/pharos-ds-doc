---
title: "DateTimeInput"
group: "DateInput"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/DateTimeInput"
source: /componentes/DateTimeInput
---

# DateTimeInput

**Grupo:** DateInput · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

DateTimeInput combina um calendar popover com um time input para selecionar data e hora em um único fluxo de interação. Use-o para agendamento, criação de eventos, definição de prazos ou qualquer campo de formulário que precise de um datetime específico.

## Importação

```tsx
import {DateTimeInput} from '@pharos-ds/core/DateTimeInput';
```

## Exemplos

### Área interativa

```tsx
import {DateTimeInput} from '@pharos-ds/core/DateTimeInput';

<DateTimeInput
  label="Data e hora"
  size="md"
  hourFormat="12h"
  hasSeconds={false}
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `hourFormat`: `12h` · `24h` (padrão `12h`)
- `hasSeconds`: boolean (padrão `false`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Forneça labels e descriptions claros para que usuários entendam qual datetime é esperado.
- **Faça:** Use min e max para restringir datetimes selecionáveis a intervalos válidos.
- **Faça:** Use hasClear quando o datetime for opcional para que o usuário possa redefini-lo.
- **Faça:** Escolha o formato de hora (12h ou 24h) que corresponda ao locale do seu público.
- **Evite:** Use DateTimeInput quando apenas uma data for necessária; use DateInput em vez disso.
- **Evite:** Use DateTimeInput quando apenas uma hora for necessária; use TimeInput em vez disso.
- **Evite:** Oculte o label sem contexto ao redor que torne óbvio o propósito do campo.
- **Evite:** Envolva um DateTimeInput desabilitado em Tooltip para explicar por que está desabilitado; triggers desabilitados engolem os eventos de hover que o wrapper precisa. Use a prop disabledMessage em vez disso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Texto do label. |
| `isLabelHidden` | `boolean` | não | `false` | Oculta visualmente o label. |
| `description` | `string` | não | — | Texto auxiliar exibido abaixo do label. |
| `isOptional` | `boolean` | não | `false` | Exibe um indicador "(optional)" ao lado do label. |
| `isRequired` | `boolean` | não | `false` | Marca o campo como obrigatório. |
| `isDisabled` | `boolean` | não | `false` | Desabilita o input e o picker. |
| `disabledMessage` | `string` | não | — | Explica por que o input está desabilitado. Com isDisabled, exibe um tooltip no hover/foco via teclado e mantém o campo focável via aria-disabled (ativação permanece bloqueada). Use isto em vez de envolver um DateTimeInput desabilitado em Tooltip. Controles desabilitados engolem os eventos de hover que um Tooltip externo precisa. |
| `value` | `ISODateTimeString` | não | — | Datetime selecionado no formato ISO 8601 (YYYY-MM-DDTHH:MM ou YYYY-MM-DDTHH:MM:SS). |
| `onChange` | `(value: ISODateTimeString \| undefined) => void` | sim | — | Callback invocado quando o datetime selecionado muda. |
| `changeAction` | `(value: ISODateTimeString \| undefined) => void \| Promise<void>` | não | — | Ação assíncrona disparada após onChange. Impulsiona atualizações otimistas de UI via useTransition. |
| `isLoading` | `boolean` | não | `false` | Se o input está em estado de carregamento. Desabilita interação e exibe um spinner. |
| `min` | `ISODateTimeString` | não | — | Datetime mínimo selecionável. Restringe seleção de data e hora. |
| `max` | `ISODateTimeString` | não | — | Datetime máximo selecionável. Restringe seleção de data e hora. |
| `dateConstraints` | `Array<(date: Date) => boolean>` | não | — | Array de funções de restrição personalizadas que desabilitam datas específicas. |
| `hasSeconds` | `boolean` | não | `false` | Inclui segundos na porção de hora. |
| `hourFormat` | `'12h' \| '24h'` | não | `'12h'` | Formato de exibição de hora. '12h' mostra AM/PM; '24h' usa notação de 24 horas. |
| `timeIncrement` | `1 \| 5 \| 10 \| 15 \| 30` | não | `1` | Minutos a adicionar ou subtrair ao usar setas no time input. |
| `hasClear` | `boolean` | não | `false` | Exibe um botão de limpar quando um valor de datetime está definido. |
| `placeholder` | `string` | não | `'Select a date'` | Texto placeholder exibido na porção de data quando nenhuma data está selecionada. |
| `timePlaceholder` | `string` | não | `'Select a time'` | Texto placeholder exibido na porção de hora quando nenhuma hora está selecionada. |
| `timeLabel` | `string` | não | — | Label acessível para a porção de hora. O padrão é "{label} time" para que fique vinculado ao label do campo e seja localizável. |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Size do controle de input. |
| `status` | `{type: 'warning' \| 'error' \| 'success', message?: string}` | não | — | Objeto indicador de status para estados de error, warning ou success com mensagem. |
| `labelTooltip` | `string` | não | — | Texto de tooltip exibido via ícone de info no final do label. |
| `numberOfMonths` | `1 \| 2` | não | `1` | Número de meses exibidos simultaneamente no calendar. |
| `width` | `SizeValue` | não | — | Largura do campo (número = pixels, string usada como está, ex.: "100%"). Dimensiona o campo inteiro (label, controle e status) para que permaneçam alinhados. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/DateTimeInput` · Docs atualizadas: `npx @pharos-ds/cli component DateTimeInput`
