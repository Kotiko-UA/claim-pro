<script setup lang="ts">
defineProps<{ title: string }>()
</script>
<template>
  <h3 class="block-sub-title">{{ title }}</h3>
</template>
<style lang="scss" scoped>
.block-sub-title {
  display: inline-block;
  padding: 4px 0;
  height: 24px;

  color: var(--Dark);
  font-size: 14px;
  font-weight: 400;
}
</style>
