#!/usr/bin/env node
/**
 * Exporta toda a documentação do site para Markdown puro em `docs-md/`,
 * pensado para consumo por agentes de IA (RAG, contexto, AGENTS.md etc).
 *
 * Fontes:
 *   - content/docs/*.mdx            → docs-md/guias/*.md
 *   - src/generated/catalog.json    → docs-md/componentes/*.md (+ README índice)
 *   - src/generated/demos.json      → seção "Exemplos" de cada componente
 *     (gere com `pnpm extract:demos`; se ausente, a seção é omitida)
 *   - src/generated/templates.json  → docs-md/templates/README.md
 *   - página /temas                 → docs-md/temas.md
 *   - @pharos-ds/theme-pharos       → docs-md/tema-pharos.md (tokens, tipografia, ícones)
 *   - public/llms.txt + navegação   → docs-md/README.md
 *
 * Uso: pnpm export:md
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {buildThemeMd} from './export-theme-md.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const OUT = path.join(root, 'docs-md');

const DOCS_ORDER = ['instalacao', 'nextjs', 'cli', 'temas', 'estilizacao', 'tokens', 'agentes'];

// ---------------------------------------------------------------- helpers

function readJson(file) {
  const full = path.join(root, file);
  if (!fs.existsSync(full)) return null;
  return JSON.parse(fs.readFileSync(full, 'utf8'));
}

function write(relPath, content) {
  const full = path.join(OUT, relPath);
  fs.mkdirSync(path.dirname(full), {recursive: true});
  fs.writeFileSync(full, content.replace(/\n{3,}/g, '\n\n').trimEnd() + '\n', 'utf8');
}

/** Escapa conteúdo para célula de tabela Markdown (pipes e quebras de linha). */
function cell(value) {
  if (value === undefined || value === null || value === '') return '—';
  return String(value).replace(/\|/g, '\\|').replace(/\r?\n+/g, ' ').trim();
}

