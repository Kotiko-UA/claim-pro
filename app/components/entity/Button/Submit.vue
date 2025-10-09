<script setup lang="ts">
import ArrowIcon from '@/assets/images/icons/arrow-long-white.svg'
defineProps<{ text: string; isLoading?: boolean }>()
</script>
<template>
  <button
    :disabled="isLoading"
    v-bind="$attrs"
    type="submit"
    class="submit-button"
    :class="[isLoading ? 'loading' : '']"
  >
    {{ text }}
    <ArrowIcon v-if="!isLoading" />
    <span v-else class="loader"></span>
  </button>
</template>
<style lang="scss" scoped>
.submit-button {
  margin-top: 32px;
  display: flex;
  height: 56px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 24px;

  border-radius: 24px;
  background-color: var(--Dark);
  box-shadow: 0 4px 4px 0 rgba(29, 53, 87, 0.45);
  @include backdrop-blur(12.5px);

  &.loading {
    background-color: #849fc5;
  }

  color: var(--Light, #fff);
  text-align: center;
  font-weight: 500;
  line-height: 115%;
  letter-spacing: 0.48px;
  text-transform: uppercase;
}
.loader {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite;
}
.loader::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  border-radius: 50%;
  border: 5px solid #fff;
  animation: prixClipFix 2s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes prixClipFix {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}
</style>
