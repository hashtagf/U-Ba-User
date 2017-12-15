import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Process from '@/components/Process'
import noaccept from '@/components/noaccept'
import loading from '@/components/loading'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/noaccept',
      name: 'noaccept',
      component: noaccept
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Process',
      name: 'Process',
      component: Process
    },
    {
      path: '/loading',
      name: 'loading',
      component: loading
    }
  ]
})
