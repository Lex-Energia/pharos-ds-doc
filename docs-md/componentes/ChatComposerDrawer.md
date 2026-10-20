---
title: "ChatComposerDrawer"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/ChatComposerDrawer"
source: /componentes/ChatComposerDrawer
---

# ChatComposerDrawer

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Painel drawer recolhível que fica acima do input de chat dentro do ChatComposer. Passe-o para o slot `drawer` do composer para exibir anexos, chips de contexto ou qualquer conteúdo complementar. Quando `count` é fornecido, o drawer ganha um toggle de colapso: no estado recolhido exibe um badge e label, no expandido exibe todos os children.

## Importação

```tsx
import {ChatComposerDrawer} from '@pharos-ds/core/ChatComposerDrawer';
```

## Exemplos

### Área interativa

```tsx
import {ChatComposerDrawer} from '@pharos-ds/core/Chat';

<ChatComposerDrawer
  count={2}
  label="Anexos"
  defaultIsCollapsed={false}
 />
```

Valores explorados na demo interativa:

- `defaultIsCollapsed`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | Conteúdo a renderizar dentro do drawer: tokens, chips, previews ou quaisquer elementos React. |
| `count` | `number` | não | — | Contagem total de itens exibida no badge recolhido. Quando fornecido, o drawer ganha um toggle de colapsar/expandir. |
| `label` | `string` | não | `'Items'` | Label exibido ao lado da contagem no estado recolhido. |
| `isCollapsed` | `boolean` | não | — | Estado recolhido controlado. Use com `onCollapsedChange` para controle externo. |
| `defaultIsCollapsed` | `boolean` | não | `false` | Estado recolhido inicial para uso não controlado. |
| `onCollapsedChange` | `(isCollapsed: boolean) => void` | não | — | Callback disparado quando o usuário alterna o drawer. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ChatComposerDrawer` · Docs atualizadas: `npx @pharos-ds/cli component ChatComposerDrawer`
