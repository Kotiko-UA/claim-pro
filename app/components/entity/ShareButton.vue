<script setup lang="ts">
import { ref } from 'vue'
import ShareIcon from '@/assets/images/icons/share.svg'
import LogoInstagram from '@/assets/images/icons/instagram.svg'
import LogoYoutube from '@/assets/images/icons/youtube.svg'
import LogoFB from '@/assets/images/icons/facebook.svg'
defineProps({
  width: { type: [String, Number], default: 12 },
  height: { type: [String, Number], default: 12 },
  style: { type: String, default: '' },
})

const baseUrl = 'https://claim-pro-nine.vercel.app/'

const copied = ref(false)

const isMobileScreen = ref(false)

onMounted(() => {
  isMobileScreen.value = window.innerWidth <= 1024
})

const handleClick = async () => {
  if (isMobileScreen.value && navigator.share) {
    try {
      await navigator.share({
        title: 'Claim Pro',
        text: 'Check out this site!',
        url: baseUrl,
      })
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        console.warn('Share failed', err)
      } else {
        console.log('Share cancelled')
      }
    }
  } else {
    try {
      await navigator.clipboard.writeText(baseUrl)
      copied.value = true
      setTimeout(() => (copied.value = false), 2000)
    } catch (err) {
      console.error('Clipboard API not supported', err)
    }
  }
}
</script>

<template>
  <div class="flex justify-center items-center gap-[16px]">
    <client-only>
      <button @click="handleClick" class="shared-button" :class="[style ? style : '']">
        <div class="social-icon-wrap">
          <ShareIcon class="social-icon" viewBox="0 0 16 16" />
        </div>
        <!-- <img loading="lazy" class="w-[28px] h-[28px]" :src="ShareIcon" alt="share icon" /> -->
        Share
        <span
          v-if="copied"
          class="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-sky-500/20 text-white px-2 py-1 rounded blur-xs"
        >
          Copied!
        </span>
      </button>
    </client-only>
    <a
      class="social-link"
      target="_blank"
      noopener
      noreferrer
      nofollow
      href="https://www.instagram.com/"
    >
      <LogoInstagram class="social-icon" viewBox="0 0 16 16" />
      <!-- <img loading="lazy" class="h-6 w-6" :src="LogoInstagram" alt="instagram link"
    /> -->
    </a>
    <a
      class="social-link"
      target="_blank"
      noopener
      noreferrer
      nofollow
      href="https://www.instagram.com/"
    >
      <LogoYoutube class="social-icon" :width="width" :height="height" viewBox="0 0 16 16" />
      <!-- <img loading="lazy" class="h-6 w-6" :src="LogoYoutube" alt="youtube link"
    /> -->
    </a>
    <a
      class="social-link"
      target="_blank"
      noopener
      noreferrer
      nofollow
      href="https://www.instagram.com/"
    >
      <LogoFB class="social-icon" viewBox="0 0 16 16" />
    </a>
  </div>
</template>
<style lang="scss" scoped>
.shared-button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  color: var(--Light);
  text-align: center;
  font-family: 'Raleway';
  font-size: 16px;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 8px;
  text-transform: uppercase;
  z-index: 1;
}
.social-icon-wrap,
.social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background: var(--Blue);
}

.social-icon {
  width: 14.375px;
  height: 14.375px;
  transition: fill 0.3s ease-in-out;
}
.social-icon > path {
  transition: fill 0.3s ease-in-out;
}
.shared-button:hover ::v-deep(.social-icon > path),
.social-link:hover ::v-deep(.social-icon > path) {
  fill: var(--Text-light);
}
</style>
