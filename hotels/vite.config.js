import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: ' hotels',
      filename: "remoteEntry.js",
      exposes: {
        "./HotelsPage": "./src/pages/HotelsPage",
        "./HotelInfoCard": "./src/components/HotelInfoCard",
      },
      shared: ["react", "react-dom","tailwindcss"],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
})
