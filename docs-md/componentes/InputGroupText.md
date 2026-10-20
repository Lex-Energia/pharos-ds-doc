---
title: "InputGroupText"
group: "Misc"
category: ""
package: "@pharos-ds/core"
import: "@pharos-ds/core/InputGroupText"
source: /componentes/InputGroupText
---

# InputGroupText

**Grupo:** Misc · **Pacote:** `@pharos-ds/core`

Elemento de texto prefixo ou sufixo renderizado dentro de InputGroup. Exibe texto ou ícones.

## Importação

```tsx
import {InputGroupText} from '@pharos-ds/core/InputGroupText';
```

## Exemplos

### Área interativa

```tsx
import {InputGroupText} from '@pharos-ds/core/InputGroup';

<InputGroupText
  position="prefix"
  text="https://"
 />
```

Valores explorados na demo interativa:

- `position`: `prefix` · `suffix` (padrão `prefix`)
- `text`: `https://` · `.com` · `R$` (padrão `https://`)

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | Conteúdo de texto ou ícone. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização. |
| `className` | `string` | não | — | Nome(s) de classe CSS. |
| `style` | `React.CSSProperties` | não | — | Estilos inline. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/InputGroupText` · Docs atualizadas: `npx @pharos-ds/cli component InputGroupText`
