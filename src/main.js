import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Element from 'element-ui'
import InfiniteLoading from 'vue-infinite-loading'
import moment from 'moment'

import 'moment/locale/ro';

moment.locale('ro');

Vue.prototype.moment = moment


Vue.config.productionTip = false;

//Incarcam token-ul din storage
Vue.prototype.$http = axios;

const token = localStorage.getItem("token");

Vue.use(Element)
Vue.use(InfiniteLoading)


//Daca este token-ul, implementam header-ul de autorizare de la axios
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
