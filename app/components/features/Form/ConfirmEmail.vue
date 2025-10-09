<script setup lang="ts">
import { Form } from 'vee-validate'
import { useFetch } from '@/shared/api/fetchRequest'

const fetchRequest = useFetch()
const toast = useToast()

const code = ref('')
const loading = ref(false)
const onSubmitAssign = () => {
  loading.value = true
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
      <EntityButtonSubmit
        :is-loading="loading"
        class="ml-auto mr-auto"
        text="Confirm"
      />
    </Form>
  </div>
</template>
