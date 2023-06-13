import {defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig(({mode, command}) => {
    const env = loadEnv(mode, process.cwd());
    return {
        plugins: [vue()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        define: {
            'process.env': {},
        },
        server: {
            host: 'localhost',
            port: 3000,
            strictPort: false,
            cors: true,
            open: true,
            hmr: false,
            proxy: {
                '/api': {
                    // target: 'http://localhost:8081',
                    target: 'http://114.55.4.19:8081',
                    changeOrigin: true,
                    ws: true,
                },
            },
            https: false,
        },
    };
});
