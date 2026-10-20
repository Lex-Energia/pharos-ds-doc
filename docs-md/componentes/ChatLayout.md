---
title: "ChatLayout"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/ChatLayout"
source: /componentes/ChatLayout
---

# ChatLayout

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

ChatLayout é o shell de layout para interfaces de chat em página inteira. Renderiza mensagens no fluxo normal da página e ancora o composer na parte inferior com uma camada de blur de vidro fosco. A density se adapta automaticamente via observação da largura do container. Use-o para envolver ChatMessageList e ChatComposer para uma experiência de chat completa com auto-scroll integrado e botão de scroll para baixo.

## Importação

```tsx
import {ChatLayout} from '@pharos-ds/core/ChatLayout';
```

## Exemplos

### Área interativa

```tsx
import {ChatLayout, ChatComposer, ChatMessageList, ChatMessage, ChatMessageBubble} from '@pharos-ds/core/Chat';

<ChatLayout
  density="balanced"
 />
```

Valores explorados na demo interativa:

- `density`: `compact` · `balanced` · `spacious` (padrão `balanced`)

## Boas práticas

- **Faça:** Passe ChatMessageList como children e ChatComposer como a prop composer para uma interface de chat completa.
- **Faça:** Forneça um emptyState para que novas conversas mostrem um prompt em vez de uma tela em branco.
- **Faça:** Use scrollRef quando o chat estiver embutido em uma página em que um elemento pai gerencia o scroll.
- **Evite:** Não aplique altura fixa no layout; deixe-o preencher seu container com flex: 1.
- **Evite:** Não renderize múltiplas instâncias de ChatLayout no mesmo container de scroll; cada uma espera possuir seu próprio contexto de scroll.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | Conteúdo de mensagens: tipicamente ChatMessageList. Flui naturalmente na página e rola com o container. |
| `composer` | `ReactNode` | sim | — | Elemento composer: tipicamente ChatComposer. Fixo na parte inferior com dock de vidro fosco. |
| `emptyState` | `ReactNode` | não | — | Conteúdo exibido quando children está vazio. Centralizado verticalmente na área de mensagens. |
| `scrollButton` | `ReactNode \| null` | não | — | Botão de scroll para baixo renderizado acima do composer. O padrão é ChatLayoutScrollButton com integração de auto-scroll. Passe null para ocultar. |
| `scrollRef` | `React.RefObject<HTMLElement \| null>` | não | — | Ref do container de scroll externo. Quando fornecido, auto-scroll e scroll para baixo direcionam este elemento em vez da raiz do layout. Use quando o chat estiver embutido em uma página em que um elemento pai ou o body do documento faz scroll. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ChatLayout` · Docs atualizadas: `npx @pharos-ds/cli component ChatLayout`
