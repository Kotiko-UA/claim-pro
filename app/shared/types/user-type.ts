export type UserType = {
  firstName: string
  lastName: string
  email: string
  verified: boolean
  type: 'professional' | 'contractor' | ''
}
export type UserDataType = Partial<UserType>
