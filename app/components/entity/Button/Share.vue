<script setup lang="ts">
import { ref } from 'vue'
import ShareIcon from '@/assets/images/icons/share.svg'

const props = defineProps({
  style: { type: String, default: '' },
})

const baseUrl = 'https://claim-pro-nine.vercel.app/'

const copied = ref(false)

const isMobileScreen = ref(false)

onMounted(() => {
  isMobileScreen.value = window.innerWidth <= 1024
})

//
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
  <client-only>
    <button @click="handleClick" class="shared-button" :class="[style ? style : '']">
      <div class="social-icon-wrap">
        <ShareIcon class="social-icon" />
      </div>
      Share
      <span
        v-if="copied"
        class="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-sky-500/20 text-white px-2 py-1 rounded blur-xs"
      >
        Copied!
      </span>
    </button>
  </client-only>
</template>

<style scoped lang="scss">
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

.social-icon-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--Blue);
}

.social-icon {
  color: #1d3557;
  width: 14px;
  height: 14px;
  transition: color 0.5s ease-in-out;
}

.shared-button:hover .social-icon {
  color: var(--Text-light);
}
</style>
