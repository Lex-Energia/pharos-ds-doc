---
title: "Card"
group: "Card"
category: "Container"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Card"
source: /componentes/Card
---

# Card

**Grupo:** Card · **Categoria:** Container · **Pacote:** `@pharos-ds/core`

Card é um container com borda e elevação para itens discretos e autocontidos: coisas que você poderia reordenar, remover ou interagir de forma independente. Cards NÃO são a ferramenta de layout padrão. A maioria dos grupos de conteúdo não precisa de um container; espaçamento e alinhamento criam agrupamento visual naturalmente. Só use um Card quando itens precisarem de limites de interação claros ou comparação visual em um grid.

## Importação

```tsx
import {Card} from '@pharos-ds/core/Card';
```

## Exemplos

### Área interativa

```tsx
import {Card} from '@pharos-ds/core/Card';

<Card
  variant="default"
  padding="4"
 />
```

Valores explorados na demo interativa:

- `variant`: `default` · `muted` · `transparent` (padrão `default`)
- `padding`: `2` · `4` · `6` (padrão `4`)

## Boas práticas

- **Faça:** Pergunte "posso reordenar ou remover isso independentemente?" Se sim, é um card. Se não, é apenas uma seção da página: use um heading + Stack ou Section.
- **Faça:** Use cards para itens discretos: um perfil de usuário, uma notificação, uma métrica, um produto em um grid. Cada card representa uma "coisa" com limites de interação claros.
- **Faça:** Espaçamento e alinhamento sozinhos criam agrupamento visual. Nem tudo precisa de um container; tente remover o card e veja se o agrupamento ainda fica claro pelo whitespace e tipografia.
- **Faça:** Mantenha padding consistente entre cards irmãos para que se alinhem visualmente em um grid ou lista.
- **Faça:** Combine um card com Layout quando precisar de um header estruturado, conteúdo rolável e footer com ações.
- **Evite:** Use cards por padrão para agrupamento visual. Um heading + Stack com espaçamento adequado cria hierarquia sem adicionar bordas em todo lugar. Cards devem ser a exceção, não o padrão.
- **Evite:** Envolva seções de página em cards. "Configurações Gerais", "Preferências de Notificação", grupos de formulário: essas são regiões de página, use Section ou heading + stack.
- **Evite:** Crie grids de cards idênticos (ícone + heading + texto, repetidos). Varie o layout ou questione se cards são realmente necessários.
- **Evite:** Aninhe cards dentro de outros cards; achate a hierarquia ou use espaçamento e dividers em vez disso.
- **Evite:** Use variantes de cor para status; use Banner ou Badge para isso. Cards coloridos são para categorização.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `width` | `SizeValue` | não | — | Largura do card (number = pixels, string = usado como está). |
| `height` | `SizeValue` | não | — | Altura do card (number = pixels, string = usado como está). |
| `maxWidth` | `SizeValue` | não | — | Largura máxima do card. |
| `minHeight` | `SizeValue` | não | — | Altura mínima do card. |
| `children` | `ReactNode` | não | — | Conteúdo a renderizar dentro do card. |
| `padding` | `0 \| 0.5 \| 1 \| 1.5 \| 2 \| 3 \| 4 \| 5 \| 6 \| 8 \| 10` | não | `4` | Padding interno usando a escala de spacing. |
| `variant` | `'default' \| 'transparent' \| 'muted' \| 'blue' \| 'cyan' \| 'gray' \| 'green' \| 'orange' \| 'pink' \| 'purple' \| 'red' \| 'teal' \| 'yellow'` | não | `'default'` | Variante de cor de fundo. `default` usa o fundo padrão do card. `transparent` remove o fundo completamente. `muted` usa o fundo muted para cards menos enfatizados. As variantes não semânticas usam o token `--color-background-<name>` correspondente. |
| `elevation` | `'none' \| 'low' \| 'med' \| 'high'` | não | `'none'` | Profundidade da sombra em repouso. `none` é plano; `low`/`med`/`high` mapeiam para a escala de tokens de shadow. Eleve um card apenas quando ele precisar flutuar sobre o conteúdo ao redor. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Card` · Docs atualizadas: `npx @pharos-ds/cli component Card`
