<script setup lang="ts">
definePageMeta({
  ssr: false,
})
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
