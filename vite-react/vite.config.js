import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    istanbul({
      include: 'src/*',
      exclude: ['node_modules'],
      extension: [ '.js', '.jsx', '.ts' ],
      requireEnv: true,
      cypress: true
    }),
  ]
})