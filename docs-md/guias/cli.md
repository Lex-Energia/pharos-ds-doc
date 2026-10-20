---
title: "CLI"
description: "Scaffolding, docs de componentes e templates via linha de comando."
source: /docs/cli
---

# CLI

O pacote `@pharos-ds/cli` é a fonte de verdade para props, exemplos, templates e integrações com agentes.

## Instalação

```bash
pnpm add -D @pharos-ds/cli
```

Script recomendado no `package.json`:

```json
{
  "scripts": {
    "pharos": "node node_modules/@pharos-ds/cli/bin/pharos.mjs"
  }
}
```

## Comandos essenciais

```bash
# Escreve guias em AGENTS.md / CLAUDE.md
pnpm pharos -- init

# Lista componentes
pnpm pharos -- component --list

# Docs de um componente
pnpm pharos -- component Button

# Templates de página
pnpm pharos -- template --list
pnpm pharos -- template dashboard

# Build de tema
pnpm pharos -- theme build src/meuTema.ts --out src/meuTema.css
```

## API programática

Usada por este site no script `generate-catalog`:

```js
import {component, template, docs} from '@pharos-ds/cli/api';

const list = await component(undefined, {list: true});
const button = await component('Button', {detail: 'full'});
const pages = await template(undefined, {list: true, type: 'page'});
```

## Dica

Sempre use `@pharos-ds/cli`. O binário global `npx pharos` pode resolver para outro pacote no npm.
