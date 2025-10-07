<script setup lang="ts">
import { ref, onMounted } from 'vue'
import iconShow from '@/assets/images/icons/eye-icon.svg?url'
import iconNoShow from '@/assets/images/icons/eye-close-icon.svg?url'

const props = defineProps<{
  label?: string
  placeholder: string
  modelValue?: string
  error?: string
  disabled?: boolean
  type?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputId = ref('')
const showPassword = ref(false)

onMounted(() => {
  inputId.value = `${Math.random().toString(36).slice(2, 8)}`
})

function updateValue(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const inputType = computed(() => {
  if (props.type === 'password') {
    return showPassword.value ? 'text' : 'password'
  }
  return props.type || 'text'
})

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <div class="input-wrap">
    <label class="label" v-if="label" :for="inputId">{{ label }}</label>

    <div class="input-wrapper">
      <input
        class="input"
        :class="{ error }"
        :id="inputId"
        :placeholder="placeholder"
        :value="modelValue"
        v-bind="$attrs"
        :type="inputType"
        :disabled="disabled"
        @input="updateValue"
      />

      <button
        v-if="type === 'password'"
        type="button"
        class="toggle-password"
        @click="togglePasswordVisibility"
        :aria-label="showPassword ? 'Hide password' : 'Show password'"
      >
        <span v-if="showPassword">
          <img :src="iconNoShow" alt="show password button" />
        </span>
        <span v-else><img :src="iconShow" alt="hide password button" /></span>
      </button>
    </div>

    <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
  </div>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
}

.label {
  color: var(--Dark);
  font-size: 14px;
}

.input-wrapper {
  position: relative;
  width: 100%;
}

.input {
  display: block;
  width: 100%;
  height: 48px;
  padding: 16px;
  padding-right: 40px; // ✅ місце для кнопки ока

  border-radius: 8px;
  border: 1px solid rgba(196, 205, 219, 0.5);
  background-color: var(--Light);

  color: var(--Dark);
  font-family: 'Urbanist';
  font-size: 14px;

  &::placeholder {
    color: rgba(29, 53, 87, 0.65);
    font-family: 'Urbanist';
    font-size: 14px;
  }

  &:disabled {
    background-color: #f2f2f2;
    color: #a1a1a1;
    cursor: not-allowed;
  }

  &.error {
    border: 1px solid #d90505;
  }
}

.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 18px; // для тесту
  color: var(--Dark);

  &:hover {
    opacity: 0.8;
  }
}
</style>
