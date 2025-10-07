<script setup lang="ts">
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'
import type { RegistrationType } from '~/shared/types/auth-type'
definePageMeta({
  ssr: false,
})

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(
      /[@$!%*?&#^()_+\-=\[\]{};':"\\|,.<>\/?]/,
      'Password must contain at least one special character'
    ),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
})
const initialState = (): RegistrationType => ({
  email: '',
  password: '',
  confirmPassword: '',
})

const state = reactive<RegistrationType>(initialState())
const onRegister = () => {
  console.log(state)
  // Object.assign(state, initialState())
}
</script>

<template>
  <AuthCommonAuth title="<span>Create </span> your account">
    <template #form>
      <p>Registration form block</p>
    </template>

    <template #auth-link>
      <p class="auth-link-text">
        Already have an account?
        <span class="auth-link">
          <NuxtLink to="/auth/login">Login</NuxtLink>
        </span>
      </p>
    </template>
  </AuthCommonAuth>
</template>
