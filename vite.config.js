import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import dotenv from "dotenv";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),

  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
   // "process.env.VITE_APP_STRIPE_PUBLISHABLE_KEY" : JSON.stringify(process.env.VITE_APP_STRIPE_PUBLISHABLE_KEY)
  },
})
