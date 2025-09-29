<script setup lang="ts">
import arrowIcon from '@/assets/images/icons/arrow-long-white.svg'
</script>
<template>
  <section>
    <div class="container">
      <div class="content-wrap">
        <div class="title-wrap">
          <h2 class="protect-title">Protect Your</h2>
          <h2 class="protect-title sub-title">Interests <span class="accent">Today</span></h2>
        </div>
        <div class="text-wrap">
          <p class="protect-text">
            Our experts will help you receive fair compensation, accurate evaluations, and
            transparent claim resolutions — without unnecessary disputes or delays.
          </p>
          <div class="link-block">
            <NuxtLink class="arrow-link" to="/"
              >Assign a Claim <img :src="arrowIcon" alt="arrow icon"
            /></NuxtLink>
            <NuxtLink class="get-c-link" to="/">Get a Consultation</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.content-wrap {
  display: flex;
  flex-direction: column;
  gap: 24px;
  @include laptop {
    gap: 48px;
    flex-direction: row;
  }
}
.title-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 562px;
}
.protect-title {
  color: var(--Dark);
  font-size: 28px;
  font-weight: 600;
  line-height: 120%;
  @include laptop {
    font-size: 64px;
  }
}
.sub-title {
  padding-left: 32px;
  @include laptop {
    padding-left: 64px;
  }
}
.accent {
  font-style: italic;
  font-weight: 400;
  @include laptop {
    font-weight: 300;
  }
}

.text-wrap {
  display: flex;
  flex-direction: column;
  gap: 32px;
  @include laptop {
    gap: 48px;
  }
}

.protect-text {
  width: 100%;

  color: var(--Dark);
  line-height: 140%;
  @include laptop {
    font-size: 20px;
  }
}
.link-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
  @include tablet {
    flex-direction: row;
  }
}
.arrow-link {
  width: 100%;
  height: 50px;
  display: flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 24px;

  border-radius: 24px;
  background: var(--Dark);
  box-shadow: 0 4px 4px 0 rgba(29, 53, 87, 0.45);

  color: var(--Light);
  text-align: center;
  font-weight: 500;
  line-height: 115%;
  letter-spacing: 0.48px;
  text-transform: uppercase;
  white-space: nowrap;
  @include backdrop-blur(12.5px);
  @include tablet {
    width: 326px;
  }
}
.get-c-link {
  width: 100%;
  height: 50px;
  display: flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;

  border-radius: 24px;
  border: 1px solid var(--Dark);
  opacity: 0.8;
  background: rgba(255, 255, 255, 0.02);
  @include tablet {
    width: 238px;
  }
}
</style>
