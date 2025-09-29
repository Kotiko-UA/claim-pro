<script setup lang="ts">
import MenuIcon from '@/assets/images/icons/mob-menu.svg'
import CloseMenuIcon from '@/assets/images/icons/icon-close.svg'
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <button class="menu-button" @click="$emit('click')" aria-label="Toggle mobile menu">
    <component :is="isOpen ? CloseMenuIcon : MenuIcon" class="menu-icon" />
  </button>
</template>

<!-- <style scoped>
.menu-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-icon {
  width: 24px;
  height: 24px;
  stroke: #000;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.3s ease;
}
</style> -->
