import {createApp} from "vue";
import App from "./App.vue";
import "@arco-design/web-vue/dist/arco.css";
import ArcoVue, {Message} from "@arco-design/web-vue";


const app = createApp(App);

app.use(ArcoVue)
    .mount("#app");
Message._context = app._context;

