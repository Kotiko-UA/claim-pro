<script setup lang="ts">
import { ref } from 'vue'
import navLinks from '@/shared/files/nav-links'

const isMobMenuOpen = ref(false)
const toggleMenu = () => {
  isMobMenuOpen.value = !isMobMenuOpen.value
}
const closeMenu = () => {
  isMobMenuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="container">
      <nav class="header-nav">
        <EntityLogo />

        <EntityNavIconLink
          :style="'mr-[32px]'"
          class="contact-link hide-mob"
          href="tel:3075006992"
          type="phone"
          text="(307) 500 6992"
        />
        <EntityNavIconLink
          :style="'mr-[24px]'"
          class="contact-link hide-mob"
          href="mailto:admin@getclaimpro.com"
          type="mail"
          text="admin@getclaimpro.com"
        />
        <EntityMenuButton class="hide-mob" />

        <button class="mob-menu-btn" @click.stop="toggleMenu">
          <EntityMobMenuBtn :isOpen="isMobMenuOpen" @click="toggleMenu" />
        </button>
      </nav>

      <div class="second-nav-wrap hide-mob">
        <nav class="header-second-nav">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.title"
            :to="link.to"
            class="second-nav-link"
          >
            {{ link.title }}
          </NuxtLink>
        </nav>
        <div class="blue-icons-wrap">
          <EntityShareButton class="share-btn" />
          <EntitySocialLinks class="social-links-wrap" />
        </div>
      </div>
    </div>

    <Transition name="slide-fade">
      <FeaturesMobMenu v-if="isMobMenuOpen" @close="closeMenu" />
    </Transition>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: absolute;
  top: 24px;
  left: 0;
  width: 100%;
  z-index: 10;
}

.header-nav {
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4px;
  border-bottom: 1px solid rgba(217, 217, 217, 0.5);
}
// page nav
.second-nav-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include laptop {
    margin-top: 8px;
  }
}

.header-second-nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.second-nav-link {
  padding: 16px;
  border-top: 3px solid transparent;
  color: var(--Text-light);
  font-size: 20px;
  line-height: 120%;
  &.router-link-active {
    border-top: 3px solid var(--Blue, #8fcefd);
  }
}

// blue icons

.blue-icons-wrap {
  display: flex;
  gap: 16px;
}
.social-links-wrap {
  display: flex;
  gap: 16px;
}
.contact-link {
  color: #fdfdfe;
}
// hide
.mob-menu-btn {
  display: block;
  color: white;
  @include laptop {
    display: none;
  }
}
.hide-mob {
  @media (max-width: 1279px) {
    display: none;
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
