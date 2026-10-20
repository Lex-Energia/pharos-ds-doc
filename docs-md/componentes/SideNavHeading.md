---
title: "SideNavHeading"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/SideNavHeading"
source: /componentes/SideNavHeading
---

# SideNavHeading

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Heading de produto/suite/conta com lógica inteligente de boundary de interação para links e um popover de menu.

## Importação

```tsx
import {SideNavHeading} from '@pharos-ds/core/SideNavHeading';
```

## Exemplos

### Área interativa

```tsx
import {SideNav, SideNavHeading} from '@pharos-ds/core/SideNav';

<SideNav
  hasSuperheading={false}
  hasSubheading
 />
```

Valores explorados na demo interativa:

- `hasSuperheading`: boolean (padrão `false`)
- `hasSubheading`: boolean (padrão `true`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `heading` | `string` | sim | — | Nome do produto/app. |
| `icon` | `ReactNode` | não | — | Ícone do produto/app. |
| `headingHref` | `string` | não | — | Link do heading. |
| `superheading` | `string` | não | — | Texto acima do heading. |
| `superheadingHref` | `string` | não | — | Link do superheading. |
| `subheading` | `string` | não | — | Texto abaixo do heading. |
| `subheadingHref` | `string` | não | — | Link do subheading. |
| `menu` | `ReactNode` | não | — | Conteúdo de menu renderizado dentro de um popover. |
| `headerEndContent` | `ReactNode` | não | — | Conteúdo renderizado na extremidade trailing da linha do heading, entre texto e chevron. Útil para badges, indicadores de status ou botões de ação compactos. Oculto quando recolhido. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/SideNavHeading` · Docs atualizadas: `npx @pharos-ds/cli component SideNavHeading`
