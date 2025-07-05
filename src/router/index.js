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
  },
  // Ruta catch-all para 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/Home.vue') // Redirige a Home o crea una vista 404
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    
    return { top: 0 }
  }
})

export default router