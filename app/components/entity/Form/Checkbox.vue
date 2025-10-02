<script setup lang="ts">
import completedIcon from '@/assets/images/icons/completed.svg?url'
defineProps<{ label: string }>()

const checked = ref(false)
const name = 'checkbox'
const emit = defineEmits<{
  'update:modelValue': [value: boolean, name: string]
}>()

function click() {
  checked.value = !checked.value
  emit('update:modelValue', checked.value, name)
}
</script>
<template>
  <div class="checkbox-wrap" @click="click">
    <input
      :value="checked"
      :name="name"
      type="checkbox"
      class="hidden"
      placeholder=""
    />
    <div class="checkbox-wrapper">
      <div class="checkbox-icon-wrap">
        <img
          class="checkbox-icon"
          :class="checked ? 'checked' : ''"
          :src="completedIcon"
          alt="decorative icon"
        />
      </div>
      <label class="label">{{ label }}</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.checkbox-wrap {
  width: 100%;
}
.checkbox-wrapper {
  width: 100%;
  display: flex;
  gap: 8px;
  height: 24px;
}
.checkbox-icon-wrap {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  border: 1px solid rgba(196, 205, 219, 0.5);
  background: var(--Light);
}
.checkbox-icon {
  fill: #000;
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  transition: var(--transition-opacity);
  opacity: 0;
  &.checked {
    opacity: 1;
  }
}
.label {
  padding: 4px 0;

  color: rgba(29, 53, 87, 0.65);
  font-size: 14px;
}
</style>
