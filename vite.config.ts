import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' permet au site de fonctionner dans un sous-dossier (ex: user.github.io/repo-name/)
  // Le './' rend les chemins relatifs, ce qui est plus sûr pour GitHub Pages
  base: './', 
})