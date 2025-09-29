<script setup lang="ts">
import HeroVideo from '@/assets/video/hero-video-min.mp4'
</script>
<template>
  <section class="hero-section">
    <div class="container">
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source :src="HeroVideo" type="video/mp4" />
        Your browser can not play videos.
      </video>
      <div class="title-wrap">
        <h1 class="hero-title">Professional solutions <span>for complex claims.</span></h1>
        <p class="hero-text">
          <span>Claim Pro</span> Committed to delivering integrity-driven insurance adjustments and
          appraisals, empowering policyholders and carriers alike with clear, unbiased solutions.
        </p>
        <div class="button-wrap">
          <EntityAssignButton />
          <entity-learn-more to="/" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.hero-section {
  position: relative;
  overflow: hidden;
  padding-top: 248px;
  padding-bottom: 156px;
  background: linear-gradient(180deg, rgba(8, 27, 43, 0.65) 0%, rgba(8, 27, 43, 0.16) 100%);
}
.title-wrap {
  max-width: 876px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.hero-title {
  color: var(--Text-light);
  text-shadow: 0 4px 5.8px rgba(32, 34, 41, 0.25);

  font-size: 64px;
  font-weight: 600;
  line-height: 120%;
  & > span {
    font-style: italic;
    font-weight: 300;
  }
}
.hero-text {
  color: var(--Text-light);

  font-size: 24px;
  line-height: 140%;

  & > span {
    font-weight: 700;
    text-shadow: 0 4px 5.8px rgba(32, 34, 41, 0.25);
  }
}
.button-wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
}
</style>
