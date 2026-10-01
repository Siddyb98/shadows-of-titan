import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx() },
    react(),
  ],
  server: {
    watch: {
      ignored: ['**/*.mp4'],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('/src/data/dossiers/')) return undefined
          if (['absolute-zero', 'breaking-point', 'halflight', 'helios-king', 'loworbit', 'myth-001x', 'nightshade', 'quantum-drift', 'sliplaw', 'sonic-rend', 'solaris-fist', 'thornmother', 'rot-saint', 'white-winter'].some((name) => id.endsWith(`/${name}.jsx`))) return 'dossiers-personnel'
          return 'dossiers-archive'
        },
      },
    },
  },
})
