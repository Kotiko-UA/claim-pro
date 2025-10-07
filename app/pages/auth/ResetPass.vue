<script setup lang="ts">
import CommonAuth from '~/components/auth/CommonAuth.vue'
definePageMeta({
  ssr: false,
})
</script>
<template>
  <CommonAuth title="<span>Reset </span> password">
    <template #form>
      <p>Reset password form block</p>
    </template>
  </CommonAuth>
</template>
