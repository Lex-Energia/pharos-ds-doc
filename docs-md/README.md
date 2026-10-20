# Pharos Design System — Documentação em Markdown

> Design system da Alexandria — componentes React acessíveis, temas e templates.
> Pacotes npm: `@pharos-ds/core`, `@pharos-ds/theme-pharos`, `@pharos-ds/cli`.

Esta pasta é a versão Markdown completa do site de documentação, gerada por `pnpm export:md` para uso por agentes de IA. Catálogo gerado em 2026-10-20T17:38:55.403Z.

## Instruções para agentes

1. Use `npx @pharos-ds/cli init` uma vez por projeto (escreve `AGENTS.md` / `CLAUDE.md`).
2. Nunca invente APIs de componente — consulte `componentes/<Nome>.md` ou rode `npx @pharos-ds/cli component <Nome>`.
3. Prefira compor componentes Pharos a escrever CSS manual.
4. Instale `@pharos-ds/core` + `@pharos-ds/theme-pharos` (e `@pharos-ds/cli` como dev).
5. Ordem do CSS: `reset.css` → `pharos.css` → `theme.css`.
6. Envolva o app com `<Theme theme={pharosTheme}>` de `@pharos-ds/theme-pharos/built`.
7. Use sempre o pacote com escopo `@pharos-ds/cli`; o pacote bare `pharos` no npm é outro projeto.
8. **O tema padrão é sempre `@pharos-ds/theme-pharos` (marca Alexandria).** A partir da CLI 1.0.3, `pharos init` instala e configura o tema Alexandria por padrão; versões anteriores sugeriam `@pharos-ds/theme-neutral`: ignore e atualize a CLI. Não instale `theme-neutral` nem outro `@pharos-ds/theme-*`. Valores do tema em [tema-pharos.md](./tema-pharos.md).

## Guias

- [Instalação](./guias/instalacao.md) — Como instalar e configurar o Pharos no seu projeto.
- [Next.js](./guias/nextjs.md) — Integração passo a passo com App Router.
- [CLI](./guias/cli.md) — Scaffolding, docs de componentes e templates via linha de comando.
- [Temas](./guias/temas.md) — Tema Pharos, dark mode e customização.
- [Estilização](./guias/estilizacao.md) — className, CSS variables e Tailwind opcional.
- [Tokens](./guias/tokens.md) — Cor, tipografia, spacing e shape.
- [Agentes e AI](./guias/agentes.md) — Como assistentes de código devem usar o Pharos.

## Referência

- [Componentes](./componentes/README.md) — 154 componentes com props, exemplos e boas práticas (um arquivo por componente)
- [Templates](./templates/README.md) — 43 templates de página via CLI
- [Temas](./temas.md) — tema oficial Pharos, dark mode e customização
- [Tema Pharos (Alexandria)](./tema-pharos.md) — referência completa do tema: paleta da marca, 170 tokens claro/escuro, tipografia, motion, overrides e 26 ícones

## Estrutura

```
docs-md/
  README.md              # este índice
  guias/                 # guias (instalação, Next.js, CLI, temas, estilização, tokens, agentes)
  componentes/README.md  # índice por grupo + tabela alfabética
  componentes/<Nome>.md  # um arquivo por componente
  templates/README.md    # lista de templates e comandos
  temas.md               # página de temas (instalação)
  tema-pharos.md         # tema Alexandria: paleta, tokens, tipografia, ícones
```

## Links

- npm: https://www.npmjs.com/package/@pharos-ds/core
- Código-fonte: https://github.com/Caio-Silvestre/alexandria-ds
