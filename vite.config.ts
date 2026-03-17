import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Actions では GITHUB_REPOSITORY が "owner/repo" 形式で提供される
// それ以外の環境（ローカル等）では base を '/' にする
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  base: repoName ? `/${repoName}/` : '/',
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
})
