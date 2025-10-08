import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
// import { axiosRequest } from '@/shared/api/axios'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const router = useRouter()
    const toast = useToast()
    // --- state ---
    const token = ref('')
    const refreshToken = ref('')
    const loggedIn = ref(false)

    // --- actions ---
    const successLogin = (user: any) => {
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

    // const redirectToLogin = () => {
    //   router.push('/auth/login')
    // }

    // const refresh = async () => {
    //   try {
    //     if (!refreshToken.value) {
    //       return redirectToLogin()
    //     }

    //     const { data } = await axiosRequest.request({
    //       method: 'GET',
    //       url: '/auth/refresh',
    //       headers: {
    //         Authorization: `Bearer ${refreshToken.value}`,
    //       },
    //     })

    //     successLogin(data)
    //   } catch (e) {
    //     toast.error({
    //       title: 'Error',
    //       message: (e as any).message,
    //       position: 'topRight',
    //     })
    //     console.log(e)
    //     redirectToLogin()
    //   }
    // }

    return {
      token,
      refreshToken,
      loggedIn,
      successLogin,
      logout,
      // redirectToLogin,
      // refresh,
    }
  },
  {
    persist: true,
  }
)
