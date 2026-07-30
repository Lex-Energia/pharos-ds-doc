/** Componentes com demo curada em `registry.tsx` (nomes do catálogo CLI). */
export const DEMO_NAMES = [
  'Button',
  'Badge',
  'TextInput',
  'Layout',
  'Stack',
  'Switch',
  'CheckboxInput',
  'Avatar',
  'Banner',
  'Link',
  'Spinner',
  'ProgressBar',
  'Text',
  'Divider',
  'IconButton',
  'Tooltip',
] as const;

export function hasDemo(componentName: string): boolean {
  return (DEMO_NAMES as readonly string[]).includes(componentName);
}
