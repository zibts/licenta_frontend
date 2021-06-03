import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Element from 'element-ui'

Vue.config.productionTip = false;

//Incarcam token-ul din storage
Vue.prototype.$http = axios;

const token = localStorage.getItem("token");

Vue.use(Element)

//Daca este token-ul, implementam header-ul de autorizare de la axios
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
