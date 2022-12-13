import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/MainPage'
import Fun from '../components/FunVersion'
import CategoriesPage from '../components/CategoriesPage'
import ProjectPage from '../components/ProjectPage'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/:name/',
    name: '/ProjectPage',
    component: ProjectPage
  },
  {
    path: '/fun',
    name: 'Fun',
    component: Fun
  },
  {
    path: '/overview',
    name: 'CategoriesPage',
    component: CategoriesPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
