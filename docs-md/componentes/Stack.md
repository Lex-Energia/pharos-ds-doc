---
title: "Stack"
group: "Layout"
category: "Layout"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Stack"
source: /componentes/Stack
---

# Stack

**Grupo:** Layout · **Categoria:** Layout · **Pacote:** `@pharos-ds/core`

Stack organiza itens em linha ou coluna com espaçamento consistente. Use a prop gap para controlar o espaço entre itens.

## Importação

```tsx
import {Stack} from '@pharos-ds/core/Stack';
```

## Exemplos

### Área interativa

```tsx
import {Stack} from '@pharos-ds/core/Stack';

<Stack
  direction="vertical"
  gap="2"
  wrap="nowrap"
  align="start"
 />
```

Valores explorados na demo interativa:

- `direction`: `vertical` · `horizontal` (padrão `vertical`)
- `gap`: `1` · `2` · `3` · `4` (padrão `2`)
- `wrap`: `nowrap` · `wrap` (padrão `nowrap`)
- `align`: `start` · `center` · `stretch` (padrão `start`)

## Boas práticas

- **Faça:** Use a prop gap para espaçamento entre itens; não adicione margens manualmente.
- **Faça:** Use StackItem com size="fill" para fazer um item esticar e preencher o espaço sobrante.
- **Evite:** Aninhe stacks dentro de stacks; tente wrap="wrap" primeiro para deixar itens fluírem para a próxima linha.

## Props

Nenhuma prop documentada. Rode `npx @pharos-ds/cli component Stack`.

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Stack` · Docs atualizadas: `npx @pharos-ds/cli component Stack`
