<script setup lang="ts">
import type { TabTopContentType } from '~/shared/types/tabs-types'

const { id, content } = defineProps<{
  id: number
  content: TabTopContentType[]
}>()
const currentTab = computed<TabTopContentType | undefined>(() => {
  return content.find(tab => tab.id === id)
})
const title = computed(() => currentTab.value?.title ?? '')
const highlight = computed(() => currentTab.value?.highlight ?? '')
const text = computed(() => currentTab.value?.text ?? '')
const list = computed(() => currentTab.value?.list ?? [])
</script>

<template>
  <div class="tab-top-content-wrap">
    <div class="tab-title-wrap">
      <h2 class="section-title">
        {{ title }}
        <span>{{ highlight }}</span>
      </h2>
      <p class="section-text">{{ text }}</p>
    </div>
    <ul class="tab-top-list">
      <EntityPinTextItem v-for="(item, i) in list" :key="i" :text="item" />
    </ul>
  </div>
</template>
<style scoped lang="scss">
.tab-top-content-wrap {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
  @include tablet {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 32px;
  }
}
.tab-title-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
  @include tablet {
    max-width: 50%;
    gap: 24px;
    @include laptop {
      max-width: 575px;
    }
  }
}

.tab-top-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 300px;
}
</style>
