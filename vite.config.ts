import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/rest/maps/load': {
        target: 'http://172.21.82.18:8081',
        changeOrigin: true,
      },
      '/rest/pods': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
      }
    }
  }
})
