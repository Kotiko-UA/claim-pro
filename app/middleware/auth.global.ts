import { useAuthStore } from '@/shared/store/authStore'

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore()

  if (!auth.loggedIn && to.path.startsWith('/clientportal')) {
    return navigateTo('/auth/login')
  }
})
