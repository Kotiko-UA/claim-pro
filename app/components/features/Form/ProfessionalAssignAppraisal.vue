<script setup lang="ts">
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'
import phoneSchema from '~/shared/files/phone-schema'
import { type ProfessionalAssignAppraisalType } from '~/shared/types/professional-assign-appraisal-type'

const schema = yup.object({
  referredBy: yup.string().required('Referred By is required'),

  assigned: yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    company: yup.string().required('Company is required'),
    phoneNumber: phoneSchema.required('Phone is required'),
  }),

  insured: yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: phoneSchema.required('Phone is required'),
    streetSuite: yup.string().required('Street is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    zipCode: yup.string().required('ZIP is required'),
    insuranceCompany: yup.string().required('Insurance Company is required'),
    damageDescription: yup.string().required('Damage Description is required'),
    dateLoss: yup.string().required('Date of Loss is required'),
    claimNumber: yup.string().required('Claim Number is required'),
  }),

  files: yup.array().of(yup.mixed()).optional(),
})

const initialState = (): ProfessionalAssignAppraisalType => ({
  referredBy: '',
  assigned: {
    firstName: '',
    lastName: '',
    company: '',
    phoneNumber: '',
  },
  insured: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetSuite: '',
    city: '',
    state: '',
    zipCode: '',
    insuranceCompany: '',
    damageDescription: '',
    dateLoss: '',
    claimNumber: '',
  },
  files: [],
})

const state = reactive<ProfessionalAssignAppraisalType>(initialState())

const onSubmitProfessionalAssign = () => {
  console.log(state)
  // Object.assign(state, initialState())
}

const fileTypes = [
  'Carrier Estimate',
  'Engineer Report',
  'Demand Estimate',
  'Denial Letter',
  'Itel Report',
  'Payment Letter',
  'Photos',
  'Roof Dimensions Report',
]
</script>
<template>
  <div class="form-main-wrap">
    <div class="title-wrap">
      <EntityFormTitle title="Appraisal submission :" />
      <EntityFormInfoFilePicker />
    </div>
    <Form
      :validation-schema="schema"
      @submit="onSubmitProfessionalAssign"
      v-slot="{ errors }"
    >
      <div class="flex flex-col gap-6 laptop:flex-row laptop:gap-8">
        <div class="flex flex-col w-full">
          <div class="flex flex-col gap-6 laptop:gap-8">
            <EntityFormSubTitle title="Referred by" />
            <Field name="referredBy" v-slot="{ field, errorMessage }">
              <EntityFormInput
                label="Referred by:"
                placeholder="Enter text"
                v-bind="field"
                :error="errorMessage"
                v-model="state.referredBy"
              />
            </Field>
            <div class="flex flex-col gap-6 laptop:gap-8">
              <EntityFormSubTitle title="Assigned by" />
              <div class="flex gap-4 flex-col laptop:grid laptop:grid-cols-2">
                <Field
                  name="assigned.firstName"
                  v-slot="{ field, errorMessage }"
                >
                  <EntityFormInput
                    label="First Name:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.assigned.firstName"
                  />
                </Field>
                <Field
                  name="assigned.lastName"
                  v-slot="{ field, errorMessage }"
                >
                  <EntityFormInput
                    label="Last Name:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.assigned.lastName"
                  />
                </Field>
                <Field name="assigned.company" v-slot="{ field, errorMessage }">
                  <EntityFormInput
                    label="Company:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.assigned.company"
                  />
                </Field>
                <Field
                  name="assigned.phoneNumber"
                  v-slot="{ field, errorMessage }"
                >
                  <EntityFormInput
                    label="Phone Number:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.assigned.phoneNumber"
                  />
                </Field>
              </div>
            </div>
            <div class="flex flex-col gap-6 laptop:gap-8">
              <EntityFormSubTitle title="Insured Contact Information" />
              <div class="flex flex-col gap-4 laptop:grid laptop:grid-cols-2">
                <Field
                  name="insured.firstName"
                  v-slot="{ field, errorMessage }"
                >
                  <EntityFormInput
                    label="First Name:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.insured.firstName"
                  />
                </Field>
                <Field name="insured.lastName" v-slot="{ field, errorMessage }">
                  <EntityFormInput
                    label="Last Name:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.insured.lastName"
                  />
                </Field>
                <Field name="insured.email" v-slot="{ field, errorMessage }">
                  <EntityFormInput
                    label="Email Address:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.insured.email"
                  />
                </Field>
                <Field name="insured.phone" v-slot="{ field, errorMessage }">
                  <EntityFormInput
                    label="Phone Number:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.insured.phone"
                  />
                </Field>
                <Field
                  name="insured.streetSuite"
                  v-slot="{ field, errorMessage }"
                >
                  <EntityFormInput
                    label="Street / Suite"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.insured.streetSuite"
                  />
                </Field>
                <Field name="insured.city" v-slot="{ field, errorMessage }">
                  <EntityFormInput
                    label="City"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.insured.city"
                  />
                </Field>
                <Field name="insured.state" v-slot="{ field, errorMessage }">
                  <EntityFormInput
                    label="State"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.insured.state"
                  />
                </Field>
                <Field name="insured.zipCode" v-slot="{ field, errorMessage }">
                  <EntityFormInput
                    label="Zip Code"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.insured.zipCode"
                  />
                </Field>
                <Field
                  name="insured.insuranceCompany"
                  v-slot="{ field, errorMessage }"
                >
                  <EntityFormInput
                    label="Insurance Company"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.insured.insuranceCompany"
                  />
                </Field>
                <Field
                  name="insured.damageDescription"
                  v-slot="{ field, errorMessage }"
                >
                  <EntityFormInput
                    label="Damage Description"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.insured.damageDescription"
                  />
                </Field>
                <Field name="insured.dateLoss" v-slot="{ field, errorMessage }">
                  <EntityFormInput
                    label="Date of Loss"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.insured.dateLoss"
                  />
                </Field>
                <Field
                  name="insured.claimNumber"
                  v-slot="{ field, errorMessage }"
                >
                  <EntityFormInput
                    label="Claim Number"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.insured.claimNumber"
                  />
                </Field>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full">
          <entity-form-file-picker-wrap :file-types="fileTypes">
            <entity-form-file-picker v-model:files="state.files" />
          </entity-form-file-picker-wrap>
        </div>
      </div>
      <EntityButtonSubmit class="ml-auto" text="Submit a Claim" />
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
.title-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
