---
title: "Toast"
group: "Toast"
category: "Overlay"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Toast"
source: /componentes/Toast
---

# Toast

**Grupo:** Toast · **Categoria:** Overlay · **Pacote:** `@pharos-ds/core`

Toast exibe uma notificação breve e não bloqueante para confirmar uma ação ou apresentar informação temporária. Use para cenários em que o usuário precisa de feedback, mas não de uma decisão, como salvar, excluir ou alterar um status.

Para uso em produção, prefira o hook `useToast()`; ele trata posicionamento, empilhamento, auto-dismiss e deduplicação via `ToastViewport`. O componente `Toast` renderiza o elemento visual inline e é útil para previews, documentação e showcases estáticos onde o ciclo de vida do viewport não é necessário.

## Importação

```tsx
import {Toast} from '@pharos-ds/core/Toast';
```

## Exemplos

### Área interativa

```tsx
import {Toast} from '@pharos-ds/core/Toast';

<Toast
  type="info"
  isAutoHide
 />
```

Valores explorados na demo interativa:

- `type`: `info` · `error` (padrão `info`)
- `isAutoHide`: boolean (padrão `true`)

## Boas práticas

- **Faça:** Mantenha mensagens curtas: apenas algumas palavras que digam ao usuário o que aconteceu, como "Alterações salvas" ou "Mensagem enviada".
- **Faça:** Adicione uma ação de desfazer no slot endContent para operações reversíveis como excluir um item, para que o usuário possa recuperar sem navegar para longe.
- **Faça:** Use uniqueID para deduplicar toasts disparados por ações repetidas, como clicar em salvar várias vezes.
- **Faça:** Use type error para falhas que precisam de atenção, mas não de ação imediata; ele persiste até ser dispensado para que o usuário não perca.
- **Evite:** Não use toast para erros críticos que bloqueiam o usuário. Use Banner para mensagens persistentes no contexto que exigem reconhecimento.
- **Evite:** Não coloque conteúdo longo ou multilinha em um toast; ele desaparece após 5 segundos e o usuário pode não terminar de ler.
- **Evite:** Não exiba erros de validação de formulário como toasts. Use validação inline de field para que o usuário veja exatamente qual field precisa de correção.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `body` | `ReactNode` | sim | — | Conteúdo principal da mensagem. |
| `type` | `'info' \| 'error'` | não | `'info'` | Tipo de toast que controla a cor de fundo. Toasts error persistem até serem dispensados. |
| `isAutoHide` | `boolean` | não | — | Se o toast se auto-dispensa. Padrão true para info, false para error. |
| `autoHideDuration` | `number` | não | `5000` | Duração em ms antes do auto-dismiss. |
| `endContent` | `ReactNode` | não | — | Conteúdo renderizado na extremidade final (ex.: botão Desfazer, link). |
| `uniqueID` | `string` | não | — | Identificador único para deduplicação. |
| `collisionBehavior` | `'overwrite' \| 'ignore'` | não | `'overwrite'` | Comportamento quando um toast com uniqueID correspondente já existe. |
| `onHide` | `(reason: "auto" \| "manual") => void` | não | — | Callback disparado quando o toast é removido. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Toast` · Docs atualizadas: `npx @pharos-ds/cli component Toast`
