import {getGroupedComponents} from '@/lib/catalog';
import {ComponentsSidebar} from '@/components/components/ComponentsSidebar';
import {ComponentsMobileNav} from '@/components/components/ComponentsMobileNav';

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const groups = getGroupedComponents().map(g => ({
    group: g.group,
    items: g.items.map(item => ({name: item.name})),
  }));

  return (
    <div className="docs-components-shell">
      <div className="docs-components-sidebar-slot">
        <ComponentsSidebar groups={groups} />
      </div>
      <div className="docs-components-main">
        <ComponentsMobileNav groups={groups} />
        {children}
      </div>
    </div>
  );
}
