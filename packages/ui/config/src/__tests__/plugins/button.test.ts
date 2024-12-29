import { baseButton } from '../../plugins/button';

describe('baseButton', () => {
  it('should have correct styles for disabled button elements', () => {
    expect(baseButton['button:disabled']).toStrictEqual({
      cursor: 'not-allowed',
      opacity: '0.38',
    });
  });

  it('should have correct styles for disabled button elements children', () => {
    expect(baseButton['button:disabled > *']).toStrictEqual({
      pointerEvents: 'none',
    });
  });
});
