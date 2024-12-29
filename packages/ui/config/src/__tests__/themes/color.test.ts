import { extendedColors } from '../../themes/color';

describe('extendedColors', () => {
  it('should have brown colors', () => {
    expect(extendedColors.brown).toStrictEqual({
      50: '#fdf8f6',
      100: '#f2e8e5',
      200: '#eaddd7',
      300: '#e0cec7',
      400: '#d2bab0',
      500: '#bfa094',
      600: '#a18072',
      700: '#977669',
      800: '#846358',
      900: '#43302b',
    });
  });

  it('should have blue colors', () => {
    expect(extendedColors.blue).toStrictEqual({
      light: '#3b82f6',
      dark: '#2563eb',
    });
  });

  it('should have red colors', () => {
    expect(extendedColors.red).toStrictEqual({
      light: '#ef4444',
      dark: '#dc2626',
    });
  });

  it('should have green colors', () => {
    expect(extendedColors.green).toStrictEqual({
      light: '#22c55e',
      dark: '#16a34a',
    });
  });

  it('should have yellow colors', () => {
    expect(extendedColors.yellow).toStrictEqual({
      light: '#facc15',
      dark: '#eab308',
    });
  });
});
