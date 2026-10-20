---
title: "TopNavHeading"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/TopNavHeading"
source: /componentes/TopNavHeading
---

# TopNavHeading

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Heading de produto/suite/conta para o slot heading do TopNav. Suporta lógica inteligente de boundary de interação: logo, texto do heading, superheading/subheading com links independentes e um popover de menu opcional com indicador chevron automático.

## Importação

```tsx
import {TopNavHeading} from '@pharos-ds/core/TopNavHeading';
```

## Exemplos

### Área interativa

```tsx
import {TopNavHeading} from '@pharos-ds/core/TopNavHeading';

<TopNavHeading
  showSuperheading
  showSubheading={false}
 />
```

Valores explorados na demo interativa:

- `showSuperheading`: boolean (padrão `true`)
- `showSubheading`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `logo` | `ReactNode` | não | — | Elemento de logo a exibir antes do texto do heading. Pode ser uma imagem, NavIcon ou qualquer ReactNode. |
| `heading` | `string` | não | — | Nome do produto/app exibido como texto principal do heading. |
| `headingHref` | `string` | não | — | Link para o texto do heading (ex.: home do produto). Quando não há menu e este é o único href, todo o heading se torna um link clicável. |
| `href` | `string` | não | — | Deprecated: use headingHref em vez disso. URL para navegar quando clicado. |
| `superheading` | `string` | não | — | Texto acima do heading (ex.: nome da suite). Renderizado em estilo secondary menor. |
| `superheadingHref` | `string` | não | — | Link para o texto do superheading (ex.: home da suite). Quando fornecido junto com um menu, renderiza como link inline independente. |
| `subheading` | `string` | não | — | Texto abaixo do heading (ex.: contexto de conta). Renderizado em estilo secondary menor. |
| `subheadingHref` | `string` | não | — | Link para o texto do subheading. Quando fornecido junto com um menu, renderiza como link inline independente. |
| `headerEndContent` | `ReactNode` | não | — | Conteúdo renderizado na extremidade final da linha do heading (ex.: badge ou indicador de status). |
| `menu` | `ReactNode` | não | — | Conteúdo de menu exibido em um dropdown popover. Quando fornecido, um indicador chevron aparece automaticamente. O boundary de interação é determinado pela presença de hrefs: sem hrefs significa que todo o header é o trigger; com hrefs, links são independentes e a área do chevron é o trigger. |
| `as` | `LinkComponentType` | não | — | Componente customizado a renderizar em vez de <a>. Substitui o padrão de nível de provider definido por LinkProvider. Deve aceitar props href, className, style e children. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout. Deve ser um valor stylex.create(). |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/TopNavHeading` · Docs atualizadas: `npx @pharos-ds/cli component TopNavHeading`
