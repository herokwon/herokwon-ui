import plugin from 'tailwindcss/plugin';

import {
  baseButton,
  baseCode,
  baseHeading,
  baseInput,
  baseTable,
  customVariants,
} from './plugins';

const tailwindPlugin = plugin(
  ({ addBase, addVariant, addUtilities, matchVariant, matchUtilities }) => {
    addBase({
      ...baseButton,
      ...baseCode,
      ...baseHeading,
      ...baseInput,
      ...baseTable,
    });

    matchVariant('is', value => `&:is(${value})`);
    matchVariant('not', value => `&:not(${value})`);

    Object.entries(customVariants).forEach(([name, definition]) => {
      addVariant(name, definition);
    });

    matchUtilities({
      'bg-underline': value => ({
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
      'group-bg-underline': value => ({
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
      'peek-bg-underline': value => ({
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
    });

    addUtilities({
      ...Object.fromEntries(
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
      ...Object.fromEntries(
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
      ...Object.fromEntries(
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
    });
  },
);

export default tailwindPlugin;
