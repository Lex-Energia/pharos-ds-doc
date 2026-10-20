---
title: "CommandPaletteFooter"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/CommandPaletteFooter"
source: /componentes/CommandPaletteFooter
---

# CommandPaletteFooter

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Footer exibindo dicas de navegação por teclado. Renderiza dicas padrão de setas/Enter/Escape quando nenhum children é fornecido.

## Importação

```tsx
import {CommandPaletteFooter} from '@pharos-ds/core/CommandPaletteFooter';
```

## Exemplos

### Área interativa

```tsx
import {CommandPaletteFooter} from '@pharos-ds/core/CommandPalette';

<CommandPaletteFooter />
```

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | não | — | Conteúdo personalizado do footer. Quando omitido, renderiza dicas de teclado padrão via Kbd. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout. Deve ser um valor stylex.create(). |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/CommandPaletteFooter` · Docs atualizadas: `npx @pharos-ds/cli component CommandPaletteFooter`
