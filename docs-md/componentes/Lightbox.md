---
title: "Lightbox"
group: "Misc"
category: "Overlay"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Lightbox"
source: /componentes/Lightbox
---

# Lightbox

**Grupo:** Misc · **Categoria:** Overlay · **Pacote:** `@pharos-ds/core`

Overlay em tela cheia para visualizar imagens e vídeos em resolução completa. Suporta modos de item único e galeria com navegação prev/next, zoom e pan opcionais para imagens e controles nativos de vídeo.

## Importação

```tsx
import {Lightbox} from '@pharos-ds/core/Lightbox';
```

## Exemplos

### Área interativa

```tsx
import {Lightbox} from '@pharos-ds/core/Lightbox';

<Lightbox
  hasZoom={false}
 />
```

Valores explorados na demo interativa:

- `hasZoom`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Sempre forneça alt text para cada imagem para acessibilidade com leitores de tela.
- **Faça:** Use o modo galeria com onIndexChange para conjuntos multi-imagem.
- **Faça:** Ative hasZoom apenas ao visualizar imagens de alta resolução que se beneficiem de inspeção detalhada.
- **Evite:** Use o lightbox para conteúdo que não seja imagem; ele é especializado para imagens.
- **Evite:** Aninhe conteúdo interativo dentro de captions; mantenha-as como texto simples.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `isOpen` | `boolean` | sim | — | Se o lightbox está aberto. |
| `onOpenChange` | `(isOpen: boolean) => void` | sim | — | Callback quando o estado aberto do lightbox muda. |
| `media` | `LightboxMedia \| LightboxMedia[]` | sim | — | Mídia a exibir. Passe um objeto único para um item ou um array para modo galeria com navegação prev/next. Cada item é {src: string, alt: string, caption?: ReactNode, type?: 'image' \| 'video'}; type padrão é 'image', e zoom/pan é desabilitado para 'video'. |
| `index` | `number` | não | — | Índice atual no modo galeria (quando media é um array). |
| `onIndexChange` | `(index: number) => void` | não | — | Callback quando o índice da galeria muda via navegação prev/next. |
| `hasZoom` | `boolean` | não | `false` | Habilita zoom no duplo clique (apenas imagens). Quando ampliado, arraste para pan. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout. Deve ser um valor stylex.create(). |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Lightbox` · Docs atualizadas: `npx @pharos-ds/cli component Lightbox`
