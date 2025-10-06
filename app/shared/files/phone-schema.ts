import * as yup from 'yup'
const phoneSchema = yup
  .string()
  .matches(/^[0-9+\-\s()]+$/, 'Invalid characters in phone number')
  .test('min-max-digits', 'Phone must have 10–14 digits', value => {
    if (!value) return true
    const digits = value.replace(/\D/g, '')
    return digits.length >= 10 && digits.length <= 14
  })
export default phoneSchema
