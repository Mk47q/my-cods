import { createRouter, createWebHistory } from 'vue-router'
import sayt from '@/views/sayt.vue'
import about from '@/views/about.vue'
import call from '@/views/call.vue'
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
    {
      path: '/call',
      name: 'call',
      component: call
    },
  ]
})
export default router
