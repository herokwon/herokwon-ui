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

export const scrollbarX = {
  'overflow-x': 'auto',
  '&::-webkit-scrollbar': {
    width: '100%',
    height: '7px',
  },
  '&::-webkit-scrollbar-thumb': {
    cursor: 'pointer',
    'border-radius': '9999px',
    'background-color': '#3B82F6',
  },
  '.dark &::-webkit-scrollbar-thumb': {
    'background-color': '#2563EB',
  },
  '&::-webkit-scrollbar-track': {
    cursor: 'pointer',
    'background-color': 'transparent',
  },
};

export const scrollbarY = {
  'overflow-y': 'auto',
  '&::-webkit-scrollbar': {
    width: '7px',
    height: '100%',
  },
  '&::-webkit-scrollbar-thumb': {
    cursor: 'pointer',
    'border-radius': '9999px',
    'background-color': '#3B82F6',
  },
  '.dark &::-webkit-scrollbar-thumb': {
    'background-color': '#2563EB',
  },
  '&::-webkit-scrollbar-track': {
    cursor: 'pointer',
    'background-color': 'transparent',
  },
};

export const hiddenScrollbar = {
  '-ms-overflow-style': 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
};

export const bgUnderline = {
  match: {
    default: (value: string) => ({
      'background-image': `linear-gradient(to right, var(--tw-gradient-stops))`,
      'background-size': `0% ${value}`,
      'background-repeat': 'no-repeat',
      'background-position': '0 100%',
      transition: 'background-size 150ms linear',
      '&:hover': {
        'background-size': `100% ${value}`,
      },
      '&.active': {
        'background-size': `100% ${value}`,
      },
    }),
    group: (value: string) => ({
      'background-image': `linear-gradient(to right, var(--tw-gradient-stops))`,
      'background-size': `0% ${value}`,
      'background-repeat': 'no-repeat',
      'background-position': '0 100%',
      transition: 'background-size 150ms linear',
      '.group:hover &': {
        'background-size': `100% ${value}`,
      },
      '&.active': {
        'background-size': `100% ${value}`,
      },
    }),
    peek: (value: string) => ({
      'background-image': `linear-gradient(to right, var(--tw-gradient-stops))`,
      'background-size': `0% ${value}`,
      'background-repeat': 'no-repeat',
      'background-position': '0 100%',
      transition: 'background-size 150ms linear',
      '.peek:hover ~ &': {
        'background-size': `100% ${value}`,
      },
      '&.active': {
        'background-size': `100% ${value}`,
      },
    }),
  },
  add: {
    default: Object.fromEntries(
      Array.from({ length: 30 }, (_, i) => {
        const index =
          i <= 12
            ? i
            : i <= 14
              ? 12 + 2 * (i - 12)
              : i <= 26
                ? 16 + 4 * (i - 14)
                : i <= 28
                  ? 64 + 8 * (i - 28)
                  : 96;

        return [
          `.bg-underline-${index}`,
          {
            'background-image': `linear-gradient(to right, var(--tw-gradient-stops))`,
            'background-size': `0% ${index === 0 ? '0px' : `${index / 4}rem`}`,
            'background-repeat': 'no-repeat',
            'background-position': '0 100%',
            transition: 'background-size 150ms linear',
            '&:hover': {
              'background-size': `100% ${index === 0 ? '0px' : `${index / 4}rem`}`,
            },
            '&.active': {
              'background-size': `100% ${index === 0 ? '0px' : `${index / 4}rem`}`,
            },
          },
        ];
      }),
    ),
    group: Object.fromEntries(
      Array.from({ length: 30 }, (_, i) => {
        const index =
          i <= 12
            ? i
            : i <= 14
              ? 12 + 2 * (i - 12)
              : i <= 26
                ? 16 + 4 * (i - 14)
                : i <= 28
                  ? 64 + 8 * (i - 28)
                  : 96;

        return [
          `.group-bg-underline-${index}`,
          {
            'background-image': `linear-gradient(to right, var(--tw-gradient-stops))`,
            'background-size': `0% ${index === 0 ? '0px' : `${index / 4}rem`}`,
            'background-repeat': 'no-repeat',
            'background-position': '0 100%',
            transition: 'background-size 150ms linear',
            '.group:hover &': {
              'background-size': `100% ${index === 0 ? '0px' : `${index / 4}rem`}`,
            },
            '&.active': {
              'background-size': `100% ${index === 0 ? '0px' : `${index / 4}rem`}`,
            },
          },
        ];
      }),
    ),
    peek: Object.fromEntries(
      Array.from({ length: 30 }, (_, i) => {
        const index =
          i <= 12
            ? i
            : i <= 14
              ? 12 + 2 * (i - 12)
              : i <= 26
                ? 16 + 4 * (i - 14)
                : i <= 28
                  ? 64 + 8 * (i - 28)
                  : 96;

        return [
          `.peek-bg-underline-${index}`,
          {
            'background-image': `linear-gradient(to right, var(--tw-gradient-stops))`,
            'background-size': `0% ${index === 0 ? '0px' : `${index / 4}rem`}`,
            'background-repeat': 'no-repeat',
            'background-position': '0 100%',
            transition: 'background-size 150ms linear',
            '.peek:hover ~ &': {
              'background-size': `100% ${index === 0 ? '0px' : `${index / 4}rem`}`,
            },
            '&.active': {
              'background-size': `100% ${index === 0 ? '0px' : `${index / 4}rem`}`,
            },
          },
        ];
      }),
    ),
  },
};
