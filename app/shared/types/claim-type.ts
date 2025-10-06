export type ContractorClaimType = {
  claimNumber: string
  dateOfLoss: string | number
  submissionDate: string | number
  status: 'Pending' | 'Approved' | 'Denied'
  insuranceCompany: string
  assignedAdjuster: string
}
export type ProfClaimType = {
  claimNumber: string
  dateOfLoss: string | number
  status: 'Lead' | 'Prospect' | 'Approved' | 'Completed' | 'Paid'
  insuranceCompany: string
  assignedAdjuster: string
}
export type TableColumnType = {
  key: string
  title: string
}
