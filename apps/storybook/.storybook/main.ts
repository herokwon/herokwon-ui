import type { StorybookConfig } from '@storybook/nextjs';
import { dirname, join } from 'path';

const getAbsolutePath = (value: string): string =>
  dirname(require.resolve(join(value, 'package.json')));

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-themes'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {},
  },
  features: {
    experimentalRSC: true,
  },
  docs: {
    defaultName: 'Documentation',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  // webpackFinal: async config => {
  //   config.resolve?.plugins?.push(
  //     new TsconfigPathsPlugin({
  //       configFile: resolve(__dirname, '../tsconfig.json'),
  //     }),
  //   );

  //   return config;
  // },
  // staticDirs: ['..\\public'],
};

export default config;
