import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // '/auth': baseURL,
      // '/api' : baseURL
      // '/auth': 'http://localhost:8080', 
      // '/api': 'http://localhost:8080'
      '/auth' : 'https://book-nook-backend.onrender.com',
      '/api' : 'https://book-nook-backend.onrender.com'
    }
  },
  plugins: [react()],
})
