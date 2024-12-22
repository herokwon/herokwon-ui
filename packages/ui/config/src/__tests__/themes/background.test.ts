import { extendedBgColors } from '../../themes';

describe('extendedBgColors', () => {
  it('should have default background colors', () => {
    expect(extendedBgColors.default).toStrictEqual({
      light: '#ffffff',
      dark: '#121212',
    });
  });

  it('should have primary background colors', () => {
    expect(extendedBgColors.primary).toStrictEqual({
      light: '#4a90e2',
      dark: '#3A78C2',
    });
  });

  it('should have secondary background colors', () => {
    expect(extendedBgColors.secondary).toStrictEqual({
      light: '#e2e8f0',
      dark: '#1e293b',
    });
  });

  it('should have tertiary background colors', () => {
    expect(extendedBgColors.tertiary).toStrictEqual({
      light: '#cbd5e1',
      dark: '#334155',
    });
  });

  it('should have feedback blue background colors', () => {
    expect(extendedBgColors.feedback.blue).toStrictEqual({
      light: '#dbeafe',
      dark: '#172554',
    });
  });

  it('should have feedback red background colors', () => {
    expect(extendedBgColors.feedback.red).toStrictEqual({
      light: '#fee2e2',
      dark: '#450a0a',
    });
  });

  it('should have feedback green background colors', () => {
    expect(extendedBgColors.feedback.green).toStrictEqual({
      light: '#dcfce7',
      dark: '#052e16',
    });
  });

  it('should have feedback yellow background colors', () => {
    expect(extendedBgColors.feedback.yellow).toStrictEqual({
      light: '#fef9c3',
      dark: '#422006',
    });
  });
});
