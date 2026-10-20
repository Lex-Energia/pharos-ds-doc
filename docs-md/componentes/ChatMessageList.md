---
title: "ChatMessageList"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/ChatMessageList"
source: /componentes/ChatMessageList
---

# ChatMessageList

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Container de mensagens presentacional com context de density e suporte a infinite scroll. Fornece role="log" com aria-live="polite" para acessibilidade. Um espaçador flex empurra mensagens para baixo quando a lista não está cheia.

## Importação

```tsx
import {ChatMessageList} from '@pharos-ds/core/ChatMessageList';
```

## Exemplos

### Área interativa

```tsx
import {ChatMessageList, ChatMessage, ChatMessageBubble} from '@pharos-ds/core/Chat';

<ChatMessageList
  density="balanced"
 />
```

Valores explorados na demo interativa:

- `density`: `compact` · `balanced` · `spacious` (padrão `balanced`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | Elementos de mensagem: tipicamente ChatMessage ou ChatSystemMessage. |
| `emptyState` | `ReactNode` | não | — | Conteúdo exibido quando a lista não tem mensagens. |
| `scrollToTopAction` | `() => Promise<void>` | não | — | Ação assíncrona disparada quando o usuário rola até o topo. Use para carregar mensagens mais antigas. Envolvida em useTransition: exibe um spinner no topo enquanto pendente. |
| `density` | `'compact' \| 'balanced' \| 'spacious'` | não | `'balanced'` | Densidade visual: flui para mensagens filhas via context. |
| `gap` | `0 \| 0.5 \| 1 \| 1.5 \| 2 \| 3 \| 4 \| 5 \| 6 \| 8 \| 10` | não | — | Espaço entre linhas de mensagem de nível superior. O padrão vem da density selecionada; sobrescreva para streams de eventos LLM ou linhas independentes que precisem de espaçamento diferente da density. |
| `isStreaming` | `boolean` | não | `false` | Se uma mensagem de assistant está sendo transmitida ativamente. Marca o log com aria-busy para que leitores de tela aguardem e anunciem a mensagem completa uma vez, em vez de reanunciar texto parcial a cada token. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ChatMessageList` · Docs atualizadas: `npx @pharos-ds/cli component ChatMessageList`
