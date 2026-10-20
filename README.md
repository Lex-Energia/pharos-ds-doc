# Pharos Docs

Documentação oficial do **Pharos**, design system da Alexandria.

Site Next.js standalone que consome os pacotes publicados no npm:

- [`@pharos-ds/core`](https://www.npmjs.com/package/@pharos-ds/core)
- [`@pharos-ds/theme-pharos`](https://www.npmjs.com/package/@pharos-ds/theme-pharos)
- [`@pharos-ds/cli`](https://www.npmjs.com/package/@pharos-ds/cli)

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000).

O script `predev` / `prebuild` gera o catálogo de componentes e templates via `@pharos-ds/cli/api`.

## Scripts

| Comando | Descrição |
| --- | --- |
| `pnpm generate` | Gera `src/generated/catalog.json` e `templates.json` |
| `pnpm dev` | Servidor de desenvolvimento |
| `pnpm build` | Build de produção |
| `pnpm start` | Serve o build |
| `pnpm typecheck` | TypeScript |
| `pnpm extract:demos` | Gera `src/generated/demos.json` (snippets das demos, via `tsx`) |
| `pnpm export:md` | Exporta toda a doc para Markdown em `docs-md/` (para agentes de IA) |

## Estrutura

```
content/docs/     # Guias MDX em português
docs-md/          # Doc completa em Markdown puro (gerada por `pnpm export:md`)
scripts/          # generate-catalog, extract-demos, export-md
src/app/          # Rotas Next.js
src/demos/        # Demos React curados
src/generated/    # Catálogo gerado
```

## Doc em Markdown para agentes

`docs-md/` contém a mesma documentação do site em `.md` puro: guias, um arquivo por
componente (descrição, import, exemplos, boas práticas, props), templates e temas.
Para regenerar após atualizar o catálogo:

```bash
pnpm generate        # catálogo via @pharos-ds/cli
pnpm extract:demos   # snippets das demos
pnpm export:md       # escreve docs-md/
```

## Deploy

Pronto para Vercel (`vercel.json` incluído). Variáveis de ambiente não são necessárias para o MVP.

## Relação com o monorepo

O código-fonte do design system vive em [`alexandria-ds`](https://github.com/Caio-Silvestre/alexandria-ds). Este repositório é a superfície pública de documentação, desacoplada do monorepo.
