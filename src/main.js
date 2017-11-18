// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import bulma from '../node_modules/bulma/css/bulma.css'
import vueFire from 'vuefire'
import vueSweetalert2 from 'vue-sweetalert2'

Vue.use(bulma)
Vue.use(vueFire)
Vue.use(vueSweetalert2)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
