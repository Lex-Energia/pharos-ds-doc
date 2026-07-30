import type {ReactNode} from 'react';

export type ControlValue = string | number | boolean;

export type DemoControl = {
  name: string;
  label?: string;
  kind: 'select' | 'boolean';
  options?: string[];
  defaultValue: ControlValue;
};

export type InteractiveDemoConfig = {
  title: string;
  /** Ex.: `import {Button} from '@pharos-ds/core/Button';` */
  importLine: string;
  controls: DemoControl[];
  /** Props fixas sempre aplicadas (não aparecem nos controles). */
  fixedProps?: Record<string, unknown>;
  render: (props: Record<string, ControlValue>) => ReactNode;
  /** Sobrescreve a geração automática do snippet. */
  getCode?: (props: Record<string, ControlValue>) => string;
};

export type DemoEntry = InteractiveDemoConfig;
