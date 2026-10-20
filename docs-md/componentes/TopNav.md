---
title: "TopNav"
group: "Navigation"
category: "Navigation"
package: "@pharos-ds/core"
import: "@pharos-ds/core/TopNav"
source: /componentes/TopNav
---

# TopNav

**Grupo:** Navigation · **Categoria:** Navigation · **Pacote:** `@pharos-ds/core`

TopNav é uma barra de navegação horizontal para navegação em nível de produto em headers de aplicação. Use TopNav para 5 ou menos itens de navegação sempre visíveis, ou navegação mínima emparelhada com busca e controles. Para hierarquias de navegação complexas, use uma sidebar; para filtrar conteúdo, use tabs ou filter buttons em vez disso.

## Importação

```tsx
import {TopNav} from '@pharos-ds/core/TopNav';
```

## Exemplos

### Área interativa

```tsx
import {TopNav} from '@pharos-ds/core/TopNav';

<TopNav />
```

## Boas práticas

- **Faça:** Inclua um logo e nome de produto no slot heading para identificar claramente a aplicação.
- **Faça:** Limite itens de navegação primária a 5 ou menos para escaneamento rápido e carga cognitiva mínima.
- **Evite:** Evite usar TopNav para filtrar conteúdo de página; use Tabs ou controles de filtro em vez disso.
- **Evite:** Evite hierarquias de navegação profundamente aninhadas; mantenha menus em um nível de profundidade.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `heading` | `ReactNode` | não | — | Conteúdo do slot heading (logo, brand): posicionado na borda esquerda da nav bar. |
| `startContent` | `ReactNode` | não | — | Slot startContent para itens de navegação ou breadcrumbs: posicionado após o heading, alinhado à esquerda. |
| `children` | `ReactNode` | não | — | Alias para startContent. Prefira startContent ao compor com heading, centerContent ou endContent; children mantém o padrão comum React de nav-item de descartar itens silenciosamente. |
| `centerContent` | `ReactNode` | não | — | Slot centerContent (tabs, search bar, navegação primária): quando fornecido, alterna o layout para um CSS grid de três colunas para centralização horizontal verdadeira. |
| `endContent` | `ReactNode` | não | — | Slot endContent para busca, ícones ou perfil de usuário: posicionado na borda direita. |
| `label` | `string` | não | `'Top navigation'` | Label acessível para o landmark de navegação, aplicado como aria-label no elemento <nav>. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(): não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/TopNav` · Docs atualizadas: `npx @pharos-ds/cli component TopNav`
