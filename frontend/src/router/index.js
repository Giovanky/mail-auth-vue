import { createRouter, createWebHistory } from 'vue-router'
import authRouter from '@/modules/auth/router'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/auth',
    ...authRouter
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
