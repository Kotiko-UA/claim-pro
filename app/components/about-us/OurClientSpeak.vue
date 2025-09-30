<script setup lang="ts">
import starsIcon from '@/assets/images/icons/5-star.svg?url'
import comaIcon from '@/assets/images/icons/coma.svg?url'
import testiImg from '@/assets/images/about-us/testi-img.jpg'
</script>
<template>
  <section>
    <div class="container">
      <div class="title-wrap">
        <h2 class="section-title">
          Our Clients Speak
          <span>for themselves</span>
        </h2>
        <div class="star-wrap">
          <img :src="starsIcon" alt="decorative icon" class="star-img" />
          <p class="star-text">12k+ 5-star reviews</p>
        </div>
      </div>
      <p class="section-text">
        Instead of numbers and statistics, we believe the best proof of our expertise comes directly
        from the people we serve. Here’s what homeowners and clients say about working with us.
      </p>
      <div class="testi-wrap">
        <div class="testi-img-wrap">
          <img class="testi-img" :src="testiImg" alt="Irina K., Shopping Center Owner" />
          <div class="testi-img-text-wrap">
            <h4>Fair Compensation After Flood Damage</h4>
            <p>Shopping Center / 2025</p>
          </div>
        </div>
        <div class="testi-text-wrap">
          <h3 class="testi-title">Fair Compensation After Flood Damage</h3>
          <div class="testi-text-cover">
            <p class="testi-text">
              <img class="coma-img" :src="comaIcon" alt="decorative image" />
              "After severe flooding, we faced an underestimated assessment from our insurance
              company. The team helped us secure a revised estimate and receive fair compensation.
              Thanks to their professionalism, we were able to restore our business quickly."
            </p>
            <h4 class="testi-author">— Irina K., Shopping Center Owner</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.title-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  @include laptop {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
}
.section-title {
  color: var(--Dark);
  font-size: 28px;
  font-weight: 600;
  line-height: 120%;
  @include laptop {
    font-size: 48px;
  }
  & > span {
    font-style: italic;
    font-weight: 300;
  }
}
.star-img {
  width: 120px;
  height: 24px;
}
.star-wrap {
  display: flex;
  gap: 8px;
}
.star-text {
  color: var(--Dark);
  letter-spacing: -0.16px;
}
.section-text {
  margin-bottom: 24px;

  color: var(--Dark);
  line-height: 140%;
  @include laptop {
    max-width: 575px;
  }
}
.testi-wrap {
  display: flex;
  flex-direction: column;
  gap: 24px;
  @include laptop {
    gap: 32px;
    flex-direction: row;
  }
}
.testi-img-wrap {
  position: relative;
  width: 100%;
  flex-shrink: 1;
  max-height: 438px;
}
.testi-img {
  width: 100%;
  height: 100%;
}
.testi-img-text-wrap {
  position: absolute;
  bottom: 16px;
  right: 6%;
  width: calc(94% - 16px);
  max-width: 384px;
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 8px;
  background: rgba(162, 210, 246, 0.25);
  z-index: 2;
  @include backdrop-blur(12.5px);
  @include tablet {
    right: 36px;
    width: 382px;
    padding: 24px;
  }
}
.testi-img-text-wrap > h4 {
  color: var(--Light);
  font-size: 14px;
  font-weight: 700;
  line-height: 140%;
  text-transform: uppercase;
  @include laptop {
    font-size: 16px;
  }
}
.testi-img-text-wrap > p {
  color: rgba(255, 255, 255, 0.61);
  font-size: 14px;
  line-height: 120%;
}
.testi-text-wrap {
  width: 100%;
  flex-shrink: 1;
}
.testi-title {
  margin-bottom: 16px;

  color: var(--Dark);
  font-size: 24px;
  font-weight: 500;
  line-height: 120%;
  @include laptop {
    margin-bottom: 24px;

    font-size: 32px;
  }
}
.testi-text-cover {
  position: relative;
  padding: 62px 0 24px 16px;

  @include laptop {
    padding: 62px 0 26px 26px;
  }
}
.coma-img {
  position: absolute;
  top: 0;
  left: 0;

  width: 98px;
  height: 98px;
  z-index: 1;
  @include laptop {
    width: 152px;
    height: 152px;
  }
}
.testi-text {
  color: var(--Dark);
  line-height: 120%;
  @include laptop {
    font-size: 20px;
  }
}
.testi-author {
  color: #6e83a2;
  text-align: right;
  font-size: 14px;
  line-height: 140%;
  @include laptop {
    font-size: 16px;
  }
}
</style>
