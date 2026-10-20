---
title: "DateInput"
group: "DateInput"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/DateInput"
source: /componentes/DateInput
---

# DateInput

**Grupo:** DateInput · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

DateInput permite que o usuário digite ou escolha uma data em um popover de calendário. Use para agendamento, prazos, datas de reserva ou qualquer campo de formulário que precise de uma data específica do calendário.

## Importação

```tsx
import {DateInput} from '@pharos-ds/core/DateInput';
```

## Exemplos

### Área interativa

```tsx
import {DateInput} from '@pharos-ds/core/DateInput';

<DateInput
  label="Data"
  size="md"
  format="date_long"
  hasClear={false}
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `format`: `date` · `date_long` · `date_weekday` · `system_date` (padrão `date_long`)
- `hasClear`: boolean (padrão `false`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Forneça rótulos e descriptions claros para que usuários entendam qual data é esperada.
- **Faça:** Use min, max e dateConstraints para restringir datas selecionáveis a intervalos válidos.
- **Faça:** Use hasClear quando a data é opcional, para que o usuário possa redefini-la.
- **Faça:** Mostre um estado de loading com changeAction quando a data dispara um save no servidor.
- **Faça:** Use DateInput dentro de InputGroup ao adicionar um prefixo ou sufixo estático curto, como uma dica de data de vencimento.
- **Evite:** Use um DateInput para texto livre que não representa uma data de calendário.
- **Evite:** Oculte o rótulo sem contexto ao redor que torne óbvio o propósito do campo.
- **Evite:** Confie apenas no calendário; o input de texto permite digitar datas diretamente, o que é mais rápido para datas conhecidas.
- **Evite:** Envolva um DateInput desabilitado em Tooltip para explicar por que está desabilitado; triggers desabilitados absorvem os eventos de hover que o wrapper precisa. Use a prop disabledMessage.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Texto do rótulo. |
| `isLabelHidden` | `boolean` | não | `false` | Oculta visualmente o rótulo. |
| `description` | `string` | não | — | Texto auxiliar exibido abaixo do rótulo. |
| `isOptional` | `boolean` | não | `false` | Mostra um indicador "(optional)" ao lado do rótulo. |
| `isRequired` | `boolean` | não | `false` | Marca o campo como obrigatório. |
| `isDisabled` | `boolean` | não | `false` | Desabilita o input e o calendário. |
| `disabledMessage` | `string` | não | — | Explica por que o input está desabilitado. Com isDisabled, mostra tooltip em hover/foco por teclado e mantém o campo focável via aria-disabled (ativação permanece bloqueada). Use isso em vez de envolver um DateInput desabilitado em Tooltip. Controles desabilitados absorvem os eventos de hover que um Tooltip externo precisa. |
| `value` | `ISODateString` | não | — | Data selecionada no formato YYYY-MM-DD. |
| `onChange` | `(value: ISODateString \| undefined) => void` | não | — | Callback invocado quando a data selecionada muda. |
| `changeAction` | `(value: ISODateString \| undefined) => void \| Promise<void>` | não | — | Ação assíncrona disparada após onChange. Impulsiona atualizações otimistas de UI via useTransition. |
| `isLoading` | `boolean` | não | `false` | Se o input está em estado de loading. Desabilita interação e mostra um spinner. |
| `min` | `ISODateString` | não | — | Data mínima selecionável (YYYY-MM-DD). |
| `max` | `ISODateString` | não | — | Data máxima selecionável (YYYY-MM-DD). |
| `dateConstraints` | `Array<(date: Date) => boolean>` | não | — | Array de funções de constraint customizadas que desabilitam datas específicas. |
| `placeholder` | `string` | não | `'Select a date'` | Texto placeholder exibido no input de texto. |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Tamanho do controle de input. |
| `status` | `{type: 'warning' \| 'error' \| 'success', message?: string}` | não | — | Objeto indicador de status para estados de erro, aviso ou sucesso com mensagem. |
| `statusVariant` | `'attached' \| 'detached' \| 'tooltip'` | não | `'attached'` | Como a mensagem de status é posicionada em relação ao input. attached sobrepõe diretamente abaixo do input (tratamento com borda); detached flutua abaixo como elemento separado com espaçamento; tooltip oculta a caixa de mensagem e a exibe em um tooltip no ícone de status. |
| `labelTooltip` | `string` | não | — | Texto de tooltip exibido via ícone de info no final do rótulo. |
| `hasClear` | `boolean` | não | `false` | Mostra um botão de limpar (×) quando um valor de data está definido. Clicar limpa o valor e devolve o foco ao input. |
| `numberOfMonths` | `1 \| 2` | não | `1` | Número de meses exibidos simultaneamente no popover de calendário. |
| `format` | `'date' \| 'date_long' \| 'date_weekday' \| 'system_date' \| ((value: ISODateString) => string)` | não | `'date_long'` | Como o valor de data confirmado é exibido. Valores nomeados são reutilizados do vocabulário de format do Timestamp: 'date' mostra 'Mar 21, 2026', 'date_long' mostra 'March 21, 2026', 'date_weekday' mostra 'Wed, Mar 21, 2026', 'system_date' mostra '2026-03-21'. Uma função recebe o valor ISO e retorna uma string customizada. Aplica-se apenas ao valor confirmado, nunca ao texto sendo digitado. |
| `width` | `SizeValue` | não | — | Largura do campo (número = pixels, string usada como está, ex. "100%"). Dimensiona o campo inteiro (rótulo, controle e status) para mantê-los alinhados. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/DateInput` · Docs atualizadas: `npx @pharos-ds/cli component DateInput`
