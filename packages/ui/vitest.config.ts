import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: './vitest-setup',
    coverage: {
      provider: 'v8',
    },
    pool: 'threads',
    include: ['./**/__tests__/**/*.(spec|test).ts?(x)'],
    environment: 'jsdom',
    globals: true,
  },
});
