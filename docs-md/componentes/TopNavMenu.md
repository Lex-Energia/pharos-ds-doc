---
title: "TopNavMenu"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/TopNavMenu"
source: /componentes/TopNavMenu
---

# TopNavMenu

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Item de navegação que exibe um popover menu acionado por hover com itens ricos contendo ícone, título e description opcional.

## Importação

```tsx
import {TopNavMenu} from '@pharos-ds/core/TopNavMenu';
```

## Exemplos

### Área interativa

```tsx
import {TopNavMenu} from '@pharos-ds/core/TopNavMenu';

<TopNavMenu
  label="Produtos"
 />
```

Valores explorados na demo interativa:

- `label`: `Produtos` · `Ferramentas` · `Mais` (padrão `Produtos`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Rótulo visível do botão trigger. |
| `items` | `TopNavMenuItemData[]` | sim | — | Itens de menu exibidos no popover de hover. |
| `delay` | `number` | não | `150` | Atraso em milissegundos antes de mostrar o menu no hover. |
| `hideDelay` | `number` | não | `200` | Atraso em milissegundos antes de ocultar o menu após o mouse sair. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/TopNavMenu` · Docs atualizadas: `npx @pharos-ds/cli component TopNavMenu`
