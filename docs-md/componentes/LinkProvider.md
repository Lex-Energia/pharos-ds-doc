---
title: "LinkProvider"
group: "Utilities"
category: "Utility"
package: "@pharos-ds/core"
import: "@pharos-ds/core/LinkProvider"
source: /componentes/LinkProvider
---

# LinkProvider

**Grupo:** Utilities · **Categoria:** Utility · **Pacote:** `@pharos-ds/core`

Envolve sua app para substituir a tag <a> padrão por um componente de link específico do framework (ex.: Next.js Link) para roteamento client-side em todos os componentes Pharos.

## Importação

```tsx
import {LinkProvider} from '@pharos-ds/core/LinkProvider';
```

## Exemplos

### Área interativa

```tsx
import {LinkProvider} from '@pharos-ds/core/Link';

<LinkProvider />
```

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `component` | `LinkComponentType` | sim | — | Componente de link a usar para todos os elementos de link na subárvore (ex.: Next.js Link). |
| `children` | `ReactNode` | sim | — | Conteúdo a renderizar com o link provider. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/LinkProvider` · Docs atualizadas: `npx @pharos-ds/cli component LinkProvider`
