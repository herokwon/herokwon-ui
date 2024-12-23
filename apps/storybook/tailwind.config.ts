import tailwindConfig from '@repo/tailwind-config';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['src/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [tailwindConfig],
};

export default config;
