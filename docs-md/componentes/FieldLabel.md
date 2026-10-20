---
title: "FieldLabel"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/FieldLabel"
source: /componentes/FieldLabel
---

# FieldLabel

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Componente de label standalone com indicadores optional/required e suporte a tooltip.

## Importação

```tsx
import {FieldLabel} from '@pharos-ds/core/FieldLabel';
```

## Exemplos

### Área interativa

```tsx
import {FieldLabel} from '@pharos-ds/core/Field';

<FieldLabel
  label="Nome completo"
  inputID="demo-field-label"
  isLabelHidden={false}
  isRequired={false}
  isOptional={false}
 />
```

Valores explorados na demo interativa:

- `isLabelHidden`: boolean (padrão `false`)
- `isRequired`: boolean (padrão `false`)
- `isOptional`: boolean (padrão `false`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Texto do label. |
| `inputID` | `string` | sim | — | ID do input para o qual este label se destina. |
| `isLabelHidden` | `boolean` | não | `false` | Oculta visualmente o label. |
| `isDisabled` | `boolean` | não | `false` | Se o input associado está desabilitado. |
| `isOptional` | `boolean` | não | `false` | Exibe indicador "Optional". |
| `isRequired` | `boolean` | não | `false` | Exibe indicador "Required". |
| `labelIcon` | `IconType` | não | — | Ícone antes do texto do label. Veja `pharos docs icons` para nomes semânticos válidos. |
| `labelTooltip` | `string` | não | — | Texto de tooltip para ícone de info no final do label. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/FieldLabel` · Docs atualizadas: `npx @pharos-ds/cli component FieldLabel`
