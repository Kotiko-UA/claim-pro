<script setup lang="ts">
import starImg from '@/assets/images/home/join-star.avif'
import messageImg from '@/assets/images/home/join-message.avif'
import focusImg from '@/assets/images/home/join-focus.avif'
import flashImg from '@/assets/images/home/join-star.avif'
const cards: { img: any; text: string }[] = [
  {
    img: starImg,
    text: 'Consistent opportunities for 	residential and commercial claims',
  },
  {
    img: messageImg,
    text: 'The flexibility of independent 	work with the backing of a respected brand',
  },
  {
    img: focusImg,
    text: 'A supportive, collaborative 	environment that values integrity and impartiality',
  },
  {
    img: flashImg,
    text: 'Competitive pay that reflects 	your expertise and effort',
  },
]
</script>
<template>
  <h2 class="join-subtitle">
    Why Choose
    <span>Claim Pro?</span>
  </h2>
  <div class="join-cards-wrap">
    <div class="join-card" v-for="card in cards" :key="card.text">
      <img
        loading="lazy"
        class="card-img"
        :src="card.img"
        alt="decorative image"
      />
      <p class="card-text">{{ card.text }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.join-subtitle {
  margin-bottom: 16px;
  color: var(--Dark, #1d3557);
  font-size: 24px;
  font-weight: 600;
  line-height: 120%;
  & > span {
    font-style: italic;
    font-weight: 300;
  }
  @include tablet {
    margin-bottom: 24px;
    font-size: 28px;
  }
  @include laptop {
    font-size: 32px;
  }
}
.join-cards-wrap {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
  @include tablet {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @include laptop {
    justify-content: space-between;
    margin-bottom: 32px;
  }
}
.join-card {
  padding: 16px 32px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.22);
  @include tablet {
    width: calc((100% - 24px) / 2);
    padding: 16px;
  }
  @include laptop {
    padding: 24px 0;
    width: 282px;
  }
}

.card-img {
  width: 48px;
  height: 48px;
  @include tablet {
    width: 52px;
    height: 52px;
  }
  @include laptop {
  }
  width: 66px;
  height: 66px;
}

.card-text {
  color: var(--Dark);
  text-align: center;
  line-height: 140%;
}
</style>
