import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '../components/index';
import contactUs from '../components/contactUs';
import joinUs from '../components/joinUs';
import aboutUs from '../components/aboutUs';
import caseShow from '../components/caseShow';
import Market from '../components/Market';
import Service from '../components/Service';
import Software from '../components/Software';
import Retail from '../components/Retail';
import headers from '../components/headers';
import footers from '../components/footers';
import toast from '../toast/toast'
export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component:contactUs
    },
    {
      path: '/joinUs',
      name: 'joinUs',
      component: joinUs
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/caseShow',
      name: 'caseShow',
      component: caseShow
    },
    {
      path: '/Market',
      name: 'Market',
      component: Market
    },
    {
      path: '/Service',
      name: 'Service',
      component: Service
    },
    {
      path: '/Software',
      name: 'Software',
      component: Software
    },
    {
      path: '/Retail',
      name: 'Retail',
      component: Retail
    },
    {
      path: '/headers',
      name: 'headers',
      component: headers
    },
    {
      path: '/footers',
      name: 'footers',
      component: footers
    },
    {path:'/',redirect:'/index',name:'index'},
    {
      path: '/toast',
      name: 'toast',
      component: toast
    },
    
  ]
})
