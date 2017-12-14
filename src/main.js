// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import Bulma from '../node_modules/bulma/css/bulma.css'
import VueGeolocation from 'vue-geolocation'
Vue.install(VueGeolocation)

sync(store, router)
Vue.use(Bulma)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
