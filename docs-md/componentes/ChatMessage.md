---
title: "ChatMessage"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/ChatMessage"
source: /componentes/ChatMessage
---

# ChatMessage

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Wrapper de contexto do remetente: trata avatar, nome, metadados e alinhamento com base no papel do remetente.

## Importação

```tsx
import {ChatMessage} from '@pharos-ds/core/ChatMessage';
```

## Exemplos

### Área interativa

```tsx
import {ChatMessage, ChatMessageBubble, Avatar} from '@pharos-ds/core/Chat';

<ChatMessage
  sender="assistant"
  density="balanced"
 />
```

Valores explorados na demo interativa:

- `sender`: `user` · `assistant` (padrão `assistant`)
- `density`: `compact` · `balanced` · `spacious` (padrão `balanced`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `sender` | `'user' \| 'assistant' \| 'system'` | sim | — | Quem enviou esta mensagem: controla alinhamento e layout. |
| `children` | `ReactNode` | sim | — | Conteúdo livre: bubbles, listas de assets, tool calls, imagens. |
| `avatar` | `ReactNode` | não | — | Elemento de avatar renderizado ao lado da mensagem. Normalmente Avatar. |
| `name` | `ReactNode` | não | — | Nome do remetente renderizado acima do corpo da mensagem. Use quando o primeiro filho é conteúdo bruto (não um bubble). Se o primeiro filho for um bubble, coloque o nome na prop `name` do bubble. |
| `metadata` | `ReactNode` | não | — | Metadados renderizados abaixo do corpo da mensagem. Use quando o último filho é conteúdo bruto (não um bubble). Se o último filho for um bubble, coloque metadados na prop `metadata` do bubble. |
| `density` | `'compact' \| 'balanced' \| 'spacious'` | não | — | Densidade visual. Herdada do contexto da lista se não definida. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ChatMessage` · Docs atualizadas: `npx @pharos-ds/cli component ChatMessage`
