<script setup lang="ts">
const props = defineProps<{
  label?: string
  placeholder: string
  modelValue?: string
  error?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputId = ref('')
onMounted(() => {
  inputId.value = `${Math.random().toString(36).slice(2, 8)}`
})

function updateValue(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="input-wrap">
    <label class="label" v-if="label" :for="inputId">{{ label }}</label>
    <input
      class="input"
      :id="inputId"
      :placeholder="placeholder"
      :value="modelValue"
      v-bind="$attrs"
      @input="updateValue"
    />
    <!-- показ помилки -->
    <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
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
