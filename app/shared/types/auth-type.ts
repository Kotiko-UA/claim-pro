export type LoginType = { email: string; password: string }

export type RegistrationType = {
  email: string
  password: string
  confirmPassword: string
  type: 'professional' | 'contractor'
}

export type ResetEmailType = {
  email: string
}

export type ResetPasswordType = {
  newPassword: string
  confirmPassword: string
}
