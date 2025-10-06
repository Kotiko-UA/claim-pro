<script setup lang="ts">
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'
import phoneSchema from '~/shared/files/phone-schema'
import { type SubmitSupplementType } from '~/shared/types/submit-supplement-type'
const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: phoneSchema.required('Phone is required'),
  insuranceCompany: yup.string().required('Insurance Company is required'),
  claimNumber: yup.string().required('Claim Number is required'),
  damageDescription: yup.string().required('Damage Description is required'),
  files: yup.array().of(yup.mixed()).optional(),
})

const initialState = (): SubmitSupplementType => ({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  insuranceCompany: '',
  claimNumber: '',
  damageDescription: '',
  files: [],
})

const state = reactive<SubmitSupplementType>(initialState())

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
      <EntityFormTitle title="Submit a Supplement" />
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
            <EntityFormSubTitle title="Insured Contact Information" />
            <div class="flex gap-4 flex-col laptop:grid laptop:grid-cols-2">
              <Field name="firstName" v-slot="{ field, errorMessage }">
                <EntityFormInput
                  label="First Name:"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.firstName"
                />
              </Field>
              <Field name="lastName" v-slot="{ field, errorMessage }">
                <EntityFormInput
                  label="Last Name:"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.lastName"
                />
              </Field>
              <Field name="email" v-slot="{ field, errorMessage }">
                <EntityFormInput
                  label="Email Address:"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.email"
                />
              </Field>
              <Field name="phone" v-slot="{ field, errorMessage }">
                <EntityFormInput
                  label="Phone Number:"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.phone"
                />
              </Field>
              <Field name="insuranceCompany" v-slot="{ field, errorMessage }">
                <EntityFormInput
                  label="Insurance Company"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.insuranceCompany"
                />
              </Field>
              <Field name="claimNumber" v-slot="{ field, errorMessage }">
                <EntityFormInput
                  label="Claim Number"
                  placeholder="Enter text"
                  v-bind="field"
                  :error="errorMessage"
                  v-model="state.claimNumber"
                />
              </Field>
            </div>
            <EntityFormSubTitle title="Damage Description" />
            <Field name="damageDescription" v-slot="{ field, errorMessage }">
              <EntityFormInput
                label="Description of additional or missing damages / costs"
                placeholder="Enter text"
                v-bind="field"
                :error="errorMessage"
                v-model="state.damageDescription"
              />
            </Field>
          </div>
        </div>
        <div class="w-full">
          <entity-form-file-picker-wrap :file-types="fileTypes">
            <entity-form-file-picker v-model:files="state.files" />
          </entity-form-file-picker-wrap>
        </div>
      </div>
      <EntityButtonSubmit class="ml-auto" text="Submit Supplement" />
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
