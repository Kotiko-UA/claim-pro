<script setup lang="ts">
defineProps<{ title: string }>()
</script>
<template>
  <h2 class="form-sub-title">{{ title }}</h2>
</template>
<style lang="scss" scoped>
.form-sub-title {
  color: var(--Dark);
  @include laptop {
    font-size: 20px;
  }
}
</style>
