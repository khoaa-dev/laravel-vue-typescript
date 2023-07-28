import { RouteRecordRaw } from 'vue-router'

const Test = () => import('@/pages/TestPage.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
]

export default routes
