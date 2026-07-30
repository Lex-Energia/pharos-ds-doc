import {getAllDocs} from './docs';
import {catalog, templatesCatalog} from './catalog';

export type SearchItem = {
  href: string;
  title: string;
  description: string;
  group: string;
};

export function buildSearchIndex(): SearchItem[] {
  const docs = getAllDocs().map(d => ({
    href: `/docs/${d.slug}`,
    title: d.title,
    description: d.description,
    group: 'Documentação',
  }));

  const components = Object.values(catalog.components).map(c => ({
    href: `/componentes/${c.name}`,
    title: c.name,
    description: c.description,
    group: `Componente · ${c.group || c.category || 'Core'}`,
  }));

  const templates = templatesCatalog.templates.map(t => ({
    href: `/templates/${encodeURIComponent(t.id)}`,
    title: t.name || t.id,
    description: t.description,
    group: 'Template',
  }));

  return [
    {href: '/', title: 'Início', description: 'Página inicial do Pharos', group: 'Site'},
    {href: '/componentes', title: 'Componentes', description: 'Galeria', group: 'Site'},
    {href: '/templates', title: 'Templates', description: 'Páginas prontas', group: 'Site'},
    {href: '/temas', title: 'Temas', description: 'Tema Pharos', group: 'Site'},
    ...docs,
    ...components,
    ...templates,
  ];
}
