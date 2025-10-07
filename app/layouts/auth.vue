<script setup lang="ts">
import iconLeft from '@/assets/images/icons/chevron-left.svg'
</script>

<template>
  <div>
    <nuxt-link class="flex gap-2 text-[14px] text-[#6E83A2]" to="/">
      <img :src="iconLeft" alt="decorative" />
      Back
    </nuxt-link>
    <slot />
  </div>
</template>
