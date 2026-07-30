'use client';

import Link from 'next/link';
import {Text} from '@pharos-ds/core/Text';
import {ComponentPreview} from './ComponentPreview';

export function ComponentPreviewCard({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <article className="docs-preview-card">
      <Link
        href={href}
        className="docs-preview-card-hit"
        aria-label={`Abrir ${name}`}
      />
      <ComponentPreview name={name} />
      <span className="docs-preview-card-label">
        <Text type="supporting" weight="medium">
          {name}
        </Text>
      </span>
    </article>
  );
}
