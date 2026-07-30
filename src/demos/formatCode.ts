import type {ControlValue} from './types';

/**
 * Gera snippet JSX a partir dos controles + props fixas.
 */
export function formatComponentCode(options: {
  importLine: string;
  componentName: string;
  props: Record<string, ControlValue>;
  fixedProps?: Record<string, unknown>;
  children?: string;
  selfClosing?: boolean;
}): string {
  const {
    importLine,
    componentName,
    props,
    fixedProps = {},
    children,
    selfClosing = children == null,
  } = options;

  const propLines: string[] = [];

  for (const [key, value] of Object.entries(fixedProps)) {
    if (value === undefined || value === null) continue;
    if (typeof value === 'boolean') {
      if (value) propLines.push(`  ${key}`);
      continue;
    }
    if (typeof value === 'number') {
      propLines.push(`  ${key}={${value}}`);
      continue;
    }
    if (typeof value === 'string') {
      propLines.push(`  ${key}="${value}"`);
    }
  }

  for (const [key, value] of Object.entries(props)) {
    if (typeof value === 'boolean') {
      propLines.push(value ? `  ${key}` : `  ${key}={false}`);
      continue;
    }
    if (typeof value === 'number') {
      propLines.push(`  ${key}={${value}}`);
      continue;
    }
    propLines.push(`  ${key}="${value}"`);
  }

  const open =
    propLines.length === 0
      ? `<${componentName}`
      : `<${componentName}\n${propLines.join('\n')}`;

  const jsx = selfClosing
    ? `${open}${propLines.length ? '\n' : ''} />`
    : `${open}${propLines.length ? '\n' : ''}>\n  ${children}\n</${componentName}>`;

  return `${importLine}\n\n${jsx}`;
}

/** Extrai o nome do componente do importLine. */
export function componentNameFromImport(importLine: string): string {
  const m = importLine.match(/import\s*\{\s*([A-Za-z0-9_]+)/);
  return m?.[1] ?? 'Component';
}
