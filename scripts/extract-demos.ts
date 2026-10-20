/**
 * Extrai os snippets de código das demos (src/demos) com os valores padrão
 * dos controles — o mesmo código que a página do componente mostra ao abrir.
 *
 * Uso: pnpm dlx tsx scripts/extract-demos.ts
 * Saída: src/generated/demos.json
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {getDemos} from '../src/demos/registry';
import {DEMO_NAMES} from '../src/demos/names';
import {componentNameFromImport, formatComponentCode} from '../src/demos/formatCode';
import type {ControlValue} from '../src/demos/types';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

type DemoSnippet = {
  title: string;
  importLine: string;
  controls: Array<{name: string; kind: string; options?: string[]; defaultValue: ControlValue}>;
  code: string;
};

const out: Record<string, DemoSnippet[]> = {};

for (const name of DEMO_NAMES) {
  const demos = getDemos(name);
  if (demos.length === 0) continue;
  out[name] = demos.map(config => {
    const values: Record<string, ControlValue> = {};
    for (const control of config.controls) values[control.name] = control.defaultValue;
    const code =
      config.getCode?.(values) ??
      formatComponentCode({
        importLine: config.importLine,
        componentName: componentNameFromImport(config.importLine),
        props: values,
        fixedProps: config.fixedProps,
      });
    return {
      title: config.title,
      importLine: config.importLine,
      controls: config.controls.map(c => ({
        name: c.name,
        kind: c.kind,
        options: c.options,
        defaultValue: c.defaultValue,
      })),
      code,
    };
  });
}

const file = path.join(root, 'src/generated/demos.json');
fs.writeFileSync(
  file,
  `${JSON.stringify({generatedAt: new Date().toISOString(), demos: out}, null, 2)}\n`,
);
console.log(`demos.json: ${Object.keys(out).length} componentes com demo.`);
