import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['5176-in8xcowbre4927si8lj1n.e2b.app', 'localhost', '127.0.0.1'],
    host: true,
    port: 5176,
    strictPort: true,
  }
})
