import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/product/:itemnumber/:laoname',
      name: 'ItemNumber',
      component: () => import('../views/BarcodeGen.vue')
    },
    {
      path: '/product/:itemnumber/:unitprice',
      name: 'codePrice',
      component: () => import('../views/BarcodePrice.vue')
    },
  ]
})

export default router
