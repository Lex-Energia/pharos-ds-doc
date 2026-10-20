---
title: "DropdownMenu"
group: "DropdownMenu"
category: "Action"
package: "@pharos-ds/core"
import: "@pharos-ds/core/DropdownMenu"
source: /componentes/DropdownMenu
---

# DropdownMenu

**Grupo:** DropdownMenu · **Categoria:** Action · **Pacote:** `@pharos-ds/core`

Um dropdown menu que exibe uma lista de itens acionáveis em um popup acionado por um button. Use-o para apresentar opções de ação como próximo passo em um processo, ou para oferecer ações contextuais sem sobrecarregar a interface.

## Importação

```tsx
import {DropdownMenu} from '@pharos-ds/core/DropdownMenu';
```

## Exemplos

### Área interativa

```tsx
import {DropdownMenu} from '@pharos-ds/core/DropdownMenu';

<DropdownMenu
  hasChevron
 />
```

Valores explorados na demo interativa:

- `hasChevron`: boolean (padrão `true`)

## Boas práticas

- **Faça:** Mantenha itens de menu concisos e orientados a ação para que usuários possam escanear opções rapidamente.
- **Faça:** Use sections e dividers para agrupar ações relacionadas quando o menu tiver muitos itens.
- **Evite:** Use um DropdownMenu para navegação; use um componente de navegação em vez disso.
- **Evite:** Coloque mais de 10–12 itens em um único menu sem agrupá-los em sections.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `button` | `DropdownMenuButtonProps` | não | `{ label: 'Menu' }` | Props para o button trigger (Button props exceto onClick). |
| `items` | `DropdownMenuOption[]` | sim | — | Array de entradas de menu. Cada entrada é um de: um item de ação `{label, onClick?, icon?, isDisabled?}`, um divider `{type: "divider"}`, ou uma section `{type: "section", title?, items: [...action items]}`. |
| `isMenuOpen` | `boolean` | não | — | Estado aberto controlado do menu. |
| `onOpenChange` | `(isOpen: boolean) => void` | não | — | Callback disparado quando o estado aberto muda. |
| `menuWidth` | `number \| string` | não | — | Largura personalizada do menu; o padrão corresponde à largura do button trigger. |
| `onClick` | `() => void` | não | — | Callback disparado quando o button trigger é clicado. |
| `hasChevron` | `boolean` | não | `true` | Se deve exibir um ícone chevron no button trigger. Defina como false para triggers icon-only. |
| `children` | `(item: DropdownMenuItemData) => ReactNode` | não | — | Função de renderização personalizada para cada item da lista. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/DropdownMenu` · Docs atualizadas: `npx @pharos-ds/cli component DropdownMenu`
