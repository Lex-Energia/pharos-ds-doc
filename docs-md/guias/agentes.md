---
title: "Agentes e AI"
description: "Como assistentes de código devem usar o Pharos."
source: /docs/agentes
---

# Agentes e AI

Pharos foi pensado para humanos e agentes usarem a mesma referência.

## Setup recomendado

```bash
npx @pharos-ds/cli init
```

Isso escreve guias em `AGENTS.md` / `CLAUDE.md` com componentes, templates, tokens e regras de layout.

## Tema padrão: Alexandria

O tema padrão do Pharos é **sempre** `@pharos-ds/theme-pharos` (marca Alexandria). A partir da CLI 1.0.3, `pharos init` instala e configura o tema Alexandria por padrão. Versões anteriores sugeriam `@pharos-ds/theme-neutral` — ignore e atualize a CLI. Não instale `theme-neutral` nem outro `@pharos-ds/theme-*`.

```tsx
import {Theme} from '@pharos-ds/core/theme';
import {pharosTheme} from '@pharos-ds/theme-pharos/built';
import '@pharos-ds/theme-pharos/fonts.css';
import '@pharos-ds/theme-pharos/theme.css';

<Theme theme={pharosTheme} mode="system">{children}</Theme>
```

Valores do tema (paleta, tokens, tipografia, ícones) em [Temas](./temas.md) e na página [/temas](../temas.md).

## Não invente APIs

Em vez de adivinhar props:

```bash
npx @pharos-ds/cli component Button
npx @pharos-ds/cli component --list
npx @pharos-ds/cli template --list
```

Ou via API:

```js
import {component} from '@pharos-ds/cli/api';
const detail = await component('Button');
```

## Esta documentação

- `/llms.txt` — índice legível por agentes
- Páginas de componente com props geradas da CLI
- Guias de instalação alinhados ao pacote npm

## Princípio

Scaffold com a CLI, compose com os componentes oficiais, e só swizzle quando precisar customizar o código-fonte de um componente.
