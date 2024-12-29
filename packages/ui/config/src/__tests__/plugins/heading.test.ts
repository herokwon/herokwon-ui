import { baseHeading } from '../../plugins/heading';

describe('baseHeading', () => {
  it('should have correct styles for h1', () => {
    expect(baseHeading.h1).toStrictEqual({
      'font-size': '1.6rem',
      'font-weight': '800',
    });
  });

  it('should have correct styles for h2', () => {
    expect(baseHeading.h2).toStrictEqual({
      'font-size': '1.48rem',
      'font-weight': '700',
    });
  });

  it('should have correct styles for h3', () => {
    expect(baseHeading.h3).toStrictEqual({
      'font-size': '1.36rem',
      'font-weight': '700',
    });
  });

  it('should have correct styles for h4', () => {
    expect(baseHeading.h4).toStrictEqual({
      'font-size': '1.24rem',
      'font-weight': '700',
    });
  });

  it('should have correct styles for h5', () => {
    expect(baseHeading.h5).toStrictEqual({
      'font-size': '1.12rem',
      'font-weight': '700',
    });
  });

  it('should have correct styles for h6', () => {
    expect(baseHeading.h6).toStrictEqual({
      'font-size': '1rem',
      'font-weight': '700',
    });
  });
});
