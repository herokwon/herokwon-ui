import tailwindPreset from '@repo/tailwind-config';

import type { Config } from 'tailwindcss';

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['src/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [tailwindPreset],
};

export default config;
