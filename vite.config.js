import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './',
  base: '/TestTaskCE/',
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
});
