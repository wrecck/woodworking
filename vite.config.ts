import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel sets VERCEL=1 during build — use site root. Local/static deploy under XAMPP uses /projects/woodworking/.
export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? '/' : '/projects/woodworking/',
})
