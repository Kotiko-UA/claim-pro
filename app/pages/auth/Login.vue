<script setup lang="ts">
import CommonAuth from '~/components/auth/CommonAuth.vue'
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'
import type { LoginType } from '~/shared/types/auth-type'

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
})
const initialState = (): LoginType => ({
  email: '',
  password: '',
})

const state = reactive<LoginType>(initialState())
const onLogin = () => {
  console.log(state)
  // Object.assign(state, initialState())
}
</script>
<template>
  <CommonAuth title="<span>Login into </span> your account">
    <template #form>
      <Form :validation-schema="schema" @submit="onLogin" v-slot="{ errors }">
        <div class="flex flex-col gap-6 laptop:gap-8">
          <Field name="email" v-slot="{ field, errorMessage }">
            <EntityFormInput
              label="Email:"
              id="email"
              autocomplete="email"
              placeholder="Enter text"
              v-bind="field"
              :error="errorMessage"
              v-model="state.email"
            />
          </Field>
          <div>
            <Field name="password" v-slot="{ field, errorMessage }">
              <EntityFormInput
                label="Password:"
                type="password"
                id="password"
                autocomplete="password"
                placeholder="Enter text"
                v-bind="field"
                :error="errorMessage"
                v-model="state.password"
              />
            </Field>
            <NuxtLink
              class="mt-2 text-[14px] text-right text-[#ADB9CC]"
              to="/auth/reset"
            >
              Forgot password?
            </NuxtLink>
          </div>
        </div>
        <EntityButtonSubmit class="" text="Login" />
      </Form>
    </template>

    <template #auth-link>
      <p class="auth-link-text">
        Don't have an account?
        <span class="auth-link">
          <NuxtLink to="/auth/registration">Sign up</NuxtLink>
        </span>
      </p>
    </template>
  </CommonAuth>
</template>
