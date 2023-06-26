// import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue'

import router from './router'

import App from './App.vue'
import Axios from './apis/ajax'
import '@arco-design/web-vue/dist/arco.css'

document.title = import.meta.env.VITE_APP_TITLE
const app = createApp(App)
app.use(createPinia())
app.provide('$http', Axios)
app.use(ArcoVue)
app.use(router)

app.mount('#app')
