---
title: "StatusDot"
group: "Misc"
category: "Feedback & Status"
package: "@pharos-ds/core"
import: "@pharos-ds/core/StatusDot"
source: /componentes/StatusDot
---

# StatusDot

**Grupo:** Misc · **Categoria:** Feedback & Status · **Pacote:** `@pharos-ds/core`

Um pequeno ponto colorido que comunica status como presença online/offline ou níveis de severidade. Suporta cinco variantes semânticas e animação pulse opcional. Sempre combine com um label de texto visível, pois cor sozinha não deve carregar significado.

## Importação

```tsx
import {StatusDot} from '@pharos-ds/core/StatusDot';
```

## Exemplos

### Área interativa

```tsx
import {StatusDot} from '@pharos-ds/core/StatusDot';

<StatusDot
  label="Online"
  variant="success"
  isPulsing={false}
 />
```

Valores explorados na demo interativa:

- `variant`: `success` · `warning` · `error` · `accent` · `neutral` (padrão `success`)
- `isPulsing`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Sempre combine com um label de texto visível para que o status não seja comunicado apenas por cor.
- **Faça:** Forneça uma prop `label` descritiva para acessibilidade com screen readers.
- **Evite:** Use a animação pulse para fins puramente decorativos; reserve para estados que exigem atenção imediata.
- **Evite:** Confie apenas na cor para comunicar status; sempre inclua texto.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `variant` | `'success' \| 'warning' \| 'error' \| 'accent' \| 'neutral'` | sim | — | Variante de cor semântica. |
| `label` | `string` | sim | — | Label acessível exposto via aria-label. |
| `isPulsing` | `boolean` | não | `false` | Habilita animação pulse; respeita prefers-reduced-motion: reduce. |
| `tooltip` | `string` | não | — | Texto de tooltip exibido no hover para explicar o significado do status. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para customização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/StatusDot` · Docs atualizadas: `npx @pharos-ds/cli component StatusDot`
