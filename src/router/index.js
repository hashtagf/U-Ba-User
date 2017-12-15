import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Process from '@/components/Process'
import noaccept from '@/components/noaccept'
import loading from '@/components/loading'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Process from '@/pages/Process'
import noaccept from '@/pages/noaccept'
import loader from '@/pages/loader'

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
    },
    {
      path: '/loading',
      name: 'loading',
      component: loading
    },
    {
      path: '/loader',
      name: 'loader',
      component: loader
    }
  ]
})
