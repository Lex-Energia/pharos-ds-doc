---
title: "ChatSendButton"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/ChatSendButton"
source: /componentes/ChatSendButton
---

# ChatSendButton

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Botão circular de enviar/parar para o compositor de chat. Coloque dentro do ChatComposer, onde ele lê o contexto automaticamente: sem wiring necessário. Quando o streaming começa, o botão muda de um ícone primary de envio para um ícone secondary de parar. Sobrescreva qualquer valor de contexto via props para uso standalone ou customizado.

## Importação

```tsx
import {ChatSendButton} from '@pharos-ds/core/ChatSendButton';
```

## Exemplos

### Área interativa

```tsx
import {ChatSendButton} from '@pharos-ds/core/Chat';

<ChatSendButton
  size="md"
  isStopShown={false}
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` (padrão `md`)
- `isStopShown`: boolean (padrão `false`)
- `isDisabled`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `isStopShown` | `boolean` | não | — | Se o botão de parar é exibido. Padrão: valor do contexto. |
| `isDisabled` | `boolean` | não | — | Se o botão de envio está desabilitado. Padrão: !canSend do contexto. |
| `onSend` | `() => void` | não | — | Chamado quando o usuário clica em enviar. Padrão: onSubmit do contexto. |
| `onStop` | `() => void` | não | — | Chamado quando o usuário clica em parar durante streaming. Padrão: onStop do contexto. |
| `sendIcon` | `ReactNode` | não | — | Ícone customizado para o estado de envio. Padrão: arrowUp do registro de ícones. |
| `stopIcon` | `ReactNode` | não | — | Ícone customizado para o estado de parar. Padrão: stop do registro de ícones. |
| `size` | `'sm' \| 'md'` | não | `'md'` | Tamanho do botão. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(): não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ChatSendButton` · Docs atualizadas: `npx @pharos-ds/cli component ChatSendButton`
