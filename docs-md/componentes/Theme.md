---
title: "Theme"
group: "Utilities"
category: "Utility"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Theme"
source: /componentes/Theme
---

# Theme

**Grupo:** Utilities · **Categoria:** Utility · **Pacote:** `@pharos-ds/core`

Envolve uma subárvore com um theme Pharos específico. Para themes de produção estáticos, use `pharos theme build` e importe o CSS gerado mais o objeto de theme compilado para first-paint e performance em SSR. Use `defineTheme()` em runtime quando themes são dinâmicos ou para prototipagem.

`defineTheme` aceita um objeto `tokens` cujas chaves são nomes de custom properties CSS (sempre prefixados com `--`). Nomes comuns de tokens incluem `--color-accent`, `--color-background-surface`, `--color-background-body`, `--color-text-primary`, `--color-text-secondary`, `--radius-container`, `--spacing-1` até `--spacing-6`. Valores podem ser uma string (igual para light/dark) ou uma tupla `[light, dark]`.

Exemplo:
```ts
import {defineTheme} from '@pharos-ds/core/theme';
const myTheme = defineTheme({
  name: 'ocean',
  tokens: {
    '--color-accent': ['#0077B6', '#48CAE4'],
    '--color-background-surface': ['#F0F8FF', '#0A1628'],
    '--color-text-primary': ['#0A1317', '#FFFFFF'],
    '--radius-container': '16px',
  },
});
```

## Importação

```tsx
import {Theme} from '@pharos-ds/core/Theme';
```

## Exemplos

### Área interativa

```tsx
import {Theme} from '@pharos-ds/core/theme';

<Theme
  mode="system"
 />
```

Valores explorados na demo interativa:

- `mode`: `light` · `dark` · `system` (padrão `system`)

## Boas práticas

- **Faça:** Compile themes de app conhecidos antecipadamente com `pharos theme build`, depois importe o CSS gerado e o objeto de theme compilado.
- **Faça:** Use themes em runtime quando o theme é criado ou editado no browser, como editores de theme, branding de usuário ou protótipos.
- **Faça:** Nomes de tokens sempre começam com `--` (ex.: `--color-accent`, `--color-background-surface`). Não omita o prefixo.
- **Evite:** Use themes em runtime por padrão em apps SSR de produção. Overrides de componentes são injetados após hydration em vez de serem enviados como CSS estático.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `theme` | `DefinedTheme` | sim | — | Objeto de theme a aplicar. Prefira objetos de theme compilados para themes de produção estáticos; use `defineTheme()` em runtime para themes dinâmicos. |
| `mode` | `'light' \| 'dark' \| 'system'` | não | `'system'` | Modo de cor. System segue a preferência do SO. |
| `children` | `ReactNode` | sim | — | Conteúdo a renderizar com o theme. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Theme` · Docs atualizadas: `npx @pharos-ds/cli component Theme`
