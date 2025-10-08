<script setup lang="ts">
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'
import { type EditProfileTypes } from '~/shared/types/edit-profile-types'

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  oldPassword: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(
      /[@$!%*?&#^()_+\-=\[\]{};':"\\|,.<>\/?]/,
      'Password must contain at least one special character'
    ),
  newPassword: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(
      /[@$!%*?&#^()_+\-=\[\]{};':"\\|,.<>\/?]/,
      'Password must contain at least one special character'
    ),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('newPassword')], 'Passwords must match'),
})

const initialState = (): EditProfileTypes => ({
  firstName: '',
  lastName: '',
  type: userType.value,
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
})

const userTypeState = reactive({
  professional: true,
  contractor: false,
})

const userType = computed((): 'professional' | 'contractor' => {
  return userTypeState.professional ? 'professional' : 'contractor'
})

const state = reactive<EditProfileTypes>(initialState())

function selectType(type: 'professional' | 'contractor') {
  if (type === 'professional') {
    userTypeState.professional = true
    userTypeState.contractor = false
  } else {
    userTypeState.contractor = true
    userTypeState.professional = false
  }

  state.type = type
}

const onSubmit = () => {
  console.log(state)
}
</script>
<template>
  <Form :validation-schema="schema" @submit="onSubmit" v-slot="{ errors }">
    <div
      class="flex flex-col gap-6 mb-6 laptop:flex-row laptop:justify-between"
    >
      <Field name="firstName" v-slot="{ field, errorMessage }">
        <EntityFormInput
          id="firstName"
          label="First Name:"
          placeholder="Enter text"
          v-bind="field"
          :error="errorMessage"
          v-model="state.firstName"
        />
      </Field>
      <Field name="lastName" v-slot="{ field, errorMessage }">
        <EntityFormInput
          id="lastName"
          label="Last Name:"
          placeholder="Enter text"
          v-bind="field"
          :error="errorMessage"
          v-model="state.lastName"
        />
      </Field>
    </div>
    <EntityFormBlockSubTitle class="mr-auto mb-6" title="Your account type:" />
    <div class="flex flex-col gap-6 laptop:flex-row laptop:gap-8">
      <EntityFormCheckbox
        label="Claims professional"
        v-model="userTypeState.professional"
        :value="userTypeState.professional"
        @click="selectType('professional')"
      />
      <EntityFormCheckbox
        label="Contractor"
        v-model="userTypeState.contractor"
        :value="userTypeState.contractor"
        @click="selectType('contractor')"
      />
    </div>
    <div>
      <h3
        class="font-semibold text-[20px] leading-[120%] text-[#1D3557] mt-[56px] mb-6"
      >
        Change your password
      </h3>
      <div class="flex flex-col items-start text-left gap-4 laptop:gap-4">
        <div class="w-full">
          <Field name="password" v-slot="{ field, errorMessage }">
            <EntityFormInput
              label="Enter your current password:"
              type="password"
              id="oldPassword"
              autocomplete="oldPassword"
              placeholder="Enter text"
              v-bind="field"
              :error="errorMessage"
              v-model="state.oldPassword"
            />
          </Field>
          <NuxtLink
            class="mt-2 text-[14px] text-right text-[#ADB9CC]"
            to="/auth/reset"
          >
            Forgot password?
          </NuxtLink>
        </div>
        <Field name="newPassword" v-slot="{ field, errorMessage }">
          <EntityFormInput
            label="Enter New Password:"
            type="password"
            id="newPassword"
            autocomplete="newPassword"
            placeholder="Enter text"
            v-bind="field"
            :error="errorMessage"
            v-model="state.newPassword"
          />
        </Field>
        <Field name="confirmPassword" v-slot="{ field, errorMessage }">
          <EntityFormInput
            label="Confirm Password:"
            type="password"
            id="confirmPassword"
            autocomplete="confirmPassword"
            placeholder="Enter text"
            v-bind="field"
            :error="errorMessage"
            v-model="state.confirmPassword"
          />
        </Field>
      </div>
    </div>
    <EntityButtonSubmit class="ml-auto" text="Save changes" />
  </Form>
</template>

<style lang="scss" scoped></style>
