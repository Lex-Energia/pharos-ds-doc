#!/usr/bin/env node
/**
 * Gera catálogo de componentes e templates a partir de @pharos-ds/cli/api.
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'src/generated');
const require = createRequire(import.meta.url);

async function loadApi() {
  return import('@pharos-ds/cli/api');
}

function ensureDir(dir) {
  fs.mkdirSync(dir, {recursive: true});
}

function writeJson(file, data) {
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

function resolveCliRoot() {
  // `@pharos-ds/cli` does not export package.json — resolve via the bin entry.
  const binPath = require.resolve('@pharos-ds/cli');
  return path.dirname(path.dirname(binPath)); // .../bin/pharos.mjs → package root
}

function listPageTemplatesFromDisk() {
  const cliPkg = resolveCliRoot();
  const pagesDir = path.join(cliPkg, 'templates/pages');
  const templates = [];
  if (!fs.existsSync(pagesDir)) return templates;
  for (const entry of fs.readdirSync(pagesDir)) {
    const full = path.join(pagesDir, entry);
    if (!fs.statSync(full).isDirectory()) continue;
    templates.push({
      id: entry,
      name: entry,
      type: 'page',
      description: `Template de página \`${entry}\``,
      package: '@pharos-ds/cli',
    });
  }
  return templates;
}

async function generateComponents(api) {
  const list = await api.component(undefined, {
    list: true,
    detail: 'names',
    cwd: root,
  });

  /** @type {Record<string, string[]>} */
  const groups = {};
  /** @type {Set<string>} */
  const names = new Set();

  const raw = list?.data?.components ?? {};
  for (const [group, entries] of Object.entries(raw)) {
    const groupNames = [];
    for (const entry of entries) {
      const name = typeof entry === 'string' ? entry : entry?.name;
      if (!name) continue;
      names.add(name);
      groupNames.push(name);
    }
    groups[group] = [...new Set(groupNames)].sort();
  }

  /** @type {Record<string, object>} */
  const components = {};

  for (const name of [...names].sort()) {
    try {
      const detail = await api.component(name, {
        detail: 'full',
        cwd: root,
      });
      const data = detail?.data ?? {};
      const usage = data.usage ?? {};
      components[name] = {
        name,
        group: data.group ?? 'Misc',
        category: data.category ?? '',
        package: data.package ?? '@pharos-ds/core',
        description: usage.description ?? data.description ?? '',
        importPath: data.importPath ?? `@pharos-ds/core/${name}`,
        bestPractices: usage.bestPractices ?? [],
        props: (data.props ?? []).map(p => ({
          name: p.name,
          type: p.type ?? 'unknown',
          description: p.description ?? '',
          required: Boolean(p.required),
          default: p.default,
        })),
      };
    } catch (err) {
      console.warn(`  skip ${name}: ${err?.message ?? err}`);
      components[name] = {
        name,
        group: 'Misc',
        category: '',
        package: '@pharos-ds/core',
        description: '',
        importPath: `@pharos-ds/core/${name}`,
        bestPractices: [],
        props: [],
      };
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    groups,
    components,
  };
}

async function generateTemplates(api) {
  try {
    const result = await api.template(undefined, {
      list: true,
      type: 'page',
      cwd: root,
    });
    const data = result?.data ?? {};
    const items = data.templates ?? data.pages ?? data.items ?? [];

    const templates = (Array.isArray(items) ? items : Object.values(items).flat())
      .map(t => {
        if (typeof t === 'string') {
          return {
            id: t,
            name: t,
            type: 'page',
            description: '',
            package: '@pharos-ds/cli',
          };
        }
        return {
          id: t.id ?? t.name ?? t.slug,
          name: t.name ?? t.id ?? t.slug,
          type: t.type ?? 'page',
          description: t.description ?? '',
          package: t.package ?? '@pharos-ds/cli',
        };
      })
      .filter(t => t.id);

    if (templates.length === 0) {
      templates.push(...listPageTemplatesFromDisk());
    }

    return {
      generatedAt: new Date().toISOString(),
      templates: templates.sort((a, b) => a.id.localeCompare(b.id)),
    };
  } catch (err) {
    console.warn('template list falhou, usando filesystem:', err?.message ?? err);
    return {
      generatedAt: new Date().toISOString(),
      templates: listPageTemplatesFromDisk(),
    };
  }
}

async function main() {
  console.log('Generating Pharos docs catalog…');
  ensureDir(outDir);

  // Placeholder so typecheck/import works even if API fails mid-way
  if (!fs.existsSync(path.join(outDir, 'catalog.json'))) {
    writeJson(path.join(outDir, 'catalog.json'), {
      generatedAt: new Date().toISOString(),
      groups: {},
      components: {},
    });
  }
  if (!fs.existsSync(path.join(outDir, 'templates.json'))) {
    writeJson(path.join(outDir, 'templates.json'), {
      generatedAt: new Date().toISOString(),
      templates: [],
    });
  }

  const api = await loadApi();
  const catalog = await generateComponents(api);
  const templates = await generateTemplates(api);

  writeJson(path.join(outDir, 'catalog.json'), catalog);
  writeJson(path.join(outDir, 'templates.json'), templates);

  const componentCount = Object.keys(catalog.components).length;
  console.log(
    `  ${componentCount} componentes · ${templates.templates.length} templates`,
  );
  console.log(`  → ${path.relative(root, outDir)}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
