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
<<<<<<< Updated upstream
        "./Button": "./src/components/Button/Button",
        "./store": "./src/utils/store",
      },
      shared: ["react", "react-dom", "jotai", "tailwindcss"],
=======
        "./SearchTool": "./src/components/SearchTool",
        "./FlightDetailsCard": "./src/components/Card/FlightDetailsCard",
      },
      shared: ["react", "react-dom","tailwindcss", "react-router-dom"],
>>>>>>> Stashed changes
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
})
