---
title: "Timestamp"
group: "Misc"
category: "Content"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Timestamp"
source: /componentes/Timestamp
---

# Timestamp

**Grupo:** Misc · **Categoria:** Content · **Pacote:** `@pharos-ds/core`

Timestamp formata um valor de data ou hora em texto legível por humanos. Use-o para mostrar quando algo foi criado, atualizado ou está agendado; escolhendo relative para recência, absolute para precisão ou auto para deixar o componente decidir.

## Importação

```tsx
import {Timestamp} from '@pharos-ds/core/Timestamp';
```

## Exemplos

### Área interativa

```tsx
import {Timestamp} from '@pharos-ds/core/Timestamp';

<Timestamp
  format="auto"
  isLive={false}
  isTimezoneShown={false}
 />
```

Valores explorados na demo interativa:

- `format`: `relative` · `auto` · `date` · `date_long` · `date_weekday` · `date_time` · `time` · `system_date` · `system_date_time` · `system_time` (padrão `auto`)
- `isLive`: boolean (padrão `false`)
- `isTimezoneShown`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use o format auto em feeds e listas para que itens recentes mostrem "2 hours ago" e itens mais antigos mostrem a data completa automaticamente.
- **Faça:** Mantenha a formatação consistente dentro da mesma lista ou tabela; misturar timestamps relative e absolute na mesma coluna confunde a leitura.
- **Faça:** Habilite isTimezoneShown quando o público abrange múltiplos fusos horários, como um calendário de equipe global ou audit log.
- **Faça:** Use tooltipEntries quando leitores precisarem comparar fusos, como um log de incidentes em que o horário do leitor e o fuso de origem do evento importam.
- **Faça:** Rotule cada entrada quando um tooltip mostrar mais de um fuso; uma abreviação simples nem sempre é reconhecível (Tokyo renderiza como "GMT+9", não "JST").
- **Faça:** Use isLive para dashboards ativos ou feeds em tempo real para que o tempo relative permaneça preciso sem refresh da página.
- **Evite:** Não exiba timestamps Unix brutos ou strings ISO para usuários; sempre passe-os por Timestamp para obter um format legível.
- **Evite:** Evite formats system_date ou system_time em UI voltada ao usuário; eles são destinados a ferramentas de desenvolvedor, logs e contextos legíveis por máquina.
- **Evite:** Não desabilite o tooltip em timestamps relative; usuários esperam hover para a data completa quando veem "3 hours ago".
- **Evite:** Não empilhe muitos fusos em um tooltip; ele tem limite de 300px de largura e linhas rotuladas longas quebram. Duas ou três entradas leem bem.
- **Evite:** Não passe uma abreviação de offset fixo como "EST" como timezoneID; é um identificador válido mas nunca observa horário de verão, então fica uma hora errada metade do ano. Use o id de região, "America/New_York".

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `value` | `string \| number` | sim | — | A data/hora a exibir. Aceita timestamps Unix (segundos) ou strings ISO 8601. |
| `format` | `'relative' \| 'auto' \| 'date' \| 'date_long' \| 'date_weekday' \| 'date_time' \| 'time' \| 'system_date' \| 'system_date_time' \| 'system_time'` | não | `'auto'` | Format de exibição. 'relative' mostra '2 hours ago', 'date' mostra 'Mar 21, 2025', 'date_long' mostra 'March 21, 2025', 'date_weekday' mostra 'Wed, Mar 21, 2025', 'date_time' mostra 'Mar 21, 2025, 2:51 PM', 'time' mostra '2:51 PM', variantes 'system_*' usam formatação estilo ISO, 'auto' alterna de relative para date_time com base na recência. |
| `autoThreshold` | `number` | não | `604800` | Limite em segundos para o format 'auto' alternar de relative para date_time. |
| `hasTooltip` | `boolean` | não | `true` | Se deve exibir um tooltip com a data/hora completa no hover ao exibir tempo relative. |
| `tooltipEntries` | `ReadonlyArray<{timezoneID?: string; format?: TimestampTooltipFormat; label?: string}>` | não | — | Linhas a exibir no tooltip de hover, para que um instante possa ser lido em vários fusos horários e/ou formats de uma vez. Cada entrada é uma linha, na ordem dada. Omita timezoneID (ou passe 'local') para o fuso do visualizador; format usa o estilo absoluto completo como padrão e também aceita 'full' junto com todo TimestampFormat não-relative. Configurar entries também anexa o tooltip a formats absolute, que de outra forma não têm nenhum. |
| `isTimezoneShown` | `boolean` | não | `false` | Se deve anexar a abreviação de fuso horário ao texto visível. Aplica-se aos formats date_time e time; formats system_* permanecem legíveis por máquina e nunca carregam um. Use tooltipEntries para controlar os fusos horários do tooltip. |
| `isLive` | `boolean` | não | `false` | Se o tempo relative deve atualizar ao vivo (ex.: "2 min ago" → "3 min ago"). |
| `type` | `'body' \| 'large' \| 'label' \| 'supporting' \| 'code' \| 'display-1' \| 'display-2' \| 'display-3' \| 'inherit'` | não | `'supporting'` | Tipo de texto semântico do Text. Determina size, weight e line-height. |
| `size` | `'4xs' \| '3xs' \| '2xs' \| 'xsm' \| 'sm' \| 'base' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl'` | não | — | Override explícito de font size. Sobrescreve o size de type. |
| `color` | `'primary' \| 'secondary' \| 'disabled' \| 'placeholder' \| 'accent' \| 'inherit'` | não | `'secondary'` | Cor do texto. |
| `weight` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | não | — | Override de font weight. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Timestamp` · Docs atualizadas: `npx @pharos-ds/cli component Timestamp`
