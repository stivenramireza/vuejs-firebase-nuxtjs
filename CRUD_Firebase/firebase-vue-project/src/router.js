import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/update/:id',
      name: 'update',
      component: () => import(/* webpackChunkName: "about" */ './views/Update.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import(/* webpackChunkName: "about" */ './views/Add.vue')
    }
  ]
})
