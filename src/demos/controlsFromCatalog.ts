import {catalog} from '@/lib/catalog';
import type {DemoControl, ControlValue} from './types';

/** Extrai literais de string mesmo quando o tipo mistura `| number` etc. */
function parseUnion(type: string): string[] | null {
  const matches = type.match(/'([^']+)'/g);
  if (!matches || matches.length < 2) return null;
  return matches.map(s => s.slice(1, -1));
}

function parseDefault(raw: string | undefined, kind: 'select' | 'boolean'): ControlValue | undefined {
  if (raw == null) return undefined;
  const v = raw.trim().replace(/^'|'$/g, '');
  if (kind === 'boolean') {
    if (v === 'true') return true;
    if (v === 'false') return false;
    return undefined;
  }
  return v;
}

/**
 * Monta controles a partir das props documentadas no catálogo.
 * Só inclui props pedidas em `propNames` (ordem preservada).
 */
export function controlsFromCatalog(
  componentName: string,
  propNames: string[],
  overrides: Partial<Record<string, Partial<DemoControl>>> = {},
): DemoControl[] {
  const component = catalog.components[componentName];
  if (!component) return [];

  const byName = new Map(component.props.map(p => [p.name, p]));
  const controls: DemoControl[] = [];

  for (const name of propNames) {
    const prop = byName.get(name);
    const override = overrides[name];
    if (!prop && !override) continue;

    if (override?.kind === 'boolean' || prop?.type === 'boolean') {
      const defaultValue =
        override?.defaultValue ??
        parseDefault(prop?.default, 'boolean') ??
        false;
      controls.push({
        name,
        label: override?.label ?? name,
        kind: 'boolean',
        defaultValue,
      });
      continue;
    }

    const options =
      override?.options ?? (prop ? parseUnion(prop.type) : null) ?? [];
    if (options.length === 0) continue;

    const defaultValue =
      override?.defaultValue ??
      parseDefault(prop?.default, 'select') ??
      options[0];

    controls.push({
      name,
      label: override?.label ?? name,
      kind: 'select',
      options,
      defaultValue,
    });
  }

  return controls;
}
