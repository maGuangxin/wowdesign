import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import category from '@/components/category'
import login from '@/components/login'
import view from '@/components/search/view'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: index

    },
    {
      path:'/category',
      component:category
    },
    {
      path: '/cart',
      redirect:'/my/login'

    },
    {
      path: '/msg',
      redirect:'/my/login'

    },
    {
      path: '/my',
     redirect:'/my/login'

    },
    {
      path:'/search',
      component:view
    },
    {
      path:'*',
      redirect:'/index'
    }
  ]
})
