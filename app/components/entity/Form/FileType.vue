<script setup lang="ts">
defineProps<{ fileType: string }>()
import checkIcon from '@/assets/images/icons/check-file-icon.svg?url'
</script>
<template>
  <li class="file-item">
    <img class="file-image" :src="checkIcon" alt="decorative" />
    {{ fileType }}
  </li>
</template>
<style lang="scss" scoped>
.file-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
}
.file-image {
  width: 24px;
  height: 24px;
}
</style>