function code(value) {
  if (value === undefined || value === null || value === '') return '—';
  return '`' + cell(value).replace(/`/g, '\\`') + '`';
}

function fence(lang, body) {
  return '```' + lang + '\n' + body.trimEnd() + '\n```';
}

/** Primeira frase/linha da descrição, para índices. */
function summary(text) {
  if (!text) return '';
  const first = text.split(/\n\s*\n/)[0].replace(/\s+/g, ' ').trim();
  const m = first.match(/^(.+?[.!?])(\s|$)/);
  return (m ? m[1] : first).trim();
}

/** Reescreve links internos do site para caminhos relativos dentro de docs-md. */
function rewriteLinks(markdown, fromDir) {
  const rel = target => {
    const p = path.relative(fromDir, target).split(path.sep).join('/');
    return p.startsWith('.') ? p : './' + p;
  };
  return markdown.replace(/\]\((\/[^)\s#]*)(#[^)]*)?\)/g, (m, href, hash = '') => {
    let target;
    if (href === '/docs' || href === '/docs/') target = 'guias/README.md';
    else if (href.startsWith('/docs/')) target = `guias/${href.slice('/docs/'.length)}.md`;
    else if (href === '/componentes') target = 'componentes/README.md';
    else if (href.startsWith('/componentes/')) target = `componentes/${href.slice('/componentes/'.length)}.md`;
    else if (href === '/templates' || href.startsWith('/templates/')) target = 'templates/README.md';
    else if (href === '/temas') target = 'temas.md';
    else if (href === '/') target = 'README.md';
    else return m;
    return `](${rel(target)}${hash})`;
  });
}

// ---------------------------------------------------------------- fontes

const catalog = readJson('src/generated/catalog.json');
const templates = readJson('src/generated/templates.json');
const demos = readJson('src/generated/demos.json')?.demos ?? null;

if (!catalog) {
  console.error('src/generated/catalog.json não encontrado. Rode `pnpm generate` primeiro.');
  process.exit(1);
}
if (!demos) {
  console.warn('Aviso: src/generated/demos.json ausente — rode `pnpm extract:demos` para incluir exemplos.');
}

fs.rmSync(OUT, {recursive: true, force: true});
fs.mkdirSync(OUT, {recursive: true});

// ---------------------------------------------------------------- guias

const docsDir = path.join(root, 'content/docs');
const guides = fs
  .readdirSync(docsDir)
  .filter(f => f.endsWith('.mdx'))
  .map(file => {
    const slug = file.replace(/\.mdx$/, '');
    const {data, content} = matter(fs.readFileSync(path.join(docsDir, file), 'utf8'));
    const idx = DOCS_ORDER.indexOf(slug);
    return {
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ''),
      order: typeof data.order === 'number' ? data.order : idx === -1 ? 999 : idx,
      content,
    };
  })
  .sort((a, b) => a.order - b.order);

for (const g of guides) {
  const body = rewriteLinks(g.content, 'guias');
  write(
    `guias/${g.slug}.md`,
    `---\ntitle: ${JSON.stringify(g.title)}\ndescription: ${JSON.stringify(g.description)}\nsource: /docs/${g.slug}\n---\n\n${body}`,
  );
}

write(
  'guias/README.md',
  [
    '# Guias',
    '',
    'Guias de instalação e uso do Pharos, na ordem recomendada de leitura.',
    '',
    ...guides.map((g, i) => `${i + 1}. [${g.title}](./${g.slug}.md) — ${g.description}`),
  ].join('\n'),
);

// ---------------------------------------------------------------- componentes

const names = Object.keys(catalog.components).sort((a, b) => a.localeCompare(b));

function componentMd(c) {
  const lines = [];
  lines.push('---');
  lines.push(`title: ${JSON.stringify(c.name)}`);
  lines.push(`group: ${JSON.stringify(c.group ?? '')}`);
  lines.push(`category: ${JSON.stringify(c.category ?? '')}`);
  lines.push(`package: ${JSON.stringify(c.package)}`);
  lines.push(`import: ${JSON.stringify(c.importPath)}`);
  lines.push(`source: /componentes/${c.name}`);
  lines.push('---');
  lines.push('');
  lines.push(`# ${c.name}`);
  lines.push('');
  const meta = [];
  if (c.group) meta.push(`**Grupo:** ${c.group}`);
  if (c.category) meta.push(`**Categoria:** ${c.category}`);
  meta.push(`**Pacote:** \`${c.package}\``);
  lines.push(meta.join(' · '));
  lines.push('');
  if (c.description) {
    lines.push(c.description.trim());
    lines.push('');
  }

  lines.push('## Importação');
  lines.push('');
  lines.push(fence('tsx', `import {${c.name}} from '${c.importPath}';`));
  lines.push('');

  const demoList = demos?.[c.name] ?? [];
  if (demoList.length > 0) {
    lines.push('## Exemplos');
    lines.push('');
    for (const d of demoList) {
      lines.push(`### ${d.title}`);
      lines.push('');
      lines.push(fence('tsx', d.code));
      lines.push('');
      const ctrls = (d.controls ?? []).map(ctrl =>
        ctrl.kind === 'select'
          ? `\`${ctrl.name}\`: ${ctrl.options.map(o => `\`${o}\``).join(' · ')} (padrão \`${ctrl.defaultValue}\`)`
          : `\`${ctrl.name}\`: boolean (padrão \`${ctrl.defaultValue}\`)`,
      );
      if (ctrls.length) {
        lines.push('Valores explorados na demo interativa:');
        lines.push('');
        lines.push(...ctrls.map(x => `- ${x}`));
        lines.push('');
      }
    }
  } else if (demos) {
    lines.push('## Exemplos');
    lines.push('');
    lines.push(
      `Exemplo interativo ainda não curado para este componente. Use a tabela de props abaixo e a CLI: \`npx @pharos-ds/cli component ${c.name}\`.`,
    );
    lines.push('');
  }

  if (c.bestPractices?.length) {
    lines.push('## Boas práticas');
    lines.push('');
    for (const bp of c.bestPractices) {
      lines.push(`- **${bp.guidance ? 'Faça' : 'Evite'}:** ${bp.description.replace(/\s+/g, ' ').trim()}`);
    }
    lines.push('');
  }

  lines.push('## Props');
  lines.push('');
  if (!c.props?.length) {
    lines.push(`Nenhuma prop documentada. Rode \`npx @pharos-ds/cli component ${c.name}\`.`);
  } else {
    lines.push('| Prop | Tipo | Obrigatória | Padrão | Descrição |');
    lines.push('| --- | --- | --- | --- | --- |');
    for (const p of c.props) {
      lines.push(
        `| ${code(p.name)} | ${code(p.type)} | ${p.required ? 'sim' : 'não'} | ${p.default ? code(p.default) : '—'} | ${cell(p.description)} |`,
      );
    }
  }
  lines.push('');
  lines.push(`> Pacote: \`${c.package}\` · Import: \`${c.importPath}\` · Docs atualizadas: \`npx @pharos-ds/cli component ${c.name}\``);
  return lines.join('\n');
}

for (const name of names) {
  write(`componentes/${name}.md`, componentMd(catalog.components[name]));
}

