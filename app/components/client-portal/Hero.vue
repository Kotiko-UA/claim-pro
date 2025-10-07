<script setup lang="ts"></script>
<template>
  <section class="cp-hero-section">
    <div class="container">
      <div class="title-wrap">
        <h1 class="cp-title">
          Client
          <span>Portal</span>
        </h1>
        <p class="cp-text">
          A convenient personal account to assign claims, submit supplements,
          and track the status of your insurance cases.
        </p>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.cp-hero-section {
  background-image: url('/bg/cp-hero.avif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 188px;
  padding-bottom: 135px;
  @include laptop {
    padding-top: 248px;
    padding-bottom: 100px;
  }
}

.title-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
  @include tablet {
    max-width: 470px;
  }
  @include laptop {
    max-width: 648px;
    gap: 32px;
  }
}
.cp-title {
  color: var(--Text-light);
  text-shadow: 0 4px 5.8px rgba(32, 34, 41, 0.25);
  font-size: 48px;
  font-weight: 600;
  line-height: 110%;
  @include laptop {
    font-size: 64px;
  }
  & > span {
    font-style: italic;
    font-weight: 300;
  }
}
.cp-text {
  color: var(--Text-light);
  text-shadow: 0 4px 5.8px rgba(32, 34, 41, 0.25);
  line-height: 140%;
  @include laptop {
    font-size: 24px;
  }
}
</style>
