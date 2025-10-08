<script setup lang="ts">
import { ref, computed } from 'vue'
import type {
  ContractorClaimType,
  ProfClaimType,
} from '@/shared/types/claim-type'

type PropsType = {
  type: 'contractor' | 'professional'
  data: ContractorClaimType[] | ProfClaimType[]
}
const props = defineProps<PropsType>()
const tableData = ref<null | ContractorClaimType[] | ProfClaimType[]>(
  props.data
)
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
    ? (tableData.value as ContractorClaimType[])
    : (tableData.value as ProfClaimType[])
)

//  Фільтровані клейми
const claims = computed(() => {
  if (!selectedStatus.value) return allClaims.value
  return allClaims.value.filter(claim => claim.status === selectedStatus.value)
})
// статуси для фільтра
const statusOptions = computed(() => {
  const list = allClaims.value.map(c => c.status)
  return Array.from(new Set(list))
})
// Пагінація
const currentPage = ref(1)
const itemsPerPage = 5

const paginatedClaims = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return claims.value.slice(start, end)
})
watch(selectedStatus, () => {
  currentPage.value = 1
})
watch([selectedStatus, currentPage], () => {
  emit('update-table', {
    currentPage: currentPage.value,
    filterValue: selectedStatus.value || '',
  })
})
const emit = defineEmits<{
  (
    e: 'update-table',
    payload: { currentPage: number; filterValue: string }
  ): void
}>()

emit('update-table', {
  currentPage: currentPage.value,
  filterValue: selectedStatus.value || '',
})
</script>

<template>
  <EntityClaimClaimsFilter v-model="selectedStatus" :options="statusOptions" />
  <div class="table-container">
    <table>
      <EntityClaimTableHeader :columnTitles="titles" />
      <tbody>
        <EntityClaimTableRow
          v-for="claim in paginatedClaims"
          :key="claim.claimNumber"
          :claim="claim"
          :columns="titles"
        />
      </tbody>
    </table>
  </div>
  <EntityClaimClaimsPagination
    v-model="currentPage"
    :total-items="claims.length"
    :items-per-page="itemsPerPage"
  />
</template>
