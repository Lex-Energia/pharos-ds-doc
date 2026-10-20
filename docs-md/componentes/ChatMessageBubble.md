---
title: "ChatMessageBubble"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/ChatMessageBubble"
source: /componentes/ChatMessageBubble
---

# ChatMessageBubble

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Contêiner de conteúdo estilizado para o "bubble" do chat. Lê o sender do contexto pai ChatMessage para estilizar automaticamente o fundo. Use filled para mensagens padrão e ghost quando o conteúdo precisa de alinhamento sem limite visível. Suporta slots name/metadata alinhados com o padding do bubble e agrupamento multi-bubble via a prop group para mensagens consecutivas do mesmo sender.

## Importação

```tsx
import {ChatMessageBubble} from '@pharos-ds/core/ChatMessageBubble';
```

## Exemplos

### Área interativa

```tsx
import {ChatMessageBubble, ChatMessage} from '@pharos-ds/core/Chat';

<ChatMessageBubble
  variant="filled"
 />
```

Valores explorados na demo interativa:

- `variant`: `filled` · `ghost` (padrão `filled`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | Conteúdo do bubble: texto, Markdown ou qualquer ReactNode. |
| `variant` | `'filled' \| 'ghost'` | não | `'filled'` | Variant visual. 'filled' renderiza fundo colorido pelo sender (padrão). 'ghost' renderiza fundo transparente, mas mantém padding para alinhamento. |
| `name` | `ReactNode` | não | — | Nome do sender renderizado acima do bubble, alinhado com o padding do texto do bubble. Use no primeiro bubble de uma mensagem. Se o primeiro conteúdo for raw (sem bubble), use a prop `name` do ChatMessage. |
| `metadata` | `ReactNode` | não | — | Conteúdo de metadata renderizado abaixo do bubble, alinhado com o padding do texto do bubble. Use no último bubble de uma mensagem. Se o último conteúdo for raw (sem bubble), use a prop `metadata` do ChatMessage. |
| `group` | `'first' \| 'middle' \| 'last'` | não | — | Posição dentro de um grupo multi-bubble. Controla a redução do border radius no lado do sender. Deixe sem definir para bubbles isolados (radius completo). |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ChatMessageBubble` · Docs atualizadas: `npx @pharos-ds/cli component ChatMessageBubble`
