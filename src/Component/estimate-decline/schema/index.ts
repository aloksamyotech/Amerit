import * as yup from 'yup';

const schema = yup
  .object({
    reasonId: yup.string(),
    vendorFleetManagerMessage: yup.string()
  })
  .required();

export default schema;
