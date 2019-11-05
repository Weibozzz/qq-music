import VueRouter from 'vue-router'
import Vue from 'vue'
import recommend from '../components/recommend'
import singer from '../components/singer'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: recommend
    },
    {
      path: '/singer',
      component: singer
    },
  ]
})
