<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import FilterIcon from '@/assets/images/icons/filter.svg'
import ChevronIcon from '@/assets/images/icons/chevron-down.svg'

interface Props {
  modelValue: string | null
  options: string[]
}

const { modelValue, options } = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
}>()

// Стан dropdown
const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

// Клік поза списком
function handleClickOutside(e: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))

// Відкриття/закриття
function toggleDropdown() {
  isOpen.value = !isOpen.value
}

// Вибір опції
function selectOption(option: string | null) {
  emit('update:modelValue', option)
  isOpen.value = false
}
</script>

<template>
  <div class="t-filter-wrap">
    <h3 class="t-title">List of applications</h3>

    <div class="claims-filter" ref="dropdownRef" :class="{ active: isOpen }">
      <!-- Кнопка відкриття -->
      <button class="filter-btn" @click="toggleDropdown">
        <FilterIcon
          class="filter-icon"
          :class="{ active: modelValue !== null }"
        />
        <span class="filter-label">
          {{ modelValue || 'Filter by status' }}
        </span>
        <ChevronIcon class="chevron-icon" />
      </button>

      <!-- Випадаючий список -->
      <ul v-if="isOpen" class="dropdown">
        <li
          class="dropdown-item"
          :class="{ active: modelValue === null }"
          @click="selectOption(null)"
        >
          All
        </li>
        <li
          v-for="option in options"
          :key="option"
          class="dropdown-item"
          :class="{ active: option === modelValue }"
          @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.t-filter-wrap {
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  position: relative;

  @include tablet {
    margin-bottom: 32px;
  }
}

.t-title {
  color: var(--Dark, #1d3557);
  font-size: 24px;
  font-weight: 600;
  line-height: 120%;

  @include tablet {
    font-size: 28px;
  }
  @include laptop {
    font-size: 32px;
  }
}

.claims-filter {
  position: relative;
}

.filter-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 16px;
  background: var(--Light, #fff);
  box-shadow: 0 4px 29.8px 0 rgba(227, 234, 243, 0.65);
  min-width: 186px;
  cursor: pointer;
}

.filter-label {
  color: rgba(29, 53, 87, 0.65);
  font-size: 16px;
  line-height: 157%;
}

.dropdown {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  width: 180px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  list-style: none;
  padding: 8px 0;
  z-index: 10;
}

.dropdown-item {
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease;
  color: rgba(29, 53, 87, 0.65);

  &:hover {
    background: #f4f6fb;
  }

  &.active {
    font-weight: 600;
    color: var(--Dark);
  }
}
.filter-icon {
  color: var(--Dark);
  transition: color 0.4s ease-in-out;
}
.chevron-icon {
  margin-top: 2px;
  color: var(--Dark);
  transition: rotate 0.4s ease-in-out;
}
.claims-filter.active .filter-icon,
.filter-btn:hover > .filter-icon,
.filter-icon.active {
  color: var(--Blue);
}
</style>
