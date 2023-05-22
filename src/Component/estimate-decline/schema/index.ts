import * as yup from 'yup';

const schema = yup
  .object({
    code: yup.string(),
    message: yup.string()
  })
  .required();

export default schema;
