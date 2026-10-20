---
title: "ChatDictationButton"
group: "Chat"
category: "Chat"
package: "@pharos-ds/core"
import: "@pharos-ds/core/ChatDictationButton"
source: /componentes/ChatDictationButton
---

# ChatDictationButton

**Grupo:** Chat · **Categoria:** Chat · **Pacote:** `@pharos-ds/core`

ChatDictationButton é um botão de alternância que inicia e para a ditado por voz dentro de um compositor de chat. Combina com useChatDictation para exibir um ícone de microfone quando ocioso e barras de frequência animadas ao ouvir. Posicione-o no slot sendActions do ChatComposer.

## Importação

```tsx
import {ChatDictationButton} from '@pharos-ds/core/ChatDictationButton';
```

## Exemplos

### Área interativa

```tsx
import {ChatDictationButton, useChatDictation} from '@pharos-ds/core/Chat';

<ChatDictationButton
  size="md"
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` (padrão `md`)

## Boas práticas

- **Faça:** Posicione o botão de ditado no slot sendActions do ChatComposer para que fique ao lado do botão de enviar, onde os usuários esperam controles de entrada por voz.
- **Faça:** Passe um inputRef para useChatDictation para que transcrições provisórias apareçam como texto fantasma no input do compositor enquanto o usuário fala.
- **Faça:** Ative hasSounds em useChatDictation para dar feedback sonoro quando o ditado inicia e para. Isso é especialmente útil quando a mudança visual do botão é sutil.
- **Evite:** Não use o botão de ditado fora do contexto de um compositor de chat. Ele foi projetado para o layout de ações de envio do compositor, não como controle de gravação isolado.
- **Evite:** Não esqueça de tratar o caso de não suportado. O botão se oculta por padrão quando o navegador não tem SpeechRecognition, mas você ainda deve projetar o compositor para funcionar sem ele.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `dictation` | `UseSpeechRecognitionReturn` | sim | — | O valor retornado por useChatDictation ou useSpeechRecognition. Controla todo o estado do botão: listening, volume, bands e toggle. |
| `size` | `'sm' \| 'md'` | não | `'md'` | Tamanho do botão. Corresponde à densidade do ChatComposer. |
| `isHiddenWhenUnsupported` | `boolean` | não | `true` | Quando true, não renderiza nada se o navegador não suportar SpeechRecognition. |
| `label` | `string` | não | — | Substituição do rótulo acessível. O padrão é "Start dictation" ou "Stop dictation" conforme o estado. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ChatDictationButton` · Docs atualizadas: `npx @pharos-ds/cli component ChatDictationButton`
