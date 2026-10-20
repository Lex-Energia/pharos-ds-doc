---
title: "Pagination"
group: "Misc"
category: "Navigation"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Pagination"
source: /componentes/Pagination
---

# Pagination

**Grupo:** Misc · **Categoria:** Navigation · **Pacote:** `@pharos-ds/core`

Pagination permite que usuários percorram páginas de conteúdo. Coloque-o abaixo de uma tabela, lista ou grid de cards para que usuários possam avançar e retroceder pelos resultados. Escolha uma variant para corresponder ao contexto: páginas numeradas para tabelas de dados, contagem para listas grandes, compact para espaços apertados ou dots para carousels.

## Importação

```tsx
import {Pagination} from '@pharos-ds/core/Pagination';
```

## Exemplos

### Área interativa

```tsx
import {Pagination} from '@pharos-ds/core/Pagination';

<Pagination
  variant="pages"
  size="md"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `variant`: `pages` · `count` · `compact` · `dots` · `none` (padrão `pages`)
- `size`: `sm` · `md` (padrão `md`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Coloque pagination abaixo do conteúdo que ele controla para que usuários vejam resultados antes de navegar.
- **Faça:** Use a variant pages para tabelas de dados em que usuários precisam pular para uma página específica.
- **Faça:** Use a variant count com um seletor de page size quando usuários precisarem controlar quantos itens veem de uma vez.
- **Faça:** Use a variant dots para carousels e walkthroughs em que o total é pequeno e a posição importa mais que um número.
- **Faça:** Passe totalItems quando o total for conhecido para que usuários vejam quanto conteúdo resta.
- **Evite:** Mostre pagination quando todos os itens cabem em uma única página; não há nada para paginar.
- **Evite:** Use a variant dots para mais de cerca de 10 páginas; os dots ficam pequenos demais para serem úteis.
- **Evite:** Coloque pagination acima do conteúdo; usuários esperam encontrá-lo na parte inferior.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `page` | `number` | sim | — | Número da página atual (base 1). Página 1 é a primeira página. |
| `onChange` | `(page: number) => void` | sim | — | Chamado quando a página muda. |
| `changeAction` | `(page: number) => void \| Promise<void>` | não | — | Ação assíncrona na mudança de página. Dispara após onChange e usa React transitions para estado de carregamento integrado. |
| `totalItems` | `number` | não | — | Número total de itens. Usado para calcular a contagem de páginas. Tem precedência sobre totalPages se ambos forem fornecidos. |
| `totalPages` | `number` | não | — | Número total de páginas. Use quando souber a contagem de páginas mas não a de itens. |
| `hasMore` | `boolean` | não | — | Se existem mais páginas após a atual. Use para pagination baseada em cursor em que o total é desconhecido. |
| `pageSize` | `number` | não | `10` | Número de itens por página. Coerced para inteiro positivo; valores não finitos voltam ao padrão. |
| `pageSizeOptions` | `number[]` | não | — | Opções de page size disponíveis. Exibe um dropdown seletor de page size quando fornecido. |
| `onPageSizeChange` | `(pageSize: number) => void` | não | — | Chamado quando o page size muda. Redefine automaticamente para a página 1. |
| `variant` | `'pages' \| 'count' \| 'compact' \| 'dots' \| 'none'` | não | `'pages'` | Variant visual que controla o que aparece entre botões prev/next. 'pages' mostra botões de número de página com ellipsis, 'count' mostra texto 'X-Y of Z', 'compact' mostra 'Page X of Y', 'dots' mostra indicadores de dot, 'none' mostra apenas botões prev/next. |
| `siblingCount` | `number` | não | `1` | Número de botões de página a exibir de cada lado da página atual. Aplica-se apenas quando variant='pages'. |
| `size` | `'sm' \| 'md'` | não | `'md'` | Size dos controles de pagination. |
| `isDisabled` | `boolean` | não | `false` | Se o componente está desabilitado. |
| `label` | `string` | não | `'Pagination'` | Label acessível para o landmark de navegação. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Pagination` · Docs atualizadas: `npx @pharos-ds/cli component Pagination`
