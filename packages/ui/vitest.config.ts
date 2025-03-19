import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: './vitest.setup',
    include: ['**/__tests__/**/*.(spec|test).ts?(x)'],
    coverage: {
      provider: 'v8',
      enabled: true,
      include: ['**/__tests__'],
      exclude: ['**/!(*.spec|*.test).ts?(x)'],
    },
    pool: 'threads',
    environment: 'jsdom',
    globals: true,
  },
});
