/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /*test: {
    environment: 'jsdom',
    globals: true,
    //setupFiles: './src/setupTests.ts',
  },*/
})

// https://vitejs.dev/config/
/*const _plugins = [react()];
_plugins.unshift(MillionLint.vite())
export default defineConfig({
  plugins: _plugins
});*/
