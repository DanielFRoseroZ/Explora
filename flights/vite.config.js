import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'flights',
      filename: "remoteEntry.js",
      exposes: {
        "./SearchTool": "./src/components/SearchTool",
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
