---
title: "Table"
group: "Table"
category: "Table & List"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Table"
source: /componentes/Table
---

# Table

**Grupo:** Table · **Categoria:** Table & List · **Pacote:** `@pharos-ds/core`

Table exibe dados estruturados em linhas e colunas com dimensionalidade consistente. Suporta conteúdo rico de células, ordenação, seleção, paginação e gerenciamento de colunas por um sistema composável de plugins. Use Table para conjuntos de dados com estrutura uniforme; para dados mais simples ou inconsistentes, considere um layout de lista ou card.

## Importação

```tsx
import {Table} from '@pharos-ds/core/Table';
```

## Exemplos

### Área interativa

```tsx
import {Table} from '@pharos-ds/core/Table';

<Table
  density="balanced"
  isStriped={false}
  hasHover={false}
 />
```

Valores explorados na demo interativa:

- `density`: `compact` · `balanced` · `spacious` (padrão `balanced`)
- `isStriped`: boolean (padrão `false`)
- `hasHover`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use density e variants de divider para corresponder à densidade de informação e necessidades de varredura dos seus dados.
- **Faça:** Componha conteúdo rico de células com componentes Pharos como Badge, StatusDot e Avatar via renderCell.
- **Faça:** Defina width explícita em cada coluna usando proportional() ou pixel(). proportional(1) dá distribuição flex igual com mínimo de 120px que impede colunas de colapsar em viewports estreitas. Omitir width pula o mínimo.
- **Faça:** Use a API data-driven de React Server Components: proportional(), pixel() e definições de coluna sem props de função são server-safe. Colunas usando renderCell (ou qualquer prop de função) precisam da table envolvida em um componente "use client", já que funções não cruzam a fronteira server-client.
- **Evite:** Use uma table para dados sem colunas consistentes. Use um layout de lista ou card para conteúdo heterogêneo.
- **Evite:** Ative todos os plugins de uma vez. Adicione apenas os recursos que seu caso de uso exige para manter a interface focada.
- **Evite:** Omita width em colunas com muito texto; sem proportional() explícita elas não têm mínimo e podem ser esmagadas para perto de zero no mobile.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `data` | `T[]` | não | — | Array de itens de dados a renderizar como linhas. T deve estender Record<string, unknown> (use `interface MyRow extends Record<string, unknown>` para tipos customizados). |
| `columns` | `TableColumn<T>[]` | não | — | Definições de coluna: cada coluna tem {key, header, width?, align?, renderCell?}. O campo `header` define o texto do heading da coluna. Se omitido, colunas são auto-geradas a partir das chaves do objeto data. O campo `width` é tipado como `ColumnWidth` (não um número); use helpers `proportional(n)` ou `pixel(n)` importados de `@pharos-ds/core/Table`. Exemplo: `width: pixel(120)` para 120px fixo, `width: proportional(1)` para distribuição flex. |
| `idKey` | `(keyof T & string) \| ((item: T) => string \| number)` | não | — | Chave de linha para reconciliação React. Passe um nome de propriedade string ou uma função. Usa índice da linha como fallback se omitido. |
| `density` | `'compact' \| 'balanced' \| 'spacious'` | não | `'balanced'` | Densidade de linha controlando padding de célula e tamanho de fonte. |
| `dividers` | `'rows' \| 'columns' \| 'grid' \| 'none'` | não | `'rows'` | Estilo de divisor renderizado entre células. |
| `isStriped` | `boolean` | não | `false` | Aplica um wash de fundo a linhas de número par. |
| `hasHover` | `boolean` | não | `false` | Aplica destaque de hover a linhas em dispositivos pointer. |
| `verticalAlign` | `'middle' \| 'top' \| 'bottom'` | não | `'middle'` | Alinhamento vertical para células de linhas do body. Controla `vertical-align` nos elementos `<td>`. |
| `textOverflow` | `'wrap' \| 'truncate'` | não | `'wrap'` | Como o texto de células do body se comporta quando excede a largura da coluna. 'wrap' deixa o texto quebrar e a linha crescer; 'truncate' recorta com ellipsis (células renderizadas por padrão mostram tooltip no hover quando truncadas). Células de header sempre truncam. |
| `plugins` | `Record<string, TablePlugin<T>>` | não | — | Plugins nomeados que estendem o comportamento da table via pipeline de transform. Convertidos em array ordenado internamente. |
| `rowIndexStart` | `number` | não | `1` | Índice ARIA de linha (base 1) para a primeira linha do body renderizada. A ordem da linha é uma preocupação de acessibilidade independente de qualquer coluna de índice visível; definir isso (ou rowCount) faz a table emitir aria-rowindex em linhas do body e aria-rowcount na table. Para view paginada/janelada, passe o offset da primeira linha visível (ex. (page - 1) * pageSize + 1) para que aria-rowindex reflita a posição no dataset completo. Apenas modo data-driven. |
| `rowCount` | `number` | não | — | Número total de linhas do body em todas as páginas/janelas, usado para aria-rowcount para que tecnologias assistivas anunciem "row X of Y" contra o dataset completo. Quando omitido mas rowIndexStart está definido (view janelada com total desconhecido), aria-rowcount é definido como -1 conforme a convenção ARIA de contagem desconhecida. Apenas modo data-driven. |
| `children` | `ReactNode` | não | — | Modo children: renderize TableRow/TableCell diretamente em vez de renderização data-driven. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(): não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Table` · Docs atualizadas: `npx @pharos-ds/cli component Table`
