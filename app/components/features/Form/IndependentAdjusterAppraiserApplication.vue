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
const state = reactive<IndependentAdjusterAppraiserApplicationType>({
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
    ref1: {
      name: '',
      phone: '',
    },
    ref2: {
      name: '',
      phone: '',
    },
    ref3: {
      name: '',
      phone: '',
    },
  },
  signature: '',
  date: '',
  files: [],
})

const onSubmit = () => {
  console.log(state)
}
</script>
<template>
  <div class="form-wrap">
    <EntityFormTitle title="Independent Adjuster / Appraiser Application" />
    <Form :validation-schema="schema" @submit="onSubmit" v-slot="{ errors }">
      <div class="form-block-wrap">
        <div class="form-block">
          <EntityFormSubTitle title="Applicant Information" />
          <div class="application-i-wrap">
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
            <div class="pref-block">
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
            <div class="pref-block">
              <EntityFormBlockSubTitle title="Availability:" />
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

      <EntityFormCheckbox
        :other="true"
        label="check box"
        v-model="state.isCheck"
        v-model:otherValue="state.otherText"
      />
      <EntityFormCheckbox label="check box" v-model="state.isCheck" />
      <EntityFormCheckbox
        label="check box"
        v-model="state.isCheck"
        :disabled="true"
      />
      <Field name="email" v-slot="{ field, errorMessage }">
        <EntityFormInput
          label="Email:"
          placeholder="Enter text"
          v-bind="field"
          :error="errorMessage"
          v-model="state.email"
        />
      </Field>
      <Field name="phone" v-slot="{ field, errorMessage }">
        <EntityFormInput
          label="Phone:"
          placeholder="Enter phone number"
          v-bind="field"
          :error="errorMessage"
          v-model="state.phone"
        />
      </Field>
      <div class="mt-5">
        <EntityFormFilePicker v-model:files="state.files" />
      </div>
      <EntityButtonSubmit text="Submit application" />
    </Form>
  </div>
</template>
<style lang="scss" scoped>
.form-wrap {
  padding: 32px 16px;

  border-radius: 8px;
  background: var(--Light);
  box-shadow: 0 4px 29.8px 0 rgba(227, 234, 243, 0.65);

  @include laptop {
    padding: 64px;
  }
}
.form-block-wrap {
  display: flex;
  flex-direction: column;
  gap: 24px;
  @include laptop {
    flex-direction: row;
    gap: 32px;
  }
}
.form-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @include laptop {
    gap: 32px;
  }
}
.application-i-wrap {
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
.pref-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
