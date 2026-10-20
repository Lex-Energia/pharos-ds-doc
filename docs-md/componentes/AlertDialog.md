---
title: "AlertDialog"
group: "Dialog"
category: "Overlay"
package: "@pharos-ds/core"
import: "@pharos-ds/core/AlertDialog"
source: /componentes/AlertDialog
---

# AlertDialog

**Grupo:** Dialog · **Categoria:** Overlay · **Pacote:** `@pharos-ds/core`

AlertDialog solicita ao usuário que confirme uma ação destrutiva ou irreversível antes que ela aconteça. Use-o para coisas como excluir conteúdo, revogar acesso ou descartar alterações não salvas.

Para casos em que você quer exibir um alerta sem gerenciar o estado de abertura, use o hook `useImperativeAlertDialog`: chame `alert.show(options)` e renderize `alert.element` na sua árvore.

## Importação

```tsx
import {AlertDialog} from '@pharos-ds/core/AlertDialog';
```

## Exemplos

### Área interativa

```tsx
import {AlertDialog} from '@pharos-ds/core/AlertDialog';

<AlertDialog
  title="Excluir projeto?"
  description="Esta ação não pode ser desfeita."
  actionLabel="Excluir"
  isInline
  actionVariant="destructive"
  isActionLoading={false}
 />
```

Valores explorados na demo interativa:

- `isInline`: boolean (padrão `true`)
- `actionVariant`: `destructive` · `primary` · `secondary` (padrão `destructive`)
- `isActionLoading`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Torne o rótulo do botão de ação específico: "Excluir projeto" é melhor do que "OK" ou "Confirmar".
- **Faça:** Descreva o que acontecerá na descrição para que o usuário conheça as consequências antes de confirmar.
- **Evite:** Use AlertDialog para ações não destrutivas; use um Dialog padrão em vez disso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `isOpen` | `boolean` | sim | — | Se o dialog está aberto. |
| `onOpenChange` | `(isOpen: boolean) => unknown` | sim | — | Callback de mudança de visibilidade. |
| `title` | `string` | sim | — | Título do dialog. Vinculado via aria-labelledby. |
| `description` | `string` | sim | — | Descrição das consequências. Vinculada via aria-describedby. |
| `actionLabel` | `string` | sim | — | Rótulo do botão de ação. |
| `onAction` | `() => unknown` | sim | — | Chamado quando o botão de ação é clicado. NÃO fecha automaticamente. |
| `cancelLabel` | `string` | não | `'Cancel'` | Rótulo do botão de cancelar. |
| `actionVariant` | `ButtonVariant` | não | `'destructive'` | Variante do botão de ação. |
| `isActionLoading` | `boolean` | não | — | Exibe um spinner de carregamento no botão de ação. |
| `width` | `number \| string` | não | `400` | Largura do dialog. |
| `isInline` | `boolean` | não | `false` | Renderiza o conteúdo do alert dialog inline, sem comportamento modal. Apenas para previews e showcases de documentação. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/AlertDialog` · Docs atualizadas: `npx @pharos-ds/cli component AlertDialog`
