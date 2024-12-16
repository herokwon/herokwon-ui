/** @type {import('postcss-load-config').Config}  */
const config = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'tailwindcss/nesting': {},
    autoprefixer: {},
  },
};

export default config;
