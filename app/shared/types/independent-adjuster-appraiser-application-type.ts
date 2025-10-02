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
}
