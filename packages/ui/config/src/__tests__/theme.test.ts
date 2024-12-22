import tailwindExtendedTheme from '../theme';
import {
  extendedBgColors,
  extendedColors,
  extendedHeight,
  extendedOpacity,
  extendedTextColors,
  extendedWidth,
} from '../themes';

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
