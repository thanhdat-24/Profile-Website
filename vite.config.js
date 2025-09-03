import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Với custom domain, base để là '/'
export default defineConfig({
  plugins: [react()],
  base: '/'
})