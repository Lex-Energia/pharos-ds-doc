---
title: "ChatTokenizedText"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/ChatTokenizedText"
source: /componentes/ChatTokenizedText
---

# ChatTokenizedText

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Renderiza uma string de texto com padrões de token substituídos por componentes Badge inline. Envolva qualquer corpo de mensagem dentro de ChatMessageBubble para transformar @mentions, #tags ou /commands brutos em badges estilizados. Quando nenhum token corresponde ou nenhum é fornecido, o texto renderiza como está: assim você pode usar ChatTokenizedText incondicionalmente em cada mensagem.

## Importação

```tsx
import {ChatTokenizedText} from '@pharos-ds/core/ChatTokenizedText';
```

## Exemplos

### Área interativa

```tsx
import {ChatTokenizedText} from '@pharos-ds/core/Chat';

<ChatTokenizedText
  children="Olá @ami, bem-vindo de volta!"
  hasTokens
 />
```

Valores explorados na demo interativa:

- `hasTokens`: boolean (padrão `true`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `string` | sim | — | O texto simples da mensagem contendo valores de token serializados. Padrões que correspondem ao value de um token são substituídos por componentes badge inline. |
| `tokens` | `ChatComposerToken[]` | não | — | Definições de token: mesmo tipo retornado por trigger onSelect. Cada token tem value (a string a corresponder), label (texto de exibição) e variant e icon opcionais. Usa o mesmo tipo do input do composer, então definições de token funcionam tanto para input quanto para exibição. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ChatTokenizedText` · Docs atualizadas: `npx @pharos-ds/cli component ChatTokenizedText`
