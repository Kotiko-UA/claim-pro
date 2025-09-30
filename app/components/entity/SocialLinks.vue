<script setup lang="ts">
import LogoInstagram from '@/assets/images/icons/instagram.svg'
import LogoYoutube from '@/assets/images/icons/youtube.svg'
import LogoFB from '@/assets/images/icons/facebook.svg'
const props = defineProps({
  style: { type: String, default: '' },
})
</script>

<template>
  <div>
    <a
      class="social-link"
      href="/"
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label="label"
    >
      <LogoInstagram class="social-icon" />
    </a>
    <a
      class="social-link"
      href="/"
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label="label"
    >
      <LogoYoutube class="social-icon" />
    </a>
    <a
      class="social-link"
      href="/"
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label="label"
    >
      <LogoFB class="social-icon" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background: var(--Blue);
  &.social-icon {
    color: #1d3557;
    width: 14px;
    height: 14px;
    transition: color 0.5s ease-in-out;
  }
  &:hover .social-icon {
    color: var(--Text-light);
  }
}
</style>
