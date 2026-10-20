---
title: "IconButton"
group: "Button"
category: "Action"
package: "@pharos-ds/core"
import: "@pharos-ds/core/IconButton"
source: /componentes/IconButton
---

# IconButton

**Grupo:** Button · **Categoria:** Action · **Pacote:** `@pharos-ds/core`

Um button que exibe apenas um ícone sem texto visível. Use IconButton em toolbars, linhas de tabela e UI compacta onde o espaço é limitado e o ícone é universalmente compreendido.

## Importação

```tsx
import {IconButton} from '@pharos-ds/core/IconButton';
```

## Exemplos

### Área interativa

```tsx
import {IconButton} from '@pharos-ds/core/IconButton';

<IconButton
  label="Adicionar"
  variant="secondary"
  size="md"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `variant`: `primary` · `secondary` · `ghost` · `destructive` (padrão `secondary`)
- `size`: `sm` · `md` · `lg` (padrão `md`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Torne o aria-label específico: um ícone de lixeira rotulado "Delete conversation" é mais claro do que apenas "Delete" para leitores de tela.
- **Faça:** Adicione um tooltip: mesmo um ícone de engrenagem pode significar Settings, Preferences ou Configure.
- **Faça:** Use ghost em toolbars e áreas densas para reduzir desordem visual.
- **Evite:** Use IconButton se a ação não for óbvia pelo ícone sozinho; use Button com texto.
- **Evite:** Omita o tooltip; o label alcança apenas leitores de tela, usuários visuais precisam da dica no hover.

## Props

| Prop | Tipo | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- | --- |
| `label` | `string` | sim | — | Label acessível. Usado como aria-label (não renderizado como texto visível). |
| `icon` | `ReactNode` | sim | — | Elemento de ícone renderizado dentro do button. |
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'destructive'` | não | `'secondary'` | Variante de estilo visual. |
| `size` | `'sm' \| 'md' \| 'lg'` | não | `'md'` | Variante de size. |
| `elevation` | `'none' \| 'low' \| 'med' \| 'high'` | não | `'none'` | Profundidade de sombra em repouso. A forma FAB mais comum é um button icon-only, então eleve-o com `low`/`med`/`high` para um floating action button. `none` é o button plano padrão. |
| `isLoading` | `boolean` | não | `false` | Exibe um spinner de carregamento e desabilita interação. |
| `isDisabled` | `boolean` | não | `false` | Desabilita o button. |
| `tooltip` | `string` | não | — | Texto de tooltip exibido no hover. |
| `onClick` | `(e: MouseEvent) => void` | não | — | Handler de clique padrão. |
| `clickAction` | `(e: MouseEvent) => void \| Promise<void>` | não | — | Handler de clique assíncrono com estado de carregamento automático. |

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/IconButton` · Docs atualizadas: `npx @pharos-ds/cli component IconButton`
