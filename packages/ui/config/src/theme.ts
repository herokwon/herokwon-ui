import type { CustomThemeConfig } from 'tailwindcss/types/config';

import { extendedBgColors } from './themes/background';
import { extendedColors } from './themes/color';
import { extendedOpacity } from './themes/effect';
import { extendedHeight, extendedWidth } from './themes/size';
import { extendedTextColors } from './themes/typography';

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
