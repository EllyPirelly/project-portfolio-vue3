import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
/* import BlogOverview from '../views/BlogOverview.vue' */

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog-overview',
    name: 'BlogOverview',
    // route level code-splitting
    // this generates a separate chunk (blog.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "blog" */ '../views/BlogOverview.vue'),
  },
  {
    path: '/blog-my-first-medium-article',
    name: 'BlogDetail',
    // route level code-splitting
    // this generates a separate chunk (blog.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "blog" */ '../views/BlogDetail.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
