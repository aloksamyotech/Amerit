import * as yup from 'yup';

export const editJobSectionschema = yup.object().shape({
  notes: yup.string().optional(),
  complaint: yup.string().required(),
  cause: yup.string().required(),
  correction: yup.string().required(),
});

export const addJobSectionSchema = yup.object().shape({
  vrms: yup.string().required(),
  jobType: yup.string().required(),
  complaint: yup.string().required(),
  cause: yup.string().required(),
  correction: yup.string().required(),
  notes: yup.string().optional(),
});
