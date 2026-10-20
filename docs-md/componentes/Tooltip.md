---
title: "Tooltip"
group: "Tooltip"
category: "Overlay"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Tooltip"
source: /componentes/Tooltip
---

# Tooltip

**Grupo:** Tooltip · **Categoria:** Overlay · **Pacote:** `@pharos-ds/core`

Dica de texto curta que aparece no hover ou focus, ancorada a um elemento trigger. Use para descrever botões só com ícone, mostrar o texto completo de rótulos truncados ou fornecer contexto complementar sem poluir a UI.

## Importação

```tsx
import {Tooltip} from '@pharos-ds/core/Tooltip';
```

## Exemplos

### Área interativa

```tsx
import {Tooltip} from '@pharos-ds/core/Tooltip';

<Tooltip
  content="Salvar alterações"
  placement="above"
  hasHoverIndication
 />
```

Valores explorados na demo interativa:

- `placement`: `above` · `below` · `start` · `end` (padrão `above`)
- `hasHoverIndication`: boolean (padrão `true`)

## Boas práticas

- **Faça:** Mantenha o conteúdo do tooltip conciso: procure ficar abaixo de 140 caracteres de texto simples.
- **Faça:** Adicione um tooltip a botões só com ícone e controles que não tenham rótulo visível.
- **Evite:** Coloque elementos interativos como links ou botões dentro de um tooltip; use HoverCard ou Popover em vez disso.
- **Evite:** Use tooltips para informações essenciais que o usuário precisa ver para concluir uma tarefa.

## Props

Nenhuma prop documentada. Rode `npx @pharos-ds/cli component Tooltip`.

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Tooltip` · Docs atualizadas: `npx @pharos-ds/cli component Tooltip`
