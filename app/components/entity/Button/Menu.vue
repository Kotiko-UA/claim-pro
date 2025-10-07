<script setup lang="ts">
import { useAuthStore } from '@/shared/store/authStore'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const authStore = useAuthStore()
const route = useRoute()

const isClientPortal = computed(() => route.path === '/clientportal')

const handleLogout = async () => {
  await authStore.logout()
}
</script>

<template>
  <div class="relative z-10">
    <button
      v-if="isClientPortal && authStore.loggedIn"
      @click="handleLogout"
      class="portal-button"
    >
      LogOut
    </button>
    <NuxtLink v-else to="/clientportal" class="portal-button">
      Client Portal
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.portal-button {
  display: flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  border: 1px solid var(--Light);
  opacity: 0.8;
  background: rgba(255, 255, 255, 0.02);

  @include backdrop-blur(2px);

  color: var(--Light);
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 115%;
  letter-spacing: 0.48px;
  text-transform: uppercase;
}
</style>
