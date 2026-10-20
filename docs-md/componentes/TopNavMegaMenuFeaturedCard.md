---
title: "TopNavMegaMenuFeaturedCard"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/TopNavMegaMenuFeaturedCard"
source: /componentes/TopNavMegaMenuFeaturedCard
---

# TopNavMegaMenuFeaturedCard

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Card featured padrão para o slot featured do TopNavMegaMenu. Fornece um card consistente com image, title, description e link CTA opcionais.

## Importação

```tsx
import {TopNavMegaMenuFeaturedCard} from '@pharos-ds/core/TopNavMegaMenuFeaturedCard';
```

## Exemplos

### Área interativa

```tsx
import {TopNavMegaMenuFeaturedCard} from '@pharos-ds/core/TopNavMegaMenuFeaturedCard';

<TopNavMegaMenuFeaturedCard
  title="Primeiros passos"
  hasDescription
 />
```

Valores explorados na demo interativa:

- `title`: `Primeiros passos` · `Novo lançamento` · `Estudo de caso` (padrão `Primeiros passos`)
- `hasDescription`: boolean (padrão `true`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `title` | `string` | sim | — | Title do card. |
| `description` | `string` | não | — | Texto de description abaixo do title. |
| `image` | `string` | não | — | URL de image opcional exibida acima do body. |
| `imageAlt` | `string` | não | — | Alt text da image. Quando omitido, a image é explicitamente decorativa (alt="", role="presentation", aria-hidden), geralmente correto já que o card já tem um title visível. Forneça apenas quando a image transmitir informação além do title e description. |
| `linkLabel` | `string` | não | — | Texto do link CTA. |
| `linkHref` | `string` | não | — | URL do link CTA. |
| `children` | `ReactNode` | não | — | Conteúdo personalizado renderizado abaixo do body padrão. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/TopNavMegaMenuFeaturedCard` · Docs atualizadas: `npx @pharos-ds/cli component TopNavMegaMenuFeaturedCard`
