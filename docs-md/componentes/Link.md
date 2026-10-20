---
title: "Link"
group: "Misc"
category: "Action"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Link"
source: /componentes/Link
---

# Link

**Grupo:** Misc · **Categoria:** Action · **Pacote:** `@pharos-ds/core`

Um anchor estilizado para navegação de texto inline e standalone. Suporta links externos, variantes de underline, tooltips e componentes de link personalizados para integração com router. Use-o para navegar entre páginas ou para URLs externas.

## Importação

```tsx
import {Link} from '@pharos-ds/core/Link';
```

## Exemplos

### Área interativa

```tsx
import {Link} from '@pharos-ds/core/Link';

<Link
  href="/docs/componentes"
  children="Ver componentes"
  hasUnderline={false}
  isExternalLink={false}
  isStandalone
  color="accent"
 />
```

Valores explorados na demo interativa:

- `hasUnderline`: boolean (padrão `false`)
- `isExternalLink`: boolean (padrão `false`)
- `isStandalone`: boolean (padrão `true`)
- `color`: `accent` · `primary` · `secondary` (padrão `accent`)

## Boas práticas

- **Faça:** Escreva texto de link descritivo e conciso que comunique claramente o destino.
- **Faça:** Defina `isStandalone` quando o link aparecer fora de texto inline, para que receba dimensionamento de fonte base adequado.
- **Faça:** Defina `label` apenas quando o conteúdo do link não for texto descritivo (ex.: um link icon-only). Para links de texto, o texto visível já é o nome acessível; adicionar `label` o sobrescreve para leitores de tela, o que é prejudicial.
- **Evite:** Use Link para ações que não navegam; use um Button em vez disso.
- **Evite:** Use texto genérico como "click here" ou "read more"; descreva o destino.
- **Evite:** Defina `label` em links de texto; `aria-label` impede que tecnologias assistivas leiam o conteúdo real do link.

## Props

Nenhuma prop documentada. Rode `npx @pharos-ds/cli component Link`.

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Link` · Docs atualizadas: `npx @pharos-ds/cli component Link`
