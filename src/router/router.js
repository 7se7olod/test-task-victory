import UsersPage from '@/pages/UsersPage'
import UserPage from '@/pages/UserPage'
import CreateUserPage from '@/pages/CreateUserPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: UsersPage
  },
  {
    name: 'user',
    path: '/user/:userId',
    component: UserPage
  },
  {
    path: '/create',
    component: CreateUserPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
