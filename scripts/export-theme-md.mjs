/**
 * Gera a referência em Markdown do tema oficial Pharos (marca Alexandria)
 * a partir do pacote instalado `@pharos-ds/theme-pharos`:
 *
 *   - dist/theme.css  → tokens (claro/escuro), tipografia, motion, syntax,
 *                       overrides de componentes
 *   - src/icons.tsx   → registro de ícones semânticos (Lucide)
 *   - @pharos-ds/core/dist/pharos.css → tokens base não sobrescritos
 *                       pelo tema (spacing, pesos de fonte)
 *
 * Usado por scripts/export-md.mjs. Exporta `buildThemeMd(root)`.
 */
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);

function resolvePkgFile(pkg, file) {
  // Os pacotes não exportam package.json; resolve via um export conhecido.
  const entry = require.resolve(pkg);
  let dir = path.dirname(entry);
  while (dir !== path.dirname(dir)) {
    if (fs.existsSync(path.join(dir, 'package.json'))) {
      const pj = JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8'));
      if (pj.name === pkg.split('/').slice(0, 2).join('/')) return path.join(dir, file);
    }
    dir = path.dirname(dir);
  }
  throw new Error(`Não foi possível localizar ${pkg}/${file}`);
}

function fence(lang, body) {
  return '```' + lang + '\n' + body.trimEnd() + '\n```';
}

function code(v) {
  return '`' + String(v).replace(/\|/g, '\\|').replace(/`/g, '\\`') + '`';
}

/** Divide `light-dark(a, b)` simples em [a, b]; senão retorna [valor, valor]. */
function splitLightDark(value) {
  const m = value.match(/^light-dark\(([^(),]+),\s*([^(),]+)\)$/);
  if (m) return [m[1].trim(), m[2].trim(), true];
  return [value, value, false];
}

function parseThemeCss(css) {
  const layerStart = css.indexOf('@layer pharos-theme');
  const body = css.slice(layerStart);
  const scopeStart = body.indexOf(':scope {');
  const scopeEnd = body.indexOf('\n  }', scopeStart);
  const scopeBody = body.slice(scopeStart + ':scope {'.length, scopeEnd);

  const tokens = [];
  for (const line of scopeBody.split('\n')) {
    const m = line.match(/^\s*(--[a-z0-9-]+):\s*(.+?);\s*$/);
    if (m) tokens.push({name: m[1], value: m[2]});
  }

  const overrides = [];
  const rest = body.slice(scopeEnd);
  const re = /\.pharos-([a-z]+)((?:\.[a-z0-9-]+)*)\s*\{([^}]*)\}/g;
  let m;
  while ((m = re.exec(rest))) {
    const component = m[1];
    const variant = m[2] ? m[2].slice(1).replace(/\./g, ' ') : '';
    const decls = m[3]
      .split(';')
      .map(s => s.trim())
      .filter(Boolean)
      .map(d => {
        const i = d.indexOf(':');
        return {prop: d.slice(0, i).trim(), value: d.slice(i + 1).trim()};
      });
    overrides.push({component, variant, decls});
  }

  return {tokens, overrides};
}

function parseIcons(tsx) {
  const icons = [];
  const re = /^\s+([a-zA-Z]+):\s*<([A-Za-z0-9]+)\b/gm;
  let m;
  while ((m = re.exec(tsx))) icons.push({name: m[1], lucide: m[2]});
  return icons;
}

function parseCoreTokens(css) {
  const out = new Map();
  const re = /(--(?:spacing|font-weight|radius)-[a-z0-9-]+):\s*([^;}]+)/g;
  let m;
  while ((m = re.exec(css))) if (!out.has(m[1])) out.set(m[1], m[2].trim());
  return out;
}

const SECTIONS = [
  {
    title: 'Superfícies (backgrounds)',
    match: n => n.startsWith('--color-background-') && !isHue(n),
    intro:
      'Modo claro: superfícies brancas flutuando sobre um body levemente cinza; sombras fazem a elevação. Modo escuro: card, popover e muted colapsam no tom do body e se elevam só por sombra; `surface` é mais clara que o body para componentes interativos (switch, radio, checkbox, dialog, app shell).',
  },
  {
    title: 'Accent, neutro e overlays',
    match: n =>
      n.startsWith('--color-accent') || n.startsWith('--color-neutral') || n.startsWith('--color-overlay'),
    intro: 'O accent é o laranja Alexandria (`#F26641`), usado em Button primary, links e foco. No escuro ele clareia para manter contraste.',
  },
  {
    title: 'Texto',
    match: n => n.startsWith('--color-text-') && !isHue(n),
    intro: 'Texto primário usa o chumbo do brandbook (`#383838`); o tema evita preto absoluto.',
  },
  {
    title: 'Cor "on" (texto sobre superfícies coloridas)',
    match: n => n.startsWith('--color-on-'),
    intro: 'Use sobre accent, success, error e warning para garantir contraste.',
  },
  {
    title: 'Ícones',
    match: n => n.startsWith('--color-icon-') && !isHue(n),
  },
  {
    title: 'Status (success, error, warning)',
    match: n => /^--color-(success|error|warning)/.test(n),
    intro:
      'Modo claro: fundo pastel (`-muted`) + texto/ícone escuro saturado. Modo escuro: inverte para overlay translúcido do matiz + texto pastel claro. Usados por Banner, inputs com status e Button destructive.',
  },
  {
    title: 'Bordas e efeitos',
    match: n => (n.startsWith('--color-border') && !isHue(n)) || /^--color-(skeleton|shadow|tint)/.test(n),
  },
  {
    title: 'Radius',
    match: n => n.startsWith('--radius-'),
    intro: 'Ligeiramente maior que o padrão do core. Use `--radius-element` em botões/inputs, `--radius-container` em cards e `--radius-page` em superfícies grandes.',
  },
  {
    title: 'Sombras',
    match: n => n.startsWith('--shadow-'),
    intro: 'No escuro, as sombras ganham um inset branco de 1px em todas as bordas ("bezel"), simulando luz na borda da superfície. Os `--shadow-inset-*` são anéis de 2px para hover, seleção e status.',
  },
  {
    title: 'Syntax highlight (CodeBlock)',
    match: n => n.startsWith('--color-syntax-'),
  },
];

