---
title: "CommandPaletteInput"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/CommandPaletteInput"
source: /componentes/CommandPaletteInput
---

# CommandPaletteInput

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Slot de input de busca. Auto-foca ao montar. Conecta ao contexto da command palette quando usado dentro de CommandPalette.

## Importação

```tsx
import {CommandPaletteInput} from '@pharos-ds/core/CommandPaletteInput';
```

## Exemplos

### Área interativa

```tsx
import {CommandPaletteInput} from '@pharos-ds/core/CommandPalette';

<CommandPaletteInput
  hasAutoFocus={false}
 />
```

Valores explorados na demo interativa:

- `hasAutoFocus`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `placeholder` | `string` | não | `'Search...'` | Texto placeholder do input. |
| `label` | `string` | não | — | Rótulo acessível para o input combobox, anunciado por leitores de tela. Usa o texto placeholder como fallback quando omitido. |
| `hasAutoFocus` | `boolean` | não | `true` | Auto-foca o input ao montar. Desabilitado automaticamente dentro de uma command palette inline. |
| `endContent` | `ReactNode` | não | — | Conteúdo renderizado na extremidade trailing do input, após o spinner. Use para botões de limpar ou dicas de atalho de teclado. |
| `value` | `string` | não | — | Valor de busca. Quando omitido dentro de CommandPalette, lê do contexto. |
| `onValueChange` | `(value: string) => void` | não | — | Chamado quando o valor de busca muda. Quando omitido dentro de CommandPalette, escreve no contexto. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout. Deve ser um valor stylex.create(). |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/CommandPaletteInput` · Docs atualizadas: `npx @pharos-ds/cli component CommandPaletteInput`
