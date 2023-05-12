import {createApp} from 'vue'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVue from '@arco-design/web-vue'
import axios from "axios";

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.use(ArcoVue)
  .mount('#app')
