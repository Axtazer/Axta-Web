import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    //component: 'Home'
    component: () => import('../views/Home.vue'),
    meta: { title: 'Axta-Website' }, // <- I would to use this one
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
