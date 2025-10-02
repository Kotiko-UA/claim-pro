<script setup lang="ts">
import ArrowIcon from '@/assets/images/icons/arrow-long-white.svg'
defineProps<{ text: string }>()
</script>
<template>
  <button type="submit" class="submit-button">
    {{ text }}
    <ArrowIcon />
  </button>
</template>
<style lang="scss" scoped>
.submit-button {
  display: flex;
  height: 56px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 24px;

  border-radius: 24px;
  background: var(--Dark);
  box-shadow: 0 4px 4px 0 rgba(29, 53, 87, 0.45);
  @include backdrop-blur(12.5px);

  color: var(--Light, #fff);
  text-align: center;
  font-weight: 500;
  line-height: 115%;
  letter-spacing: 0.48px;
  text-transform: uppercase;
}
</style>
