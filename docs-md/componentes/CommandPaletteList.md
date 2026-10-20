---
title: "CommandPaletteList"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/CommandPaletteList"
source: /componentes/CommandPaletteList
---

# CommandPaletteList

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Container de resultados com scroll. Renderiza como listbox para ARIA. Contém filhos CommandPaletteItem e CommandPaletteGroup.

## Importação

```tsx
import {CommandPaletteList} from '@pharos-ds/core/CommandPaletteList';
```

## Exemplos

### Área interativa

```tsx
import {CommandPaletteList, CommandPaletteItem} from '@pharos-ds/core/CommandPalette';

<CommandPaletteList />
```

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | Itens, grupos e empty states. |
| `label` | `string` | não | `'Commands'` | Label acessível para o listbox. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout. Deve ser um valor stylex.create(). |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/CommandPaletteList` · Docs atualizadas: `npx @pharos-ds/cli component CommandPaletteList`
