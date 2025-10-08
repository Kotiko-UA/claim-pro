<script setup lang="ts">
import { type ResetEmailType } from '~/shared/types/auth-type'
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'
import { useFetch } from '@/shared/api/fetchRequest'

const emit = defineEmits<{
  (e: 'success'): void
}>()

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
})

const initialState = (): ResetEmailType => ({
  email: '',
})

const state = reactive<ResetEmailType>(initialState())
const fetchRequest = useFetch()

const loading = ref(false)
const error = ref<string | null>(null)

const onSubmitAssign = async () => {
  loading.value = true
  error.value = null
  try {
    const data = await fetchRequest('/auth/reset', {
      method: 'POST',
      body: {
        email: state.email,
      },
    })

    emit('success')
  } catch (err: any) {
    console.error('Login error:', err)
    error.value = err?.data?.message || err?.message || 'Login failed'
  } finally {
    loading.value = false
    Object.assign(state, initialState())
  }
}
</script>

<template>
  <div class="form-reset-password">
    <Form
      :validation-schema="schema"
      @submit="onSubmitAssign"
      v-slot="{ errors }"
    >
      <div class="form-reset-email">
        <Field name="email" v-slot="{ field, errorMessage }">
          <EntityFormInput
            label="Email Address:"
            placeholder="Enter text"
            v-bind="field"
            :error="errorMessage"
            v-model="state.email"
          />
        </Field>
      </div>
      <EntityButtonSubmit class="ml-auto" text="Reset password" />
    </Form>
  </div>
</template>

<style lang="scss" scoped>
.form-reset-password {
  margin-bottom: 48px;
}

.form-reset-email {
  text-align: left;
}
</style>
