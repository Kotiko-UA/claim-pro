import { defineStore } from 'pinia'
import type { UserType } from '@/shared/types/user-type'

export const useUserStore = defineStore('user', () => {
  const user = reactive<UserType>({
    firstName: '',
    lastName: '',
    email: '',
    verified: false,
    type: '',
  })
  const changeUser = (data: UserType) => {
    data.firstName && (user.firstName = data.firstName)
    data.lastName && (user.lastName = data.lastName)
    data.email && (user.email = data.email)
    data.verified && (user.verified = data.verified)
    data.type && (user.type = data.type)
  }
  return { user, changeUser }
})
