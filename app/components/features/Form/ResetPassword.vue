<script setup lang="ts">
import { type ResetPasswordType } from '~/shared/types/reset-password-types'
import { Form, Field } from 'vee-validate'
import { ref, nextTick } from 'vue'
import * as yup from 'yup'
const schema = yup.object({
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
    .oneOf([yup.ref('password')], 'Passwords must match'),
})
 

const initialState = (): ResetPasswordType => ({
    newPassword: '',
    confirmPassword: ''
})

const code = ref('')

const state = reactive<ResetPasswordType>(initialState())

const onSubmitAssign = () => {
    console.log({ code: code.value, ...state })  
}
</script>

<template>
    <p>We have sent a code to your registred email.</p>
    <div class="form-reset-password">
        <Form
        :validation-schema="schema"
        @submit="onSubmitAssign"
        v-slot="{ errors }"
        >
            <EntityFormVerificationCodeInput v-model="code" />
        <div class="flex flex-col items-start text-left gap-4 laptop:gap-6">
                <Field name="new-password" v-slot="{ field, errorMessage }">
                <EntityFormInput
                    label="Enter New Password:"
                    type="password"
                    id="password"
                    autocomplete="password"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.newPassword"
                />
                </Field>
                <Field name="confirm-password" v-slot="{ field, errorMessage }">
                <EntityFormInput
                    label="Confirm Password:"
                    type="password"
                    id="password"
                    autocomplete="password"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.confirmPassword"
                />
                </Field>            
        </div>
        <EntityButtonSubmit class="ml-auto mr-auto" text="Confirm" />
        </Form>
    </div>
</template>

<style lang="scss" scoped>

    .input-reset-password{
        text-align: left;
    }

    .form-reset-password {
      margin-bottom: 48px;
    }

    .form-reset-email{
      text-align: left;
    }

</style>
