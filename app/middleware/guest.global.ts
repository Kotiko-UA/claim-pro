import { useAuthStore } from '@/shared/store/authStore'

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore()

  if (
    auth.loggedIn &&
    (to.path === '/auth/login' || to.path === '/auth/register')
  ) {
    return navigateTo('/clientportal')
  }
})
