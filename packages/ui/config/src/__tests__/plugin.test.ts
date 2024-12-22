import { customVariants } from '../plugins';

describe('TailwindCSS Custom Plugin', () => {
  it('customVariants', () => {
    expect(customVariants).toStrictEqual({
      'not-open': '&:not([open])',
      'not-disabled': '&:not(:disabled)',
      'not-hover': '&:not(:hover)',
      'group-not-disabled': '.group:not(:disabled) &',
      'peer-not-disabled': '.peer:not(:disabled) ~ &',
      xs: '@media (min-width: 512px)',
      'max-xs': '@media not all and (min-width: 512px)',
    });
  });
});
