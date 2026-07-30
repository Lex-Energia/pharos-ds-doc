import type {MetadataRoute} from 'next';
import {getAllDocs} from '@/lib/docs';
import {getComponentNames, templatesCatalog} from '@/lib/catalog';

const BASE = 'https://pharos-docs.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const docs = getAllDocs().map(d => ({
    url: `${BASE}/docs/${d.slug}`,
    lastModified: new Date(),
  }));

  const components = getComponentNames().map(name => ({
    url: `${BASE}/componentes/${name}`,
    lastModified: new Date(),
  }));

  const templates = templatesCatalog.templates.map(t => ({
    url: `${BASE}/templates/${encodeURIComponent(t.id)}`,
    lastModified: new Date(),
  }));

  return [
    {url: BASE, lastModified: new Date()},
    {url: `${BASE}/docs`, lastModified: new Date()},
    {url: `${BASE}/componentes`, lastModified: new Date()},
    {url: `${BASE}/templates`, lastModified: new Date()},
    {url: `${BASE}/temas`, lastModified: new Date()},
    ...docs,
    ...components,
    ...templates,
  ];
}
