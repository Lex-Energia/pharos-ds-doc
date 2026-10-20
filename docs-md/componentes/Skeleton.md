---
title: "Skeleton"
group: "Misc"
category: "Feedback & Status"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Skeleton"
source: /componentes/Skeleton
---

# Skeleton

**Grupo:** Misc · **Categoria:** Feedback & Status · **Pacote:** `@pharos-ds/core`

Um placeholder animado com shimmer que antecipa a forma do conteúdo enquanto carrega. Use para montar telas de loading que correspondem ao layout do conteúdo real. Para conteúdo com dimensões desconhecidas, use Spinner em vez disso.

## Importação

```tsx
import {Skeleton} from '@pharos-ds/core/Skeleton';
```

## Exemplos

### Área interativa

```tsx
import {Skeleton} from '@pharos-ds/core/Skeleton';

<Skeleton
  width={240}
  height={20}
  radius="3"
 />
```

Valores explorados na demo interativa:

- `radius`: `none` · `0` · `1` · `2` · `3` · `4` · `rounded` (padrão `3`)

## Boas práticas

- **Faça:** Corresponda tamanho e forma do conteúdo sendo carregado para criar um placeholder realista.
- **Faça:** Escalone múltiplos skeletons com a prop `index` para uma animação de onda natural.
- **Evite:** Use quando as dimensões do conteúdo são desconhecidas; use Spinner em vez disso.
- **Evite:** Combine com Spinner na mesma área de conteúdo; escolha um padrão de loading.
- **Evite:** Exiba skeletons indefinidamente; se o loading demorar demais, mostre um error ou empty state.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `width` | `number \| string` | não | `'100%'` | Largura em pixels (number) ou valor CSS (string). |
| `height` | `number \| string` | não | `'100%'` | Altura em pixels (number) ou valor CSS (string). |
| `radius` | `'none' \| 0 \| 1 \| 2 \| 3 \| 4 \| 'rounded'` | não | `3` | Border radius usando a escala de design tokens. Use none para cantos retos, rounded para totalmente arredondado (avatars, pills, circles). |
| `index` | `number` | não | `0` | Índice para timing de animação escalonada. Para elemento no índice n, a animação começa em DELAY_TIME + (STAGGER_TIME × n). |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Skeleton` · Docs atualizadas: `npx @pharos-ds/cli component Skeleton`
