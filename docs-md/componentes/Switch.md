---
title: "Switch"
group: "Misc"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Switch"
source: /componentes/Switch
---

# Switch

**Grupo:** Misc · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

Controle toggle para estados ligado/desligado que entram em vigor imediatamente. Suporta rótulos, descriptions, estados de loading e validação. Use para configurações ou preferências que aplicam instantaneamente. Para mudanças que exigem envio de formulário, use um checkbox.

## Importação

```tsx
import {Switch} from '@pharos-ds/core/Switch';
```

## Exemplos

### Área interativa

```tsx
import {Switch} from '@pharos-ds/core/Switch';

<Switch
  size="md"
  isDisabled={false}
  isLoading={false}
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` (padrão `md`)
- `isDisabled`: boolean (padrão `false`)
- `isLoading`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use para configurações que aplicam imediatamente; o toggle deve entrar em vigor sem uma ação de salvar separada.
- **Faça:** Combine com um rótulo claro e conciso que descreva a configuração controlada.
- **Evite:** Use para opções que exigem envio de formulário para entrar em vigor; use um checkbox.
- **Evite:** Use um switch para valores multi-estado; é estritamente ligado/desligado.
- **Evite:** Envolva um switch desabilitado em Tooltip para explicar por que está desabilitado; controles desabilitados absorvem os eventos de hover que o wrapper precisa. Use a prop disabledMessage.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `ref` | `React.Ref<HTMLInputElement>` | não | — | Ref encaminhada para o elemento <input> subjacente. |
| `label` | `string` | sim | — | Texto do rótulo do switch (sempre renderizado para acessibilidade). |
| `value` | `boolean` | sim | — | Se o switch está ligado ou desligado. |
| `onChange` | `(checked: boolean, e: ChangeEvent<HTMLInputElement>) => void` | não | — | Callback disparado quando o estado do switch muda. |
| `changeAction` | `(checked: boolean, e: ChangeEvent<HTMLInputElement>) => void \| Promise<void>` | não | — | Ação assíncrona disparada após onChange. Dispara UI otimista e mostra spinner de loading até a promise resolver. |
| `isLoading` | `boolean` | não | `false` | Se o switch está em estado de loading, mostrando um spinner dentro do thumb. |
| `isLabelHidden` | `boolean` | não | `false` | Oculta visualmente o rótulo, mantendo-o acessível a leitores de tela. |
| `description` | `string` | não | — | Texto de description exibido abaixo do rótulo. |
| `isDisabled` | `boolean` | não | `false` | Se o switch está desabilitado. |
| `size` | `'sm' \| 'md'` | não | `'md'` | Variant de tamanho que controla dimensões de track e thumb. sm (32x20px) corresponde ao ritmo vertical de checkbox/radio sm; md (40x24px, padrão) corresponde ao ritmo vertical de checkbox/radio md. |
| `htmlName` | `string` | não | — | Atributo HTML name do input checkbox subjacente, útil para envio de formulários (envia "on" quando o switch está ligado). |
| `disabledMessage` | `string` | não | — | Explica por que o switch está desabilitado. Com isDisabled, mostra tooltip em hover/foco por teclado e mantém o switch focável via aria-disabled (alternância permanece bloqueada). Use isso em vez de envolver um Switch desabilitado em Tooltip. Controles desabilitados absorvem os eventos de hover que um Tooltip externo precisa. |
| `isOptional` | `boolean` | não | `false` | Se o campo é opcional. Mutuamente exclusivo com isRequired. |
| `isRequired` | `boolean` | não | `false` | Se o switch é obrigatório. Mutuamente exclusivo com isOptional. |
| `status` | `{type: 'warning' \| 'error' \| 'success', message?: string}` | não | — | Indicador de status com type e message. Exibe uma caixa de mensagem colorida abaixo do switch e define aria-invalid quando type é "error". |
| `onFocus` | `(e: FocusEvent<HTMLInputElement>) => void` | não | — | Callback disparado quando o switch recebe foco. |
| `onBlur` | `(e: FocusEvent<HTMLInputElement>) => void` | não | — | Callback disparado quando o switch perde foco. |
| `labelIcon` | `IconType` | não | — | Ícone exibido antes do texto do rótulo. Veja `pharos docs icons` para nomes semânticos válidos. |
| `labelTooltip` | `string` | não | — | Texto de tooltip exibido em um ícone de info no final do rótulo. |
| `labelPosition` | `'start' \| 'end'` | não | `'end'` | De qual lado do switch o rótulo aparece. "start" coloca o rótulo antes do switch. |
| `labelSpacing` | `'hug' \| 'spread'` | não | `'hug'` | Comportamento de espaçamento entre rótulo e switch. "hug" coloca-os lado a lado; "spread" empurra para extremidades opostas do container (largura total). "default" é um alias deprecated de "hug". |
| `width` | `SizeValue` | não | — | Largura do campo (número = pixels, string usada como está, ex. "100%"). Dimensiona o campo inteiro (rótulo, controle e status) para mantê-los alinhados. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Switch` · Docs atualizadas: `npx @pharos-ds/cli component Switch`
