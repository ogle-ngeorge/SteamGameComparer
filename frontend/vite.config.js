import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Add a proxy to forward API requests to the backend server
// Proxies are middleware that intercept requests and can modify them before they reach the backend server. 
// This is useful for development to avoid CORS issues when the frontend and backend are on different ports.

// Different ports for frontend and backend to avoid conflicts. Frontend runs on 5173, backend runs on 3000.
// So that one doesn't accidentally start the backend on the frontend port and vice versa. Also makes it clear which server is which when looking at logs and network requests.

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000' // Forward all requests starting with /api to the backend server running on port 3000
    }
  }
})

