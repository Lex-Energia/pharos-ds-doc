'use client';

import {useState} from 'react';
import {Button} from '@pharos-ds/core/Button';
import {HStack} from '@pharos-ds/core/Layout';

export function CodeBlock({code, title}: {code: string; title?: string}) {
  const [copied, setCopied] = useState(false);

  return (
    <div
      style={{
        border:
          '1px solid color-mix(in srgb, var(--color-text-primary) 12%, transparent)',
        borderRadius: 12,
        overflow: 'hidden',
      }}>
      <HStack
        gap={3}
        vAlign="center"
        style={{
          padding: '8px 12px',
          borderBottom:
            '1px solid color-mix(in srgb, var(--color-text-primary) 10%, transparent)',
          justifyContent: 'space-between',
        }}>
        <span style={{fontSize: 13, opacity: 0.75}}>{title ?? 'Código'}</span>
        <Button
          label={copied ? 'Copiado' : 'Copiar'}
          size="sm"
          variant="ghost"
          onClick={async () => {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1500);
          }}
        />
      </HStack>
      <pre
        style={{
          margin: 0,
          padding: 16,
          overflow: 'auto',
          fontSize: 13,
          lineHeight: 1.55,
          background: 'color-mix(in srgb, var(--color-text-primary) 4%, transparent)',
        }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
