<script setup lang="ts">
import type {
  ProfClaimType,
  ContractorClaimType,
  TableColumnType,
} from '@/shared/types/claim-type'
import EyeIcon from '@/assets/images/icons/eye.svg'
import DownloadIcon from '@/assets/images/icons/download.svg'
import ChatIcon from '@/assets/images/icons/chat.svg'
import CircleIcon from '@/assets/images/icons/circle.svg'

interface Props<T> {
  claim: T
  columns: TableColumnType[]
}

defineProps<Props<ContractorClaimType | ProfClaimType>>()

function isContractorClaim(
  claim: ContractorClaimType | ProfClaimType
): claim is ContractorClaimType {
  return 'submissionDate' in claim
}

function formatDate(dateInput: string | number | Date): string {
  const date = new Date(dateInput)
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}
</script>

<template>
  <tr>
    <td
      v-for="col in columns"
      :key="col.key"
      class="claim-cell"
      :class="{
        'bold-cell':
          col.key === 'claimNumber' || col.key === 'insuranceCompany',
        'reg-cell': col.key !== 'claimNumber' && col.key !== 'insuranceCompany',
      }"
    >
      <template v-if="col.key === 'dateOfLoss'">
        {{ formatDate(claim.dateOfLoss) }}
      </template>

      <template
        v-else-if="col.key === 'submissionDate' && isContractorClaim(claim)"
      >
        {{ formatDate(claim.submissionDate) }}
      </template>

      <template v-else-if="col.key === 'status'">
        <span :class="['status', claim.status.toLowerCase()]">
          <CircleIcon class="status-icon" />
          {{ claim.status }}
        </span>
      </template>

      <template v-else-if="col.key === 'actions'">
        <div class="action-cell">
          <button class="action-btn"><EyeIcon class="action-icon" /></button>
          <button class="action-btn">
            <DownloadIcon class="action-icon" />
          </button>
          <button class="action-btn"><ChatIcon class="action-icon" /></button>
        </div>
      </template>

      <template v-else>
        {{ claim[col.key as keyof typeof claim] }}
      </template>
    </td>
  </tr>
</template>
