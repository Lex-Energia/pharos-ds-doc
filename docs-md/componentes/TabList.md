---
title: "TabList"
group: "Tabs"
category: "Navigation"
package: "@pharos-ds/core"
import: "@pharos-ds/core/TabList"
source: /componentes/TabList
---

# TabList

**Grupo:** Tabs · **Categoria:** Navigation · **Pacote:** `@pharos-ds/core`

TabList fornece navegação estilo tab para organizar conteúdo em seções categorizadas. Use-o para permitir que usuários alternem entre views relacionadas sem sair da página, com itens de overflow tratados por um menu "more" integrado.

## Importação

```tsx
import {TabList} from '@pharos-ds/core/TabList';
```

## Exemplos

### Área interativa

```tsx
import {TabList} from '@pharos-ds/core/TabList';

<TabList
  size="md"
  layout="hug"
  hasDivider={false}
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `layout`: `hug` · `fill` (padrão `hug`)
- `hasDivider`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Mantenha labels de tab curtos e descritivos para que usuários escaneiem rapidamente as seções disponíveis.
- **Faça:** Use TabMenu para agrupar itens de overflow quando o espaço horizontal for limitado, em vez de rolar tabs para fora da tela.
- **Faça:** Ao usar hasDivider com action buttons ao lado das tabs, corresponda o Button size ao TabList size (ambos md, ambos sm); a faixa de tab dividida reserva espaço para que tabs e buttons do mesmo size se alinhem a uma baseline compartilhada acima do rail.
- **Evite:** Use tabs para passos sequenciais ou workflows; use um padrão stepper ou wizard em vez disso.
- **Evite:** Coloque mais de 6–8 tabs visíveis antes do menu de overflow; priorize as categorias mais importantes.
- **Evite:** Confunda TabList com SegmentedControl ou ToggleButton. TabList é para navegação entre views. SegmentedControl e ToggleButton são controles de input: SegmentedControl sempre tem exatamente uma opção selecionada, enquanto ToggleButton pode ser alternado on ou off.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `value` | `string` | sim | — | O value da tab atualmente selecionada. |
| `onChange` | `(value: string) => void` | sim | — | Callback disparado quando uma tab é selecionada. |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Variante de size aplicada a todas as tabs filhas. |
| `layout` | `'hug' \| 'fill'` | não | `'hug'` | Modo de layout para dimensionamento de tabs. 'hug': cada tab abraça a largura do seu conteúdo. 'fill': tabs esticam igualmente para preencher a largura do container. |
| `hasDivider` | `boolean` | não | `false` | Se deve exibir um divider de borda inferior sob a tab list. |
| `children` | `ReactNode` | sim | — | Itens Tab e TabMenu a renderizar dentro da nav. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(): não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/TabList` · Docs atualizadas: `npx @pharos-ds/cli component TabList`
