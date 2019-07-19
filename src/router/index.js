import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/contComp/index'
import Home from '@/components/contComp/home/index'
import Market from '@/components/contComp/market/index'

import Trade from '@/components/contComp/trade/index'
import Margin from '@/components/contComp/margin/index'
import Finance from '@/components/contComp/finance/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {
          path: '',
          name: 'home',
          component: Home,
        },
        {
          path: 'market',
          name: 'market',
          component: Market,
        },
        {
          path: 'trade',
          name: 'trade',
          component: Trade,
        },
        {
          path: 'margin',
          name: 'margin',
          component: Margin,
        },
        {
          path: 'finance',
          name: 'finance',
          component: Finance,
        }
      ]
    }
  ]
})
