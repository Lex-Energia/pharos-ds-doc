---
title: "ButtonGroup"
group: "Button"
category: "Action"
package: "@pharos-ds/core"
import: "@pharos-ds/core/ButtonGroup"
source: /componentes/ButtonGroup
---

# ButtonGroup

**Grupo:** Button · **Categoria:** Action · **Pacote:** `@pharos-ds/core`

ButtonGroup une ações relacionadas em um único controle conectado. Use quando vários botões representam escolhas ou operações relacionadas que devem ficar visualmente juntas, como copiar/cortar/colar ou desfazer/refazer.

## Importação

```tsx
import {ButtonGroup} from '@pharos-ds/core/ButtonGroup';
```

## Exemplos

### Área interativa

```tsx
import {ButtonGroup, Button} from '@pharos-ds/core/ButtonGroup';

<ButtonGroup
  label="Ações de texto"
  orientation="horizontal"
  size="md"
  isDisabled={false}
 />
```

Valores explorados na demo interativa:

- `orientation`: `horizontal` · `vertical` (padrão `horizontal`)
- `size`: `sm` · `md` · `lg` (padrão `md`)
- `isDisabled`: boolean (padrão `false`)

## Boas práticas

- **Faça:** Agrupe botões que executam ações relacionadas no mesmo objeto, como copiar, cortar e colar em texto selecionado.
- **Faça:** Use o mesmo variant para todos os botões de um grupo para que pareçam uma única unidade conectada.
- **Faça:** Mantenha grupos pequenos (2–4 botões). Para mais ações, use Toolbar ou DropdownMenu.
- **Evite:** Não misture ações muito diferentes. Um botão Salvar ao lado de um botão Excluir no mesmo grupo é confuso.
- **Evite:** Não use ButtonGroup para navegação. Use SegmentedControl ou TabList para alternar entre visualizações.
- **Evite:** Não aninhe ButtonGroups. Se precisar de vários grupos, posicione-os lado a lado com um gap.

## Props

Nenhuma prop documentada. Rode `npx @pharos-ds/cli component ButtonGroup`.

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/ButtonGroup` · Docs atualizadas: `npx @pharos-ds/cli component ButtonGroup`
