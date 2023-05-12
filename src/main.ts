import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVue from "@arco-design/web-vue";

const app = createApp(App)
app.use(ArcoVue)
  .mount('#app')
