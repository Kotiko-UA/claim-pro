<script setup lang="ts">
import type { TableColumn } from '../../../shared/types/claim.ts'

defineProps<{
  columnTitles: TableColumn[]
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
