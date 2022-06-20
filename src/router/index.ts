import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/home/Home.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
