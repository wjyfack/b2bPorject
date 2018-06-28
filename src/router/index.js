import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import Demend from '@/components/Demand/Index'
import Login from '@/components/my/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/demand',
      name: 'demand',
      component: Demend
    }
    ,
    {
      path: '/my',
      name: 'login',
      component: Login
    }
  ]
})
