// import { fileURLToPath, URL } from 'node:url'
import path from "path";

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/pomofocus-react18/' : './',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      // components: `${path.resolve(__dirname, "./src/components/")}`,
      // contaniers: `${path.resolve(__dirname, "./src/contaniers/")}`,
      // public: `${path.resolve(__dirname, "./public/")}`,
      // pages: path.resolve(__dirname, "./src/pages"),
      // types: `${path.resolve(__dirname, "./src/@types")}`,
    },
  }
})
