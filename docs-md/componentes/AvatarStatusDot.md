---
title: "AvatarStatusDot"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/AvatarStatusDot"
source: /componentes/AvatarStatusDot
---

# AvatarStatusDot

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Indicador de status em forma de ponto que lê o tamanho do avatar a partir do contexto e escala proporcionalmente. Cada variant combina uma cor com uma forma embutida distinta (preenchido, anel, menos) para que o status nunca seja transmitido apenas pela cor (WCAG 1.4.1).

## Importação

```tsx
import {AvatarStatusDot} from '@pharos-ds/core/AvatarStatusDot';
```

## Exemplos

### Área interativa

```tsx
import {AvatarStatusDot, Avatar} from '@pharos-ds/core/Avatar';

<AvatarStatusDot
  label="Online"
  variant="success"
  size="md"
 />
```

Valores explorados na demo interativa:

- `variant`: `success` · `neutral` · `error` (padrão `success`)
- `size`: `sm` · `md` · `lg` (padrão `md`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `variant` | `'success' \| 'neutral' \| 'error'` | não | `'success'` | Variant semântico que combina cor com uma forma distinta: success = ponto verde preenchido, neutral = anel cinza, error = ponto vermelho com barra de menos. |
| `label` | `string` | não | — | Rótulo acessível que descreve o status. Dentro de um Avatar, é composto no nome acessível do avatar (ex.: "Jane Doe, Online") — a raiz do Avatar é role="img", que poda a semântica dos filhos, então o nome composto é como o status chega à tecnologia assistiva. Pontos isolados expõem role="img" com este rótulo diretamente. |
| `icon` | `ReactNode` | não | — | Ícone centralizado dentro do ponto (oculto em tamanhos tiny). Um ícone renderizado substitui o glifo de forma embutido, então use um ícone diferente por status. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/AvatarStatusDot` · Docs atualizadas: `npx @pharos-ds/cli component AvatarStatusDot`
