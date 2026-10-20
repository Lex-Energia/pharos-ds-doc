---
title: "DialogHeader"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/DialogHeader"
source: /componentes/DialogHeader
---

# DialogHeader

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Cabeçalho para dialogs com título, subtítulo opcional, botão de fechar e slots start/end content.

## Importação

```tsx
import {DialogHeader} from '@pharos-ds/core/DialogHeader';
```

## Exemplos

### Área interativa

```tsx
import {DialogHeader} from '@pharos-ds/core/Dialog';

<DialogHeader
  hasDivider
  hasSubtitle
 />
```

Valores explorados na demo interativa:

- `hasDivider`: boolean (padrão `true`)
- `hasSubtitle`: boolean (padrão `true`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `title` | `string` | não | — | Título do dialog (recebe foco ao abrir e rotula o dialog via aria-labelledby). |
| `subtitle` | `string` | não | — | Subtítulo abaixo do título. |
| `onOpenChange` | `(isOpen: boolean) => unknown` | não | — | Callback do botão de fechar (sem botão se omitido). |
| `startContent` | `ReactNode` | não | — | Conteúdo antes do título (ex.: um botão voltar). |
| `endContent` | `ReactNode` | não | — | Conteúdo após o título, antes do botão de fechar. |
| `hasDivider` | `boolean` | não | `true` | Adiciona borda na borda inferior. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/DialogHeader` · Docs atualizadas: `npx @pharos-ds/cli component DialogHeader`
