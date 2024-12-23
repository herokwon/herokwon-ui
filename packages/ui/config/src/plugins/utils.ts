export const customVariants: { [key: string]: string | string[] } = {
  // size
  xs: '@media (min-width: 512px)',
  'max-xs': '@media not all and (min-width: 512px)',

  // not-()
  'not-open': '&:not([open])',
  'not-disabled': '&:not(:disabled)',
  'not-hover': '&:not(:hover)',

  // group-() & peer-()
  'group-not-disabled': '.group:not(:disabled) &',
  'peer-not-disabled': '.peer:not(:disabled) ~ &',

  // scrollbar
  scrollbar: '&::-webkit-scrollbar',
  'scrollbar-thumb': '&::-webkit-scrollbar-thumb',
  'scrollbar-track': '&::-webkit-scrollbar-track',

  // range
  'slider-thumb': ['&::-webkit-slider-thumb', '&::-moz-range-thumb'],
  'slider-track': ['&::-webkit-slider-runnable-track', '&::-moz-range-track'],

  // progress
  'progress-bar': '&::-webkit-progress-bar',
  'progress-value': '&::-webkit-progress-value',
};
