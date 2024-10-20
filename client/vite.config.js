import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/assign2-portfolio-backend/' : '/',
    plugins: [react()],
    build: {
      manifest: true,
    },
  };
});