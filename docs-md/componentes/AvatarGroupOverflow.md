---
title: "AvatarGroupOverflow"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/AvatarGroupOverflow"
source: /componentes/AvatarGroupOverflow
---

# AvatarGroupOverflow

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

AvatarGroupOverflow aparece no final de um AvatarGroup para resumir pessoas que não são exibidas individualmente. Use quando um grupo é limitado a um pequeno número de avatares visíveis, mas a contagem oculta ainda importa.

## Importação

```tsx
import {AvatarGroupOverflow} from '@pharos-ds/core/AvatarGroupOverflow';
```

## Exemplos

### Área interativa

```tsx
import {AvatarGroupOverflow, AvatarGroup, Avatar} from '@pharos-ds/core/AvatarGroup';

<AvatarGroupOverflow
  count={5}
  size="md"
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)

## Boas práticas

- **Faça:** Passe a contagem real de ocultos para `count`, para que o rótulo acessível corresponda ao indicador visível.
- **Faça:** Use texto customizado curto como `+12` ou `99+`. O indicador é circular para contagens curtas e cresce em formato de pill para contagens maiores, para que o número sempre caiba.
- **Faça:** Forneça `onClick` quando o overflow abrir uma lista de membros, popover ou view de detalhes.
- **Evite:** Não use rótulos longos dentro do indicador; coloque detalhes mais extensos dos participantes ao lado do grupo.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `count` | `number` | sim | — | Número de avatares ocultos. Usado para o rótulo padrão `+N` e o rótulo acessível. |
| `children` | `ReactNode` | não | — | Texto customizado opcional da contagem renderizado dentro do indicador. Omita para usar o rótulo padrão `+N`. |
| `onClick` | `() => void` | não | — | Callback disparado quando o indicador de overflow é clicado. Quando fornecido, o indicador é renderizado como um botão focável. |
| `ref` | `React.Ref<HTMLElement>` | não | — | Ref encaminhada para o elemento indicador de overflow. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/AvatarGroupOverflow` · Docs atualizadas: `npx @pharos-ds/cli component AvatarGroupOverflow`
