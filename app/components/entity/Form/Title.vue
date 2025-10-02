<script setup lang="ts">
import messageIcon from '~/assets/images/icons/message-icon.svg?url'
defineProps<{ title: string }>()
</script>
<template>
  <div class="form-title-wrap">
    <img class="form-title-icon" :src="messageIcon" alt="decorative icon" />
    <h2 class="form-title">{{ title }}</h2>
  </div>
</template>
<style lang="scss" scoped>
.form-title-wrap {
  position: relative;
  padding-bottom: 24px;
  margin-bottom: 24px;
  display: flex;
  gap: 16px;
  align-items: center;

  border-bottom: 3px solid transparent;
  border-image: linear-gradient(90deg, #c4cddc 0%, rgba(196, 205, 220, 0) 100%);
  border-image-slice: 3;

  @include laptop {
    margin-bottom: 32px;
    padding-bottom: 32px;
  }
}
.form-title-icon {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  @include laptop {
    width: 56px;
    height: 56px;
  }
}
.form-title {
  color: var(--Dark);
  font-size: 24px;
  font-weight: 600;
  line-height: 120%;

  @include laptop {
    font-size: 32px;
  }
}
</style>
