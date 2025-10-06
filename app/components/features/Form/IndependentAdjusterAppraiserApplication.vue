<script setup lang="ts">
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'
import { type IndependentAdjusterAppraiserApplicationType } from '~/shared/types/independent-adjuster-appraiser-application-type'
import phoneSchema from '~/shared/files/phone-schema'
const schema = yup.object({
  applicantInformation: yup.object({
    fullName: yup.string().required('Full name is required'),
    address: yup.string().required('Address is required'),
    emailAddress: yup
      .string()
      .email('Invalid email')
      .required('Email is required'),
    cityStateZIP: yup.string().required('City/State/ZIP is required'),
    phoneNumber: phoneSchema.required('Phone is required'),
    dateOfBirth: yup.string().required('Date of Birth is required'),
  }),
  preferredRegions: yup.string().required('Regions is required'),
  stateLicensesHeld: yup.string().required('State Licenses Held is required'),
  softwareProficiency: yup
    .string()
    .required('Software Proficiency is required'),
  yearsExperience: yup.string().required('Years of Experience is required'),
  references: yup.object({
    ref1: yup.object({
      name: yup.string(),
      phone: phoneSchema,
    }),
    ref2: yup.object({
      name: yup.string(),
      phone: phoneSchema,
    }),
    ref3: yup.object({
      name: yup.string(),
      phone: phoneSchema,
    }),
  }),
  signature: yup.string().required('Signature is required'),
  date: yup.string().required('Date is required'),
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
  stateLicensesHeld: '',
  yearsExperience: '',
  softwareProficiency: '',
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
})

const state = reactive<IndependentAdjusterAppraiserApplicationType>(
  initialState()
)

const onSubmit = () => {
  console.log(state)
  // Object.assign(state, initialState())
}
</script>
<template>
  <div class="form-main-wrap">
    <EntityFormTitle title="Independent Adjuster / Appraiser Application" />
    <Form :validation-schema="schema" @submit="onSubmit" v-slot="{ errors }">
      <div class="form-wrap">
        <div
          class="flex flex-col gap-6 laptop:flex-row justify-center items-center laptop:gap-8"
        >
          <div class="w-full flex flex-col gap-6 laptop:gap-6 grow-1">
            <EntityFormSubTitle title="Applicant Information" />
            <div class="flex gap-4 flex-col laptop:grid laptop:grid-cols-2">
              <Field
                name="applicantInformation.fullName"
                v-slot="{ field, errorMessage }"
              >
                <EntityFormInput
                  label="Full Name:"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.applicantInformation.fullName"
                />
              </Field>
              <Field
                name="applicantInformation.address"
                v-slot="{ field, errorMessage }"
              >
                <EntityFormInput
                  label="Address:"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.applicantInformation.address"
                />
              </Field>
              <Field
                name="applicantInformation.emailAddress"
                v-slot="{ field, errorMessage }"
              >
                <EntityFormInput
                  label="Email Address:"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.applicantInformation.emailAddress"
                />
              </Field>
              <Field
                name="applicantInformation.cityStateZIP"
                v-slot="{ field, errorMessage }"
              >
                <EntityFormInput
                  label="City/State/ZIP:"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.applicantInformation.cityStateZIP"
                />
              </Field>
              <Field
                name="applicantInformation.phoneNumber"
                v-slot="{ field, errorMessage }"
              >
                <EntityFormInput
                  label="Phone Number:"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.applicantInformation.phoneNumber"
                />
              </Field>
              <Field
                name="applicantInformation.dateOfBirth"
                v-slot="{ field, errorMessage }"
              >
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
          <div class="w-full flex flex-col gap-6 laptop:gap-6 grow-1">
            <EntityFormSubTitle title="Work Preferences" />
            <div class="flex flex-col gap-4 laptop:flex-row">
              <div class="flex flex-col gap-4">
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
              <div class="flex flex-col gap-4">
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
        <div class="flex flex-col gap-6 laptop:gap-6 grow-1">
          <EntityFormSubTitle title="Professional Information" />
          <div
            class="flex flex-col gap-6 laptop:flex-row justify-center laptop:gap-8"
          >
            <div class="w-full flex flex-col gap-4">
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
            <div class="w-full flex flex-col gap-4">
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
            <div class="w-full flex flex-col gap-4">
              <EntityFormCheckbox
                label=" E&O / Liability Insurance"
                :other="true"
                v-model="state.eOLiabilityInsurance.checked"
                v-model:other-value="state.eOLiabilityInsurance.text"
              />
            </div>
          </div>
          <div
            class="flex flex-col gap-6 laptop:flex-row laptop:gap-8 laptop:justify-start"
          >
            <div class="flex flex-col gap-4">
              <Field name="stateLicensesHeld" v-slot="{ field, errorMessage }">
                <EntityFormInput
                  label="State Licenses Held (list states & license numbers):"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.stateLicensesHeld"
                />
              </Field>
              <Field name="yearsExperience" v-slot="{ field, errorMessage }">
                <EntityFormInput
                  label="Years of Experience:"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.yearsExperience"
                />
              </Field>
            </div>
            <div class="flex flex-col gap-4">
              <Field
                name="softwareProficiency"
                v-slot="{ field, errorMessage }"
              >
                <EntityFormInput
                  label="Software Proficiency (Xactimate, Symbility, etc.):"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.softwareProficiency"
                />
              </Field>
            </div>
          </div>
          <div
            class="flex flex-col gap-6 laptop:flex-row justify-center items-center gap-8"
          >
            <div class="w-full flex flex-col gap-4 !grow-0">
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
            <div class="w-full flex flex-col gap-6 laptop:gap-6 grow-1 grow-1">
              <EntityFormSubTitle class="mb-3" title="References" />
              <div class="flex gap-4 flex-col laptop:grid laptop:grid-cols-2">
                <Field
                  name="references.ref1.name"
                  v-slot="{ field, errorMessage }"
                >
                  <EntityFormInput
                    label="Name:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.references.ref1.name"
                  />
                </Field>
                <Field
                  name="references.ref1.phone"
                  v-slot="{ field, errorMessage }"
                >
                  <EntityFormInput
                    label="Phone:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.references.ref1.phone"
                  />
                </Field>
                <Field
                  name="references.ref2.name"
                  v-slot="{ field, errorMessage }"
                >
                  <EntityFormInput
                    label="Name:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.references.ref2.name"
                  />
                </Field>
                <Field
                  name="references.ref2.phone"
                  v-slot="{ field, errorMessage }"
                >
                  <EntityFormInput
                    label="Phone:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.references.ref2.phone"
                  />
                </Field>
                <Field
                  name="references.ref3.name"
                  v-slot="{ field, errorMessage }"
                >
                  <EntityFormInput
                    label="Name:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.references.ref3.name"
                  />
                </Field>
                <Field
                  name="references.ref3.phone"
                  v-slot="{ field, errorMessage }"
                >
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
        <div class="flex flex-col gap-6 laptop:gap-6 grow-1">
          <EntityFormSubTitle title="Acknowledgment" />
          <p class="acknowledgment-text">
            I certify that the information provided is accurate and complete to
            the best of my knowledge.
          </p>
          <div
            class="flex flex-col gap-6 laptop:flex-row justify-center items-center gap-8"
          >
            <Field name="signature" v-slot="{ field, errorMessage }">
              <EntityFormInput
                label="Signature:"
                placeholder="Enter text"
                v-bind="field"
                :error="errorMessage"
                v-model="state.signature"
              />
            </Field>
            <Field name="date" v-slot="{ field, errorMessage }">
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

.acknowledgment-text {
  color: var(--Dark);
}
</style>
