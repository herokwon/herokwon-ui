import tailwindExtendedTheme from '../theme';
import { extendedBgColors } from '../themes/background';
import { extendedColors } from '../themes/color';
import { extendedOpacity } from '../themes/effect';
import { extendedTextColors } from '../themes/typography';

describe('tailwindExtendedTheme', () => {
  it('should have entire properties', () => {
    expect(tailwindExtendedTheme).toStrictEqual({
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
