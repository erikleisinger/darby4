import { createRouter, createWebHistory } from 'vue-router'
import { Home } from '@/pages/Home'
import { Project } from '@/pages/Project'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects/:id',
      name: 'project',
      component: Project
    }

  ]
})

export default router
