import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import { peerDependencies, dependencies } from './package.json';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// Simple plugin to copy theme.css to dist (unprocessed)
function copyThemeCSS() {
  return {
    name: 'copy-theme-css',
    writeBundle() {
      const src = path.resolve(dirname, 'src/theme.css');
      const dest = path.resolve(dirname, 'dist/styles.css');
      fs.copyFileSync(src, dest);
      console.log('✓ Copied theme.css → dist/styles.css');
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: ['src/**/*.stories.tsx', 'src/**/*.test.ts', 'src/**/*.spec.ts'],
    }),
    copyThemeCSS(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(dirname, 'src/index.ts'),
      name: 'ShadcnUIKit',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
        preserveModules: false,
      },
    },
    sourcemap: true,
    cssCodeSplit: false,
  },
});
