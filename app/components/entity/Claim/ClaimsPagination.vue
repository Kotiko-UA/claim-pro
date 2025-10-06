<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  totalItems: number
  itemsPerPage: number
  modelValue: number
}

const { totalItems, itemsPerPage, modelValue } = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [page: number]
}>()

const totalPages = computed(() => Math.ceil(totalItems / itemsPerPage))

function goToPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    emit('update:modelValue', page)
  }
}

// список сторінок
const pagesToShow = computed(() => {
  const pages: (number | string)[] = []
  const total = totalPages.value
  const current = modelValue
  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i)
    return pages
  }

  pages.push(1)

  let start = Math.max(2, current - 1)
  let end = Math.min(total - 1, current + 1)
  if (start > 2) pages.push('...')
  for (let i = start; i <= end; i++) pages.push(i)
  if (end < total - 1) pages.push('...')

  pages.push(total)

  return pages
})
</script>

<template>
  <div v-if="totalPages > 1" class="pagination">
    <button
      class="pag-btn"
      @click="goToPage(modelValue - 1)"
      :disabled="modelValue === 1"
    >
      Prev
    </button>

    <button
      class="pag-btn"
      v-for="page in pagesToShow"
      :key="page"
      @click="typeof page === 'number' && goToPage(page)"
      :disabled="page === '...'"
      :class="{ active: modelValue === page, dots: page === '...' }"
    >
      {{ page }}
    </button>

    <button
      class="pag-btn"
      @click="goToPage(modelValue + 1)"
      :disabled="modelValue === totalPages"
    >
      Next
    </button>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  .pag-btn {
    padding: 6px 12px;
    border: 1px solid var(--Dark);
    background: var(--Light);
    cursor: pointer;
    border-radius: 16px;
    transition: all 0.4s ease-in-out;

    &.active,
    &:hover:not(:disabled) {
      background: var(--Dark);
      color: var(--Light);
    }

    &.dots {
      cursor: default;
      border: none;
      background: transparent;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
