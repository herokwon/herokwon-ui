export * from './button';
export * from './code';
export * from './heading';
export * from './input';
export * from './table';

export const customVariants: { [key: string]: string | string[] } = {
  // not-()
  'not-open': '&:not([open])',
  'not-disabled': '&:not(:disabled)',
  'not-hover': '&:not(:hover)',

  // group-() & peer-()
  'group-not-disabled': '.group:not(:disabled) &',
  'peer-not-disabled': '.peer:not(:disabled) ~ &',

  // size
  xs: '@media (min-width: 512px)',
  'max-xs': '@media not all and (min-width: 512px)',
};
