// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import Vuetify from 'vuetify'
import store from './store/store.js'
import axios from 'axios';
//import config from './config'
import auth from './packages/auth'
import Acl from './packages/acl'
import routes from './routes.js'


axios.defaults.baseURL = store.state.api.url;
axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': 'Bearer ' + localStorage.getItem('access_token')
};
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(require('vue-moment'));
Vue.config.productionTip = false

export const router = new VueRouter({
  routes,
  linkActiveClass: "active",
  mode: 'history'
});


//store.commit('right_menu', "close");

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
