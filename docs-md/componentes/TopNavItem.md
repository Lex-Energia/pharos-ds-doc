---
title: "TopNavItem"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/TopNavItem"
source: /componentes/TopNavItem
---

# TopNavItem

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Item de link de navegação para uso no startContent do TopNav: renderiza como anchor com estados de hover e selected.

## Importação

```tsx
import {TopNavItem} from '@pharos-ds/core/TopNavItem';
```

## Exemplos

### Área interativa

```tsx
import {TopNavItem} from '@pharos-ds/core/TopNavItem';

<TopNavItem
  isSelected={false}
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `isSelected`: boolean (padrão `false`)
- `isDisabled`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Rótulo acessível do item de nav. Renderizado como texto visível por padrão. Quando isIconOnly é true, usado como aria-label. |
| `href` | `string` | não | — | URL alvo de navegação. |
| `isSelected` | `boolean` | não | `false` | Se este item de nav está atualmente selecionado. Define aria-current="page" e aplica estilos destacados. |
| `isDisabled` | `boolean` | não | `false` | Se o item de nav está desabilitado. Define aria-disabled, remove href/target para que o item não navegue e impede interação. |
| `isIconOnly` | `boolean` | não | `false` | Renderiza o item como elemento quadrado somente com ícone. Quando true, label vira o aria-label e o texto visível é oculto. Requer icon definido. |
| `icon` | `ReactNode` | não | — | Ícone opcional exibido antes do rótulo. |
| `children` | `ReactNode` | não | — | Conteúdo customizado a renderizar no lugar do texto do rótulo. |
| `as` | `LinkComponentType` | não | — | Componente customizado a renderizar em vez de <a>. Sobrescreve o padrão em nível de provider definido por LinkProvider. Deve aceitar props href, className, style e children. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/TopNavItem` · Docs atualizadas: `npx @pharos-ds/cli component TopNavItem`
