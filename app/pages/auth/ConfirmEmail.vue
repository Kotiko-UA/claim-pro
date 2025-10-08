<script setup lang="ts"> 
definePageMeta({
  ssr: false,
  layout: 'auth',
})
</script>

<template>
  <AuthCommonAuth
    title="<span>Confirm </span> email"
    align="center"
    margin="24px"
  >
    <template #form>
      <FeaturesFormConfirmEmail />
 
    </template>
  </AuthCommonAuth>
</template>
