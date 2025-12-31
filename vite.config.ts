import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  // For GitHub Pages, set base to your repository name
  // Example: base: '/Kubernetes-Architecture-Diagram/'
  // For root domain deployment, use: base: '/'
  base: process.env.GITHUB_PAGES === 'true' ? '/Kubernetes-Architecture-Diagram/' : '/',
  build: {
    outDir: 'dist',
  },
})
