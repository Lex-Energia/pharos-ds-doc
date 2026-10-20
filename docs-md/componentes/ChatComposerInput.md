---
title: "ChatComposerInput"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/ChatComposerInput"
source: /componentes/ChatComposerInput
---

# ChatComposerInput

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Input de rich text para o compositor de chat. Suporta menus de trigger (digite @ ou / para abrir um typeahead), tokens inline renderizados como badges, recall de histórico de mensagens com ArrowUp/Down, tratamento de colar/soltar arquivos e piso de font-size de 16px em dispositivos touch para evitar zoom de input no iOS. Passe para o slot input do ChatComposer quando precisar de mais do que um textarea simples.

## Importação

```tsx
import {ChatComposerInput} from '@pharos-ds/core/ChatComposerInput';
```

## Exemplos

### Área interativa

```tsx
import {ChatComposerInput} from '@pharos-ds/core/Chat';

<ChatComposerInput
  isDisabled={false}
  hasHistory
 />
```

Valores explorados na demo interativa:

- `isDisabled`: boolean (padrão `false`)
- `hasHistory`: boolean (padrão `true`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `handleRef` | `React.Ref<ChatComposerInputHandle>` | não | — | Handle imperativo para controle programático: insertToken, insertText, focus e getValue. |
| `value` | `string` | não | — | Valor controlado do input. Combine com onChange para binding bidirecional. |
| `onChange` | `(value: string) => void` | não | — | Chamado quando o valor do input muda. A string serializada inclui placeholders de tokens. |
| `placeholder` | `string` | não | `'Type a message...'` | Texto placeholder exibido quando o input está vazio. |
| `maxRows` | `number` | não | `8` | Número máximo de linhas visíveis antes do input rolar. Use um valor menor em layouts compactos. |
| `triggers` | `ChatComposerTrigger[]` | não | — | Definições de trigger para menus typeahead. Cada trigger especifica um caractere (@ ou /), uma search source e um handler onSelect que retorna o token a inserir. |
| `debounceMs` | `number` | não | `150` | Atraso de debounce para search sources assíncronas, para evitar requisições de rede excessivas. |
| `hasHistory` | `boolean` | não | `true` | Ativa ArrowUp/Down para recuperar mensagens enviadas anteriormente. |
| `label` | `string` | não | `'Message input'` | Rótulo acessível anunciado por leitores de tela. |
| `isDisabled` | `boolean` | não | `false` | Desabilita o input. Use durante streaming ou quando um pré-requisito não foi atendido. |
| `onPaste` | `(event, text) => void` | não | — | Chamado quando texto é colado. Use para interceptar ou transformar conteúdo colado. |
| `onFiles` | `(files: File[]) => void` | não | — | Chamado quando arquivos são colados ou soltos no input. Use para tratar anexos. |
| `onSubmit` | `(value: string) => void` | não | — | Chamado quando o usuário pressiona Enter sem Shift. O valor serializado inclui placeholders de tokens. |
| `onKeyDown` | `(event) => void` | não | — | Handler de key-down invocado antes do comportamento interno de Enter/histórico (após qualquer menu de trigger aberto). O ponto de extensão para teclas específicas da plataforma: chame event.preventDefault() para suprimir o envio padrão (ex.: nova linha em teclado touch), ou aja no evento para adicionar comportamento (ex.: enviar com Cmd/Ctrl+Enter). Composição IME é sempre respeitada; Enter nunca envia no meio da composição. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ChatComposerInput` · Docs atualizadas: `npx @pharos-ds/cli component ChatComposerInput`
