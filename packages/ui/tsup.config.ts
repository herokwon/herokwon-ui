import { defineConfig } from 'tsup';

export default defineConfig(() => ({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  minify: true,
  sourcemap: true,
  treeshake: true,
  external: ['next', 'react', 'react-dom', 'react-icons'],
  esbuildOptions: options => {
    options.jsx = 'automatic';
  },
}));
