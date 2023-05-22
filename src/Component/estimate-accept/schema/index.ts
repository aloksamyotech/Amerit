import * as yup from 'yup';

const schema = yup
  .object({
    vendorShop: yup.string().required(),
    availableDate: yup.date().required(),
    availableTimeFrom: yup.date().required(),
    availableTimeTo: yup.date().required(),
    vendorWorkOrderNumber: yup.string(),
    message: yup.string()
  })
  .required();

export default schema;
