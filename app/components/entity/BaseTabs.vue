<script setup lang="ts">
import { ref } from 'vue'
import type { TabTitleType } from '~/shared/types/tabs-types'

const props = defineProps<{
  tabs: TabTitleType[]
}>()
const emit = defineEmits<{
  change: [id: number]
}>()
const activeTab = ref(props.tabs[0]?.id)

function setTab(id: number) {
  activeTab.value = id
  emit('change', id)
}
</script>

<template>
  <div class="tab-btns-wrap">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      :class="{ active: tab.id === activeTab }"
      class="tab-btn"
      @click="setTab(tab.id)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.tab-btns-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 24px;
  @include tablet {
    border-top: 1px solid var(--Grey-light);
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 48px;
  }
  @include laptop {
    margin-bottom: 64px;
  }
}
.tab-btn {
  position: relative;
  width: 100%;
  padding: 10px 16px;
  border-left: 1px solid var(--Grey-light);
  color: var(--Dark);
  font-size: 16px;
  line-height: 140%;
  transition: border 0.4s ease-in-out;
  text-align: left;
  @include tablet {
    border-left: none;
    text-align: center;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background-color: #81b7d5;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.7s ease-in-out;
    @include tablet {
      width: 100%;
      height: 3px;
      transform: scaleX(0);
      transform-origin: left;
    }
  }

  &.active::before {
    transform: scaleY(1);
    @include tablet {
      transform: scaleX(1);
    }
  }
}
</style>
