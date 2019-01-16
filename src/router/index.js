import Vue from 'vue'
import Router from 'vue-router'
import 'vuetify/dist/vuetify.min.css'
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Products from '@/pages/Products/Products'
import Sales from '@/pages/Sales/Sales'

new Vue();
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/sales',
      name: 'Sales',
      component: Sales
    }
  ],
  mode: 'history'
})
