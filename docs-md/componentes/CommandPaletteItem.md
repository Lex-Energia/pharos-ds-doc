---
title: "CommandPaletteItem"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/CommandPaletteItem"
source: /componentes/CommandPaletteItem
---

# CommandPaletteItem

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Item selecionável. Aceita children arbitrários para controle total da renderização. Registra-se no contexto para navegação por teclado quando dentro de CommandPalette.

## Importação

```tsx
import {CommandPaletteItem} from '@pharos-ds/core/CommandPaletteItem';
```

## Exemplos

### Área interativa

```tsx
import {CommandPaletteItem, CommandPaletteList} from '@pharos-ds/core/CommandPalette';

<CommandPaletteItem
  value="settings"
  children="Configurações"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `isDisabled`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `value` | `string` | sim | — | Valor único para identificação e seleção. |
| `children` | `ReactNode` | sim | — | Conteúdo do item: renderize ícones, descrições, atalhos de teclado etc. |
| `onSelect` | `(value: string) => void` | não | — | Chamado quando este item é selecionado via clique ou Enter. |
| `isHighlighted` | `boolean` | não | `false` | Se este item tem foco de teclado. Derivado do contexto quando dentro de CommandPalette. |
| `isSelected` | `boolean` | não | `false` | Se este item está selecionado no modo picker. |
| `isDisabled` | `boolean` | não | `false` | Se o item é não interativo. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout. Deve ser um valor stylex.create(). |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/CommandPaletteItem` · Docs atualizadas: `npx @pharos-ds/cli component CommandPaletteItem`
