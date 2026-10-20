---
title: "Grid"
group: "Layout"
category: "Layout"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Grid"
source: /componentes/Grid
---

# Grid

**Grupo:** Layout · **Categoria:** Layout · **Pacote:** `@pharos-ds/core`

Um container de layout CSS grid para organizar filhos em linhas e colunas. Use Grid para galerias de cards, dashboards e qualquer layout multi-coluna. Suporta contagens fixas de colunas e colunas responsivas que reflow com base na largura disponível.

## Importação

```tsx
import {Grid} from '@pharos-ds/core/Grid';
```

## Exemplos

### Área interativa

```tsx
import {Grid} from '@pharos-ds/core/Grid';

<Grid
  columns="3"
  gap="2"
  align="start"
 />
```

Valores explorados na demo interativa:

- `columns`: `2` · `3` · `4` (padrão `3`)
- `gap`: `1` · `2` · `3` · `4` (padrão `2`)
- `align`: `start` · `center` · `end` · `stretch` (padrão `start`)

## Boas práticas

- **Faça:** Use colunas responsivas para layouts que devem se adaptar ao tamanho da tela: `columns={{minWidth: 280}}`.
- **Faça:** Limite a contagem de colunas com `max` para evitar que linhas fiquem muito largas em telas grandes.
- **Faça:** Use `repeat: 'fill'` (o padrão) para larguras de item consistentes. Use `'fit'` quando itens devem esticar para preencher espaço sobrante.
- **Evite:** Escreva CSS grid manual; Grid gerencia espaçamento e comportamento responsivo para você.
- **Evite:** Use `HStack` com wrapping para grids; use Grid em vez disso.
- **Faça:** Templates de track usam indireção via CSS variables (não estilos inline brutos), então overrides de `xstyle` de `gridTemplateColumns` (incluindo dentro de `@media` queries) têm efeito.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `columns` | `number \| {minWidth: number, max?: number, repeat?: 'fill' \| 'fit'}` | não | — | Configuração de colunas. Use um número para colunas fixas (ex.: `columns={3}`). Use um objeto para colunas responsivas: `minWidth` define a largura mínima da coluna em px, `repeat` controla o comportamento do track (`"fill"` preserva tracks vazios para larguras consistentes, `"fit"` colapsa tracks vazios para que itens estiquem; o padrão é `"fill"`), e `max` limita o número máximo de colunas. |
| `minChildWidth` | `number` | não | — | Deprecated: use `columns={{minWidth: 280}}` em vez disso. Largura mínima do item em px; habilita auto-fit responsivo. |
| `width` | `SizeValue` | não | — | Largura do container. Números são tratados como pixels, strings são usadas como estão. |
| `height` | `SizeValue` | não | — | Altura do container. Números são tratados como pixels, strings são usadas como estão. |
| `maxWidth` | `SizeValue` | não | — | Largura máxima do container. Números são tratados como pixels, strings são usadas como estão. |
| `minHeight` | `SizeValue` | não | — | Altura mínima do container. Números são tratados como pixels, strings são usadas como estão. |
| `gap` | `0 \| 0.5 \| 1 \| 1.5 \| 2 \| 3 \| 4 \| 5 \| 6 \| 8 \| 10` | não | — | Espaçamento entre todos os itens. |
| `rowGap` | `0 \| 0.5 \| 1 \| 1.5 \| 2 \| 3 \| 4 \| 5 \| 6 \| 8 \| 10` | não | — | Espaçamento de linha; sobrescreve `gap` para o eixo de linha. |
| `columnGap` | `0 \| 0.5 \| 1 \| 1.5 \| 2 \| 3 \| 4 \| 5 \| 6 \| 8 \| 10` | não | — | Espaçamento de coluna; sobrescreve `gap` para o eixo de coluna. |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | não | `'stretch'` | Alinhamento vertical dos itens. |
| `justify` | `'start' \| 'center' \| 'end' \| 'stretch'` | não | `'stretch'` | Alinhamento horizontal dos itens. |
| `children` | `ReactNode` | não | — | Conteúdo do grid. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(): não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Grid` · Docs atualizadas: `npx @pharos-ds/cli component Grid`
