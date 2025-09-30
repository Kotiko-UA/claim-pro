<script setup lang="ts"></script>
<template>
  <section class="what-section">
    <div class="container">
      <div class="section-wrap">
        <div class="title-wrap">
          <h1 class="what-title">
            What We
            <span>Do</span>
          </h1>
          <p class="what-hero-text">
            Discover our core services designed to support insurers, contractors, and clients at
            every stage of the claims process.
          </p>
        </div>
        <EntityAssignButton />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.what-section {
  background-image: url('/bg/what-we-hero-img.jpg');
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
  padding-top: 188px;
  padding-bottom: 135px;
  @include laptop {
    padding-top: 248px;
    padding-bottom: 100px;
  }
}
.section-wrap {
  display: flex;
  gap: 32px;
  flex-direction: column;
  @include laptop {
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
  }
}
.title-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 648px;
  @include laptop {
    gap: 32px;
  }
}
.what-title {
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
.what-hero-text {
  color: var(--Text-light);
  text-shadow: 0 4px 5.8px rgba(32, 34, 41, 0.25);
  line-height: 140%;
  @include laptop {
    font-size: 24px;
  }
}
</style>
