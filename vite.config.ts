import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0', // This allows connections from all network interfaces
    open: true,
    allowedHosts: [
      'localhost',
      'face-2c0f-6300-e08-c500-b03a-269e-5b90-d051.ngrok-free.app',
      '*.ngrok-free.app', // Wildcard for all ngrok domains
    ],
    cors: true // Enable CORS for all origins
  }
});