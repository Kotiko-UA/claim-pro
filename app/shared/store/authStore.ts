// ~/shared/store/useAuthStore.ts
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const { $fetchRequest } = useNuxtApp() // <- всередині setup!
    const router = useRouter()
    const toast = useToast()

    const token = ref('')
    const refreshToken = ref('')
    const loggedIn = ref(false)

    const successLogin = (user: { token: string; refreshToken: string }) => {
      loggedIn.value = true
      token.value = user.token
      refreshToken.value = user.refreshToken
      router.push('/clientportal')
    }

    const logout = () => {
      loggedIn.value = false
      token.value = ''
      refreshToken.value = ''
      router.push('/')
    }

    const redirectToLogin = () => router.push('/auth/login')

    const refresh = async () => {
      try {
        if (!refreshToken.value) return redirectToLogin()
        //@ts-ignore
        const data = await $fetchRequest('/auth/refresh', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${refreshToken.value}`,
          },
        })

        successLogin(data)
      } catch (e: any) {
        toast.error({
          title: 'Error',
          message: e?.data?.message || e?.message || 'Refresh failed',
          position: 'topRight',
        })
        console.error('Refresh error:', e)
        redirectToLogin()
      }
    }

    return {
      token,
      refreshToken,
      loggedIn,
      successLogin,
      logout,
      redirectToLogin,
      refresh,
    }
  },
  {
    persist: true,
  }
)
