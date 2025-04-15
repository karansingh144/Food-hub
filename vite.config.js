import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',  // Makes the app accessible from other devices on the network
    port: 5173,       // You can keep this port or change it
  },
});
