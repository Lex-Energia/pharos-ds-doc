---
title: "HoverCard"
group: "HoverCard"
category: "Overlay"
package: "@pharos-ds/core"
import: "@pharos-ds/core/HoverCard"
source: /componentes/HoverCard
---

# HoverCard

**Grupo:** HoverCard · **Categoria:** Overlay · **Pacote:** `@pharos-ds/core`

HoverCard mostra informações adicionais quando o usuário passa o mouse ou foca um elemento trigger. Use para cards de perfil, resumos de links ou definições inline, onde o usuário precisa de mais contexto sem navegar para outra página.

## Importação

```tsx
import {HoverCard} from '@pharos-ds/core/HoverCard';
```

## Exemplos

### Área interativa

```tsx
import {HoverCard} from '@pharos-ds/core/HoverCard';

<HoverCard
  placement="above"
  hasHoverIndication="true"
 />
```

Valores explorados na demo interativa:

- `placement`: `above` · `below` · `start` · `end` (padrão `above`)
- `hasHoverIndication`: `true` · `false` (padrão `true`)

## Boas práticas

- **Faça:** Mantenha o conteúdo complementar; hover cards devem ampliar a compreensão sem bloquear o fluxo principal.
- **Faça:** Forneça sublinhado tracejado em triggers de texto, para que usuários saibam que o elemento é hoverable.
- **Faça:** Use a API de hook (useHoverCard) quando precisar de mais controle sobre timing ou posicionamento.
- **Evite:** Coloque ações críticas ou informações obrigatórias dentro de um hover card; usuários podem perder conteúdo que só aparece no hover.
- **Evite:** Use um hover card quando um Tooltip ou Popover simples bastaria.
- **Evite:** Use um HoverCard para conteúdo com o qual o usuário precisa interagir; ele desaparece quando o cursor sai.
- **Evite:** Aninhe um HoverCard cujo conteúdo tem elementos block diretamente dentro de contextos apenas de frase, como <p>, <label> ou heading. O card renderiza inline, então conteúdo block ali é HTML inválido que o browser reparenta. Envolva o texto ao redor em um elemento block (ex.: um <div>).

## Props

Nenhuma prop documentada. Rode `npx @pharos-ds/cli component HoverCard`.

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/HoverCard` · Docs atualizadas: `npx @pharos-ds/cli component HoverCard`
