---
title: "ChatMessageMetadata"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/ChatMessageMetadata"
source: /componentes/ChatMessageMetadata
---

# ChatMessageMetadata

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Linha de metadata composicional para mensagens de chat. Renderiza timestamp, conteúdo de footer e status de entrega em uma única linha. A direção inverte para sender user. Não renderiza nada se todas as props estiverem vazias.

## Importação

```tsx
import {ChatMessageMetadata} from '@pharos-ds/core/ChatMessageMetadata';
```

## Exemplos

### Área interativa

```tsx
import {ChatMessageMetadata, ChatMessage, ChatMessageBubble} from '@pharos-ds/core/Chat';

<ChatMessageMetadata
  timestamp="2:30 PM"
  status="read"
 />
```

Valores explorados na demo interativa:

- `status`: `sending` · `sent` · `delivered` · `read` · `error` (padrão `read`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `timestamp` | `ReactNode` | não | — | Conteúdo de timestamp: uma string ou componente Timestamp. |
| `footer` | `ReactNode` | não | — | Conteúdo de footer: info do modelo, botões de reação, botão de copiar. |
| `status` | `'sending' \| 'sent' \| 'delivered' \| 'read' \| 'error'` | não | — | Status de entrega da mensagem. Exibe ícone + label. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ChatMessageMetadata` · Docs atualizadas: `npx @pharos-ds/cli component ChatMessageMetadata`
