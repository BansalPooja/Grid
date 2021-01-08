import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { GridGlobal } from 'gridjs-vue'


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
Vue.use(GridGlobal)