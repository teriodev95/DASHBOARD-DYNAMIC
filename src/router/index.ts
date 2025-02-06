import { createRouter, createWebHistory } from 'vue-router'

import DashBoardView from '@/views/DashBoardView.vue'

import { type IStaticMethods } from 'preline/preline'
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoardView,
    },
    {
      path: '/:gerency/:year/:week', //esta es la ruta dinamica
      name: 'DashBoardParameters',
      component: DashBoardView, 
    },
  ],
})

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit()
    }, 100)
  }
})

export default router
