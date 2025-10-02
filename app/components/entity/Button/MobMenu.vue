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

<style scoped>
.menu-button {
  position: relative;
  z-index: 105;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
