---
title: "List"
group: "List"
category: "Table & List"
package: "@pharos-ds/core"
import: "@pharos-ds/core/List"
source: /componentes/List
---

# List

**Grupo:** List · **Categoria:** Table & List · **Pacote:** `@pharos-ds/core`

Coleção vertical de itens com espaçamento, divisores e marcadores opcionais consistentes. Suporta headers, ícones, avatares, badges e itens interativos com comportamento de clique ou link. Use para exibir grupos ordenados ou não ordenados de conteúdo relacionado.

## Importação

```tsx
import {List} from '@pharos-ds/core/List';
```

## Exemplos

### Área interativa

```tsx
import {List} from '@pharos-ds/core/List';

<List
  density="balanced"
  hasDividers={false}
  listStyle="none"
 />
```

Valores explorados na demo interativa:

- `density`: `compact` · `balanced` · `spacious` (padrão `balanced`)
- `hasDividers`: boolean (padrão `false`)
- `listStyle`: `none` · `disc` · `decimal` · `circle` (padrão `none`)

## Boas práticas

- **Faça:** Forneça um header para rotular a lista e dar contexto a leitores de tela.
- **Faça:** Use slots start e end content para adicionar ícones, avatares ou badges a cada item.
- **Evite:** Coloque elementos interativos dentro de um list item interativo; isso cria alvos de clique aninhados e comportamento de foco confuso.
- **Evite:** Use uma lista para um único item ou para layout de conteúdo não relacionado; listas implicam uma coleção significativa.
- **Evite:** Misture itens clicáveis e não clicáveis na mesma lista sem distinção visual clara.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | não | — | Itens da lista (componentes ListItem). |
| `density` | `'compact' \| 'balanced' \| 'spacious'` | não | `'balanced'` | Densidade de espaçamento dos itens. |
| `hasDividers` | `boolean` | não | `false` | Mostra divisores entre itens. |
| `header` | `ReactNode` | não | — | Conteúdo do header, associado à lista via aria-labelledby. |
| `listStyle` | `'none' \| 'disc' \| 'decimal' \| 'circle'` | não | `'none'` | Estilo de marcador da lista. 'decimal' renderiza um elemento <ol> em vez de <ul>. |
| `start` | `number` | não | `1` | Número inicial para listas ordenadas (listStyle='decimal'). Define o contador CSS para começar neste valor. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(): não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/List` · Docs atualizadas: `npx @pharos-ds/cli component List`
