import plugin from 'tailwindcss/plugin';

import { baseButton } from './plugins/button';
import { baseCode } from './plugins/code';
import { baseHeading } from './plugins/heading';
import { baseInput } from './plugins/input';
import { baseTable } from './plugins/table';
import {
  bgUnderline,
  customVariants,
  hiddenScrollbar,
  scrollbarX,
  scrollbarY,
} from './plugins/utils';

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
      'bg-underline': value => bgUnderline.match.default(value),
      'group-bg-underline': value => bgUnderline.match.group(value),
      'peek-bg-underline': value => bgUnderline.match.peek(value),
    });

    addUtilities({
      '.max-w-screen-xs': {
        'max-width': '512px',
      },
      '.scrollbar-x': scrollbarX,
      '.scrollbar-y': scrollbarY,
      '.hidden-scrollbar': hiddenScrollbar,
      ...bgUnderline.add.default,
      ...bgUnderline.add.group,
      ...bgUnderline.add.peek,
    });
  },
);

export default tailwindPlugin;
