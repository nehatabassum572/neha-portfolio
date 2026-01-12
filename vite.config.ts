import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { p } from 'framer-motion/client';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
 