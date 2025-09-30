<script lang="ts" setup>
import IconPhone from '@/assets/images/icons/phone-icon.svg?url'
import IconMail from '@/assets/images/icons/mail-icon.svg?url'
defineProps<{
  text: string
  href: string
  style?: string
  type: 'mail' | 'phone'
}>()
</script>

<template>
  <a class="link" :class="[style]" :href>
    <img loading="lazy" :src="type === 'mail' ? IconMail : IconPhone" alt="icon" />
    <p>{{ text }}</p>
  </a>
</template>
<style scoped lang="scss">
.link {
  display: flex;
  padding: 8px 0;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  @include tablet {
    line-height: 140%;
  }
}
</style>
