<script setup lang="ts">
import { contractorMockClaims, profMockClaims } from '@/shared/mock/claims-mock'

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
  <AboutUsHero />
  <EntityClaimClaimsTable
    type="contractor"
    :data="contractorMockClaims"
    @update-table="onUpdateTable"
  />
  <EntityClaimClaimsTable
    type="prof"
    :data="profMockClaims"
    @update-table="onUpdateTable"
  />
</template>
