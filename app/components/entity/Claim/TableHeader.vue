<script setup lang="ts">
import type { TableColumnType } from '@/shared/types/claim-type'

defineProps<{
  columnTitles: TableColumnType[]
}>()
</script>

<template>
  <thead>
    <tr>
      <th v-for="title in columnTitles" :key="title.title" class="title-cell">
        {{ title.title }}
      </th>
    </tr>
  </thead>
</template>

<style scoped lang="scss"></style>
