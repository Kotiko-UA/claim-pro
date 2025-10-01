<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import navLinks from '@/shared/files/nav-links'

const emit = defineEmits(['close'])

const handleClickOutside = (e: MouseEvent) => {
  const menu = document.querySelector('.mobile-menu')
  if (menu && !menu.contains(e.target as Node)) {
    emit('close')
  }
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="overlay">
    <div class="container mob-menu-wrap">
      <div class="mobile-menu">
        <nav class="mobile-nav">
          <div class="mobile-pages-link-wrap">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.title"
              :to="link.to"
              class="mobile-link"
              @click="$emit('close')"
            >
              {{ link.title }}
            </NuxtLink>
          </div>
          <EntityMenuButton class="mob-portal-btn" />
        </nav>

        <div class="mobile-bottom">
          <div class="contact-link-wrap">
            <EntityNavIconLink
              class="contact-link"
              href="tel:3075006992"
              type="phone"
              text="(307) 500 6992"
            />
            <EntityNavIconLink
              class="contact-link"
              href="mailto:admin@getclaimpro.com"
              type="mail"
              text="admin@getclaimpro.com"
            />
          </div>
          <div class="blue-icons-wrap">
            <EntityShareButton class="share-btn" />
            <EntitySocialLinks class="social-links-wrap" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.overlay {
  position: fixed;
  inset: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
  z-index: 100;
}
.mob-menu-wrap {
  position: relative;
}
.mobile-menu {
  position: absolute;
  top: 24px;
  right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  width: 90%;
  height: 90vh;
  max-width: 390px;
  padding: 24px 16px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 29.8px 0 rgba(227, 234, 243, 0.65);
  backdrop-filter: blur(12.5px);
  @include tablet {
    height: 600px;
  }
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.mob-portal-btn {
  width: 100%;
}
.mobile-pages-link-wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: fit-content;
}
.mobile-link {
  padding: 13px 0;
  color: var(--Light);
  font-size: 16px;
  font-weight: 500;
  line-height: 115%;
  letter-spacing: 0.48px;
  text-transform: uppercase;
  @include tablet {
    font-size: 18px;
  }
}

.mobile-bottom {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-link {
  color: var(--Light);
  font-size: 14px;
  line-height: 120%;
}
.blue-icons-wrap {
  display: flex;
  justify-content: space-between;
}
.social-links-wrap {
  display: flex;
  gap: 16px;
}

@media (min-width: 768px) {
  .mobile-menu {
    max-width: 420px;
  }
}
</style>
