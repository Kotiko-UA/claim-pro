<script setup lang="ts">
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'
import { type IndependentAdjusterAppraiserApplicationType } from '~/shared/types/independent-adjuster-appraiser-application-type'

const schema = yup.object({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^\+?[0-9]{10,14}$/, 'Invalid phone number')
    .required('Phone is required'),
})
const initialState = (): IndependentAdjusterAppraiserApplicationType => ({
  applicantInformation: {
    fullName: '',
    address: '',
    emailAddress: '',
    cityStateZIP: '',
    phoneNumber: '',
    dateOfBirth: '',
  },
  workPreferences: {
    willingTravelCatastropheDeployments: false,
    availability: {
      fullTime: false,
      partTime: false,
      seasonal: false,
    },
    preferredRegions: '',
  },
  professionalInformation: {
    applyingAs: {
      independentAdjuster: false,
      appraiser: false,
      umpire: false,
      deskReviewer: false,
      other: '',
    },
    primaryAreasExpertise: {
      residentialProperty: false,
      commercialProperty: false,
      catastropheClaims: false,
      dailyClaims: false,
      appraisalUmpireServices: false,
    },
  },
  eOLiabilityInsurance: {
    checked: false,
    text: '',
  },
  softwareProficiency: '',
  stateLicensesHeld: '',
  yearsExperience: '',
  supportingDocuments: {
    resume: false,
    copyAdjusterLicense: false,
    proofInsurance: false,
    certificationsTraining: false,
  },
  references: {
    ref1: { name: '', phone: '' },
    ref2: { name: '', phone: '' },
    ref3: { name: '', phone: '' },
  },
  signature: '',
  date: '',
  files: [],
})

const state = reactive<IndependentAdjusterAppraiserApplicationType>(
  initialState()
)

