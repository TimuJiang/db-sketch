import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
