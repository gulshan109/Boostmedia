// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // use '/' for root domain, or '/boostmedia/' if hosted in subfolder
  plugins: [react()],
})
