import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  type: yup.string().required(),
  location: yup.string().required(),
  availability: yup.boolean().required(),
});
