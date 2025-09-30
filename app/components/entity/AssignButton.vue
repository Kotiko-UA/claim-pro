<script setup lang="ts">
import ArrowR from '@/assets/images/icons/arrow-long-r.svg?url'
</script>
<template>
  <NuxtLink class="assign-link" to="/">
    Assign a Claim
    <img loading="lazy" :src="ArrowR" alt="icon" />
  </NuxtLink>
</template>
<style lang="scss" scoped>
.assign-link {
  width: 100%;
  height: 56px;
  display: flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 24px;
  background: var(--Light);
  box-shadow: 0 4px 4px 0 rgba(29, 53, 87, 0.45);
  @include backdrop-blur(12.5px);
  color: var(--Dark, #1d3557);
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.48px;
  text-transform: uppercase;
  white-space: nowrap;
  @include tablet {
    width: 326px;
  }
}
</style>