// Índice por grupo (mesma lógica de getGroupedComponents no site).
// O catálogo da CLI às vezes vaza um docstring como nome de grupo (ex.:
// "Group label for visual grouping."). Nesses casos, realoca o componente
// para o grupo existente cujo nome é prefixo do nome do componente.
const validGroups = Object.keys(catalog.groups).filter(g => /^[A-Za-z][A-Za-z0-9 ]*$/.test(g));
function fixGroup(group, componentName) {
  if (validGroups.includes(group)) return group;
  const byPrefix = validGroups
    .filter(g => componentName.startsWith(g))
    .sort((a, b) => b.length - a.length)[0];
  return byPrefix ?? 'Misc';
}
const groupMap = new Map();
for (const [group, list] of Object.entries(catalog.groups)) {
  for (const n of new Set(list)) {
    const c = catalog.components[n];
    if (!c) continue;
    const g = fixGroup(group, n);
    if (!groupMap.has(g)) groupMap.set(g, []);
    groupMap.get(g).push(c);
  }
}
const grouped = [...groupMap.entries()]
  .map(([group, items]) => ({group, items: items.sort((a, b) => a.name.localeCompare(b.name))}))
  .sort((a, b) => a.group.localeCompare(b.group));

const idx = [];
idx.push('# Componentes');
idx.push('');
idx.push(`${names.length} componentes React do pacote \`@pharos-ds/core\`, agrupados como na galeria do site. Cada arquivo traz descrição, importação, exemplos, boas práticas e tabela de props.`);
idx.push('');
idx.push('Regra para agentes: nunca invente props. Consulte o arquivo do componente ou rode `npx @pharos-ds/cli component <Nome>`.');
idx.push('');
idx.push('## Índice por grupo');
idx.push('');
for (const g of grouped) {
  idx.push(`### ${g.group}`);
  idx.push('');
  for (const c of g.items) {
    const s = summary(c.description);
    idx.push(`- [${c.name}](./${c.name}.md)${s ? ` — ${s}` : ''}`);
  }
  idx.push('');
}
idx.push('## Lista alfabética');
idx.push('');
idx.push('| Componente | Grupo | Categoria | Import |');
idx.push('| --- | --- | --- | --- |');
for (const n of names) {
  const c = catalog.components[n];
  idx.push(`| [${n}](./${n}.md) | ${cell(c.group)} | ${cell(c.category)} | ${code(c.importPath)} |`);
}
write('componentes/README.md', idx.join('\n'));

// ---------------------------------------------------------------- templates

const tpl = templates?.templates ?? [];
const t = [];
t.push('# Templates');
t.push('');
t.push(`${tpl.length} templates de página prontos para plugar conteúdo, distribuídos pelo pacote \`@pharos-ds/cli\`. A CLI resolve o template e pode gerar um skeleton no seu projeto.`);
t.push('');
t.push('## CLI');
t.push('');
t.push(fence('bash', [
  '# Lista todos os templates',
  'npx @pharos-ds/cli template --list',
  '',
  '# Inspeciona um template',
  'npx @pharos-ds/cli template dashboard',
  '',
  '# Gera um skeleton do template no projeto',
  'npx @pharos-ds/cli template dashboard --skeleton',
].join('\n')));
t.push('');
t.push('## Lista');
t.push('');
t.push('| Template | Tipo | Descrição | Comando |');
t.push('| --- | --- | --- | --- |');
for (const x of tpl) {
  t.push(`| ${code(x.name)} | ${cell(x.type || 'page')} | ${cell(x.description || `Template \`${x.id}\``)} | ${code(`npx @pharos-ds/cli template ${x.id}`)} |`);
}
t.push('');
t.push('> Pacote: `@pharos-ds/cli`. Templates têm o mesmo fluxo: `template <id>` para inspecionar, `template <id> --skeleton` para copiar.');
write('templates/README.md', t.join('\n'));

// ---------------------------------------------------------------- temas (página /temas)

write(
  'temas.md',
  `---
title: "Temas"
description: "Tema Pharos oficial e como customizar."
source: /temas
---

# Temas

O tema oficial **Pharos** carrega a marca Alexandria: tokens, dark mode e ícones Lucide. É um tema *built* para consumo direto — sem plugin StyleX no app.

- Pacote: \`@pharos-ds/theme-pharos\` (público)
- Referência completa de valores (paleta, tokens claro/escuro, tipografia, ícones): [tema-pharos.md](./tema-pharos.md)

## Instalação

${fence('tsx', `pnpm add @pharos-ds/theme-pharos

import {Theme} from '@pharos-ds/core/theme';
import {pharosTheme} from '@pharos-ds/theme-pharos/built';
import '@pharos-ds/theme-pharos/theme.css';

<Theme theme={pharosTheme} mode="system">
  {children}
