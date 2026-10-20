---
title: "MetadataList"
group: "MetadataList"
category: "Table & List"
package: "@pharos-ds/core"
import: "@pharos-ds/core/MetadataList"
source: /componentes/MetadataList
---

# MetadataList

**Grupo:** MetadataList · **Categoria:** Table & List · **Pacote:** `@pharos-ds/core`

MetadataList exibe pares chave-valor para atributos de objetos como qualidade, condição e status, em um layout estruturado. Use para painéis de detalhes, resumos de configurações e informações de registros.

## Importação

```tsx
import {MetadataList} from '@pharos-ds/core/MetadataList';
```

## Exemplos

### Área interativa

```tsx
import {MetadataList, MetadataListItem} from '@pharos-ds/core/MetadataList';

<MetadataList
  columns="single"
  orientation="vertical"
  maxNumOfItems={false}
 />
```

Valores explorados na demo interativa:

- `columns`: `single` · `multi` · `2` (padrão `single`)
- `orientation`: `vertical` · `horizontal` (padrão `vertical`)
- `maxNumOfItems`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Escolha a posição do rótulo com base no conteúdo: "start" para valores curtos, "top" para valores longos ou complexos.
- **Faça:** Recolha listas longas com `maxNumOfItems` para manter a página escaneável.
- **Evite:** Use para entrada extensa de formulário; use um layout de formulário.
- **Evite:** Use para dados que não têm uma estrutura clara de chave-valor.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | Itens de metadata (componentes MetadataListItem). |
| `columns` | `'multi' \| 'single' \| number` | não | `'single'` | Modo de layout em colunas. |
| `label` | `{ position?: 'start' \| 'top', width?: number \| string }` | não | `{ position: 'start' } (single-column) / { position: 'top' } (multi-column)` | Configuração de exibição do rótulo. position controla posicionamento do rótulo; width define largura customizada da coluna de rótulos. Padrão: { position: 'top' } para layouts multi-coluna. |
| `maxNumOfItems` | `number` | não | — | Número máximo de itens a mostrar antes de recolher com toggle mostrar mais/menos. |
| `orientation` | `'vertical' \| 'horizontal'` | não | `'vertical'` | Orientação do layout. Modo horizontal distribui itens em uma linha com flex-wrap. |
| `title` | `ReactNode` | não | — | Título ou heading opcional acima da lista. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout. Deve ser um valor stylex.create(). |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/MetadataList` · Docs atualizadas: `npx @pharos-ds/cli component MetadataList`
