---
title: "Layout"
group: "Layout"
category: "Layout"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Layout"
source: /componentes/Layout
---

# Layout

**Grupo:** Layout · **Categoria:** Layout · **Pacote:** `@pharos-ds/core`

Layout fornece componentes composáveis para construir shells de página estruturados com slots de header, sidebar, content e footer. Use Layout para layouts completos de app e HStack/VStack para empilhamento direcional simples.

## Importação

```tsx
import {Layout} from '@pharos-ds/core/Layout';
```

## Exemplos

### Área interativa

```tsx
import {Layout} from '@pharos-ds/core/Layout';

<Layout
  height="fill"
 />
```

Valores explorados na demo interativa:

- `height`: `fill` · `auto` (padrão `fill`)

## Boas práticas

- **Faça:** Use Layout para shells de página que precisam de zonas distintas como header, sidebar(s), content e footer.
- **Faça:** Use HStack e VStack para empilhamento direcional simples dentro de uma área de conteúdo.
- **Evite:** Use Layout para layouts de empilhamento simples; use HStack ou VStack.
- **Evite:** Aninhe múltiplos componentes Layout; use um por shell de página e componha conteúdo dentro de seus slots.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `content` | `ReactNode` | não | — | Área de conteúdo principal (centro). Children passados para `<Layout>` também renderizam aqui: `<Layout>{main}</Layout>` é atalho para `<Layout content={main} />`. |
| `header` | `ReactNode` | não | — | Slot de header. |
| `footer` | `ReactNode` | não | — | Slot de footer. |
| `start` | `ReactNode` | não | — | Painel start (esquerda em LTR). |
| `end` | `ReactNode` | não | — | Painel end (direita em LTR). |
| `height` | `'fill' \| 'auto'` | não | `'fill'` | Comportamento de altura: preencher o container ou crescer com o conteúdo. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Layout` · Docs atualizadas: `npx @pharos-ds/cli component Layout`
