---
title: "Temas"
description: "Tema Pharos oficial e como customizar."
source: /temas
---

# Temas

O tema oficial **Pharos** carrega a marca Alexandria: tokens, dark mode e ícones Lucide. É um tema *built* para consumo direto — sem plugin StyleX no app.

- Pacote: `@pharos-ds/theme-pharos` (público)
- Referência completa de valores (paleta, tokens claro/escuro, tipografia, ícones): [tema-pharos.md](./tema-pharos.md)

## Instalação

```tsx
pnpm add @pharos-ds/theme-pharos

import {Theme} from '@pharos-ds/core/theme';
import {pharosTheme} from '@pharos-ds/theme-pharos/built';
import '@pharos-ds/theme-pharos/fonts.css';
import '@pharos-ds/theme-pharos/theme.css';

<Theme theme={pharosTheme} mode="system">
  {children}
</Theme>
```

## Customizar

Defina um tema TypeScript e gere o CSS com a CLI. Guia completo em [Guias → Temas](./guias/temas.md).

```bash
npx @pharos-ds/cli theme build src/themes/meuTema.ts --out src/themes/meuTema.css
```

### Dark mode

Controle o prop `mode` de `<Theme>` (`light` / `dark` / `system`). Veja [Next.js → Dark mode](./guias/nextjs.md#dark-mode).
