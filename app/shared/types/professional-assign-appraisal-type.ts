export type ProfessionalAssignAppraisalType = {
  referredBy: string
  assigned: {
    firstName: string
    lastName: string
    company: string
    phoneNumber: string
  }
  insured: {
    firstName: string
    lastName: string
    email: string
    phone: string
    streetSuite: string
    city: string
    state: string
    zipCode: string
    insuranceCompany: string
    damageDescription: string
    dateLoss: string
    claimNumber: string
  }

  files: any[]
}
