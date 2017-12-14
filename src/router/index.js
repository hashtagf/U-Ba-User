import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Process from '@/pages/Process'
import noaccept from '@/pages/noaccept'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/noaccept',
      name: 'noaccept',
      component: noaccept
    },
    {
      path: '/',
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
    }
  ]
})
