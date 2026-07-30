'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Button} from '@pharos-ds/core/Button';
import {HStack} from '@pharos-ds/core/Layout';
import {Moon, Sun, Search} from 'lucide-react';
import {mainNav} from '@/lib/nav';
import {useThemeMode} from '@/lib/pharos/theme-mode';

type SiteHeaderProps = {
  onOpenSearch?: () => void;
};

export function SiteHeader({onOpenSearch}: SiteHeaderProps) {
  const pathname = usePathname();
  const {resolved, toggle} = useThemeMode();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: 'var(--docs-header-height)',
        borderBottom:
          '1px solid color-mix(in srgb, var(--color-text-primary) 10%, transparent)',
        background:
          'color-mix(in srgb, var(--color-background-body) 88%, transparent)',
        backdropFilter: 'blur(12px)',
      }}>
      <div
        className="docs-page"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}>
        <HStack gap={6} vAlign="center">
          <Link
            href="/"
            aria-label="Pharos — início"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
            }}>
            <img
              src="/icone.png"
              alt=""
              width={28}
              height={28}
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <img
              src="/logo-pharos.svg"
              alt="Pharos"
              height={22}
              style={{
                height: 22,
                width: 'auto',
                display: 'block',
              }}
            />
          </Link>

          <nav aria-label="Navegação principal" className="motion-fade-in">
            <HStack gap={1} vAlign="center">
              {mainNav.map(item => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      textDecoration: 'none',
                      color: active
                        ? 'var(--color-text-primary)'
                        : 'var(--color-text-secondary)',
                      fontWeight: active ? 600 : 500,
                      fontSize: 14,
                      padding: '6px 10px',
                      borderRadius: 8,
                      background: active
                        ? 'color-mix(in srgb, var(--color-accent) 12%, transparent)'
                        : 'transparent',
                    }}>
                    {item.label}
                  </Link>
                );
              })}
            </HStack>
          </nav>
        </HStack>

        <HStack gap={2} vAlign="center">
          <Button
            label="Buscar"
            variant="ghost"
            size="sm"
            icon={<Search size={16} />}
            onClick={onOpenSearch}
            tooltip="Buscar (⌘K)"
          />
          <Button
            label={resolved === 'dark' ? 'Modo claro' : 'Modo escuro'}
            variant="ghost"
            size="sm"
            isIconOnly
            icon={resolved === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            onClick={toggle}
          />
          <Link href="/docs/instalacao" style={{textDecoration: 'none'}}>
            <Button label="Começar" variant="primary" size="sm" />
          </Link>
        </HStack>
      </div>
    </header>
  );
}
