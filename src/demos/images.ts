/** Imagens locais para demos (varie entre as duas). */
export const DEMO_IMAGE_1 = '/images/exemplo-usina-solar.jpg';
export const DEMO_IMAGE_2 = '/images/exemplo-usina-solar-2.jpg';

export const DEMO_IMAGES = [DEMO_IMAGE_1, DEMO_IMAGE_2] as const;

export function demoImage(index = 0): string {
  return DEMO_IMAGES[index % DEMO_IMAGES.length];
}
