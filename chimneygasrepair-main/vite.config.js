import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 4173,
  },
  preview: {
    host: true,
    port: 4173,
  },
  build: {
    // Source maps are useful for debugging but add significant payload in prod.
    // Set VITE_SOURCEMAP=true to enable them when debugging production issues.
    sourcemap: process.env.VITE_SOURCEMAP === 'true',
    // Target modern browsers — avoids legacy transpilation overhead.
    target: 'esnext',
    // Minify CSS in production.
    cssCodeSplit: true,
    // Vite 8 uses Oxc as the built-in minifier (esbuild is no longer bundled).
    cssMinify: true,
    minify: 'oxc',
    reportCompressedSize: isProd,
    rollupOptions: {
      output: {
        // Split heavy vendor libraries into separate cacheable chunks.
        manualChunks(id) {
          if (id.includes('node_modules/react-dom')) return 'vendor-react-dom';
          if (id.includes('node_modules/react-router')) return 'vendor-router';
          if (id.includes('node_modules/react/')) return 'vendor-react';
          if (id.includes('node_modules/')) return 'vendor';
        },
      },
    },
  },
});
