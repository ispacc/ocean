import {createApp} from 'vue'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVue from '@arco-design/web-vue'

createApp(App)
    .use(ArcoVue)
    .mount('#app')
