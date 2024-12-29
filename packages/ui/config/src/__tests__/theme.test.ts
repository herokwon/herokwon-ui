import tailwindExtendedTheme from '../theme';
import { extendedBgColors } from '../themes/background';
import { extendedColors } from '../themes/color';
import { extendedOpacity } from '../themes/effect';
import { extendedHeight, extendedWidth } from '../themes/size';
import { extendedTextColors } from '../themes/typography';

describe('tailwindExtendedTheme', () => {
  it('should have entire properties', () => {
    expect(tailwindExtendedTheme).toStrictEqual({
      width: extendedWidth,
      height: extendedHeight,
      colors: extendedColors,
      textColor: extendedTextColors,
      backgroundColor: extendedBgColors,
      borderColor: extendedBgColors,
      boxShadowColor: extendedBgColors,
      fill: extendedBgColors,
      opacity: extendedOpacity,
    });
  });
});
