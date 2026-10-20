---
title: "Popover"
group: "Popover"
category: "Overlay"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Popover"
source: /componentes/Popover
---

# Popover

**Grupo:** Popover · **Categoria:** Overlay · **Pacote:** `@pharos-ds/core`

Uma overlay acionada por clique ancorada a um botão ou elemento trigger. Use para ações secundárias, confirmações inline ou informações complementares que não justificam um dialog completo. Para previews em hover use HoverCard, para textos de ajuda breves use Tooltip.

## Importação

```tsx
import {Popover} from '@pharos-ds/core/Popover';
```

## Exemplos

### Área interativa

```tsx
import {Popover} from '@pharos-ds/core/Popover';

<Popover
  placement="below"
  alignment="start"
 />
```

Valores explorados na demo interativa:

- `placement`: `below` · `above` · `start` · `end` (padrão `below`)
- `alignment`: `start` · `center` · `end` (padrão `start`)

## Boas práticas

- **Faça:** Mantenha o conteúdo do popover focado em uma única tarefa ou peça de informação.
- **Faça:** Forneça uma forma clara de fechar: clicando fora ou com um botão de fechar explícito.
- **Evite:** Aninhe popovers dentro de outros popovers; isso cria foco e navegação confusos.
- **Evite:** Use um popover para conteúdo que exige input pesado do usuário; use um Dialog em vez disso.
- **Evite:** Coloque conteúdo demais em um popover; se precisar de scroll, use um Dialog em vez disso.

## Props

Nenhuma prop documentada. Rode `npx @pharos-ds/cli component Popover`.

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Popover` · Docs atualizadas: `npx @pharos-ds/cli component Popover`
