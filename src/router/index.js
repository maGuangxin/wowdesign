import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import category from '@/components/category'
import my from '@/components/my'
import inner from '@/components/category/inner'
import login from '@/components/login/login'
import reg from '@/components/login/reg'
import item from "../components/item"
import brand from "../components/brand"
import pages from "../components/pages"
import baojia from "../components/pages/baojia"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: index
      
    },
    {
      path: '/category',
      component: category,
      children:[
        {
          path:'inner/:categoryId',
          component:inner
        }
      ],
      
    },
    {
      path: '/cart',
      redirect:'/my'
      
    },
    {
      path: '/msg',
      redirect:'/my'
      
    },
    {
      path: '/my',
      component:my,
      children:[
        {
          path:'login',
          component:login
        },
        {
          path:'reg',
          component:reg
        }
      ],
      redirect:'/my/login'
      
    },   
    {
      path: '/item',
      component: item 
    },
    {
      path:'/pages',
      component:pages,
      children:[
        {
          path:'baojia',
          component:baojia
        }
      ],
      redirect:'/pages/baojia'
    },
    {
      path:'/brand/:mid',
      component:brand
    },
    {
      path:"/*/",
      redirect:'/index'
    }
  ]
})
