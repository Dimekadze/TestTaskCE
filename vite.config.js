import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => ({
  root: './',
  base: mode === 'production' ? '/TestTaskCE/' : '/',
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
}));