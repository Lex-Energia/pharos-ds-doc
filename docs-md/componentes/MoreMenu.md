---
title: "MoreMenu"
group: "Misc"
category: "Action"
package: "@pharos-ds/core"
import: "@pharos-ds/core/MoreMenu"
source: /componentes/MoreMenu
---

# MoreMenu

**Grupo:** Misc · **Categoria:** Action · **Pacote:** `@pharos-ds/core`

MoreMenu é um botão de três pontos que abre uma lista de ações. Use-o para ações secundárias que não precisam estar sempre visíveis, como em linhas de tabela, headers de card ou toolbars.

## Importação

```tsx
import {MoreMenu} from '@pharos-ds/core/MoreMenu';
```

## Exemplos

### Área interativa

```tsx
import {MoreMenu} from '@pharos-ds/core/MoreMenu';

<MoreMenu
  variant="ghost"
  size="md"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `variant`: `ghost` · `secondary` · `primary` (padrão `ghost`)
- `size`: `sm` · `md` · `lg` (padrão `md`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use para ações de overflow ou secundárias; mantenha ações primárias visíveis fora do menu.
- **Faça:** Use dividers ou sections para agrupar ações relacionadas quando o menu tiver muitos itens.
- **Evite:** Oculte ações primárias dentro de um MoreMenu; elas devem estar diretamente visíveis.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `items` | `DropdownMenuOption[]` | sim | — | Itens de menu: array de dados de ações, dividers e sections. Mesmo tipo da prop items do DropdownMenu. |
| `label` | `string` | não | `'More options'` | Label acessível para o botão trigger (aria-label) e texto do tooltip. |
| `variant` | `ButtonVariant` | não | `'ghost'` | Variante de estilo visual do botão trigger. |
| `size` | `ButtonSize` | não | `'md'` | Tamanho do botão trigger. |
| `icon` | `ReactNode` | não | — | Substitui o ícone padrão de três pontos. Aceita qualquer ReactNode. |
| `isDisabled` | `boolean` | não | `false` | Se o trigger do menu está desabilitado. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/MoreMenu` · Docs atualizadas: `npx @pharos-ds/cli component MoreMenu`
