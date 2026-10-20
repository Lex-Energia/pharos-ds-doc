---
title: "EmptyState"
group: "Misc"
category: "Content"
package: "@pharos-ds/core"
import: "@pharos-ds/core/EmptyState"
source: /componentes/EmptyState
---

# EmptyState

**Grupo:** Misc · **Categoria:** Content · **Pacote:** `@pharos-ds/core`

EmptyState mostra um placeholder quando uma área de conteúdo não tem dados. Use para listas vazias, zero resultados de busca, configurações iniciais ou caixas de entrada limpas. Sempre inclua um título e um próximo passo para que o usuário não fique preso.

## Importação

```tsx
import {EmptyState} from '@pharos-ds/core/EmptyState';
```

## Exemplos

### Área interativa

```tsx
import {EmptyState} from '@pharos-ds/core/EmptyState';

<EmptyState
  title="Nenhum item encontrado"
  description="Crie um novo item para começar."
  isCompact={false}
 />
```

Valores explorados na demo interativa:

- `isCompact`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Inclua um título claro e um botão de call-to-action para que usuários saibam como prosseguir.
- **Faça:** Use uma ilustração ou ícone que reforce o contexto do empty state.
- **Faça:** Use a variant compact dentro de cards ou sidebars onde o espaço é limitado.
- **Evite:** Deixe um empty state sem orientação; sempre explique o que aconteceu e o que o usuário pode fazer a seguir.
- **Evite:** Use uma mensagem genérica como "No data"; seja específico sobre o que está vazio e por quê.
- **Evite:** Use um EmptyState para mensagens de erro que exigem ação imediata; use um Banner.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `title` | `string` | sim | — | Mensagem principal renderizada como heading <h3> dentro do empty state. |
| `description` | `string` | não | — | Texto secundário opcional que fornece contexto adicional abaixo do título. |
| `icon` | `ReactNode` | não | — | Ícone ou ilustração opcional exibido acima do título; renderizado como decorativo (aria-hidden="true"). |
| `actions` | `ReactNode` | não | — | Botões de ação opcionais exibidos abaixo da description, dispostos horizontalmente por padrão e empilhados verticalmente quando isCompact é true. |
| `headingLevel` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | não | `3` | Controla apenas a tag HTML de heading renderizada (h1-h6) para que o título se encaixe no outline do documento. É uma mudança semântica para acessibilidade e não altera o tamanho visual do título, que permanece fixo independentemente do level. |
| `isCompact` | `boolean` | não | `false` | Ativa a variant compact com espaçamento reduzido para áreas de conteúdo restritas. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/EmptyState` · Docs atualizadas: `npx @pharos-ds/cli component EmptyState`
