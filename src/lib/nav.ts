export type NavItem = {
  href: string;
  label: string;
};

export const mainNav: NavItem[] = [
  {href: '/docs', label: 'Documentação'},
  {href: '/componentes', label: 'Componentes'},
  {href: '/templates', label: 'Templates'},
  {href: '/temas', label: 'Temas'},
];

export type DocNavItem = {
  slug: string;
  title: string;
  description: string;
  order: number;
};

export const docsOrder = [
  'instalacao',
  'nextjs',
  'cli',
  'temas',
  'estilizacao',
  'tokens',
  'agentes',
] as const;
