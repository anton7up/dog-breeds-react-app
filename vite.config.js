import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';  // <-- добавь этот импорт

export default defineConfig({
  base: '/dog-breeds-app-react-app/',  // Имя твоего репозитория
  plugins: [react()]
});
