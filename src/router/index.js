import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/centro-ayuda',
    name: 'CentroAyuda',
    component: () => import('../views/CentroAyuda.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue')
  },
  {
    path: '/privacidad',
    name: 'Privacidad',
    component: () => import('../views/Privacidad.vue')
  },
  {
    path: '/terminos',
    name: 'Terminos',
    component: () => import('../views/Terminos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router