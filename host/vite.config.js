import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        // flights: 'http://localhost:3001/assets/remoteEntry.js',
        home: 'http://localhost:3002/assets/remoteEntry.js',
        hotels: 'http://localhost:3003/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'tailwindcss', 'react-router-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
