import * as yup from 'yup'

export default yup.object().shape({
  expression: yup.string().required(),
  precision: yup.number().min(0).max(20),
});