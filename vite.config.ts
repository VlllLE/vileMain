import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'gh-pages-spa-fallback',
      closeBundle() {
        const distDir = resolve(__dirname, 'dist');
        const index = resolve(distDir, 'index.html');
        if (existsSync(index)) {
          copyFileSync(index, resolve(distDir, '404.html'));
        }
      },
    },
  ],
  base: process.env.VERCEL ? '/' : '/vileMain/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
    exclude: ['**/node_modules/**', '**/e2e/**'],
  },
});
