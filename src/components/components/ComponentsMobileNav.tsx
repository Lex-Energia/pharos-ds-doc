'use client';

import {ComponentsSidebar, type SidebarGroup} from './ComponentsSidebar';

/** Sidebar colapsável para viewports sem coluna lateral. */
export function ComponentsMobileNav({groups}: {groups: SidebarGroup[]}) {
  return (
    <details className="docs-components-mobile-nav">
      <summary>Navegar componentes</summary>
      <div className="docs-components-mobile-nav-body">
        <ComponentsSidebar groups={groups} />
      </div>
    </details>
  );
}
