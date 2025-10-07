<script setup lang="ts">
import { ref, nextTick, defineEmits } from 'vue'

const codeDigits = ref<string[]>(['', '', '', ''])
const cellInput = ref<HTMLInputElement[]>([])

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const onInput = (index: number, e: Event) => {
  const el = e.target as HTMLInputElement | null
  if (!el) return

  const val = el.value.replace(/\D/g, '').slice(0, 1)
  codeDigits.value[index] = val
  el.value = val

  emit('update:modelValue', codeDigits.value.join(''))

  if (val && index < codeDigits.value.length - 1) {
    nextTick(() => {
      const nextInput = cellInput.value[index + 1]
      if (nextInput) {
        nextInput.focus()
        nextInput.select()
      }
    })
  }
}

const onKeyDown = (index: number, e: KeyboardEvent) => {
  if (e.key === 'Backspace' && !codeDigits.value[index] && index > 0) {
    nextTick(() => {
      cellInput.value[index - 1]?.focus()
    })
  }
}

const onPaste = (index: number, e: ClipboardEvent) => {
  e.preventDefault()
  const paste = e.clipboardData?.getData('text')?.replace(/\D/g, '').slice(0, 4)
  if (!paste) return

  paste.split('').forEach((digit, i) => {
    if (index + i < codeDigits.value.length) codeDigits.value[index + i] = digit
  })

  nextTick(() => {
    const nextIndex = Math.min(
      index + paste.length,
      codeDigits.value.length - 1
    )
    cellInput.value[nextIndex]?.focus()
  })

  emit('update', codeDigits.value.join(''))
}
</script>

<template>
  <div class="flex justify-center gap-4 mt-6 mb-6">
    <input
      v-for="(digit, index) in codeDigits"
      :key="index"
      type="text"
      maxlength="1"
      class="verification-input"
      :value="digit"
      @input="onInput(index, $event)"
      @paste="onPaste(index, $event)"
      @keydown="onKeyDown(index, $event)"
      ref="cellInput"
    />
  </div>
</template>

<style lang="scss" scoped>
.verification-input {
  width: 40px;
  height: 40px;
  font-weight: 300;
  font-size: 16px;
  line-height: 171%;
  text-align: center;
  background-color: var(--Text-light);
  color: var(--Dark);
  border: 1px solid transparent;
  border-radius: 12px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border: 1px solid var(--Dark);
  }

  @include laptop {
    width: 53px;
    height: 53px;
  }
}
</style>
