import Vue from 'vue'
import Router from 'vue-router'
import Who from '@/components/Who-we-are'
import Constitution from '@/components/Constitution/Constitution'
import BuyCepajou from '@/components/BuyCepajou/BuyCepajou'
import Donkey from '@/components/Donkey/Donkey'
import Become from '@/components/Become/Become'
import Donkey_court from '@/components/Donkey_court/Donkey_court'
import Enlightenment from '@/components/Enlightenment/Enlightenment'


Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'who we are',
      component: Who
    },
    {
      path: '/constitution',
      name: 'constitution',
      component: Constitution
    },
    {
      path: '/buycepajou',
      name: 'buycepajou',
      component: BuyCepajou
    },{
      path: '/donkey',
      name: 'donkey',
      component: Donkey
    },{
      path: '/become_a_donkey',
      name: 'become_a_donkey',
      component: Become
    },{
      path: '/donkey_court',
      name: 'donkey_court',
      component: Donkey_court
    },{
      path: '/enlightenment',
      name: 'enlightenment',
      component: Enlightenment
    }
    
  ],
  linkExactActiveClass: "active"
})
