<script setup lang="ts">
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^\+?[0-9]{10,14}$/, 'Invalid phone number')
    .required('Phone is required'),
})
const state = reactive({
  fullName: '',
  email: '',
  phone: '',
  isCheck: false,
  otherText: '',
  files: [],
})

watch(state, () => console.log(state))
</script>
<template>
  <section>
    <div class="container">
      <Form :validation-schema="schema" v-slot="{ errors }">
        <Field name="fullName" v-slot="{ field, errorMessage }">
          <EntityFormInput
            label="Full Name:"
            placeholder="Enter full name"
            v-bind="field"
            :error="errorMessage"
            v-model="state.fullName"
          />
        </Field>
        <EntityFormCheckbox
          :other="true"
          label="check box"
          v-model="state.isCheck"
          v-model:otherValue="state.otherText"
        />
        <Field name="email" v-slot="{ field, errorMessage }">
          <EntityFormInput
            label="Email:"
            placeholder="Enter email"
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
  </section>
</template>
<style lang="scss" module></style>
