<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ContractorClaim, ProfClaim } from '../../../shared/types/claim'
import {
  contractorMockClaims,
  profMockClaims,
} from '../../../shared/mock/claims'
import TableHeader from './TableHeader.vue'
import TableRow from './TableRow.vue'
import ClaimsFilter from './ClaimsFilter.vue'

interface Props {
  type: 'contractor' | 'prof'
}
const props = defineProps<Props>()

const titles = computed(() => {
  return props.type === 'contractor'
    ? [
        { key: 'claimNumber', title: 'Claim Number' },
        { key: 'dateOfLoss', title: 'Date of Loss' },
        { key: 'submissionDate', title: 'Submission Date' },
        { key: 'status', title: 'Status' },
        { key: 'insuranceCompany', title: 'Insurance Company' },
        { key: 'assignedAdjuster', title: 'Assigned Adjuster' },
        { key: 'actions', title: 'Actions' },
      ]
    : [
        { key: 'claimNumber', title: 'Claim Number' },
        { key: 'dateOfLoss', title: 'Date of Loss' },
        { key: 'status', title: 'Status' },
        { key: 'insuranceCompany', title: 'Insurance Company' },
        { key: 'assignedAdjuster', title: 'Assigned Adjuster' },
        { key: 'actions', title: 'Actions' },
      ]
})
// Статус-фільтр
const selectedStatus = ref<string | null>(null)

const allClaims = computed(() =>
  props.type === 'contractor'
    ? (contractorMockClaims as ContractorClaim[])
    : (profMockClaims as ProfClaim[])
)

//  Фільтровані клайми
const claims = computed(() => {
  if (!selectedStatus.value) return allClaims.value
  return allClaims.value.filter(claim => claim.status === selectedStatus.value)
})
// статуси для фільтра
const statusOptions = computed(() => {
  const list = allClaims.value.map(c => c.status)
  return Array.from(new Set(list))
})
</script>

<template>
  <section class="claims-table">
    <div class="container">
      <ClaimsFilter v-model="selectedStatus" :options="statusOptions" />
      <div class="table-container">
        <table>
          <TableHeader :columnTitles="titles" />
          <tbody>
            <TableRow
              v-for="claim in claims"
              :key="claim.claimNumber"
              :claim="claim"
              :columns="titles"
            />
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
