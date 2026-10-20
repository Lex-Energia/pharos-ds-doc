---
title: "Dialog"
group: "Dialog"
category: "Overlay"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Dialog"
source: /componentes/Dialog
---

# Dialog

**Grupo:** Dialog · **Categoria:** Overlay · **Pacote:** `@pharos-ds/core`

Dialog exibe uma overlay modal que bloqueia interação com a página até o usuário responder. Use-o para confirmações de exclusão, formulários de edição, aceite de termos ou qualquer decisão que não deva ser ignorada.

Para casos em que você quer exibir um dialog sem gerenciar o estado de abertura, use o hook `useImperativeDialog`: chame `dialog.show(content)` e renderize `dialog.element` na sua árvore.

## Importação

```tsx
import {Dialog} from '@pharos-ds/core/Dialog';
```

## Exemplos

### Área interativa

```tsx
import {Dialog} from '@pharos-ds/core/Dialog';

<Dialog
  isInline
  variant="standard"
  purpose="info"
 />
```

Valores explorados na demo interativa:

- `variant`: `standard` · `fullscreen` (padrão `standard`)
- `purpose`: `required` · `form` · `info` (padrão `info`)

## Boas práticas

- **Faça:** Escolha o purpose correto: info para conteúdo dismissable, form para evitar dismiss acidental pelo backdrop, required quando o usuário deve responder.
- **Faça:** Inclua um título claro no header para que usuários entendam imediatamente o que o dialog está pedindo.
- **Faça:** Use purpose="form" para dialogs com inputs para que o usuário não perca dados acidentalmente ao clicar no backdrop.
- **Faça:** Mantenha dialogs focados em uma única tarefa; se o conteúdo crescer além do que cabe, considere uma página completa.
- **Evite:** Use um dialog para mensagens simples que poderiam ser exibidas inline ou como toast notification.
- **Evite:** Aninhe dialogs dentro de outros dialogs; reestruture o fluxo em etapas dentro de um único dialog.
- **Evite:** Use a variante fullscreen para confirmações simples; ela é destinada a conteúdo complexo como editores ou formulários longos.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `isOpen` | `boolean` | sim | — | Se o dialog está aberto. |
| `onOpenChange` | `(isOpen: boolean) => unknown` | sim | — | Callback quando a visibilidade do dialog muda. |
| `children` | `ReactNode` | sim | — | Conteúdo do dialog. |
| `width` | `number \| string` | não | `400` | Largura do dialog em pixels ou qualquer valor CSS. |
| `maxHeight` | `number \| string` | não | `'75vh'` | Altura máxima do dialog. |
| `position` | `DialogPosition` | não | — | Posição estática do dialog; centralizado por padrão quando omitido. |
| `variant` | `'standard' \| 'fullscreen'` | não | `'standard'` | Variante do dialog: fullscreen expande para preencher todo o viewport. |
| `purpose` | `'required' \| 'form' \| 'info'` | não | `'info'` | Controla comportamento de dismiss: required desabilita Escape e clique no backdrop; form desabilita clique no backdrop após interação; info permite ambos. |
| `isInline` | `boolean` | não | `false` | Renderiza o conteúdo do dialog inline sem o elemento <dialog>, backdrop ou comportamento modal. Apenas para previews e showcases de documentação. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Dialog` · Docs atualizadas: `npx @pharos-ds/cli component Dialog`
