import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import search from '@/components/search'
import view from '@/components/search/view'
import category from '@/components/category'
import inner from '@/components/category/inner'
import item from '@/components/item'
import qbysj from '@/components/pages/qbysj'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
      	{
      		path:'search',
      		component:{
      			search
      		},
          children:[
            {
              path:'view',
              cpmponent:{
                view
              }
            }
          ]
      	},
        {
          path:'item',
          component:{
            item
          }
        },
        {
          path:'login',
          component:{
            search
          }
        },
        {
          path:'pages',
          component:{
            search
          },
          children:[
            {
              path:'category',
              component:{
                category
              },
              children:[
                {
                  path:'inner',
                  component:{
                    inner
                  }
                }
              ]
            },
            {
              path:'qbysj',
              component:{
                qbysj
              }
            }
          ]
        },
        {
          path:'topic',
          component:{
            search
          }
        },
        {
          path:'brand',
          component:{
            search
          }
        }
      ]
    }
  ]
})
