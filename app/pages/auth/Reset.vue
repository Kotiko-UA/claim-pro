<script setup lang="ts">
import { ref } from 'vue'

const step = ref<'email' | 'password'>('email')
 
const handleEmailSubmitted = () => {
  step.value = 'password'
}
</script>

<template>
    <AuthCommonAuth
      title="<span>Reset </span> password" align="center" margin="24px"
    >
    <template #form>
      <FeaturesFormResetEmail 
        v-if="step === 'email'"
        @success="handleEmailSubmitted" />
        
      <FeaturesFormResetPassword v-else />
    </template>
  </AuthCommonAuth>
</template>
