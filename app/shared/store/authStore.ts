import { ref } from 'vue'
import { defineStore } from 'pinia'
import { axiosRequest } from '@/shared/api/axios'
import router from '@/shared/router'

const toast = useToast()

export const useAuthStore = defineStore(
  'auth',
  () => {
    // --- state ---
    const token = ref('')
    const refreshToken = ref('')
    const loggedIn = ref(false)

    // --- actions ---
    const successLogin = (user: any) => {
      loggedIn.value = true
      token.value = user.token
      refreshToken.value = user.refreshToken
      router.push('/')
    }

    const logout = () => {
      loggedIn.value = false
      token.value = ''
      refreshToken.value = ''
      router.push('/auth/login')
    }

    const redirectToLogin = () => {
      router.push('/auth/login')
    }

    const refresh = async () => {
      try {
        if (!refreshToken.value) {
          return redirectToLogin()
        }

        const { data } = await axiosRequest.request({
          method: 'GET',
          url: '/auth/refresh',
          headers: {
            Authorization: `Bearer ${refreshToken.value}`,
          },
        })

        successLogin(data)
      } catch (e) {
        toast.error({
          title: 'Error',
          message: (e as any).message,
          position: 'topRight',
        })
        console.log(e)
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
