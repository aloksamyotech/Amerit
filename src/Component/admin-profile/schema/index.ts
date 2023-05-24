import * as yup from 'yup';

const ProfileFormSchema = yup.object().shape({
  companyName: yup.string().required('Company Name is Required'),
  address1: yup.string().required('Address is Required'),
  address2: yup.string(),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is Required'),
  zip: yup
    .string()
    .required('Zip is Required')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(4, 'Minimum 4 digits are allowed.')
    .max(6, 'Maximum 6 digits are allowed.'),
  yearEstablished: yup
    .string()
    .required('Year Established is Required')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(4, 'Must be exactly 4 digits')
    .max(4, 'Must be exactly 4 digits'),
  federalTaxIdNumber: yup.string().required('EIN is Required'),
  dunsNumber: yup.string().required('DUNS Number is required'),
  minorityOwned: yup.string().required('Ownership is required'),
  paymentTermsId: yup
    .number()
    .min(1, 'Payment Terms are required')
    .required('Payment Terms are required'),
  services: yup.boolean(),
  parts: yup.boolean(),
  toolsAndSupplies: yup.boolean(),
  oemDealer: yup.boolean()
});

export default ProfileFormSchema;