const HUES = ['red', 'orange', 'yellow', 'green', 'teal', 'cyan', 'blue', 'purple', 'pink', 'gray'];
const HUE_NOTE = {
  orange: 'laranja da marca `#F26641` (Pantone 7579 C)',
  yellow: 'amarelos da marca `#FAA61A` / `#FFF200`',
  blue: 'azul da marca `#034694` (Pantone 286 C), também usado como info',
  purple: 'roxo destaque da marca `#7C51A1` (Pantone 7441 C)',
  gray: 'neutro categórico, sem croma',
};
function isHue(n) {
  return HUES.some(h => n.endsWith(`-${h}`));
}

function tokenTable(tokens) {
  const lines = ['| Token | Claro | Escuro |', '| --- | --- | --- |'];
  for (const t of tokens) {
    const [light, dark, split] = splitLightDark(t.value);
    lines.push(split ? `| ${code(t.name)} | ${code(light)} | ${code(dark)} |` : `| ${code(t.name)} | ${code(t.value)} | *(igual)* |`);
  }
  return lines.join('\n');
}

export function buildThemeMd(root) {
  const themeCss = fs.readFileSync(resolvePkgFile('@pharos-ds/theme-pharos', 'dist/theme.css'), 'utf8');
  const iconsTsx = fs.readFileSync(resolvePkgFile('@pharos-ds/theme-pharos', 'src/icons.tsx'), 'utf8');
  const themePkg = JSON.parse(fs.readFileSync(resolvePkgFile('@pharos-ds/theme-pharos', 'package.json'), 'utf8'));
  const coreCss = fs.readFileSync(resolvePkgFile('@pharos-ds/core/Button', 'dist/pharos.css'), 'utf8');

  const {tokens, overrides} = parseThemeCss(themeCss);
  const icons = parseIcons(iconsTsx);
  const coreTokens = parseCoreTokens(coreCss);
  const byName = new Map(tokens.map(t => [t.name, t.value]));
  const used = new Set();
  const take = pred => tokens.filter(t => !used.has(t.name) && pred(t.name)).map(t => (used.add(t.name), t));

  const L = [];
  L.push('---');
  L.push('title: "Tema Pharos (marca Alexandria)"');
  L.push('description: "Referência completa do tema oficial: paleta da marca, tokens claro/escuro, tipografia, motion, overrides de componentes e ícones."');
  L.push(`package: "@pharos-ds/theme-pharos@${themePkg.version}"`);
  L.push('---');
  L.push('');
  L.push('# Tema Pharos (marca Alexandria)');
  L.push('');
  L.push(`Tema oficial do design system, pacote \`@pharos-ds/theme-pharos\` v${themePkg.version}. Este arquivo é gerado a partir do \`theme.css\` compilado do pacote e lista todos os valores que o tema aplica sobre o \`@pharos-ds/core\`. Para instalação e uso, veja [Temas](./temas.md) e [Guias → Temas](./guias/temas.md).`);
  L.push('');
  L.push('> **Tema padrão.** Todo projeto Pharos usa este tema por padrão. Não use `@pharos-ds/theme-neutral` nem outro `@pharos-ds/theme-*` (são temas de exemplo da CLI), mesmo que a CLI 1.0.0 os sugira em `pharos init`.');
  L.push('');
  L.push('## Identidade da marca');
  L.push('');
  L.push('Fonte de verdade da paleta: brandbook Alexandria (março/2026).');
  L.push('');
  L.push('| Papel | Cor | Uso no tema |');
  L.push('| --- | --- | --- |');
  L.push('| Laranja primário | `#F26641` (Pantone 7579 C) | accent da UI, Button primary, StatusDot accent, ProgressBar accent |');
  L.push('| Azul | `#034694` (Pantone 286 C) | categórico blue, Badge info |');
  L.push('| Roxo destaque | `#7C51A1` (Pantone 7441 C) | categórico purple, keywords/types no syntax |');
  L.push('| Amarelo 1 / 2 | `#FAA61A` / `#FFF200` | categórico yellow |');
  L.push('| Chumbo (texto) | `#383838` | texto e ícones primários no modo claro |');
  L.push('');
  L.push('Princípios: superfícies quase brancas ou cinza suave (evitar preto absoluto); tipografia Figtree; ícones Lucide; os tons categóricos mantêm a estrutura OKLCH do core, trocando os âncoras de laranja, azul, roxo e amarelo pelos da marca onde o contraste permite.');
  L.push('');
  L.push('Regras rápidas para gerar UI com o tema:');
  L.push('');
  L.push('- Use tokens (`var(--color-...)`, `var(--spacing-...)`) em vez de hex soltos; os valores abaixo são o que os tokens resolvem.');
  L.push('- Um único Button `primary` (laranja) por view; `secondary`/`ghost` para o resto.');
  L.push('- Todo token de cor tem par claro/escuro resolvido via `light-dark()`; não force cores por modo manualmente.');
  L.push('- Status: `success`/`warning`/`error` para feedback; cores categóricas (blue, purple, teal...) para categorias, não para estado.');
  L.push('');

  // ---- Tipografia
  L.push('## Tipografia');
  L.push('');
  L.push('Família **Figtree** para corpo e títulos (fallback para a pilha do sistema); código usa a monoespaçada da plataforma. Escala modular com base 14px e razão 1.2. Títulos h3/h4 em bold para hierarquia de subseção.');
  L.push('');
  L.push('| Token | Valor |');
  L.push('| --- | --- |');
  for (const t of take(n => n.startsWith('--font-family-'))) L.push(`| ${code(t.name)} | ${code(t.value)} |`);
  L.push('');
  L.push('### Escala de tamanhos');
  L.push('');
  L.push('| Token | rem | px (base 16) |');
  L.push('| --- | --- | --- |');
  for (const t of take(n => n.startsWith('--font-size-'))) {
    const px = Math.round(parseFloat(t.value) * 16 * 100) / 100;
    L.push(`| ${code(t.name)} | ${code(t.value)} | ${px} |`);
  }
  L.push('');
  L.push('### Pesos (do core, não sobrescritos pelo tema)');
  L.push('');
  L.push('| Token | Valor |');
  L.push('| --- | --- |');
  for (const [k, v] of coreTokens) if (k.startsWith('--font-weight-')) L.push(`| ${code(k)} | ${code(v)} |`);
  L.push('');
  L.push('### Estilos de texto');
  L.push('');
  L.push('Mapeiam para os componentes `Heading` (level 1–6) e `Text` (type body, large, label, code, supporting, display-1..3).');
  L.push('');
  L.push('| Estilo | Tamanho | Peso | Line-height |');
  L.push('| --- | --- | --- | --- |');
  const styles = new Map();
  for (const t of take(n => n.startsWith('--text-'))) {
    const m = t.name.match(/^--text-(.+)-(size|weight|leading)$/);
    if (!m) continue;
    if (!styles.has(m[1])) styles.set(m[1], {});
    styles.get(m[1])[m[2]] = t.value;
  }
  const resolve = v => {
    const m = v.match(/^var\((--[a-z0-9-]+)\)$/);
    if (!m) return v;
    const inner = byName.get(m[1]) ?? coreTokens.get(m[1]);
    return inner ? `${m[1].replace(/^--font-(size|weight)-/, '')} (${inner})` : v;
  };
  for (const [name, s] of styles) {
    L.push(`| ${code(name)} | ${code(resolve(s.size ?? '—'))} | ${code(resolve(s.weight ?? '—'))} | ${code(s.leading ?? '—')} |`);
  }
  L.push('');

  // ---- Cores
  L.push('## Cores');
  L.push('');
  L.push('Cada token resolve para o par claro/escuro abaixo (o CSS usa `light-dark()`; o modo vem do prop `mode` de `<Theme>` ou de `data-theme` no `<html>`).');
  L.push('');
  for (const s of SECTIONS) {
    const list = take(s.match);
    if (!list.length) continue;
    L.push(`### ${s.title}`);
    L.push('');
    if (s.intro) {
      L.push(s.intro);
      L.push('');
    }
    L.push(tokenTable(list));
    L.push('');
  }

  L.push('### Paleta categórica');
  L.push('');
  L.push('Dez matizes, cada um com fundo, borda, ícone e texto. Claro: fundo pastel + texto escuro saturado. Escuro: inverte para overlay translúcido do matiz (24% alpha) + texto pastel claro. São a base das variantes categóricas de `Badge`, `Token`, `Banner` e similares.');
  L.push('');
  for (const hue of HUES) {
    const list = take(n => n.endsWith(`-${hue}`));
    if (!list.length) continue;
    L.push(`#### ${hue}${HUE_NOTE[hue] ? ` — ${HUE_NOTE[hue]}` : ''}`);
    L.push('');
    L.push(tokenTable(list));
    L.push('');
  }

  // ---- Motion
  const durations = take(n => n.startsWith('--duration-'));
  if (durations.length) {
    L.push('## Motion');
    L.push('');
    L.push('Mais rápido que o padrão do core, alinhado a convenções shadcn/Tailwind (fast 125ms, medium 300ms, slow 700ms, razão 0.75 para min/max).');
    L.push('');
    L.push('| Token | Valor |');
    L.push('| --- | --- |');
    for (const t of durations) L.push(`| ${code(t.name)} | ${code(t.value)} |`);
    L.push('');
  }

  // ---- Restante (qualquer token não classificado)
  const rest = tokens.filter(t => !used.has(t.name));
  if (rest.length) {
    L.push('## Outros tokens');
    L.push('');
    L.push(tokenTable(rest));
    L.push('');
  }

  // ---- Base do core
  L.push('## Tokens base do core (não sobrescritos pelo tema)');
  L.push('');
  L.push('Escala de spacing em múltiplos de 4px. Use em `gap`/`padding` e nos props `gap` de `VStack`, `HStack` e `Grid`.');
  L.push('');
  L.push('| Token | Valor |');
  L.push('| --- | --- |');
  const spacing = [...coreTokens].filter(([k]) => k.startsWith('--spacing-'));
  spacing.sort((a, b) => parseFloat(a[1]) - parseFloat(b[1]));
  for (const [k, v] of spacing) L.push(`| ${code(k)} | ${code(v)} |`);
  L.push('');

  // ---- Overrides de componentes
  L.push('## Overrides de componentes');
  L.push('');
  L.push('Ajustes que o tema aplica por cima do estilo padrão dos componentes (classes `.pharos-<componente>.<variante>`). Resumo:');
  L.push('');
  L.push('- **Button destructive**: fundo pastel vermelho (`--color-error-muted`) + texto vermelho (`--color-error`), em vez de preenchido.');
  L.push('- **Badge semânticos** (info/success/warning/error): preenchidos com cor saturada e texto contrastante (branco no claro, escuro no escuro); `info` usa o azul da marca.');
  L.push('- **Badge categóricos**: fundo + texto dos tokens do matiz (`--color-background-X` / `--color-text-X`).');
  L.push('- **StatusDot**: mesmas cores vivas dos badges preenchidos; `accent` segue o laranja da marca.');
  L.push('- **Banner**: texto e ícone na cor do matiz do status; `info` em azul.');
  L.push('- **Switch / ProgressBar**: trilho desligado usa `--color-border-emphasized` para se destacar do body.');
  L.push('- **Card / Section**: padding mais compacto (`--spacing-3`).');
  L.push('');
  L.push('| Componente | Variante | Propriedade | Valor |');
  L.push('| --- | --- | --- | --- |');
  for (const o of overrides) {
    if (o.component === 'heading' || o.component === 'text') continue; // já coberto em Tipografia
    for (const d of o.decls) L.push(`| ${code(o.component)} | ${o.variant ? code(o.variant) : '*(base)*'} | ${code(d.prop)} | ${code(d.value)} |`);
  }
  L.push('');

  // ---- Ícones
  L.push('## Ícones');
  L.push('');
  L.push('O tema registra ícones semânticos usando [Lucide](https://lucide.dev) (`lucide-react`). Os componentes do core pedem ícones por nome semântico; o tema decide qual glifo usar. Para ícones próprios no app, use `lucide-react` diretamente dentro de `<Icon>` para manter o mesmo traço.');
  L.push('');
  L.push('| Nome semântico | Ícone Lucide |');
  L.push('| --- | --- |');
  for (const i of icons) L.push(`| ${code(i.name)} | ${code(i.lucide)} |`);
  L.push('');

  // ---- Uso
  L.push('## Uso');
  L.push('');
  L.push(fence('tsx', `import {Theme} from '@pharos-ds/core/theme';
import {pharosTheme} from '@pharos-ds/theme-pharos/built';
import '@pharos-ds/core/reset.css';
import '@pharos-ds/core/pharos.css';
import '@pharos-ds/theme-pharos/theme.css';

<Theme theme={pharosTheme} mode="system">
  {children}
</Theme>`));
  L.push('');
  L.push('Caminhos de import do pacote:');
  L.push('');
  L.push('| Caminho | Uso |');
  L.push('| --- | --- |');
  L.push('| `@pharos-ds/theme-pharos` | fonte (StyleX via `@pharos-ds/build`) |');
  L.push('| `@pharos-ds/theme-pharos/built` | tema pré-compilado (`pharosTheme`) |');
  L.push('| `@pharos-ds/theme-pharos/theme.css` | CSS pré-compilado com os tokens acima |');
  L.push('');
  L.push('Para derivar um tema próprio a partir deste, defina um tema TypeScript com `defineTheme` e gere o CSS: `npx @pharos-ds/cli theme build src/meuTema.ts --out src/meuTema.css`.');

  return {markdown: L.join('\n'), stats: {tokens: tokens.length, overrides: overrides.length, icons: icons.length}};
}
