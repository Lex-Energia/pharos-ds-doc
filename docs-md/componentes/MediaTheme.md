---
title: "MediaTheme"
group: "Utilities"
category: "Utility"
package: "@pharos-ds/core"
import: "@pharos-ds/core/MediaTheme"
source: /componentes/MediaTheme
---

# MediaTheme

**Grupo:** Utilities · **Categoria:** Utility · **Pacote:** `@pharos-ds/core`

Fornece overrides de tokens para conteúdo renderizado em superfícies invertidas: overlays de mídia, scrims, toasts e tooltips. O comportamento base inverte color-scheme para que todos os tokens light-dark() resolvam para o lado correto. Apenas um pequeno conjunto de tokens precisa de overrides explícitos além disso. Themes podem customizar ainda mais a aparência de componentes em superfícies de mídia via onDark/onLight em defineTheme(), com overrides de tokens (ex.: "--color-accent": "#90CAF9") e overrides de componentes (ex.: botões ghost ganham borda em superfícies dark).

## Importação

```tsx
import {MediaTheme} from '@pharos-ds/core/MediaTheme';
```

## Exemplos

### Área interativa

```tsx
import {MediaTheme} from '@pharos-ds/core/theme';

<MediaTheme
  mode="dark"
 />
```

Valores explorados na demo interativa:

- `mode`: `dark` · `light` (padrão `dark`)

## Boas práticas

- **Faça:** Use para qualquer conteúdo colocado sobre um fundo escuro (overlays de imagem, scrims de vídeo, cards escuros) ou outras superfícies invertidas como toasts e tooltips.
- **Faça:** Combine com uma cor de fundo: MediaTheme inverte o contexto de tokens, mas não adiciona um fundo. Defina backgroundColor no elemento pai.
- **Faça:** Themes podem customizar componentes em superfícies de mídia via onDark.components e onLight.components em defineTheme(). Por exemplo, adicionar uma borda a botões ghost em superfícies dark.
- **Evite:** Use MediaTheme para dark mode em nível de app: use Theme com mode="dark" ou mode="system" em vez disso. MediaTheme é para inversões locais de superfície, não esquema de cores em toda a página.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `mode` | `'dark' \| 'light'` | sim | — | Contexto de luminância da superfície: dark para conteúdo sobre fundos escuros (texto claro, interações com tint branco), light para conteúdo sobre fundos claros (texto escuro, interações com tint preto). |
| `children` | `ReactNode` | sim | — | Conteúdo a renderizar com contexto de tokens invertido. Componentes herdam as cores corretas automaticamente. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/MediaTheme` · Docs atualizadas: `npx @pharos-ds/cli component MediaTheme`
