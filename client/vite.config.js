import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/assign2-portfolio-backend/' : '/',
    plugins: [react()],
    build: {
      outDir: 'dist',
      manifest: true,
      rollupOptions: {
        input: {
          main: './src/main.jsx',
          index: './index.html', // Add this line
        },
      },
    },
  };
});