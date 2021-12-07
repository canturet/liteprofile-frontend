import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from './plugins/font-awesome'
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'

createApp(App)
  .use(router)
  .use(store)
  .use(VueCollapsiblePanel)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");