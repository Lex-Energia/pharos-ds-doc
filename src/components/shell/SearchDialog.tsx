'use client';

import {useEffect, useMemo, useRef, useState} from 'react';
import {useRouter} from 'next/navigation';
import type {SearchItem} from '@/lib/search-index';

type SearchDialogProps = {
  open: boolean;
  onClose: () => void;
  items: SearchItem[];
};

export function SearchDialog({open, onClose, items}: SearchDialogProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items.slice(0, 8);
    return items
      .filter(
        item =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.group.toLowerCase().includes(q),
      )
      .slice(0, 12);
  }, [items, query]);

  useEffect(() => {
    if (!open) return;
    setQuery('');
    setActive(0);
    const t = window.setTimeout(() => inputRef.current?.focus(), 10);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive(i => Math.min(i + 1, Math.max(results.length - 1, 0)));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive(i => Math.max(i - 1, 0));
      }
      if (e.key === 'Enter' && results[active]) {
        e.preventDefault();
        router.push(results[active].href);
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, results, active, router]);

  if (!open) return null;

  return (
    <div
      className="docs-search-backdrop motion-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Buscar na documentação"
      onClick={onClose}>
      <div className="docs-search-panel" onClick={e => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="docs-search-input"
          placeholder="Buscar docs, componentes, templates…"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            setActive(0);
          }}
        />
        <div className="docs-search-results">
          {results.length === 0 ? (
            <div style={{padding: 16, opacity: 0.7}}>Nenhum resultado.</div>
          ) : (
            results.map((item, index) => (
              <button
                key={item.href}
                type="button"
                className="docs-search-item"
                data-active={index === active}
                onMouseEnter={() => setActive(index)}
                onClick={() => {
                  router.push(item.href);
                  onClose();
                }}>
                <div style={{fontWeight: 600}}>{item.title}</div>
                <div style={{fontSize: 13, opacity: 0.7}}>
                  {item.group}
                  {item.description ? ` · ${item.description}` : ''}
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
