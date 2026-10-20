---
title: "CheckboxInput"
group: "Checkbox"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/CheckboxInput"
source: /componentes/CheckboxInput
---

# CheckboxInput

**Grupo:** Checkbox · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

CheckboxInput alterna um único valor ligado/desligado. Use para configurações como "Ativar notificações", aceite de termos ou escolhas de opt-in. Para múltiplos checkboxes em um grupo, use CheckboxList.

## Importação

```tsx
import {CheckboxInput} from '@pharos-ds/core/CheckboxInput';
```

## Exemplos

### Área interativa

```tsx
import {CheckboxInput} from '@pharos-ds/core/CheckboxInput';

<CheckboxInput
  label="Aceito os termos"
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

- **Faça:** Sempre forneça um rótulo visível para que o usuário saiba o que está alternando. Use isLabelHidden apenas quando o contexto ao redor torna isso óbvio.
- **Faça:** Adicione uma description para escolhas que precisam de contexto extra, como explicar o que "Compartilhar dados de uso" realmente compartilha.
- **Faça:** Use o estado indeterminado para checkboxes "selecionar todos" quando apenas alguns itens de um grupo estão selecionados.
- **Evite:** Use um checkbox para escolhas mutuamente exclusivas; use RadioList quando apenas uma opção pode ser selecionada.
- **Evite:** Use um checkbox para ações que entram em vigor imediatamente; use um toggle switch ou botão.
- **Evite:** Envolva um checkbox desabilitado em Tooltip para explicar por que está desabilitado; controles desabilitados absorvem os eventos de hover que o wrapper precisa. Use a prop disabledMessage.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `ref` | `React.Ref<HTMLInputElement>` | não | — | Ref encaminhada para o elemento <input> subjacente. |
| `label` | `string` | sim | — | Texto do rótulo do checkbox (sempre renderizado para acessibilidade). |
| `isLabelHidden` | `boolean` | não | `false` | Se o rótulo deve ser ocultado visualmente (ainda acessível a leitores de tela). |
| `description` | `string` | não | — | Texto de description exibido abaixo do rótulo. |
| `value` | `boolean \| 'indeterminate'` | sim | — | Se o checkbox está marcado, desmarcado ou indeterminado. |
| `onChange` | `(checked: boolean, e: ChangeEvent<HTMLInputElement>) => void` | não | — | Callback disparado quando o estado do checkbox muda. |
| `changeAction` | `(checked: boolean, e: ChangeEvent<HTMLInputElement>) => void \| Promise<void>` | não | — | Ação assíncrona na mudança. Dispara após onChange se não for prevenida. Mostra spinner de loading enquanto pendente. |
| `isLoading` | `boolean` | não | `false` | Se o checkbox está em estado de loading. Mostra spinner e impede interação. |
| `isDisabled` | `boolean` | não | `false` | Se o checkbox está desabilitado. |
| `htmlName` | `string` | não | — | Atributo HTML name do input checkbox subjacente, útil para envio de formulários (envia "on" quando marcado). |
| `disabledMessage` | `string` | não | — | Explica por que o checkbox está desabilitado. Com isDisabled, mostra tooltip em hover/foco por teclado e mantém o checkbox focável via aria-disabled (alternância permanece bloqueada). Use isso em vez de envolver um CheckboxInput desabilitado em Tooltip. Controles desabilitados absorvem os eventos de hover que um Tooltip externo precisa. |
| `isReadOnly` | `boolean` | não | `false` | Se o checkbox é somente leitura. Exibe o estado atual com opacidade total, mas impede interação. Diferente de `isDisabled`, checkboxes read-only não ficam visualmente esmaecidos. |
| `isOptional` | `boolean` | não | `false` | Se o campo é opcional. Mutuamente exclusivo com isRequired. |
| `isRequired` | `boolean` | não | `false` | Se o checkbox é obrigatório. Mutuamente exclusivo com isOptional. |
| `size` | `'sm' \| 'md'` | não | `'md'` | Tamanho do checkbox. sm para layouts compactos, md para o padrão. |
| `onFocus` | `(e: FocusEvent<HTMLInputElement>) => void` | não | — | Callback disparado quando o checkbox recebe foco. |
| `onBlur` | `(e: FocusEvent<HTMLInputElement>) => void` | não | — | Callback disparado quando o checkbox perde foco. |
| `labelIcon` | `IconType` | não | — | Ícone exibido antes do texto do rótulo. Veja `pharos docs icons` para nomes semânticos válidos. |
| `status` | `{ type: 'error' \| 'warning' \| 'success', message: string }` | não | — | Indicador de status. Exibe uma caixa de mensagem colorida abaixo do checkbox e define aria-invalid para erros. |
| `width` | `SizeValue` | não | — | Largura do campo (número = pixels, string usada como está, ex. "100%"). Dimensiona o campo inteiro (rótulo, controle e status) para mantê-los alinhados. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/CheckboxInput` · Docs atualizadas: `npx @pharos-ds/cli component CheckboxInput`
