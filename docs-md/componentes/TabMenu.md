---
title: "TabMenu"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/TabMenu"
source: /componentes/TabMenu
---

# TabMenu

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Trigger de menu overflow que abre um dropdown de opções de tab adicionais, exibindo o label da opção selecionada como texto do trigger.

## Importação

```tsx
import {TabMenu} from '@pharos-ds/core/TabMenu';
```

## Exemplos

### Área interativa

```tsx
import {TabMenu} from '@pharos-ds/core/TabMenu';

<TabMenu
  options="TAB_MENU_OPTIONS"
  label="Mais"
 />
```

Valores explorados na demo interativa:

- `label`: `Mais` · `Excedente` · `Outros` (padrão `Mais`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Label para o botão trigger (exibido quando nenhuma opção está selecionada) e o divider de heading do dropdown. |
| `options` | `TabMenuOption[]` | sim | — | Array de opções de menu renderizadas no dropdown. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/TabMenu` · Docs atualizadas: `npx @pharos-ds/cli component TabMenu`
