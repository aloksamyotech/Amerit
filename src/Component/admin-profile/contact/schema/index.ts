import * as yup from 'yup';

const ContactFormSchema = yup.object().shape({
  principleName: yup.string().required('Principle Name is Required'),
  principleTitle: yup.string().required('principle Title is Required'),
  otherContacts: yup.array().of(
    yup.object().shape({
      name: yup.string().required('name required'),
      email: yup.string().required('email required'),
      phone: yup
        .string()
        .required('Phone is Required')
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(10, 'Minimum  10 digits are allowed.')
        .max(10, 'Maximum 10 digits are allowed.')
    })
  )
});

// primaryName: yup.string().required('primary Name is required'),
// primaryEmail: yup.string().required('primary Email is required'),
// primaryPhone: yup
//   .string()
//   .required('primary Phone is Required')
//   .matches(/^[0-9]+$/, 'Must be only digits')
//   .min(10, 'Minimum  10 digits are allowed.')
//   .max(10, 'Maximum 10 digits are allowed.'),
// accountName: yup.string().required('account Name is Required'),
// accountEmail: yup.string().required('account Email is Required'),
// accountPhone: yup
//   .string()
//   .required('account  Phone is Required')
//   .matches(/^[0-9]+$/, 'Must be only digits')
//   .min(10, 'Minimum  10 digits are allowed.')
//   .max(10, 'Maximum 10 digits are allowed.'),
// companyName: yup.string().required('company Name is required'),
// companyEmail: yup.string().required('companyEmail is required'),
// companyPhone: yup
//   .string()
//   .required('account  Phone is Required')
//   .matches(/^[0-9]+$/, 'Must be only digits')
//   .min(10, 'Minimum  10 digits are allowed.')
//   .max(10, 'Maximum 10 digits are allowed.')

export default ContactFormSchema;
