import {
  ELEMENT_SIZES,
  ELEMENT_SPACINGS,
  ELEMENT_TYPES,
} from '@herokwon/ui/common';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';

import '../src/globals.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      sort: 'requiredFirst',
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {
    as: {
      control: 'select',
      options: ELEMENT_TYPES,
      if: {
        arg: 'as',
        exists: true,
      },
    },
    size: {
      control: 'select',
      options: ELEMENT_SIZES,
      if: {
        arg: 'size',
        exists: true,
      },
    },
    padding: {
      control: 'select',
      options: ELEMENT_SPACINGS,
      if: {
        arg: 'padding',
        exists: true,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
  tags: ['autodocs'],
};

export default preview;
