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
  <section class="join-section">
    <div class="container">
      <div class="title-wrap">
        <h2 class="section-title join-title">
          Join Our
          <span>Team</span>
        </h2>
        <p class="section-text join-text">
          At
          <span>Claim Pro,</span>
          we know that the strength of our company comes from the professionals who represent us in
          the field. Since 2018, we’ve been committed to delivering fair, accurate, and timely
          insurance adjustments and appraisals. To continue meeting that standard, we’re seeking
          experienced
          <span>independent adjusters, reviewers, appraisers, and umpires</span>
          to join our team.
        </p>
      </div>

      <h2 class="join-subtitle">
        Why Choose
        <span>Claim Pro?</span>
      </h2>
      <div class="join-cards-wrap">
        <div class="join-card" v-for="card in cards" :key="card.text">
          <img loading="lazy" class="card-img" :src="card.img" alt="decorative image" />
          <p class="card-text">{{ card.text }}</p>
        </div>
      </div>

      <EntityLearnMore to="/JoinOurTeam" class="!ml-auto" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.join-section {
  background-color: #f8fbff;
  background-image: url('/bg/join-our-bg.svg');
  background-repeat: no-repeat;
  background-position: top left;
  background-size: contain;
}
.title-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  @include tablet {
    gap: 24px;
    margin-bottom: 48px;
  }
  @include laptop {
    flex-direction: row;
    justify-content: space-between;
    gap: 48px;
  }
}
.join-title {
  width: 100%;
  flex-shrink: 1;
}
.join-text {
  width: 100%;
  flex-shrink: 1;
}

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
  //   background-color: rgba(162, 210, 246, 0.65);
  //
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
