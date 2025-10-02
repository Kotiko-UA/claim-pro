<script setup lang="ts">
import completedIcon from '@/assets/images/icons/completed.svg?url'

const props = defineProps<{
  label: string
  other?: boolean
}>()

const checked = ref(false)
const otherValue = ref('')
const name = 'checkbox'

const emit = defineEmits<{
  'update:modelValue': [value: boolean, name: string]
  'update:otherValue': [value: string]
}>()

function click() {
  checked.value = !checked.value
  emit('update:modelValue', checked.value, name)

  // Якщо зняли галочку — очищаємо текст
  if (!checked.value && props.other) {
    otherValue.value = ''
    emit('update:otherValue', '')
  }
}

function updateOther(e: Event) {
  const target = e.target as HTMLTextAreaElement
  otherValue.value = target.value
  emit('update:otherValue', otherValue.value)
}
</script>

<template>
  <div class="checkbox-wrap">
    <div class="checkbox-wrapper" @click="click">
      <input :value="checked" :name="name" type="checkbox" class="hidden" />
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

    <!-- textarea для "Other" -->
    <textarea
      v-if="props.other && checked"
      class="other-textarea"
      placeholder="Please specify..."
      :value="otherValue"
      @input="updateOther"
    />
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
  cursor: pointer;
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
.other-textarea {
  width: 100%;
  margin-top: 8px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid rgba(196, 205, 219, 0.5);
  border-radius: 6px;
  resize: vertical;
  min-height: 60px;
}
</style>
