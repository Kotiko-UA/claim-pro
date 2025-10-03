<script setup lang="ts">
const whatBenefitsList = [
  'Licensed and experienced 	property adjusters and/or appraisers',
  'Strong knowledge of insurance 	claims processes and construction practices',
  'Clear communication skills and 	professional conduct',
  'Commitment to accuracy, 	fairness, and timeliness',
]
import whatImg from '@/assets/images/join-team/join-look-img.jpg'
</script>
<template>
  <section class="bg-[#F8FBFF]">
    <div class="container">
      <HomeWhyChoose />
      <div class="what-we-wrap">
        <div class="what-we-text-wrap">
          <h2 class="what-we-title">
            What We
            <span>Look For:</span>
          </h2>
          <ul class="what-we-list">
            <entity-pin-text-item
              v-for="text in whatBenefitsList"
              :text="text"
            />
          </ul>
          <p class="what-text">
            If you’re ready to expand your opportunities while working with a
            company that values quality and professionalism, we’d love to hear
            from you.
          </p>
          <h3 class="what-subtitle">
            Submit your application today and grow with Claim Pro.
          </h3>
        </div>
        <div class="line"></div>
        <div class="about-img-wrap">
          <img loading="lazy" :src="whatImg" alt="decorative image" />
        </div>
      </div>
      <FeaturesFormIndependentAdjusterAppraiserApplication />
      <FeaturesFormAssignClaim />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.what-we-wrap {
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @include tablet {
    flex-direction: row;
    align-items: center;
  }
  @include laptop {
    margin-bottom: 48px;
    justify-content: space-between;
  }
}
.what-we-text-wrap {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  flex-shrink: 1;
  padding-left: 16px;
  border-left: 1px solid rgba(110, 131, 162, 0.5);
  @include laptop {
    padding-left: 0;
    border-left: none;
  }
}

.what-we-title {
  margin-bottom: 16px;

  color: var(--Dark);
  font-size: 24px;
  font-weight: 600;
  @include laptop {
    font-size: 32px;
    margin-bottom: 24px;
  }
  & > span {
    font-style: italic;
    font-weight: 300;
  }
}
.what-we-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  @include laptop {
    margin-bottom: 48px;
  }
}
.what-text {
  margin-bottom: 16px;
  color: var(--Dark);
  line-height: 140%;
  @include laptop {
    margin-bottom: 24px;
    font-size: 20px;
  }
}
.what-subtitle {
  color: var(--Dark);
  font-weight: 700;
  @include laptop {
    font-size: 20px;
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
