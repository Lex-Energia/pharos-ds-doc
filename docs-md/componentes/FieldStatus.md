---
title: "FieldStatus"
group: "Field"
category: "Data Input"
package: "@pharos-ds/core"
import: "@pharos-ds/core/FieldStatus"
source: /componentes/FieldStatus
---

# FieldStatus

**Grupo:** Field · **Categoria:** Data Input · **Pacote:** `@pharos-ds/core`

FieldStatus renderiza feedback de validação para fields e controles similares a fields. Use diretamente para controles customizados que precisam da mesma apresentação de error, warning ou success que Field.

## Importação

```tsx
import {FieldStatus} from '@pharos-ds/core/FieldStatus';
```

## Exemplos

### Área interativa

```tsx
import {FieldStatus} from '@pharos-ds/core/Field';

<FieldStatus
  message="Este campo é obrigatório."
  type="error"
  variant="attached"
 />
```

Valores explorados na demo interativa:

- `type`: `error` · `warning` · `success` (padrão `error`)
- `variant`: `attached` · `detached` (padrão `attached`)

## Boas práticas

- **Faça:** Use status attached abaixo de inputs com borda quando a mensagem pertence àquele input.
- **Faça:** Use status detached para controles como checkboxes, switches e controles customizados onde overlap seria visualmente estranho.
- **Evite:** Use FieldStatus para alertas gerais ou avisos em nível de página; use Banner ou Toast em vez disso.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `type` | `'error' \| 'warning' \| 'success'` | sim | — | Tipo de status. |
| `message` | `string` | sim | — | Texto da mensagem de status. |
| `id` | `string` | não | — | ID para associação aria-describedby. |
| `variant` | `'attached' \| 'detached'` | não | `'attached'` | Variante visual: attached sobrepõe o input, detached flutua abaixo. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/FieldStatus` · Docs atualizadas: `npx @pharos-ds/cli component FieldStatus`
