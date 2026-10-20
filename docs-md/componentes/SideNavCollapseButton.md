---
title: "SideNavCollapseButton"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/SideNavCollapseButton"
source: /componentes/SideNavCollapseButton
---

# SideNavCollapseButton

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Botão toggle para colapsar sidenav. Coloque dentro de SideNav (lê context automaticamente) ou fora (passe handleRef). Renderiza como um botão ghost icon-only por padrão.

## Importação

```tsx
import {SideNavCollapseButton} from '@pharos-ds/core/SideNavCollapseButton';
```

## Exemplos

### Área interativa

```tsx
import {SideNav, SideNavCollapseButton} from '@pharos-ds/core/SideNav';

<SideNav
  hasLabel
 />
```

Valores explorados na demo interativa:

- `hasLabel`: boolean (padrão `true`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `handleRef` | `RefObject<SideNavImperativeCollapseHandle \| null>` | não | — | Handle imperativo de colapso do SideNav. Necessário apenas quando o botão é renderizado fora da sidenav. |
| `label` | `string` | não | — | Label customizado do botão. Quando fornecido, renderiza como botão de texto com chevron. Quando omitido, renderiza apenas ícone. |
| `children` | `ReactNode` | não | — | Conteúdo customizado do botão. Substitui o ícone chevron e label padrão. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/SideNavCollapseButton` · Docs atualizadas: `npx @pharos-ds/cli component SideNavCollapseButton`
