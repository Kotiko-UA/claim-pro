<script setup lang="ts">
defineProps<{ title: string }>()
</script>
<template>
  <h2 class="form-sub-title">{{ title }}</h2>
</template>
<style lang="scss" scoped>
.form-sub-title {
  color: var(--Dark);
  margin-bottom: 24px;
  @include laptop {
    margin-bottom: 32px;
    font-size: 20px;
  }
}
</style>
