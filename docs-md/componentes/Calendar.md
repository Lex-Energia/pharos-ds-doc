---
title: "Calendar"
group: "Misc"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Calendar"
source: /componentes/Calendar
---

# Calendar

**Grupo:** Misc · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

Calendar permite ao usuário escolher uma data ou intervalo de datas em uma grade mensal. Use-o em fluxos de reserva, UIs de agendamento, filtros de data ou em qualquer lugar em que o usuário precise ver datas adjacentes para contexto.

## Importação

```tsx
import {Calendar} from '@pharos-ds/core/Calendar';
```

## Exemplos

### Área interativa

```tsx
import {Calendar} from '@pharos-ds/core/Calendar';

<Calendar
  numberOfMonths="1"
  hasWeekNumbers={false}
  hasOutsideDays
 />
```

Valores explorados na demo interativa:

- `numberOfMonths`: `1` · `2` (padrão `1`)
- `hasWeekNumbers`: boolean (padrão `false`)
- `hasOutsideDays`: boolean (padrão `true`)

## Boas práticas

- **Faça:** Defina min e max para limitar a seleção a uma janela válida, como apenas datas futuras para uma reserva ou o trimestre atual para um relatório.
- **Faça:** Use o modo range quando o usuário precisar escolher uma data de início e fim, como uma viagem ou solicitação de folga.
- **Faça:** Use dateConstraints para desabilitar datas específicas como fins de semana ou feriados, e explique por que estão indisponíveis.
- **Faça:** Mostre dois meses lado a lado quando o usuário frequentemente seleciona datas que cruzam a fronteira de um mês.
- **Evite:** Use um calendar para datas distantes no passado ou futuro, como data de nascimento. Um text input é mais rápido para entrada aberta.
- **Evite:** Desabilite grandes blocos de datas sem contexto. O usuário deve entender por que as datas estão indisponíveis.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `mode` | `'single' \| 'range'` | não | `'single'` | Modo de seleção. |
| `value` | `ISODateString \| DateRange` | não | — | Valor selecionado controlado. |
| `defaultValue` | `ISODateString \| DateRange` | não | — | Valor padrão não controlado. |
| `onChange` | `Function` | não | — | Callback de seleção. |
| `numberOfMonths` | `1 \| 2` | não | `1` | Número de meses a exibir. |
| `min` | `ISODateString` | não | — | Data mínima selecionável. |
| `max` | `ISODateString` | não | — | Data máxima selecionável. |
| `dateConstraints` | `Array<(date: Date) => boolean>` | não | — | Funções de restrição personalizadas. |
| `focusDate` | `ISODateString` | não | — | Mês visível controlado. |
| `onFocusDateChange` | `(focusDate: ISODateString) => void` | não | — | Callback de navegação. |
| `handleRef` | `React.Ref<CalendarHandle>` | não | — | Handle imperativo para navegação do calendar, incluindo navigateTo(). |
| `hasOutsideDays` | `boolean` | não | `true` | Mostra dias de meses adjacentes. |
| `hasWeekNumbers` | `boolean` | não | `false` | Mostra números de semana ISO. |
| `hasVariableRowCount` | `boolean` | não | `false` | Grade com número variável vs fixo de 6 linhas. |
| `weekStartsOn` | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 'sun' \| 'mon' \| 'tue' \| 'wed' \| 'thu' \| 'fri' \| 'sat'` | não | `0` | Primeiro dia da semana. Aceita um número (0=domingo) ou um nome de dia com três letras (ex.: "mon"). |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Calendar` · Docs atualizadas: `npx @pharos-ds/cli component Calendar`
