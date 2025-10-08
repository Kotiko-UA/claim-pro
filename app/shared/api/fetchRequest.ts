import { useAuthStore } from '@/shared/store/authStore'
import { ofetch } from 'ofetch'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const fetchRequest = ofetch.create({
    baseURL: config.public.apiBaseUrl,

    async onRequest({ request, options }) {
      const { token } = useAuthStore()
      const url = typeof request === 'string' ? request : request.url

      if (token && !url.includes('auth/refresh')) {
        const headers = new Headers(options.headers || {})
        headers.set('Authorization', `Bearer ${token}`)
        options.headers = headers
      }
    },

    async onResponse({ response }) {
      return response._data
    },

    async onResponseError({ response, request, options }) {
      const authStore = useAuthStore()
      const url = typeof request === 'string' ? request : request.url

      if (response?.status === 401 && url.includes('auth/refresh')) {
        await authStore.logout()
        return
      }

      if (response?.status === 401 && !(options as any)._retry) {
        ;(options as any)._retry = true
        try {
          await authStore.refresh()
          await fetchRequest(request, options)
        } catch (err) {
          throw err
        }
      }

      throw response
    },
  })

  return {
    provide: {
      fetchRequest,
    },
  }
})
