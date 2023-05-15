import * as yup from 'yup';

const schema = yup
  .object({
    vendorShop: yup.string().required(),
    availableDate: yup.date().required(),
    availableTimeFrom: yup.date().required(),
    availableTimeTo: yup.date().required(),
    vendorWorkOrder: yup.string(),
    vendorFleetManagerMessage: yup.string()
  })
  .required();

export default schema;
