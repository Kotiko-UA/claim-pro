import { useAuthStore } from '@/shared/store/authStore'

export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore()

  if (!auth.loggedIn) {
    return navigateTo('/auth/login')
  }
})
