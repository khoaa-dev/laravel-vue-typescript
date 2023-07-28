import { createRouter, createWebHistory } from 'vue-router'
import testRoutes from './test'

const router = createRouter({
  history: createWebHistory(),
  routes: [...testRoutes],
})

export default {
  routes: router,
}
