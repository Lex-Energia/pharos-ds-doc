---
title: "MobileNav"
group: "Navigation"
category: "Navigation"
package: "@pharos-ds/core"
import: "@pharos-ds/core/MobileNav"
source: /componentes/MobileNav
---

# MobileNav

**Grupo:** Navigation · **Categoria:** Navigation · **Pacote:** `@pharos-ds/core`

Um drawer deslizante para navegação mobile. MobileNav é a contraparte mobile do SideNav e aceita os mesmos children. Use-o em viewports estreitos onde uma sidebar persistente não é prática. Dentro de AppShell, use MobileNavToggle como trigger; ele lê o estado do context automaticamente.

## Importação

```tsx
import {MobileNav} from '@pharos-ds/core/MobileNav';
```

## Exemplos

### Área interativa

```tsx
import {MobileNav} from '@pharos-ds/core/MobileNav';

<MobileNav
  side="start"
  width="320"
 />
```

Valores explorados na demo interativa:

- `side`: `start` · `end` · `auto` (padrão `start`)
- `width`: `280` · `320` · `360` (padrão `320`)

## Boas práticas

- **Faça:** Compartilhe os mesmos itens de nav entre MobileNav e SideNav extraindo-os em uma variável.
- **Faça:** Forneça um header quando o propósito do drawer não for óbvio pelo seu conteúdo.
- **Faça:** Dentro de AppShell, use MobileNavToggle para abrir o drawer; ele lê o estado do context. Não passe isOpen/onOpenChange ao toggle.
- **Evite:** Use MobileNav no desktop: use um SideNav persistente em vez disso.

## Props

Nenhuma prop documentada. Rode `npx @pharos-ds/cli component MobileNav`.

> Pacote: `@pharos-ds/core` · Import: `@pharos-ds/core/MobileNav` · Docs atualizadas: `npx @pharos-ds/cli component MobileNav`