</Theme>`)}

## Customizar

Defina um tema TypeScript e gere o CSS com a CLI. Guia completo em [Guias → Temas](./guias/temas.md).

${fence('bash', 'npx @pharos-ds/cli theme build src/themes/meuTema.ts --out src/themes/meuTema.css')}

### Dark mode

Controle o prop \`mode\` de \`<Theme>\` (\`light\` / \`dark\` / \`system\`). Veja [Next.js → Dark mode](./guias/nextjs.md#dark-mode).
`,
);

// ---------------------------------------------------------------- tema Pharos (pacote)

let themeStats = null;
try {
  const theme = buildThemeMd(root);
  write('tema-pharos.md', theme.markdown);
  themeStats = theme.stats;
} catch (err) {
  console.warn(`Aviso: tema-pharos.md não gerado (${err?.message ?? err}). Rode \`pnpm install\`.`);
}

// ---------------------------------------------------------------- README raiz

const readme = [];
readme.push('# Pharos Design System — Documentação em Markdown');
readme.push('');
readme.push('> Design system da Alexandria — componentes React acessíveis, temas e templates.');
readme.push('> Pacotes npm: `@pharos-ds/core`, `@pharos-ds/theme-pharos`, `@pharos-ds/cli`.');
readme.push('');
readme.push(`Esta pasta é a versão Markdown completa do site de documentação, gerada por \`pnpm export:md\` para uso por agentes de IA. Catálogo gerado em ${catalog.generatedAt}.`);
readme.push('');
readme.push('## Instruções para agentes');
readme.push('');
readme.push('1. Use `npx @pharos-ds/cli init` uma vez por projeto (escreve `AGENTS.md` / `CLAUDE.md`).');
readme.push('2. Nunca invente APIs de componente — consulte `componentes/<Nome>.md` ou rode `npx @pharos-ds/cli component <Nome>`.');
readme.push('3. Prefira compor componentes Pharos a escrever CSS manual.');
readme.push('4. Instale `@pharos-ds/core` + `@pharos-ds/theme-pharos` (e `@pharos-ds/cli` como dev).');
readme.push('5. Ordem do CSS: `reset.css` → `pharos.css` → `theme.css`.');
readme.push('6. Envolva o app com `<Theme theme={pharosTheme}>` de `@pharos-ds/theme-pharos/built`.');
readme.push('7. Use sempre o pacote com escopo `@pharos-ds/cli`; o pacote bare `pharos` no npm é outro projeto.');
readme.push('8. **O tema padrão é sempre `@pharos-ds/theme-pharos` (marca Alexandria).** A partir da CLI 1.0.3, `pharos init` instala e configura o tema Alexandria por padrão; versões anteriores sugeriam `@pharos-ds/theme-neutral`: ignore e atualize a CLI. Não instale `theme-neutral` nem outro `@pharos-ds/theme-*`. Valores do tema em [tema-pharos.md](./tema-pharos.md).');
readme.push('');
readme.push('## Guias');
readme.push('');
for (const g of guides) readme.push(`- [${g.title}](./guias/${g.slug}.md) — ${g.description}`);
readme.push('');
readme.push('## Referência');
readme.push('');
readme.push(`- [Componentes](./componentes/README.md) — ${names.length} componentes com props, exemplos e boas práticas (um arquivo por componente)`);
readme.push(`- [Templates](./templates/README.md) — ${tpl.length} templates de página via CLI`);
readme.push('- [Temas](./temas.md) — tema oficial Pharos, dark mode e customização');
if (themeStats) readme.push(`- [Tema Pharos (Alexandria)](./tema-pharos.md) — referência completa do tema: paleta da marca, ${themeStats.tokens} tokens claro/escuro, tipografia, motion, overrides e ${themeStats.icons} ícones`);
readme.push('');
readme.push('## Estrutura');
readme.push('');
readme.push(fence('', [
  'docs-md/',
  '  README.md              # este índice',
  '  guias/                 # guias (instalação, Next.js, CLI, temas, estilização, tokens, agentes)',
  '  componentes/README.md  # índice por grupo + tabela alfabética',
  '  componentes/<Nome>.md  # um arquivo por componente',
  '  templates/README.md    # lista de templates e comandos',
  '  temas.md               # página de temas (instalação)',
  '  tema-pharos.md         # tema Alexandria: paleta, tokens, tipografia, ícones',
].join('\n')));
readme.push('');
readme.push('## Links');
readme.push('');
readme.push('- npm: https://www.npmjs.com/package/@pharos-ds/core');
readme.push('- Código-fonte: https://github.com/Caio-Silvestre/alexandria-ds');
write('README.md', readme.join('\n'));

const count = fs.readdirSync(path.join(OUT, 'componentes')).length;
console.log(`docs-md/: ${guides.length} guias, ${count - 1} componentes, ${tpl.length} templates${themeStats ? `, tema (${themeStats.tokens} tokens, ${themeStats.icons} ícones)` : ''}.`);
