<script setup lang="ts">
import { contractorMockClaims, profMockClaims } from '@/shared/mock/claims-mock'
import {
  contractorTabsContent,
  profTabsContent,
  contractorTabsBtns,
  profTabsBtns,
} from '@/shared/content/tabs-content'
</script>
<template>
  <AboutUsHero />
  <EntityCPTabs
    :tabs-btns="contractorTabsBtns"
    :tabs-content="contractorTabsContent"
    :mock-claims="contractorMockClaims"
    type="contractor"
  />

  <EntityCPTabs
    :tabs-btns="profTabsBtns"
    :tabs-content="profTabsContent"
    :mock-claims="profMockClaims"
    type="prof"
  />
</template>
