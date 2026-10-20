---
title: "DropdownMenuItem"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/DropdownMenuItem"
source: /componentes/DropdownMenuItem
---

# DropdownMenuItem

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Componente auxiliar para renderização customizada de itens com estilo consistente.

## Importação

```tsx
import {DropdownMenuItem} from '@pharos-ds/core/DropdownMenuItem';
```

## Exemplos

### Área interativa

```tsx
import {DropdownMenuItem} from '@pharos-ds/core/DropdownMenu';

<DropdownMenuItem
  isDisabled={false}
  hasDescription
 />
```

Valores explorados na demo interativa:

- `isDisabled`: boolean (padrão `false`)
- `hasDescription`: boolean (padrão `true`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `icon` | `IconType` | não | — | Ícone exibido antes do rótulo. Veja `pharos docs icons` para nomes semânticos válidos. |
| `label` | `ReactNode` | não | — | Texto do rótulo principal. |
| `description` | `ReactNode` | não | — | Texto de description secundário exibido abaixo do rótulo. |
| `endContent` | `ReactNode` | não | — | Conteúdo adicional renderizado após o rótulo e a description. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(): não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/DropdownMenuItem` · Docs atualizadas: `npx @pharos-ds/cli component DropdownMenuItem`
