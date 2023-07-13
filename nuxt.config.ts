export default defineNuxtConfig({
    modules: ["@element-plus/nuxt", "@nuxtjs/tailwindcss"],
    devtools: {enabled: true},
    app: {
        pageTransition: {name: 'page', mode: 'out-in'}
    },
    runtimeConfig: {
        public: {
            baseURL: process.env.API_URL // Exposed to the frontend as well.
        }
    },
    vite: {
        server: {
            proxy: {
                "/api": {
                    target: "http://localhost:8081",
                    changeOrigin: true,
                    rewrite: (path: string) => path.replace(/^\/api/, ""),
                },
            }
        }
    }
})
