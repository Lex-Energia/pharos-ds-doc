---
title: "SideNavSection"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/SideNavSection"
source: /componentes/SideNavSection
---

# SideNavSection

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Agrupamento de section com title, subtitle e end content opcionais.

## Importação

```tsx
import {SideNavSection} from '@pharos-ds/core/SideNavSection';
```

## Exemplos

### Área interativa

```tsx
import {SideNav, SideNavSection, SideNavItem} from '@pharos-ds/core/SideNav';

<SideNav
  hasSubtitle
  isHeaderHidden={false}
 />
```

Valores explorados na demo interativa:

- `hasSubtitle`: boolean (padrão `true`)
- `isHeaderHidden`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `title` | `string` | sim | — | Title da section. |
| `subtitle` | `string` | não | — | Subtitle da section. |
| `children` | `ReactNode` | não | — | Itens da section. |
| `endContent` | `ReactNode` | não | — | Conteúdo do lado direito no header da section. |
| `isHeaderHidden` | `boolean` | não | `false` | Oculta visualmente o header da section mantendo-o acessível a leitores de tela. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(): não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/SideNavSection` · Docs atualizadas: `npx @pharos-ds/cli component SideNavSection`
