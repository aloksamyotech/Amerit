import * as yup from 'yup';

const ContactFormSchema = yup.object().shape({
  principalPerson: yup.string().required('Principle Name is Required'),
  principalPersonTitle: yup.string().required('principle Title is Required'),

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

export default ContactFormSchema;
