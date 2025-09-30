<script setup lang="ts">
import aboutImg from '@/assets/images/home/about-img.jpg'
</script>
<template>
  <section class="about-section">
    <div class="container">
      <div class="about-wrap">
        <div class="about-title-wrap">
          <h2 class="about-title">
            About
            <span>Claim Pro</span>
          </h2>
          <p class="about-text">
            Since 2018, our professionals have been
            <span>
              trusted to deliver professional and impartial insurance adjustment, appraisal and
              umpire services.
            </span>
            With a commitment to accuracy, fairness, and integrity, we specialize in handling
            property claims with the highest standards of service. Our team brings expertise in both
            residential and commercial losses, working diligently to provide thorough
            <span>inspections, clear documentation, and reliable results.</span>
            Whether responding to daily claims, catastrophic events, or appraisal disputes,
            <span>Claim Pro</span>
            is dedicated to bridging the gap between carriers and policyholders through
            <span>transparent, unbiased, and efficient claim resolution.</span>
          </p>
        </div>
        <div class="about-img-wrap">
          <img loading="lazy" :src="aboutImg" alt="decorative image" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.about-section {
  background-color: #f8fbff;
  background-image: url('/bg/about-bg.svg');
  background-repeat: no-repeat;
  background-position: top left;
  background-size: contain;
}
.about-wrap {
  display: flex;
  justify-content: space-between;
}
.about-title-wrap {
  width: 100%;
  max-width: 600px;
  flex-shrink: 1;
}
.about-title {
  margin-bottom: 24px;
  color: var(--Dark);

  color: var(--Dark, #1d3557);
  font-size: 48px;
  font-weight: 600;
  line-height: 120%;
  & > span {
    font-style: italic;
    font-weight: 300;
  }
}
.about-text {
  color: var(--Dark);
  font-size: 20px;
  line-height: 140%;
  & > span {
    font-weight: 700;
  }
}
.about-img-wrap {
  flex-shrink: 1;
  width: 100%;
  max-width: 672px;
  padding-left: 48px;
  border-left: 1px solid rgba(110, 131, 162, 0.5);
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
  }
}
</style>
