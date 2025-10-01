<script setup lang="ts">
const props = defineProps<{
  label?: string
  placeholder: string
}>()
const emit = defineEmits<{
  'update:modelValue': [value: string, name: string]
}>()
const inputValue = ref('')
const inputId = ref('')
const name = 'input'
onMounted(() => {
  inputId.value = `${Math.random().toString(36).slice(2, 8)}`
})

function updateValue(e: Event) {
  const target = e.target as HTMLInputElement
  inputValue.value = target.value
  emit('update:modelValue', target.value, name)
}
</script>
<template>
  <div class="input-wrap">
    <label class="label" v-if="label" :for="inputId">{{ label }}</label>
    <input
      class="input"
      :id="inputId"
      :placeholder="placeholder"
      :name
      v-bind="$attrs"
      @input="updateValue"
    />
  </div>
</template>
<style lang="scss" scoped>
.input-wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
.label {
  color: var(--Dark);
  font-size: 14px;
}
.input {
  display: block;
  height: 48px;
  padding: 16px;

  border-radius: 8px;
  border: 1px solid rgba(196, 205, 219, 0.5);
  background-color: var(--Light);

  color: var(--Dark);
  font-family: 'Urbanist';
  font-size: 14px;

  border-radius: 8px;
  &::placeholder {
    color: rgba(29, 53, 87, 0.65);
    font-family: 'Urbanist';
    font-size: 14px;
  }
}
</style>
