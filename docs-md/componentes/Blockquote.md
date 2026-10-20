---
title: "Blockquote"
group: "Misc"
category: "Content"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Blockquote"
source: /componentes/Blockquote
---

# Blockquote

**Grupo:** Misc · **Categoria:** Content · **Pacote:** `@pharos-ds/core`

Bloco de citação estilizado com borda esquerda em cor de destaque e texto secundário. Use para destacar conteúdo citado, depoimentos ou trechos.

## Importação

```tsx
import {Blockquote} from '@pharos-ds/core/Blockquote';
```

## Exemplos

### Área interativa

```tsx
import {Blockquote} from '@pharos-ds/core/Blockquote';

<Blockquote
  hasCite
 />
```

Valores explorados na demo interativa:

- `hasCite`: boolean (padrão `true`)

## Boas práticas

- **Faça:** Use para texto citado, depoimentos ou trechos destacados de fontes externas.
- **Faça:** Forneça a prop cite quando a fonte da citação for conhecida.
- **Evite:** Use para caixas de destaque ou notas informativas; use Banner para esses casos.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | sim | — | Conteúdo do blockquote. |
| `cite` | `ReactNode` | não | — | Atribuição opcional para a citação. Renderizada em um <footer> com <cite>. |
| `xstyle` | `StyleXStyles` | não | — | Estilos StyleX para personalização de layout (margens, posicionamento, dimensionamento). Deve ser um valor stylex.create(), não um objeto de estilo inline como style={{}}. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Blockquote` · Docs atualizadas: `npx @pharos-ds/cli component Blockquote`
