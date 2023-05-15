import * as yup from 'yup';

export const AddShopSchema = yup.object().shape({
  shopName: yup.string().required('Shop Name is Required'),
  Phone: yup.number().required('Phone is Required'),
  city: yup.string().required('City is required'),
  city2: yup.string().required('City is required'),
  Address: yup.string().required('Address is Required'),
  state: yup.string().required('State is Required'),
  City: yup.string().required('City Established is Required'),
  StartTime: yup.string().required('StartTime is Required'),
  EndTime: yup.string().required('EndTime is required'),
  checkbox: yup.bool().oneOf([true], 'Checkbox selection is required'),
  minorityOwned: yup.string().required('Ownership is required'),
  paymentTerms: yup.string().required('Payment Terms are required'),
  services: yup.boolean(),
  parts: yup.boolean(),
  toolsAndSupplies: yup.boolean(),
  oemDealer: yup.boolean()
});
