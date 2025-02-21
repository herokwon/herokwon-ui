import type { Config } from 'tailwindcss';

import { extendedBgColors } from './themes/background';
import { extendedColors } from './themes/color';
import { extendedOpacity } from './themes/effect';
import { extendedTextColors } from './themes/typography';

type CustomThemeConfig = Config['theme'];

const tailwindExtendedTheme: Partial<CustomThemeConfig> = {
  colors: extendedColors,
  textColor: extendedTextColors,
  backgroundColor: extendedBgColors,
  borderColor: extendedBgColors,
  boxShadowColor: extendedBgColors,
  fill: extendedBgColors,
  opacity: extendedOpacity,
};

export default tailwindExtendedTheme;
