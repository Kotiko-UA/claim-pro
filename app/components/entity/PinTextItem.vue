<script setup lang="ts">
import iconPen from '@/assets/images/icons/pen-icon.svg?url'
defineProps<{
  text: string
}>()
</script>
<template>
  <li class="pentext-item">
    <img class="pentext-item-img" :src="iconPen" alt="decorative" />
    <p class="pentext-item-text">
      {{ text }}
    </p>
  </li>
</template>
<style lang="scss" scoped>
.pentext-item {
  display: flex;
  align-items: center;
  gap: 16px;

  border-top: 1px solid rgba(255, 255, 255, 0.22);
}
.pentext-item-img {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}
.pentext-item-text {
  color: var(--Dark);
  line-height: 140%;
}
</style>
