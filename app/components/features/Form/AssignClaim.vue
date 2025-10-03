<script setup lang="ts">
import { type AssignClaimType } from '~/shared/types/assign-claim-type'
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'
const phoneSchema = yup
  .string()
  .matches(/^[0-9+\-\s()]+$/, 'Invalid characters in phone number')
  .test('min-max-digits', 'Phone must have 10–14 digits', value => {
    if (!value) return true
    const digits = value.replace(/\D/g, '')
    return digits.length >= 10 && digits.length <= 14
  })
const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  emailAddress: yup
    .string()
    .email('Invalid email')
    .required('Email is required'),
  phoneNumber: phoneSchema.required('Phone is required'),
  streetSuite: yup.string().required('Street is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zipCode: yup.string().required('ZIP is required'),
  country: yup.string().required('Country is required'),
  insuranceCompany: yup.string().required('Insurance Company is required'),
  damageDescription: yup.string().required('Damage Description is required'),
  dateLoss: yup.string().required('Date of Loss is required'),
  claimNumber: yup.string().required('Claim Number is required'),
  dateOfBirth: yup.string().required('Date of Birth is required'),
})
const initialState = (): AssignClaimType => ({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  streetSuite: '',
  city: '',
  state: '',
  zipCode: '',
  country: '',
  insuranceCompany: '',
  damageDescription: '',
  dateLoss: '',
  claimNumber: '',
  files: [],
})

const state = reactive<AssignClaimType>(initialState())

const onSubmit = () => {
  console.log(state)
  // Object.assign(state, initialState())
}
</script>
<template>
  <div class="form-main-wrap">
    <div class="title-wrap">
      <EntityFormTitle title="Claim submission :" />
      <EntityFormInfoFilePicker />
    </div>
    <Form :validation-schema="schema" @submit="onSubmit" v-slot="{ errors }">
      <div class="flex flex-col gap-6 laptop:flex-row laptop:gap-8">
        <div>
          <entity-form-sub-title title="Insured Contact Information" />
          <div class="flex flex-col gap-4 laptop:grid laptop:grid-cols-2">
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
            <Field name="emailAddress" v-slot="{ field, errorMessage }">
              <EntityFormInput
                label="Email Address:"
                placeholder="Enter text"
                v-bind="field"
                :error="errorMessage"
                v-model="state.email"
              />
            </Field>
            <Field name="phoneNumber" v-slot="{ field, errorMessage }">
              <EntityFormInput
                label="Phone Number:"
                placeholder="Enter text"
                v-bind="field"
                :error="errorMessage"
                v-model="state.phoneNumber"
              />
            </Field>
            <Field name="streetSuite" v-slot="{ field, errorMessage }">
              <EntityFormInput
                label="Street / Suite"
                placeholder="Enter text"
                v-bind="field"
                :error="errorMessage"
                v-model="state.streetSuite"
              />
            </Field>
            <Field name="city" v-slot="{ field, errorMessage }">
              <EntityFormInput
                label="City"
                placeholder="Enter text"
                v-bind="field"
                :error="errorMessage"
                v-model="state.city"
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
.title-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
