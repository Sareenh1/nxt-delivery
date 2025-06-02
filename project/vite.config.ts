import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/nxt-delivery/',  // ✅ use only the repo name with leading/trailing slashes
  plugins: [react()],
})
