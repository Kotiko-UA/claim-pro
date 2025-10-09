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
const toast = useToast()

const loading = ref(false)

const onSubmitAssign = async () => {
  loading.value = true
  emit('success')
  // try {
  //   const data = await fetchRequest('/auth/reset', {
  //     method: 'POST',
  //     body: {
  //       email: state.email,
  //     },
  //   })
  //  toast.success({
  //       title: 'Success',
  //       position: 'topRight',
  //     })
  //   emit('success')
  // } catch (err: any) {
  // toast.error({
  //       title: 'Error',
  //       message: 'Something went wrong',
  //       position: 'topRight',
  //     })
  // } finally {
  //   loading.value = false
  //   Object.assign(state, initialState())
  // }
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
      <EntityButtonSubmit
        :is-loading="loading"
        class="ml-auto"
        text="Reset password"
      />
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
