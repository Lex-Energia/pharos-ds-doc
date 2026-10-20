---
title: "Toolbar"
group: "Misc"
category: "Action"
package: "@pharos-ds/core"
import: "@pharos-ds/core/Toolbar"
source: /componentes/Toolbar
---

# Toolbar

**Grupo:** Misc · **Categoria:** Action · **Pacote:** `@pharos-ds/core`

Toolbar é uma barra horizontal com áreas left, center e right. Use para ações contextuais dentro de uma área de conteúdo (acima de uma table, dentro de um card ou em um painel), não como header em nível de página. Defina o size uma vez na toolbar e todos os botões, inputs e tabs dentro dela correspondem automaticamente.

## Importação

```tsx
import {Toolbar} from '@pharos-ds/core/Toolbar';
```

## Exemplos

### Área interativa

```tsx
import {Toolbar} from '@pharos-ds/core/Toolbar';

<Toolbar
  size="md"
  variant="transparent"
  orientation="horizontal"
 />
```

Valores explorados na demo interativa:

- `size`: `sm` · `md` · `lg` (padrão `md`)
- `variant`: `transparent` · `section` · `muted` (padrão `transparent`)
- `orientation`: `horizontal` · `vertical` (padrão `horizontal`)

## Boas práticas

- **Faça:** Coloque ações secundárias como "Back" à esquerda, e ações primárias como "Save" à direita.
- **Faça:** Torne toolbars temporárias como seleção em massa visualmente distintas, para que usuários percebam que são contextuais, por exemplo com cor de fundo ou borda.
- **Faça:** Separe visualmente a toolbar do conteúdo abaixo, com divisor, variant de background ou ambos.
- **Faça:** Use Toolbar como header de card quando o header tem ações interativas como filtrar ou adicionar; oferece layout de slots, navegação por teclado e cascata de size. Se o header é apenas um título sem ações, LayoutHeader ou Section bastam.
- **Evite:** Coloque ações demais em uma toolbar; mova itens menos comuns para um MoreMenu.
- **Evite:** Defina size em botões filhos individuais; defina uma vez na toolbar e ele cascateia automaticamente.
- **Evite:** Use Toolbar para navegação em todo o app como links de menu principal ou sign out; use TopNav ou LayoutHeader para isso.

## Props

Nenhuma prop documentada. Rode `npx @pharos-ds/cli component Toolbar`.

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/Toolbar` · Docs atualizadas: `npx @pharos-ds/cli component Toolbar`
