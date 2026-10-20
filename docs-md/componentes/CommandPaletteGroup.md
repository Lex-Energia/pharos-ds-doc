---
title: "CommandPaletteGroup"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/CommandPaletteGroup"
source: /componentes/CommandPaletteGroup
---

# CommandPaletteGroup

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Agrupamento visual com um label de heading. Coloque dentro de CommandPaletteList.

## Importação

```tsx
import {CommandPaletteGroup} from '@pharos-ds/core/CommandPaletteGroup';
```

## Exemplos

### Área interativa

```tsx
import {CommandPaletteGroup, CommandPaletteItem, CommandPaletteList} from '@pharos-ds/core/CommandPalette';

<CommandPaletteGroup
  heading="Navegação"
 />
```

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `heading` | `string` | sim | — | Texto do heading do grupo. |
| `children` | `ReactNode` | sim | — | Filhos CommandPaletteItem. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout. Deve ser um valor stylex.create(). |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/CommandPaletteGroup` · Docs atualizadas: `npx @pharos-ds/cli component CommandPaletteGroup`
