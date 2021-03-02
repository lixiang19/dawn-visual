import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home/index.vue'
import FactoryPage from '@/views/FactoryPage/index.vue'
import HistoryPage from '@/views/HistoryPage/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/FactoryPage',
    name: 'FactoryPage',
    component: FactoryPage
  },
  {
    path: '/HistoryPage',
    name: 'HistoryPage',
    component: HistoryPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
