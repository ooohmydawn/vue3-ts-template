import { createRouter, createWebHashHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/home.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/about/about.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
