import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteEslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // Element Plus 的UI按需引入配置
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    ElementPlus({
      defaultLocale: 'zh-cn'
    }),
    // 构建和dev时是否调用eslint检查代码，不需要可移除
    viteEslint()
  ],
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'axios']
  },
  build: {
    target: 'modules', // 默认值
    sourcemap: true
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/api/': {
        target: 'http://localhost:8081',
        // target: 'http://114.55.4.19:8081',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
