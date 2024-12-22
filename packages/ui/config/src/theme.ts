import type { CustomThemeConfig } from 'tailwindcss/types/config';

import {
  extendedBgColors,
  extendedColors,
  extendedHeight,
  extendedOpacity,
  extendedTextColors,
  extendedWidth,
} from './themes';

const tailwindExtendedTheme: Partial<CustomThemeConfig> = {
  width: extendedWidth,
  height: extendedHeight,
  colors: extendedColors,
  textColor: extendedTextColors,
  backgroundColor: extendedBgColors,
  borderColor: extendedBgColors,
  boxShadowColor: extendedBgColors,
  fill: extendedBgColors,
  opacity: extendedOpacity,
};

export default tailwindExtendedTheme;
