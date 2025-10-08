<script setup lang="ts">
import Arrow from '@/assets/images/icons/chevron-left.svg?url'
definePageMeta({
  ssr: false,
})
</script>

<template>
  <ClientPortalHero />

  <section class="edit-portal-section">
    <div class="container">
      <NuxtLink to="/ClientPortal" class="back-link mr-auto">
        <img class="w-4 h-4" loading="lazy" :src="Arrow" alt="logo image" />
        <span class="auth-link-text">Back</span>
      </NuxtLink>
      <div
        class="flex flex-col mb-6 mt-10 gap-6 tablet:flex-row tablet:flex tablet:items-center tablet:justify-between max-w-[1000px] mr-auto ml-auto"
      >
        <h2 class="title-portal">
          General
          <span>Information</span>
        </h2>
      </div>
      <FeaturesFormEditProfile class="max-w-[1000px] mr-auto ml-auto" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.edit-portal-section {
  padding: 40px 0;
  background-image: url('/bg/portal-bg.avif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.title-portal {
  font-weight: 600;
  font-size: 28px;
  line-height: 120%;
  color: var(--Dark);

  @include tablet {
    font-size: 32px;
  }
}

.title-portal span {
  font-style: italic;
  font-weight: 300;
}

.back-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  cursor: pointer;
  color: var(--Gray);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 1px;
    background-color: var(--Gray);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
}
</style>
