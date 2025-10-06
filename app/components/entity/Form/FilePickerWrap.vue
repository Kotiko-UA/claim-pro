<script setup lang="ts">
import fileIcon from '@/assets/images/icons/file-icon.svg?url'
defineProps<{ fileTypes: string[] }>()
</script>
<template>
  <div class="">
    <div class="flex flex-col tablet:items-end gap-1 tablet:flex-row mb-4">
      <h4 class="text-dark laptop:text-[20px]">Document Upload</h4>
      <p class="text-dark text-[14px]">(files are forwarded via email)</p>
    </div>
    <div class="annotation">
      <div class="icon-wrap">
        <img class="w-[26px] h-[26px]" :src="fileIcon" alt="decorative" />
      </div>
      <p class="annotation-text">
        Allow multiple file uploads with clear labels for each type of document
      </p>
    </div>
    <slot />
    <ul
      v-if="fileTypes"
      class="grid gap-4 grid-cols-1 laptop:grid-cols-2 mt-6 laptop:mt-8"
    >
      <EntityFormFileType
        :file-type="value"
        :key="value"
        v-for="value in fileTypes"
      />
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.annotation {
  width: 100%;
  max-height: 52px;
  margin-bottom: 24px;
  display: flex;
  padding: 4px 8px;
  align-items: center;
  gap: 16px;

  border-radius: 16px;
  background: #eaeff6;
  @include laptop {
    margin-bottom: 32px;
  }
}
.icon-wrap {
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  background-color: var(--Light);
  box-shadow: 0 2.56px 19.072px 0 rgba(227, 234, 243, 0.65);
}
.annotation-text {
  color: rgba(29, 53, 87, 0.65);
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 157%;
  @include laptop {
    font-size: 16px;
  }
}
</style>
