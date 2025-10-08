<script setup lang="ts">
import { Form } from 'vee-validate'
import { useFetch } from '@/shared/api/fetchRequest'
const code = ref('')
const fetchRequest = useFetch()

const loading = ref(false)
const error = ref<string | null>(null)
const onSubmitAssign = () => {
  loading.value = true
  error.value = null
  // try {
  //   const data = await fetchRequest('/auth/reset', {
  //     method: 'POST',
  //     body: {
  //       email: state.email,
  //     },
  //   })

  //   emit('success')
  // } catch (err: any) {
  //   console.error('Login error:', err)
  //   error.value = err?.data?.message || err?.message || 'Login failed'
  // } finally {
  //   loading.value = false
  //   Object.assign(state, initialState())
  // }
  console.log({ code: code.value })
}
</script>

<template>
  <div class="mt-6">
    <Form @submit="onSubmitAssign">
      <EntityFormVerificationCodeInput v-model="code" />
      <NuxtLink class="mt-2 text-[14px] text-right text-[#ADB9CC]" to="/">
        Send the code again
      </NuxtLink>
      <EntityButtonSubmit class="ml-auto mr-auto" text="Confirm" />
    </Form>
  </div>
</template>
