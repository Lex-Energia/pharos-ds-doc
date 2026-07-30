import catalogJson from '@/generated/catalog.json';
import templatesJson from '@/generated/templates.json';

export type CatalogProp = {
  name: string;
  type: string;
  description: string;
  required?: boolean;
  default?: string;
};

export type CatalogComponent = {
  name: string;
  group: string;
  category: string;
  package: string;
  description: string;
  importPath: string;
  bestPractices: Array<{guidance: boolean; description: string}>;
  props: CatalogProp[];
};

export type Catalog = {
  generatedAt: string;
  groups: Record<string, string[]>;
  components: Record<string, CatalogComponent>;
};

export type TemplateEntry = {
  id: string;
  name: string;
  type: string;
  description: string;
  package: string;
};

export type TemplatesCatalog = {
  generatedAt: string;
  templates: TemplateEntry[];
};

export const catalog = catalogJson as Catalog;
export const templatesCatalog = templatesJson as TemplatesCatalog;

export function getComponentNames(): string[] {
  return Object.keys(catalog.components).sort((a, b) => a.localeCompare(b));
}

export function getComponent(name: string): CatalogComponent | undefined {
  return catalog.components[name];
}

export function getGroupedComponents(): Array<{
  group: string;
  items: CatalogComponent[];
}> {
  return Object.entries(catalog.groups)
    .map(([group, names]) => ({
      group,
      items: names
        .map(n => catalog.components[n])
        .filter(Boolean)
        .sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .filter(g => g.items.length > 0)
    .sort((a, b) => a.group.localeCompare(b.group));
}
