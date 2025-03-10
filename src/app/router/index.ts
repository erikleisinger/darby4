import { createRouter, createWebHistory } from 'vue-router'
import { Home } from '@/pages/Home'
import { Project } from '@/pages/Project'
import Test from '@/pages/Test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:project?',
      name: 'home',
      component: Home,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
  ],
})

export default router
