---
title: "ChatComposer"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/ChatComposer"
source: /componentes/ChatComposer
---

# ChatComposer

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Shell de layout para um chat composer. Organiza slots nomeados (drawer, header, input, footer, send) com container de page-radius, sombras de hover/focus e raio interno concêntrico para elementos filhos.

## Importação

```tsx
import {ChatComposer} from '@pharos-ds/core/ChatComposer';
```

## Exemplos

### Área interativa

```tsx
import {ChatComposer} from '@pharos-ds/core/Chat';

<ChatComposer
  density="balanced"
  elevation="low"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `density`: `compact` · `balanced` · `spacious` (padrão `balanced`)
- `elevation`: `low` · `none` (padrão `low`)
- `isDisabled`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `onSubmit` | `(value: string) => void` | sim | — | Chamado quando o usuário envia uma mensagem. |
| `onStop` | `() => void` | não | — | Chamado quando o usuário solicita parar a geração. |
| `isStopShown` | `boolean` | não | `false` | Se o botão de stop é exibido em vez do botão de send. |
| `value` | `string` | não | — | Valor do input controlado. |
| `onChange` | `(value: string) => void` | não | — | Handler de mudança para modo controlado. |
| `placeholder` | `string` | não | `'Type a message...'` | Texto placeholder exibido quando o input está vazio. |
| `isDisabled` | `boolean` | não | `false` | Desabilita o composer. |
| `density` | `'compact' \| 'balanced' \| 'spacious'` | não | `'balanced'` | Densidade visual. |
| `elevation` | `'none' \| 'low'` | não | `'low'` | Elevação em repouso do corpo do composer. `low` (o padrão) mantém o visual elevado atual: low em repouso, subindo para med no hover / focus. `none` o achata e desenha uma borda com o mesmo tratamento de repouso / hover / focus de um text input (borda enfatizada → accent no focus, correspondendo aos inset rings). |
| `drawer` | `ReactNode` | não | — | Slot: drawer colapsável acima do input: anexos, chips de contexto, etc. Use ChatComposerDrawer. |
| `headerActions` | `ReactNode` | não | — | Slot: ações do header alinhadas à esquerda (botões de anexar, mencionar). Use buttons icon-only size="sm". |
| `headerContext` | `ReactNode` | não | — | Slot: informação contextual alinhada à direita no header (uso da janela de contexto, ProgressBar, texto supporting). |
| `input` | `ReactNode` | não | — | Slot: elemento de input personalizado. Substitui o input padrão. Use ChatComposerInput para trigger menus/tokens, ou conecte qualquer input (textarea simples, rich editor) ao contrato de composição via useChatComposerContext(): leia value/onChange/onSubmit/canSend e registre um controle de foco em inputControlRef para que o clique no corpo para focar funcione. |
| `footerActions` | `ReactNode` | não | — | Slot: ações do footer alinhadas à esquerda (seletor de modelo, etc.). |
| `sendActions` | `ReactNode` | não | — | Slot: ações à esquerda do botão de send. |
| `sendButton` | `ReactNode` | não | — | Slot: botão de send personalizado. Substitui o botão padrão de send/stop. |
| `status` | `{ type: 'error' \| 'warning'; message?: string }` | não | — | Mensagem de status renderizada abaixo (ou acima) do composer. |
| `statusPosition` | `'top' \| 'bottom'` | não | `'bottom'` | Onde renderizar o status. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ChatComposer` · Docs atualizadas: `npx @pharos-ds/cli component ChatComposer`
