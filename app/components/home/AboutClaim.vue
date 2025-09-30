<script setup lang="ts">
import aboutImg from '@/assets/images/home/about-img.jpg'
</script>
<template>
  <section class="about-section">
    <div class="container">
      <div class="about-wrap">
        <div class="about-title-wrap">
          <h2 class="section-title about-title">
            About
            <span>Claim Pro</span>
          </h2>
          <p class="section-text about-text">
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
        <div class="line"></div>
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
  flex-direction: column;
  gap: 24px;
  @include tablet {
    flex-direction: row;
    align-items: center;
  }
  @include laptop {
    justify-content: space-between;
  }
}
.line {
  display: none;
  @include tablet {
    display: block;
    width: 1px;
    background-color: rgba(110, 131, 162, 0.5);
    align-self: stretch;
  }
}
.about-title-wrap {
  width: 100%;
  max-width: 600px;
  flex-shrink: 1;
}
.about-title {
  margin-bottom: 16px;
  @include tablet {
    margin-bottom: 24px;
  }
}

.about-img-wrap {
  border-left: 1px solid rgba(110, 131, 162, 0.5);
  padding-left: 16px;
  @include tablet {
    max-width: 45%;
    border: none;
    padding-left: 0;
  }
  @include laptop {
    max-width: 629px;
  }
}
</style>
