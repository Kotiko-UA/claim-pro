export interface ContractorClaim {
  claimNumber: string
  dateOfLoss: string | number
  submissionDate: string | number
  status: 'Pending' | 'Approved' | 'Denied'
  insuranceCompany: string
  assignedAdjuster: string
}
export interface ProfClaim {
  claimNumber: string
  dateOfLoss: string | number
  status: 'Lead' | 'Prospect' | 'Approved' | 'Completed' | 'Paid'
  insuranceCompany: string
  assignedAdjuster: string
}
export interface TableColumn {
  key: string
  title: string
}
