import { createRouter, createWebHistory } from 'vue-router'
import { getCookie } from '@/helpers/getCookie'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import Theme from '../views/Theme.vue'
import ThemeV2 from '../views/ThemeV2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component:LoginPage
    },
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/theme',
      name: 'theme',
      component: Theme
    },
    {
      path: '/themev2',
      name: 'themev2',
      component: ThemeV2
    },
    {
      path: '/example',
      name: 'example',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Example.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authToken = getCookie('authToken');
  const isAuthenticated = authToken ? true : false;

  // These are the pages accessible without authentication
  if (!isAuthenticated && to.path !== '/login' && to.path !== '/registration') {
    next('/login');
  } else {
    next();
  }
});

export default router
