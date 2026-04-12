import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

const cacheRoot = process.env.LOCALAPPDATA
  ? path.join(process.env.LOCALAPPDATA, 'wisentask-vite-cache')
  : '.vite-cache'

const cacheDir = path.join(cacheRoot, process.env.VITE_CACHE_KEY || `${Date.now()}`)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  cacheDir,
})
