import { createRouter, createWebHistory } from 'vue-router'
import sayt from '@/views/sayt.vue'
import about from '@/views/about.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: sayt
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
  ]
})

export default router
