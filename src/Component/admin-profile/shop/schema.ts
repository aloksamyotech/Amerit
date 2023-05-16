import * as yup from 'yup';

export const AddShop = yup.object().shape({
  shopName: yup.string().required('Shop Name is Required'),
  phone: yup.number().required('Phone is Required'),
  address1: yup.string().required('Address 1 is Required'),
  address2: yup.string().required('Address 2 is required'),
  state: yup.string().required('State is Required'),
  city: yup.string().required('City Established is Required'),
  zip: yup.string().required('Zip code is Required'),
  startTime: yup.string().required('StartTime is Required'),
  endTime: yup.string().required('EndTime is required'),
  checkbox: yup.bool().oneOf([true], 'Checkbox selection is required'),
  minorityOwned: yup.string().required('Ownership is required'),
  paymentTerms: yup.string().required('Payment Terms are required'),
  services: yup.boolean(),
  parts: yup.boolean(),
  toolsAndSupplies: yup.boolean(),
  oemDealer: yup.boolean()
});
