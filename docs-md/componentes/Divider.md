---
title: "Divider"
group: "Misc"
category: "Layout"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Divider"
source: /componentes/Divider
---

# Divider

**Grupo:** Misc · **Categoria:** Layout · **Pacote:** `@pharos-ds/core`

Separador visual que divide o conteúdo em seções distintas. Use para criar limites claros entre grupos de conteúdo relacionado ou delimitar regiões interativas dentro de um layout.

## Importação

```tsx
import {Divider} from '@pharos-ds/core/Divider';
```

## Exemplos

### Área interativa

```tsx
import {Divider} from '@pharos-ds/core/Divider';

<Divider
  orientation="horizontal"
  variant="subtle"
  isFullBleed={false}
 />
```

Valores explorados na demo interativa:

- `orientation`: `horizontal` · `vertical` (padrão `horizontal`)
- `variant`: `subtle` · `strong` (padrão `subtle`)
- `isFullBleed`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Use dividers sutis entre seções de conteúdo relacionado e dividers strong para limites de alto contraste.
- **Faça:** Adicione um label ao divider quando as seções precisarem de um cabeçalho de categoria visível.
- **Evite:** Use dividers em excesso; prefira espaçamento e layout para separar conteúdo quando possível.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `orientation` | `'horizontal' \| 'vertical'` | não | `'horizontal'` | Orientação do divider. |
| `label` | `ReactNode` | não | — | Rótulo opcional centralizado no divider. |
| `variant` | `'subtle' \| 'strong'` | não | `'subtle'` | Peso visual da linha do divider. |
| `isFullBleed` | `boolean` | não | `false` | Estende o divider até as bordas do contêiner com margens negativas. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Divider` · Docs atualizadas: `npx @pharos-ds/cli component Divider`
