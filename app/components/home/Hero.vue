<script setup lang="ts">
import HeroVideo from '@/assets/video/hero-video-min.mp4'
</script>
<template>
  <section class="hero-section">
    <div class="container hero-container">
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
        <h1 class="hero-title">
          Professional solutions
          <span>for complex claims.</span>
        </h1>
        <p class="hero-text">
          <span>Claim Pro</span>
          Committed to delivering integrity-driven insurance adjustments and
          appraisals, empowering policyholders and carriers alike with clear,
          unbiased solutions.
        </p>
      </div>
      <div class="button-wrap">
        <EntityButtonAssign />
        <entity-learn-more to="/" />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.hero-section {
  height: 100vh;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(8, 27, 43, 0.65) 0%,
    rgba(8, 27, 43, 0.16) 100%
  );
  @include tablet {
    min-height: auto;
    height: auto;
  }
  @include tablet {
    padding-top: 248px;
    padding-bottom: 156px;
  }
}
.hero-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
}
.title-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
  @include tablet {
    max-width: 530px;
    gap: 32px;
  }
  @include laptop {
    max-width: 876px;
    gap: 32px;
  }
}
.hero-title {
  color: var(--Text-light);
  text-shadow: 0 4px 5.8px rgba(32, 34, 41, 0.25);
  font-size: 48px;
  font-weight: 600;
  line-height: 110%;
  @include tablet {
    font-size: 56px;
    line-height: 120%;
  }
  @include laptop {
    font-size: 64px;
  }
  & > span {
    font-style: italic;
    font-weight: 300;
  }
}
.hero-text {
  color: var(--Text-light);
  font-size: 16px;

  line-height: 140%;
  @include tablet {
    font-size: 20px;
  }
  @include laptop {
    font-size: 24px;
  }
  & > span {
    font-weight: 700;
    text-shadow: 0 4px 5.8px rgba(32, 34, 41, 0.25);
  }
}
.button-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  @include laptop {
    flex-direction: row;
  }
}
</style>
