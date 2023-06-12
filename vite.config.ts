import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        // 配置路径别名
        alias: {
            '@': '/src',
        },
    },
    server: {
        cors: true,
        open: true,
        proxy: {
            '/api': {
                target: 'https://api.flysean.xyz', //代理接口
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
