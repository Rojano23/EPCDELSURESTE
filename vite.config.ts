import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  base: '/DEV-WEBPAGES-RX23/',

  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});
