<script setup lang="ts"></script>
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
          we know that the strength of our company comes from the professionals
          who represent us in the field. Since 2018, we’ve been committed to
          delivering fair, accurate, and timely insurance adjustments and
          appraisals. To continue meeting that standard, we’re seeking
          experienced
          <span>independent adjusters, reviewers, appraisers, and umpires</span>
          to join our team.
        </p>
      </div>
      <HomeWhyChoose />
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
</style>
