---
title: "DateRangeInput"
group: "DateInput"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/DateRangeInput"
source: /componentes/DateRangeInput
---

# DateRangeInput

**Grupo:** DateInput · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

DateRangeInput permite que os usuários selecionem uma data inicial e final a partir de um popover de calendário com dois meses. Use para filtrar dados por período, geração de relatórios, dashboards de analytics e fluxos de reserva.

## Importação

```tsx
import {DateRangeInput} from '@pharos-ds/core/DateRangeInput';
```

## Exemplos

### Área interativa

```tsx
import {DateRangeInput} from '@pharos-ds/core/DateRangeInput';

<DateRangeInput
  label="Período"
  size="md"
  hasClear
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `hasClear`: boolean (padrão `true`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use presets para intervalos comuns como "Last 7 days" para acelerar a seleção.
- **Faça:** Use min/max para restringir datas selecionáveis a intervalos válidos.
- **Faça:** Mantenha hasClear ativado (padrão) para que os usuários possam redefinir o filtro.
- **Faça:** Forneça rótulos e descrições claros para que os usuários entendam o que o intervalo controla.
- **Evite:** Use DateRangeInput quando apenas uma data única for necessária; use DateInput em vez disso.
- **Evite:** Oculte o rótulo sem contexto ao redor que torne o propósito óbvio.
- **Evite:** Envolva um DateRangeInput desabilitado em Tooltip para explicar por que está desabilitado; triggers desabilitados absorvem os eventos de hover que o wrapper precisa. Use a prop disabledMessage em vez disso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Texto do rótulo. |
| `isLabelHidden` | `boolean` | não | `false` | Oculta visualmente o rótulo. |
| `description` | `string` | não | — | Texto de ajuda exibido abaixo do rótulo. |
| `isOptional` | `boolean` | não | `false` | Exibe um indicador "(optional)". |
| `isRequired` | `boolean` | não | `false` | Marca o campo como obrigatório. |
| `isDisabled` | `boolean` | não | `false` | Desabilita o trigger e o picker. |
| `disabledMessage` | `string` | não | — | Explica por que o input está desabilitado. Com isDisabled, exibe um tooltip no hover/foco por teclado e mantém o campo focável via aria-disabled (a ativação permanece bloqueada). Use isto em vez de envolver um DateRangeInput desabilitado em Tooltip. Controles desabilitados absorvem os eventos de hover que um Tooltip externo precisa. |
| `value` | `DateRange \| null` | sim | — | Intervalo de datas selecionado ou null. Importe o tipo `DateRange` de `@pharos-ds/core/DateRangeInput`; é `{start: ISODateString, end: ISODateString}`. NÃO redeclare seu próprio tipo DateRange; use o exportado para que o TypeScript corresponda estruturalmente. |
| `onChange` | `(value: DateRange \| null) => void` | sim | — | Callback quando o intervalo muda. Chamado com null ao limpar. |
| `changeAction` | `(value: DateRange \| null) => void \| Promise<void>` | não | — | Ação assíncrona disparada após onChange. Impulsiona atualizações otimistas de UI via useTransition. |
| `isLoading` | `boolean` | não | `false` | Se o input está em estado de carregamento. Desabilita interação e exibe um spinner. |
| `min` | `ISODateString` | não | — | Data mínima selecionável. `ISODateString` é um tipo literal template (`\`${number}${number}${number}${number}-${number}${number}-${number}${number}\``). Passe um literal de string como `"2026-01-28"`, não uma variável string em runtime. Importe de `@pharos-ds/core/Calendar` ou use `as ISODateString` se calcular o valor dinamicamente. |
| `max` | `ISODateString` | não | — | Data máxima selecionável. Mesmo tipo literal template que `min`: use um literal YYYY-MM-DD ou faça cast com `as ISODateString`. |
| `dateConstraints` | `Array<(date: Date) => boolean>` | não | — | Funções de restrição personalizadas para desabilitar datas específicas. |
| `presets` | `Array<DateRangePreset>` | não | — | Intervalos preset exibidos como opções de seleção rápida ao lado do calendário. |
| `hasClear` | `boolean` | não | `true` | Exibe um botão de limpar quando um intervalo está selecionado. |
| `placeholder` | `string` | não | `'Select date range'` | Texto placeholder quando nenhum intervalo está selecionado. |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Tamanho do trigger. |
| `status` | `{type: 'warning' \| 'error' \| 'success', message?: string}` | não | — | Indicador de status para estados de error, warning ou success. |
| `statusVariant` | `'attached' \| 'detached' \| 'tooltip'` | não | `'attached'` | Como a mensagem de status é posicionada em relação ao input. attached sobrepõe diretamente abaixo do input (tratamento com borda); detached flutua abaixo como elemento separado com espaçamento; tooltip oculta a caixa de mensagem e a exibe em um tooltip no ícone de status. |
| `labelTooltip` | `string` | não | — | Texto de tooltip via ícone de info no final do rótulo. |
| `numberOfMonths` | `1 \| 2` | não | `2` | Número de meses no calendário. |
| `width` | `SizeValue` | não | — | Largura do campo (número = pixels, string usada como está, ex.: "100%"). Dimensiona o campo inteiro (rótulo, controle e status) para que permaneçam alinhados. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/DateRangeInput` · Docs atualizadas: `npx @pharos-ds/cli component DateRangeInput`
