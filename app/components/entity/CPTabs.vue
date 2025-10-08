<script setup lang="ts">
import { ref } from 'vue'
import type {
  ContractorClaimType,
  ProfClaimType,
} from '~/shared/types/claim-type'
import type { TabTitleType, TabTopContentType } from '~/shared/types/tabs-types'

const props = defineProps<{
  tabsBtns: TabTitleType[]
  tabsContent: TabTopContentType[]
  mockClaims: ProfClaimType[] | ContractorClaimType[]
  type: 'contractor' | 'professional'
}>()

const activeTabId = ref(props.tabsBtns[0]?.id ?? 0)

function handleTabChange(id: number) {
  activeTabId.value = id
}

const onUpdateTable = ({
  currentPage,
  filterValue,
}: {
  currentPage: number
  filterValue: string
}) => {
  console.log('updated data:', currentPage, filterValue)
}
</script>

<template>
  <section class="pt-0">
    <div class="container">
      <EntityBaseTabs :tabs="props.tabsBtns" @change="handleTabChange" />

      <EntityTabTopContent :id="activeTabId" :content="props.tabsContent" />

      <FeaturesFormAssignClaim
        :userType="props.type"
        v-if="activeTabId === 1"
      />
      <FeaturesFormIndependentAdjusterAppraiserApplication
        v-else-if="activeTabId === 2 && props.type === 'contractor'"
      />
      <FeaturesFormProfessionalAssignAppraisal
        v-else-if="activeTabId === 2 && props.type === 'professional'"
      />
      <EntityClaimClaimsTable
        v-else-if="activeTabId === 3"
        :type="props.type"
        :data="props.mockClaims"
        @update-table="onUpdateTable"
      />
    </div>
  </section>
</template>
