import type {ControlValue, DemoControl, InteractiveDemoConfig} from './types';

export function selectControl(
  name: string,
  options: string[],
  defaultValue: string = options[0],
  label?: string,
): DemoControl {
  return {name, label: label ?? name, kind: 'select', options, defaultValue};
}

export function booleanControl(
  name: string,
  defaultValue = false,
  label?: string,
): DemoControl {
  return {name, label: label ?? name, kind: 'boolean', defaultValue};
}

export function demo(
  config: InteractiveDemoConfig,
): InteractiveDemoConfig {
  return config;
}

export function propsOf(
  values: Record<string, ControlValue>,
): Record<string, ControlValue> {
  return values;
}
