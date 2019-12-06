import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { HttpPlugin } from './plugins/http.plugin';

Vue.config.productionTip = false;

Vue.use(HttpPlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
