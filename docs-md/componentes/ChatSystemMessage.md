---
title: "ChatSystemMessage"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/ChatSystemMessage"
source: /componentes/ChatSystemMessage
---

# ChatSystemMessage

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Mensagem de sistema centralizada para conteúdo sem sender, como separadores de data, mudanças de membros e avisos de status. Não é um bubble de chat; não tem avatar, alinhamento nem contexto de sender. Use o variant divider para quebras temporais e default para atualizações de status inline.

## Importação

```tsx
import {ChatSystemMessage} from '@pharos-ds/core/ChatSystemMessage';
```

## Exemplos

### Área interativa

```tsx
import {ChatSystemMessage} from '@pharos-ds/core/Chat';

<ChatSystemMessage
  children="Conversa iniciada"
  variant="default"
 />
```

Valores explorados na demo interativa:

- `variant`: `default` · `divider` (padrão `default`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | Conteúdo da mensagem de sistema: uma string curta e factual como uma data, aviso de entrada/saída ou mudança de status. |
| `variant` | `'default' \| 'divider'` | não | `'default'` | Variant visual. 'default' renderiza texto centralizado. 'divider' adiciona linhas horizontais em cada lado via Divider: use para separadores de data e quebras de seção. |
| `icon` | `ReactNode` | não | — | Ícone inicial que reforça o tipo de mensagem. Envolva em Icon para dimensionamento consistente. Use para mudanças de membros, avisos de criptografia ou atividade de IA. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ChatSystemMessage` · Docs atualizadas: `npx @pharos-ds/cli component ChatSystemMessage`
