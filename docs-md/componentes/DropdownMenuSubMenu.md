---
title: "DropdownMenuSubMenu"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/DropdownMenuSubMenu"
source: /componentes/DropdownMenuSubMenu
---

# DropdownMenuSubMenu

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Uma única linha de menu que revela um flyout aninhado com seus próprios itens. A linha adota semântica de DropdownMenuItem (label / icon / description / isDisabled); seus children se tornam o conteúdo do flyout. Abre inline-end com auto-flip do viewport; Right/Enter/Space abre e foca o primeiro item, Left/Escape fecha e retorna o foco ao trigger (Right/Left invertem em RTL). Para menus data-driven, dê a um item de menu um array `items` aninhado em vez de usar este componente diretamente.

## Importação

```tsx
import {DropdownMenuSubMenu} from '@pharos-ds/core/DropdownMenuSubMenu';
```

## Exemplos

### Área interativa

```tsx
import {DropdownMenuSubMenu} from '@pharos-ds/core/DropdownMenu';

<DropdownMenuSubMenu
  isDisabled={false}
  hasSpinner={false}
 />
```

Valores explorados na demo interativa:

- `isDisabled`: boolean (padrão `false`)
- `hasSpinner`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `ReactNode` | não | — | Texto do label principal para a linha trigger. |
| `icon` | `IconType` | não | — | Ícone a exibir antes do label. Veja `pharos docs icons` para nomes semânticos válidos. |
| `description` | `ReactNode` | não | — | Texto de descrição secundário exibido abaixo do label. |
| `children` | `ReactNode` | não | — | Os itens do flyout — os mesmos componentes usados no nível superior (DropdownMenuItem, DropdownMenuSubMenu aninhado, itens selecionáveis). |
| `isDisabled` | `boolean` | não | `false` | Um submenu desabilitado renderiza sua linha trigger, mas nunca abre o flyout. |
| `hasSpinner` | `boolean` | não | `false` | Exibe um spinner no lugar do caret, ex.: enquanto os children de um submenu lazy estão carregando. |
| `menuWidth` | `number \| string` | não | — | Largura fixa do flyout. Padrão dimensiona ao conteúdo (mín. 160px). |
| `onOpenChange` | `(isOpen: boolean) => void` | não | — | Chamado quando o flyout abre ou fecha. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para a linha trigger. Deve ser um valor stylex.create(): não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/DropdownMenuSubMenu` · Docs atualizadas: `npx @pharos-ds/cli component DropdownMenuSubMenu`
