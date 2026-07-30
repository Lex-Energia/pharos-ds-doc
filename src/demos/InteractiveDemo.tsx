'use client';

import {useMemo, useState} from 'react';
import {VStack, HStack} from '@pharos-ds/core/Layout';
import {Text, Heading} from '@pharos-ds/core/Text';
import {Switch} from '@pharos-ds/core/Switch';
import {SegmentedControl} from '@pharos-ds/core/SegmentedControl';
import {SegmentedControlItem} from '@pharos-ds/core/SegmentedControlItem';
import {CodeBlock} from '@/components/CodeBlock';
import {
  componentNameFromImport,
  formatComponentCode,
} from './formatCode';
import type {ControlValue, InteractiveDemoConfig} from './types';

function ControlRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="docs-demo-control">
      <span className="docs-demo-control-label">
        <Text type="supporting" color="secondary">
          {label}
        </Text>
      </span>
      <div className="docs-demo-control-field">{children}</div>
    </div>
  );
}

export function InteractiveDemo({config}: {config: InteractiveDemoConfig}) {
  const initial = useMemo(() => {
    const values: Record<string, ControlValue> = {};
    for (const control of config.controls) {
      values[control.name] = control.defaultValue;
    }
    return values;
  }, [config.controls]);

  const [values, setValues] = useState<Record<string, ControlValue>>(initial);

  const setValue = (name: string, value: ControlValue) => {
    setValues(prev => ({...prev, [name]: value}));
  };

  const componentName = componentNameFromImport(config.importLine);
  const code =
    config.getCode?.(values) ??
    formatComponentCode({
      importLine: config.importLine,
      componentName,
      props: values,
      fixedProps: config.fixedProps,
    });

  return (
    <VStack gap={3}>
      <Heading level={3}>{config.title}</Heading>

      {config.controls.length > 0 ? (
        <div className="docs-demo-controls">
          {config.controls.map(control => {
            const label = control.label ?? control.name;

            if (control.kind === 'boolean') {
              return (
                <ControlRow key={control.name} label={label}>
                  <Switch
                    label={label}
                    isLabelHidden
                    value={Boolean(values[control.name])}
                    onChange={next => setValue(control.name, next)}
                  />
                </ControlRow>
              );
            }

            const options = control.options ?? [];
            const current = String(values[control.name] ?? options[0] ?? '');

            if (options.length > 6) {
              return (
                <ControlRow key={control.name} label={label}>
                  <select
                    className="docs-demo-select"
                    value={current}
                    onChange={e => setValue(control.name, e.target.value)}
                    aria-label={label}>
                    {options.map(opt => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </ControlRow>
              );
            }

            return (
              <ControlRow key={control.name} label={label}>
                <SegmentedControl
                  label={label}
                  size="sm"
                  value={current}
                  onChange={next => setValue(control.name, next)}>
                  {options.map(opt => (
                    <SegmentedControlItem key={opt} value={opt} label={opt} />
                  ))}
                </SegmentedControl>
              </ControlRow>
            );
          })}
        </div>
      ) : null}

      <div className="docs-demo-frame">{config.render(values)}</div>
      <CodeBlock code={code} title="Exemplo" />
    </VStack>
  );
}

/** Utilitário para demos que precisam de HStack de controles extras (ex.: abrir dialog). */
export function DemoToolbar({children}: {children: React.ReactNode}) {
  return (
    <HStack gap={3} vAlign="center" wrap="wrap" style={{marginBottom: 12}}>
      {children}
    </HStack>
  );
}
