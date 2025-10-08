<script setup lang="ts">
import Pen from '@/assets/images/icons/pen-edit-icon.svg?url'
import { contractorMockClaims, profMockClaims } from '@/shared/mock/claims-mock'
import {
  contractorTabsContent,
  profTabsContent,
  contractorTabsBtns,
  profTabsBtns,
} from '@/shared/content/tabs-content'
import { useUserStore } from '~/shared/store/userStore'
import type { TabTitleType, TabTopContentType } from '~/shared/types/tabs-types'
import type {
  ContractorClaimType,
  ProfClaimType,
} from '~/shared/types/claim-type'

const userStore = useUserStore()
definePageMeta({
  ssr: false,
})
</script>
<template>
  <ClientPortalHero />
  <div class="container">
    <div
      class="flex flex-col mb-6 mt-10 gap-6 tablet:flex-row tablet:flex tablet:items-center tablet:justify-between"
    >
      <h2 class="title-portal">
        General
        <span>Information</span>
      </h2>
      <NuxtLink class="uppercase gap-4 edit-link-portal" to="/EditProfile">
        Edit information
        <img class="w-4 h-4" loading="lazy" :src="Pen" alt="logo image" />
      </NuxtLink>
    </div>
  </div>

  <EntityCPTabs
    v-if="
      userStore.user.type === 'contractor' ||
      userStore.user.type === 'professional'
    "
    :tabs-btns="
      ((userStore.user.type === 'professional' && profTabsBtns) ||
      (userStore.user.type === 'contractor' && contractorTabsBtns))as TabTitleType[]
    "
    :tabs-content="((userStore.user.type === 'professional' && profTabsContent) ||
  (userStore.user.type === 'contractor' && contractorTabsContent)) as TabTopContentType[]
  "
    :mock-claims="
      ((userStore.user.type === 'professional' && profMockClaims) ||
        (userStore.user.type === 'contractor' && contractorMockClaims)) as ProfClaimType[] | ContractorClaimType[]
    "
    :type="userStore.user.type"
  />
</template>

<style lang="scss" scoped>
.title-portal {
  font-weight: 600;
  font-size: 28px;
  line-height: 120%;
  color: var(--Dark);

  @include tablet {
    font-size: 32px;
  }
}

.title-portal span {
  font-style: italic;
  font-weight: 300;
}

.edit-link-portal {
  display: inline-flex;
  font-weight: 500;
  font-size: 14px;
  line-height: 115%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 16px;
  padding: 16px 32px;
  margin-right: auto;
  height: 56px;
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.02);
  opacity: 0.8;
  border: 1px solid var(--Dark);
  transition: opacity 0.2s ease;

  @include tablet {
    border-radius: 24px;
    margin-right: 0;
    font-size: 16px;
  }

  &:hover {
    opacity: 1;
  }
}
</style>
