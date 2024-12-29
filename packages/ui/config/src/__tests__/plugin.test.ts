import {
  bgUnderline,
  customVariants,
  hiddenScrollbar,
  scrollbarX,
  scrollbarY,
} from '../plugins/utils';

describe('tailwindPlugin', () => {
  // it('should re-export all modules correctly', () => {
  //   expect(plugins).toHaveProperty('baseButton');
  //   expect(plugins).toHaveProperty('baseCode');
  //   expect(plugins).toHaveProperty('baseHeading');
  //   expect(plugins).toHaveProperty('baseInput');
  //   expect(plugins).toHaveProperty('baseTable');
  //   expect(plugins).toHaveProperty('customVariants');
  //   expect(plugins).toHaveProperty('scrollbarX');
  //   expect(plugins).toHaveProperty('scrollbarY');
  //   expect(plugins).toHaveProperty('hiddenScrollbar');
  //   expect(plugins).toHaveProperty('bgUnderline');
  // });

  it('customVariants', () => {
    expect(customVariants).toStrictEqual({
      scrollbar: '&::-webkit-scrollbar',
      'scrollbar-thumb': '&::-webkit-scrollbar-thumb',
      'scrollbar-track': '&::-webkit-scrollbar-track',
      'slider-thumb': ['&::-webkit-slider-thumb', '&::-moz-range-thumb'],
      'slider-track': [
        '&::-webkit-slider-runnable-track',
        '&::-moz-range-track',
      ],
      'progress-bar': '&::-webkit-progress-bar',
      'progress-value': '&::-webkit-progress-value',
      'not-open': '&:not([open])',
      'not-disabled': '&:not(:disabled)',
      'not-hover': '&:not(:hover)',
      'group-not-disabled': '.group:not(:disabled) &',
      'peer-not-disabled': '.peer:not(:disabled) ~ &',
      xs: '@media (min-width: 512px)',
      'max-xs': '@media not all and (min-width: 512px)',
    });
  });

  it('scrollbarX', () => {
    expect(scrollbarX).toHaveProperty('overflow-x', 'auto');
    expect(scrollbarX['&::-webkit-scrollbar']).toStrictEqual({
      width: '100%',
      height: '7px',
    });
    expect(scrollbarX['&::-webkit-scrollbar-thumb']).toStrictEqual({
      cursor: 'pointer',
      'border-radius': '9999px',
      'background-color': '#3B82F6',
    });
    expect(scrollbarX['.dark &::-webkit-scrollbar-thumb']).toStrictEqual({
      'background-color': '#2563EB',
    });
    expect(scrollbarX['&::-webkit-scrollbar-track']).toStrictEqual({
      cursor: 'pointer',
      'background-color': 'transparent',
    });
  });

  it('scrollbarY', () => {
    expect(scrollbarY).toHaveProperty('overflow-y', 'auto');
    expect(scrollbarY['&::-webkit-scrollbar']).toStrictEqual({
      width: '7px',
      height: '100%',
    });
    expect(scrollbarY['&::-webkit-scrollbar-thumb']).toStrictEqual({
      cursor: 'pointer',
      'border-radius': '9999px',
      'background-color': '#3B82F6',
    });
    expect(scrollbarY['.dark &::-webkit-scrollbar-thumb']).toStrictEqual({
      'background-color': '#2563EB',
    });
    expect(scrollbarY['&::-webkit-scrollbar-track']).toStrictEqual({
      cursor: 'pointer',
      'background-color': 'transparent',
    });
  });

  it('hiddenScrollbar', () => {
    expect(hiddenScrollbar).toHaveProperty('-ms-overflow-style', 'none');
    expect(hiddenScrollbar['&::-webkit-scrollbar']).toStrictEqual({
      display: 'none',
    });
  });

  it('bg-underline in matchUtilities', () => {
    const value = '1px;';

    expect(bgUnderline.match.default(value)).toStrictEqual({
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
    });
    expect(bgUnderline.match.group(value)).toStrictEqual({
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
    });
    expect(bgUnderline.match.peek(value)).toStrictEqual({
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
    });
  });

  it('bg-underline in addUtilities', () => {
    expect(bgUnderline.add.default).toStrictEqual(
      Object.fromEntries(
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
    );
    expect(bgUnderline.add.group).toStrictEqual(
      Object.fromEntries(
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
    );
    expect(bgUnderline.add.peek).toStrictEqual(
      Object.fromEntries(
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
    );
  });
});
