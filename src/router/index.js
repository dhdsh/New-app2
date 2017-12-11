import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import List from '@/components/list'
import Show from '@/components/show'
import Cart from '@/components/cart'
import Me from '@/components/user/me'
import Login from '@/components/user/login'
import Reg from '@/components/user/reg'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/List',
    	name:'List',
    	component:List
    },
    {
      path:'/User',
      name:'User',
      component:User,
    },
     {
      path:'/Show',
      name:'Show',
      component:Show
    },
    {
      path:'/Cart',
      name:'Cart',
      component:Cart
    },
     {
      path:'/Me',
      name:'Me',
      component:Me
    },
    {
      path:'/Login',
      name:'Login',
      component:Login
    },
    {
      path:'/Reg',
      name:'Reg',
      component:Reg
    },
  ]
})
