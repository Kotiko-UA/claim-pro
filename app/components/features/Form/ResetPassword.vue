<script setup lang="ts">
import { type ResetPasswordType } from '~/shared/types/reset-password-types'
import { Form, Field } from 'vee-validate'
import { ref, nextTick } from 'vue'
import * as yup from 'yup'
const schema = yup.object({
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
                <Field name="password" v-slot="{ field, errorMessage }">
                <EntityFormInput
                    label="Enter New Password:"
                    placeholder="Enter text"
                    v-bind="field"
                    :error="errorMessage"
                    v-model="state.newPassword"
                />
                </Field>
                <Field name="confirm-password" v-slot="{ field, errorMessage }">
                <EntityFormInput
                    label="Confirm Password:"
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
