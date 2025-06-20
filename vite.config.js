import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/dog-breeds-app-react-app/',  // имя репозитория на GitHub Pages
});
