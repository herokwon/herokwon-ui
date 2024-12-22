import type { Config } from 'tailwindcss';

import { tailwindExtendedTheme } from '../ui/config/src';

type RestrictedOmit<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};

const config: RestrictedOmit<Config, 'content'> = {
  darkMode: 'class',
  theme: {
    extend: tailwindExtendedTheme,
  },
  plugins: [],
};

export default config;
