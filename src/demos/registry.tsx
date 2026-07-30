'use client';

import type {InteractiveDemoConfig} from './types';
import {demosAC} from './groups/a-c';
import {demosDL} from './groups/d-l';
import {demosMS} from './groups/m-s';
import {demosTZ} from './groups/t-z';

const demos: Record<string, InteractiveDemoConfig[]> = {
  ...demosAC,
  ...demosDL,
  ...demosMS,
  ...demosTZ,
};

export function getDemos(componentName: string): InteractiveDemoConfig[] {
  return demos[componentName] ?? [];
}