const onSubmit = () => {
  console.log(state)
  Object.assign(state, initialState())
}
</script>
<template>
  <div class="form-main-wrap">
    <EntityFormTitle title="Independent Adjuster / Appraiser Application" />
    <Form :validation-schema="schema" @submit="onSubmit" v-slot="{ errors }">
      <div class="form-wrap">
        <div class="form-block-wrap">
          <div class="form-block">
            <EntityFormSubTitle title="Applicant Information" />
            <div class="grid-block-wrap">
              <Field name="fullName" v-slot="{ field, errorMessage }">
                <EntityFormInput
                  label="Full Name:"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.applicantInformation.fullName"
                />
              </Field>
              <Field name="address" v-slot="{ field, errorMessage }">
                <EntityFormInput
                  label="Address:"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.applicantInformation.address"
                />
              </Field>
              <Field name="email" v-slot="{ field, errorMessage }">
                <EntityFormInput
                  label="Email Address:"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.applicantInformation.emailAddress"
                />
              </Field>
              <Field name="city" v-slot="{ field, errorMessage }">
                <EntityFormInput
                  label="City/State/ZIP:"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.applicantInformation.cityStateZIP"
                />
              </Field>
              <Field name="phone" v-slot="{ field, errorMessage }">
                <EntityFormInput
                  label="Phone Number:"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.applicantInformation.phoneNumber"
                />
              </Field>
              <Field name="dateBirth" v-slot="{ field, errorMessage }">
                <EntityFormInput
                  label="Date of Birth:"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.applicantInformation.dateOfBirth"
                />
              </Field>
            </div>
          </div>
          <div class="form-block">
            <EntityFormSubTitle title="Work Preferences" />
            <div class="work-pref-wrap">
              <div class="vertical-block">
                <EntityFormCheckbox
                  label="Willing to travel for Catastrophe Deployments?"
                  v-model="
                    state.workPreferences.willingTravelCatastropheDeployments
                  "
                />
                <Field name="preferredRegions" v-slot="{ field, errorMessage }">
                  <EntityFormInput
                    label="Preferred Regions:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.workPreferences.preferredRegions"
                  />
                </Field>
              </div>
              <div class="vertical-block">
                <EntityFormBlockSubTitle class="mb-2" title="Availability:" />
                <EntityFormCheckbox
                  label="Full-Time"
                  v-model="state.workPreferences.availability.fullTime"
                />
                <EntityFormCheckbox
                  label="Part-Time"
                  v-model="state.workPreferences.availability.partTime"
                />
                <EntityFormCheckbox
                  label="Seasonal"
                  v-model="state.workPreferences.availability.seasonal"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="form-block">
          <EntityFormSubTitle title="Professional Information" />
          <div class="form-block-wrap">
            <div class="vertical-block">
              <EntityFormBlockSubTitle
                class="mb-2"
                title="Applying as (check one):"
              />
              <EntityFormCheckbox
                label="Independent Adjuster"
                v-model="
                  state.professionalInformation.applyingAs.independentAdjuster
                "
              />
              <EntityFormCheckbox
                label="Appraiser"
                v-model="state.professionalInformation.applyingAs.appraiser"
              />
              <EntityFormCheckbox
                label="Umpire"
                v-model="state.professionalInformation.applyingAs.umpire"
              />
              <EntityFormCheckbox
                label="Desk Reviewer"
                v-model="state.professionalInformation.applyingAs.deskReviewer"
              />
              <EntityFormCheckbox
                label="Other:"
                :other="true"
                v-model:other-value="
                  state.professionalInformation.applyingAs.other
                "
              />
            </div>
            <div class="vertical-block">
              <EntityFormBlockSubTitle
                class="mb-2"
                title="Primary Areas of Expertise (check all that apply):"
              />
              <EntityFormCheckbox
                label="Independent Adjuster"
                v-model="
                  state.professionalInformation.applyingAs.independentAdjuster
                "
              />
              <EntityFormCheckbox
                label="Appraiser"
                v-model="state.professionalInformation.applyingAs.appraiser"
              />
              <EntityFormCheckbox
                label="Umpire"
                v-model="state.professionalInformation.applyingAs.umpire"
              />
              <EntityFormCheckbox
                label="Desk Reviewer"
                v-model="state.professionalInformation.applyingAs.deskReviewer"
              />
              <EntityFormCheckbox
                label="Other:"
                :other="true"
                v-model:other-value="
                  state.professionalInformation.applyingAs.other
                "
              />
            </div>
            <div class="vertical-block">
              <EntityFormCheckbox
                label=" E&O / Liability Insurance"
                :other="true"
                v-model="state.eOLiabilityInsurance.checked"
                v-model:other-value="state.eOLiabilityInsurance.text"
              />
            </div>
          </div>
          <div class="form-block-wrap">
            <div class="vertical-block !grow-0">
              <EntityFormSubTitle
                class="mb-3"
                title="Supporting Documents (attach if applicable)"
              />
              <EntityFormCheckbox
                label="Resume"
                v-model="state.supportingDocuments.resume"
              />
              <EntityFormCheckbox
                label="Copy of Adjuster License(s)"
                v-model="state.supportingDocuments.copyAdjusterLicense"
              />
              <EntityFormCheckbox
                label="Proof of Insurance"
                v-model="state.supportingDocuments.proofInsurance"
              />
              <EntityFormCheckbox
                label="Certifications / Training"
                v-model="state.supportingDocuments.certificationsTraining"
              />
            </div>
            <div class="form-block grow-1">
              <EntityFormSubTitle class="mb-3" title="References" />
              <div class="grid-block-wrap">
                <Field name="fullName" v-slot="{ field, errorMessage }">
                  <EntityFormInput
                    label="Name:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.references.ref1.name"
                  />
                </Field>
                <Field name="phone" v-slot="{ field, errorMessage }">
                  <EntityFormInput
                    label="Phone:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.references.ref1.phone"
                  />
                </Field>
                <Field name="fullName" v-slot="{ field, errorMessage }">
                  <EntityFormInput
                    label="Name:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.references.ref2.name"
                  />
                </Field>
                <Field name="phone" v-slot="{ field, errorMessage }">
                  <EntityFormInput
                    label="Phone:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.references.ref2.phone"
                  />
                </Field>
                <Field name="fullName" v-slot="{ field, errorMessage }">
                  <EntityFormInput
                    label="Name:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.references.ref3.name"
                  />
                </Field>
                <Field name="phone" v-slot="{ field, errorMessage }">
                  <EntityFormInput
                    label="Phone:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.references.ref3.phone"
                  />
                </Field>
              </div>
            </div>
          </div>
        </div>
        <div class="form-block">
          <EntityFormSubTitle title="Acknowledgment" />
          <p class="acknowledgment-text">
            I certify that the information provided is accurate and complete to
            the best of my knowledge.
          </p>
          <div class="form-block-wrap">
            <Field name="fullName" v-slot="{ field, errorMessage }">
              <EntityFormInput
                label="Signature:"
                placeholder="Enter text"
                v-bind="field"
                :error="errorMessage"
                v-model="state.signature"
              />
            </Field>
            <Field name="fullName" v-slot="{ field, errorMessage }">
              <EntityFormInput
                label=" Date:"
                placeholder="Enter text"
                v-bind="field"
                :error="errorMessage"
                v-model="state.date"
              />
            </Field>
          </div>
        </div>
      </div>

      <EntityButtonSubmit class="ml-auto" text="Submit application" />
    </Form>
  </div>
</template>
<style lang="scss" scoped>
.form-main-wrap {
  padding: 32px 16px;

  border-radius: 8px;
  background: var(--Light);
  box-shadow: 0 4px 29.8px 0 rgba(227, 234, 243, 0.65);

  @include laptop {
    padding: 64px;
  }
}
.form-wrap {
  display: flex;
  flex-direction: column;
  gap: 24px;
  @include laptop {
    gap: 32px;
  }
}
.form-block-wrap {
  display: flex;
  flex-direction: column;
  gap: 24px;
  @include laptop {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
  }
}
.form-block {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @include laptop {
    gap: 32px;
  }
}
.grid-block-wrap {
  display: flex;
  gap: 16px;
  flex-direction: column;
  @include laptop {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}
.work-pref-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
  @include laptop {
    flex-direction: row;
  }
}
.vertical-block {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.vertical-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.acknowledgment-text {
  color: var(--Dark);
}
</style>
