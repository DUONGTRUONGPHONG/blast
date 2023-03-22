import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import UserView from '../views/UserView.vue'
import Register from '../components/RegisterTest.vue'
import ListMusic from '../components/ListMusic.vue'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name:'Login',
    component: LoginView
  },
  {
    path: '/user',
    name:'User',
    component: UserView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/listmusic',
    name: 'listmusic',
    component: ListMusic,
    meta: {
      requiresAuth: true
    }
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && store.state.isLoggedIn===false) {
    next('/login')
  } else {
    next()
  }
})
export default router
