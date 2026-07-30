import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import {docsOrder} from './nav';

const DOCS_DIR = path.join(process.cwd(), 'content/docs');

export type DocMeta = {
  slug: string;
  title: string;
  description: string;
  order: number;
};

export type DocPage = DocMeta & {
  content: string;
};

function orderIndex(slug: string) {
  const idx = docsOrder.indexOf(slug as (typeof docsOrder)[number]);
  return idx === -1 ? 999 : idx;
}

export function getAllDocs(): DocMeta[] {
  if (!fs.existsSync(DOCS_DIR)) return [];
  const files = fs.readdirSync(DOCS_DIR).filter(f => f.endsWith('.mdx'));
  return files
    .map(file => {
      const slug = file.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(DOCS_DIR, file), 'utf8');
      const {data} = matter(raw);
      return {
        slug,
        title: String(data.title ?? slug),
        description: String(data.description ?? ''),
        order: typeof data.order === 'number' ? data.order : orderIndex(slug),
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function getDoc(slug: string): DocPage | null {
  const file = path.join(DOCS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const {data, content} = matter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ''),
    order: typeof data.order === 'number' ? data.order : orderIndex(slug),
    content,
  };
}

export function getDocSlugs(): string[] {
  return getAllDocs().map(d => d.slug);
}
