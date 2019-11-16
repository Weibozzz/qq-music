import VueRouter from 'vue-router'
import Vue from 'vue'
import recommend from '@/components/recommend'
import singer from '@/components/singer'
import rank from '@/components/rank'
import search from '@/components/search'
import user from '@/components/user'
import TopList from '@/components/top-list'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/singer',
      component: singer
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/rank',
      component: rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    },
    {
      path: '/search',
      component: search
    },
  ]
})
