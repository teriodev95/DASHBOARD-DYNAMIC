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
      path: '/:gerency/:year/:week', // Ruta con parámetro dinámico
      name: 'DashBoardParameters',
      component: DashBoardView, // Asegúrate de importar el componente UserView
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
