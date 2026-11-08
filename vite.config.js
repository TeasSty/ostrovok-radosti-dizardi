import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  // Project GitHub Pages site lives at /ostrovok-radosti-dizardi/
  base: command === 'build' ? '/ostrovok-radosti-dizardi/' : '/',
  server: {
    port: 5173,
    open: false,
    watch: {
      // Windows EBUSY when media files are still being written
      ignored: ['**/public/media/**'],
    },
  },
}))
