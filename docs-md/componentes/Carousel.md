---
title: "Carousel"
group: "Misc"
category: "Container"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Carousel"
source: /componentes/Carousel
---

# Carousel

**Grupo:** Misc · **Categoria:** Container · **Pacote:** `@pharos-ds/core`

Carousel rola uma linha de itens horizontalmente quando eles excedem a largura disponível. Use para grids de cards, galerias de imagens, listas de produtos ou qualquer conjunto de itens navegável sem ocupar a página inteira.

## Importação

```tsx
import {Carousel} from '@pharos-ds/core/Carousel';
```

## Exemplos

### Área interativa

```tsx
import {Carousel} from '@pharos-ds/core/Carousel';

<Carousel
  hasButtons
  hasSnap
  hasEdgeFade
 />
```

Valores explorados na demo interativa:

- `hasButtons`: boolean (padrão `true`)
- `hasSnap`: boolean (padrão `true`)
- `hasEdgeFade`: boolean (padrão `true`)

## Boas práticas

- **Faça:** Ative scroll-snap quando cada item deve encaixar precisamente na borda inicial, como em uma galeria ou lista de produtos.
- **Faça:** Sempre forneça um aria-label que descreva o conteúdo do carousel, como "Produtos em destaque" ou "Membros da equipe".
- **Faça:** Use gap e largura de item consistentes, para que o carousel pareça intencional, não conteúdo transbordando por acidente.
- **Faça:** Confie na navegação integrada: usuários de trackpad podem deslizar horizontalmente, e usuários de mouse podem segurar Shift enquanto rolam a roda para percorrer os itens.
- **Evite:** Use um carousel para conteúdo que todo usuário precisa ver. Nem todos rolam horizontalmente; coloque conteúdo crítico acima da dobra.
- **Evite:** Avance itens automaticamente. Deixe o usuário rolar no próprio ritmo.
- **Evite:** Aninhe carousels. Um carousel dentro de outro é confuso e quebra a navegação por teclado.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | Itens do carousel renderizados em um container de rolagem horizontal. |
| `gap` | `0 \| 0.5 \| 1 \| 1.5 \| 2 \| 3 \| 4` | não | `1` | Espaçamento entre itens usando a escala de tokens de spacing. |
| `hasButtons` | `boolean` | não | `true` | Mostra botões de navegação anterior/próximo quando o conteúdo é rolável. |
| `hasEdgeFade` | `boolean` | não | `true` | Mostra uma máscara de gradiente nas bordas quando o conteúdo transborda, sinalizando que há mais itens fora da tela. |
| `hasSnap` | `boolean` | não | `false` | Ativa scroll-snap para que cada filho encaixe na borda inicial. |
| `padding` | `0 \| 0.5 \| 1 \| 1.5 \| 2 \| 3 \| 4 \| 5 \| 6 \| 8 \| 10` | não | — | Padding inline dentro do container de rolagem, com scroll-padding correspondente para que os pontos de snap alinhem com a borda do conteúdo. |
| `aria-label` | `string` | não | `'Carousel'` | Rótulo acessível para a região do carousel. |
| `ref` | `React.Ref<HTMLDivElement>` | não | — | Ref encaminhada para o elemento raiz. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(). |
| `className` | `string` | não | — | Nome de classe CSS para o elemento raiz. Prefira xstyle para estilização. |
| `style` | `CSSProperties` | não | — | Estilos inline para o elemento raiz. Prefira xstyle. |
| `data-testid` | `string` | não | — | Seletor de teste para frameworks de testes automatizados. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Carousel` · Docs atualizadas: `npx @pharos-ds/cli component Carousel`
