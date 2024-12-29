import { extendedTextColors } from '../../themes/typography';

describe('extendedTextColors', () => {
  it('should have default text colors', () => {
    expect(extendedTextColors.default).toStrictEqual({
      light: '#000000',
      dark: '#ffffff',
    });
  });

  it('should have feedback blue text colors', () => {
    expect(extendedTextColors.feedback.blue).toStrictEqual({
      light: '#1e40af',
      dark: '#bfdbfe',
    });
  });

  it('should have feedback red text colors', () => {
    expect(extendedTextColors.feedback.red).toStrictEqual({
      light: '#991b1b',
      dark: '#fecaca',
    });
  });

  it('should have feedback green text colors', () => {
    expect(extendedTextColors.feedback.green).toStrictEqual({
      light: '#166534',
      dark: '#bbf7d0',
    });
  });

  it('should have feedback yellow text colors', () => {
    expect(extendedTextColors.feedback.yellow).toStrictEqual({
      light: '#854d0e',
      dark: '#fef08a',
    });
  });
});
