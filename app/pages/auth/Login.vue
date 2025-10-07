<script setup lang="ts"></script>

<template>
  <AuthCommonAuth
      title="<span>Login into </span> your account" 
    >
   <template #form>
      <p>Login form block</p>
    </template>

    <template #auth-link>
      <p class="auth-link-text">
        Don't have an account?
        <span class="auth-link">
          <NuxtLink to="/auth/registration">Sign up</NuxtLink>
        </span>
      </p>
    </template>
  </AuthCommonAuth>
</template>
