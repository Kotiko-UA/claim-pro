export type IndependentAdjusterAppraiserApplicationType = {
  applicantInformation: {
    fullName: string
    address: string
    emailAddress: string
    cityStateZIP: string
    phoneNumber: string
    dateOfBirth: string
  }
  workPreferences: {
    willingTravelCatastropheDeployments: boolean
    availability: {
      fullTime: boolean
      partTime: boolean
      seasonal: boolean
    }
    preferredRegions: string
  }
  professionalInformation: {
    applyingAs: {
      independentAdjuster: boolean
      umpire: boolean
      deskReviewer: boolean
      other: string
    }
    primaryAreasExpertise: {
      residentialProperty: boolean
      commercialProperty: boolean
      catastropheClaims: boolean
      dailyClaims: boolean
      appraisalUmpireServices: boolean
    }
  }
  eOLiabilityInsurance: {
    checked: boolean
    text?: string
  }
  softwareProficiency: string
  stateLicensesHeld: string
  yearsExperience: string
  supportingDocuments: {
    resume: boolean
    copyAdjusterLicense: boolean
    proofInsurance: boolean
    certificationsTraining: boolean
  }
  references: {
    ref1: {
      name: string
      phone: string
    }
    ref2: {
      name: string
      phone: string
    }
    ref3: {
      name: string
      phone: string
    }
  }
  signature: string
  date: string
  files: any[]
}
