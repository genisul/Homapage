import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginForm from '@/pages/auth/LoginForm.vue'
import SignUp from '@/pages/auth/SignUp.vue'
import { useAuthStore } from '@/store/auth/useAuthStore'
import { storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      name: 'login',
      component: LoginForm,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      meta: {
        requiresAuth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useAuthStore()
  const { loginState } = storeToRefs(store)
  // 우리가 가려는 페이지
  if (to.meta.requiresAuth) {
    if (loginState.value) {
      next()
    } else {
      next({ name: 'login' })
    }
  }
  next()
})

export default router
