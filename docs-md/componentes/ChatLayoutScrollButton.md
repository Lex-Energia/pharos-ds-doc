---
title: "ChatLayoutScrollButton"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/ChatLayoutScrollButton"
source: /componentes/ChatLayoutScrollButton
---

# ChatLayoutScrollButton

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Botão flutuante de scroll para o final que aparece quando o usuário se afasta das mensagens mais recentes. Ele aparece com fade como um botão de ícone compacto e expande para exibir um label quando novas mensagens chegam. ChatLayout renderiza isso por padrão: passe um elemento customizado para a prop scrollButton para substituir, ou null para ocultar completamente.

## Importação

```tsx
import {ChatLayoutScrollButton} from '@pharos-ds/core/ChatLayoutScrollButton';
```

## Exemplos

### Área interativa

```tsx
import {ChatLayoutScrollButton} from '@pharos-ds/core/Chat';

<ChatLayoutScrollButton
  isVisible
  hasLabel
 />
```

Valores explorados na demo interativa:

- `isVisible`: boolean (padrão `true`)
- `hasLabel`: boolean (padrão `true`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `isVisible` | `boolean` | sim | — | Se o botão está visível. Vincule a uma verificação de posição de scroll para que o botão apareça apenas quando o usuário tiver rolado para cima. |
| `label` | `string` | não | — | Label opcional que expande o botão (ex.: "Novas mensagens"). Use para sinalizar conteúdo não lido abaixo da dobra. |
| `onClick` | `() => void` | sim | — | Handler de clique: tipicamente rola até o final e dispensa o indicador de nova mensagem. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ChatLayoutScrollButton` · Docs atualizadas: `npx @pharos-ds/cli component ChatLayoutScrollButton`
