<script setup lang="ts"></script>
<template>
  <div class="relative z-10">
    <NuxtLink to="/" class="portal-button">Client Portal</NuxtLink>
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
