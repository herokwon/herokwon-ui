import type { Config } from 'tailwindcss';

import type { OmitStrict } from '../ui/common/src';
import { tailwindExtendedTheme, tailwindPlugin } from '../ui/config/src';

const config: OmitStrict<Config, 'content'> = {
  darkMode: 'class',
  theme: {
    extend: tailwindExtendedTheme,
  },
  plugins: [tailwindPlugin],
};

export default config;
