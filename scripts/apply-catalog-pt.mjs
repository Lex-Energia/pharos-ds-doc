/**
 * Aplica traduções PT-BR do arquivo content/i18n/catalog-pt-BR.json
 * sobre o catálogo gerado (descriptions, bestPractices, props).
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

/**
 * @param {object} catalog
 * @param {object | null} pt
 */
export function applyCatalogPt(catalog, pt) {
  if (!pt || typeof pt !== 'object') return catalog;

  for (const [name, translation] of Object.entries(pt)) {
    const component = catalog.components?.[name];
    if (!component || !translation) continue;

    if (typeof translation.description === 'string' && translation.description) {
      component.description = translation.description;
    }

    if (Array.isArray(translation.bestPractices) && translation.bestPractices.length) {
      component.bestPractices = translation.bestPractices.map((bp, i) => ({
        guidance:
          typeof bp.guidance === 'boolean'
            ? bp.guidance
            : Boolean(component.bestPractices?.[i]?.guidance),
        description: bp.description ?? component.bestPractices?.[i]?.description ?? '',
      }));
    }

    if (translation.props && typeof translation.props === 'object') {
      component.props = (component.props ?? []).map(prop => {
        const ptDesc = translation.props[prop.name];
        if (typeof ptDesc !== 'string' || !ptDesc) return prop;
        return {...prop, description: ptDesc};
      });
    }
  }

  return catalog;
}

export function loadCatalogPt() {
  const file = path.join(root, 'content/i18n/catalog-pt-BR.json');
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
  const catalogPath = path.join(root, 'src/generated/catalog.json');
  const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
  const pt = loadCatalogPt();
  if (!pt) {
    console.log('Sem content/i18n/catalog-pt-BR.json — nada a aplicar.');
    process.exit(0);
  }
  applyCatalogPt(catalog, pt);
  fs.writeFileSync(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`);
  console.log(`PT-BR aplicado a ${Object.keys(pt).length} componentes.`);
}
