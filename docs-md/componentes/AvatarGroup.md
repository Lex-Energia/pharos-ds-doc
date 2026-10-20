---
title: "AvatarGroup"
group: "Avatar"
category: "Content"
package: "@pharos-ds/core"
import: "@pharos-ds/core/AvatarGroup"
source: /componentes/AvatarGroup
---

# AvatarGroup

**Grupo:** Avatar · **Categoria:** Content · **Pacote:** `@pharos-ds/core`

AvatarGroup exibe múltiplos avatares em uma linha sobreposta com um indicador de overflow opcional. Usa uma API composicional: passe filhos Avatar diretamente para que cada avatar possa ter suas próprias props (status dots, click handlers, etc.).

## Importação

```tsx
import {AvatarGroup} from '@pharos-ds/core/AvatarGroup';
```

## Exemplos

### Área interativa

```tsx
import {AvatarGroup, Avatar} from '@pharos-ds/core/AvatarGroup';

<AvatarGroup
  size="md"
 />
```

Valores explorados na demo interativa:

- `size`: `xsm` · `sm` · `md` · `lg` · `xl` (padrão `md`)

## Boas práticas

- **Faça:** Defina max para limitar avatares visíveis quando a lista é longa; 3-5 é o típico.
- **Faça:** Use AvatarGroupOverflow para conteúdo de overflow personalizado, como um trigger de popover ou botão "adicionar membro".
- **Faça:** Passe status dots, click handlers ou tooltips diretamente em cada filho Avatar.
- **Faça:** Torne avatares interativos com href ou onClick para vincular a perfis. Avatares interativos compartilham um único Tab stop; as setas movem entre eles, e o grupo anuncia uma dica de teclado para tecnologias assistivas.
- **Evite:** Não aninhe AvatarGroups; use um único grupo com todos os avatares.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | Filhos Avatar, opcionalmente seguidos por um AvatarGroupOverflow. Consumidores tratam o fatiamento para a contagem visível desejada. |
| `size` | `AvatarSize` | não | `'md'` | Tamanho aplicado a todos os avatares via context. |
| `ref` | `React.Ref<HTMLDivElement>` | não | — | Ref encaminhada para o elemento raiz. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout. |
| `data-testid` | `string` | não | — | Seletor de teste para frameworks de testes automatizados. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/AvatarGroup` · Docs atualizadas: `npx @pharos-ds/cli component AvatarGroup`
