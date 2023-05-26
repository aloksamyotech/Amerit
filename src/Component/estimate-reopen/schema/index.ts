import * as yup from 'yup';

const ALPHA_NUMERIC_REGEX = /^[0-9a-zA-Z]+$/;
const MIN_LIMIT_MESSAGE = 'Value should have at least 4 characters';
const LIMIT_4 = 4;
const LIMIT_200 = 200;

const getMaxLimitMessage = (value: number = 200) =>
  `Value should be less than ${value} characters`;

export const schema = yup.object().shape({
  description: yup
    .string()
    .required()
    .test('reopenEstimateReason', 'error', function (value) {
      const { path, createError } = this;
      if (value?.length === 0) return true;

      if (value && value?.length >= LIMIT_4 && value?.length <= LIMIT_200) {
        const regexValid = value?.match(ALPHA_NUMERIC_REGEX);
        if (regexValid != null) {
          return true;
        }
      
        return createError({
          path,
          message: 'Alpha Numeric characters are allowed',
        });
      }
      if (value && value?.length <= LIMIT_4) {
        return createError({
          path,
          message: `Description ${MIN_LIMIT_MESSAGE}`,
        });
      }
      if (value && value?.length >= LIMIT_200) {
        return createError({
          path,
          message: `Description ${getMaxLimitMessage()}`,
        });
      }
    })
    .nullable(),
    reason: yup
    .string()
    .test('is-selected', 'reason is a required field', value => value !== '')
    .required(),
});
