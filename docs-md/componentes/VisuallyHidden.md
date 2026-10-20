---
title: "VisuallyHidden"
group: "Misc"
category: "Utility"
package: "@pharos-ds/core"
import: "@pharos-ds/core/VisuallyHidden"
source: /componentes/VisuallyHidden
---

# VisuallyHidden

**Grupo:** Misc · **Categoria:** Utility · **Pacote:** `@pharos-ds/core`

Renderiza conteúdo na árvore de acessibilidade enquanto o oculta visualmente. Use para nomes acessíveis em controles somente com ícone, regiões de anúncio aria-live e contexto complementar para leitores de tela. Deliberadamente não tem props de estilo; o ponto é permanecer invisível.

## Importação

```tsx
import {VisuallyHidden} from '@pharos-ds/core/VisuallyHidden';
```

## Exemplos

### Área interativa

```tsx
import {VisuallyHidden} from '@pharos-ds/core/VisuallyHidden';

<VisuallyHidden />
```

## Boas práticas

- **Faça:** Use para dar nomes acessíveis a botões e controles somente com ícone que leitores de tela anunciam.
- **Faça:** Renderize como elemento block (as="div") com aria-live para anunciar atualizações dinâmicas como drag-and-drop ou contagens de resultados.
- **Evite:** Use para ocultar conteúdo de todos; ele permanece na árvore de acessibilidade; use renderização condicional ou `hidden` para remover conteúdo completamente.
- **Evite:** Coloque controles interativos dentro dele; o conteúdo não é visível e não pode receber input de pointer.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | não | — | Conteúdo exposto a tecnologias assistivas enquanto oculto da vista. |
| `as` | `ElementType` | não | `'span'` | Tag HTML a renderizar. Use um elemento block para live regions. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/VisuallyHidden` · Docs atualizadas: `npx @pharos-ds/cli component VisuallyHidden`
