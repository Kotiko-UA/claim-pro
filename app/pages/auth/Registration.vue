<script setup lang="ts">
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'
import type { RegistrationType } from '~/shared/types/auth-type'
import { useFetch } from '@/shared/api/fetchRequest'

definePageMeta({
  ssr: false,
  layout: 'auth',
})

const fetchRequest = useFetch()

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
  type: userType.value,
})

const userTypeState = reactive({
  professional: true,
  contractor: false,
})

const userType = computed((): 'professional' | 'contractor' => {
  return userTypeState.professional ? 'professional' : 'contractor'
})

const state = reactive<RegistrationType>(initialState())

function selectType(type: 'professional' | 'contractor') {
  if (type === 'professional') {
    userTypeState.professional = true
    userTypeState.contractor = false
  } else {
    userTypeState.contractor = true
    userTypeState.professional = false
  }

  state.type = type
}

const toast = useToast()
const loading = ref(false)

const onRegister = async () => {
  loading.value = true
  try {
    const data = await fetchRequest('/auth/register', {
      method: 'POST',
      body: {
        email: state.email,
        password: state.password,
        type: state.type,
      },
    })
    toast.success({
      title: 'Success',
      message: 'Please verify your email',
      position: 'topRight',
    })
  } catch (err: any) {
    toast.error({
      title: 'Error',
      message: 'Something went wrong',
      position: 'topRight',
    })
  } finally {
    loading.value = false
    Object.assign(state, initialState())
  }
}
</script>

<template>
  <AuthCommonAuth title="<span>Create </span> your account">
    <template #form>
      <Form
        :validation-schema="schema"
        @submit="onRegister"
        v-slot="{ errors }"
      >
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
          <Field name="confirmPassword" v-slot="{ field, errorMessage }">
            <EntityFormInput
              label="Confirm Password:"
              type="password"
              id="confirmPassword"
              autocomplete="confirmPassword"
              placeholder="Enter text"
              v-bind="field"
              :error="errorMessage"
              v-model="state.confirmPassword"
            />
          </Field>
          <EntityFormBlockSubTitle class="mr-auto" title="Choose your role*:" />
          <div class="flex flex-col gap-6 laptop:flex-row laptop:gap-8">
            <EntityFormCheckbox
              label="Claims professional"
              v-model="userTypeState.professional"
              :value="userTypeState.professional"
              @click="selectType('professional')"
            />
            <EntityFormCheckbox
              label="Contractor"
              v-model="userTypeState.contractor"
              :value="userTypeState.contractor"
              @click="selectType('contractor')"
            />
          </div>
        </div>
        <EntityButtonSubmit class="mx-auto" text="Create account" />
      </Form>
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
