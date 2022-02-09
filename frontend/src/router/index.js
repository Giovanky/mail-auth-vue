import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import authRouter from '@/modules/auth/router'

const routes = [
  {
    path: '/auth',
    ...authRouter
  },
  {
    path: '/selector',
    component: () => import(/* webpackChunkName: "selectorView" */ '@/modules/pkmn/views/SelectorView.vue'),
    meta: {
      required: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const protectedRoutes = to.matched.some(record => record.meta.required)
  if(protectedRoutes && !store.state.user){
    next('/auth/signin')
  }else{
    next()
  }
})

export default router