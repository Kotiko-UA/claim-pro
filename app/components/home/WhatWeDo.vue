<script setup lang="ts">
import calcIcon from '@/assets/images/icons/calc-icon.svg?url'
import figureIcon from '@/assets/images/icons/figure-icon.svg?url'
import heartIcon from '@/assets/images/icons/heart-icon.svg?url'
import penIcon from '@/assets/images/icons/pen-icon.svg?url'
</script>
<template>
  <section class="what-section">
    <div class="container">
      <div class="card-main-wrap">
        <div class="title-card">
          <h2 class="section-title">
            What We
            <span>Do</span>
          </h2>
          <p class="section-text what-text">
            Discover our core services designed to support insurers, contractors, and clients at
            every stage of the claims process.
          </p>
        </div>
        <div class="card-wrap bg-[#FFF]">
          <div class="icon-wrap">
            <img loading="lazy" class="card-icon" :src="penIcon" alt="icon" />
            <h3 class="card-title text-[#1D3557]">Appraisals and Umpire Services</h3>
          </div>
          <p class="card-text text-[#1D3557]">
            When a property loss occurs and there’s a dispute over the value of the damage, our
            appraisers provide a fair, independent, and professional resolution.
          </p>
        </div>
        <div class="card-wrap bg-[#1D3557]">
          <div class="icon-wrap">
            <img loading="lazy" class="card-icon" :src="figureIcon" alt="icon" />
            <h3 class="card-title text-[#F5F5F5]">Daily & CAT Deployments</h3>
          </div>
          <p class="card-text text-[#F5F5F5]">
            Beyond catastrophe response, our independent adjusters provide comprehensive daily
            adjustment services for both residential and commercial property claims.
          </p>
        </div>
        <div class="card-wrap bg-[#6D8DB9]">
          <div class="icon-wrap">
            <img loading="lazy" class="card-icon" :src="calcIcon" alt="icon" />
            <h3 class="card-title text-[#F5F5F5]">
              Estimate Supplement Services for Insurance Claims
            </h3>
          </div>
          <p class="card-text text-[#F5F5F5]">
            In the event of a property loss, policyholders often find that initial estimates
            provided by insurance adjusters may not fully capture the scope of repairs or
            replacements required.
          </p>
        </div>
        <div class="card-wrap bg-[#FFF]">
          <div class="icon-wrap">
            <img loading="lazy" class="card-icon" :src="heartIcon" alt="icon" />
            <h3 class="card-title">Expert Witness Support</h3>
          </div>
          <p class="card-text text-[#1D3557]">
            Beyond catastrophe response, our independent adjusters provide comprehensive daily
            adjustment services for both residential and commercial property claims. From routine
            losses to complex cases, we handle every claim with the same level of accuracy,
            professionalism, and care.
          </p>
        </div>
        <div class="last-card">
          <p class="last-card-text">
            From appraisals to CAT deployments, we provide reliable solutions tailored to your
            business needs.
          </p>
          <EntityLearnMore class="!ml-auto" to="/WhatWeDo" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.what-section {
  background-image: url('/bg/what-we-bg.svg');
  background-repeat: no-repeat;
  background-position: top left;
  background-size: contain;
}
.card-main-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
  @include tablet {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;
  }
  @include laptop {
    grid-template-columns: repeat(3, 398px);
    grid-template-rows: repeat(2, 1fr);
    justify-content: space-between;
    row-gap: 48px;
  }
}
.title-card {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  @include laptop {
    padding: 24px;
    gap: 24px;
  }
}

.what-text {
  margin-bottom: 8px;
  @include tablet {
    margin-bottom: 0;
  }
}

.card-wrap {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 29.8px 0 rgba(227, 234, 243, 0.65);
  @include laptop {
    min-height: 246px;
    padding: 24px;
  }
}
.icon-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}
.card-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 140%;

  @include laptop {
    font-size: 24px;
  }
}
.card-icon {
  width: 32px;
  height: 32px;
  @include laptop {
    width: 40px;
    height: 40px;
  }
}

.card-text {
  font-size: 16px;
  line-height: 140%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  overflow: clip;
  @include tablet {
    margin-top: auto;
    font-size: 18px;
    line-height: 120%;
  }
  @include laptop {
    font-size: 20px;
  }
}
.last-card {
  @include tablet {
    padding: 16px 0 0 16px;
  }
  @include laptop {
    padding: 24px 0 0 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    // gap: 24px;
  }
}
.last-card-text {
  max-width: 289px;
  color: var(--Dark);
  font-size: 16px;
  line-height: 140%;
  margin: 0 auto 24px;
  margin-bottom: 24px;

  @include tablet {
    font-size: 18px;
    line-height: 120%;
    margin: 0;
  }
  @include laptop {
    font-size: 20px;
    max-width: none;
  }
}
</style>
