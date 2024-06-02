import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve }  from 'path'

// https://vitejs.dev/config/
export default defineConfig((env) => ({
  plugins: [react()],
      base: 'static/',
    server: {
        host: '127.0.0.1',
        port: 3000,
        open: false,
        watch: {
            usePolling: true,
            disableGlobbing: false,
        },
        origin: env.mode === "development" ?  'http://127.0.0.1:3000' : "",
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    build: {
        outDir: resolve('./dist'),
        manifest: "manifest.json",
        assetsDir: "assets",
        target: 'es2015',
        rollupOptions: {
            input: {
                main: resolve('./src/main.tsx'),
            },
            output: {
                entryFileNames: `assets/[name]/bundle.js`,
            },
        },
    },
}))
