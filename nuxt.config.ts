export default defineNuxtConfig({
    modules: ["@element-plus/nuxt", "@nuxtjs/tailwindcss"],
    devtools: {
      enabled: true,

      timeline: {
        enabled: true
      }
    },
    app: {
        pageTransition: {name: 'page', mode: 'out-in'}
    },
    runtimeConfig: {
        public: {
            baseURL: process.env.API_URL, // Exposed to the frontend as well.
            wsURL: process.env.WS_URL
        }
    },
    vite: {
        server: {
            proxy: {
                "/api": {
                    target: process.env.API_URL,
                    changeOrigin: true,
                    rewrite: (path: string) => path.replace(/^\/api/, ""),
                },
            }
        }
    }
})