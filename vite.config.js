import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// [https://vite.dev/config/](https://vite.dev/config/)
export default defineConfig({
  plugins: [react()],
  // 🚀 CETTE LIGNE EST LE "GPS" : Elle dit à GitHub de chercher les fichiers
  // dans le dossier /mon-labo-rlc/ et non à la racine.
  base: '/mon-labo-rlc/', 
})
