import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')

export default defineConfig({
  root,
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        rules: resolve(root, 'pages', 'rules', 'rules.html'),
        play: resolve(root, 'pages', 'play', 'play.html')
      }
    }
  }
})
