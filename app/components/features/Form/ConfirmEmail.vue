<script setup lang="ts">
import { Form } from 'vee-validate'
const code = ref('')

const onSubmitAssign = () => {
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
