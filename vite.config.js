import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/dog-breeds-react-app/',
  plugins: [react()],
});
