---
to: packages/ui/<%= category %>/postcss.config.mjs
---
import postcssConfig from '@repo/tailwind-config/postcss';

/** @type {import('postcss-load-config').Config} */
const config = {
  ...postcssConfig,
};

export default config;
