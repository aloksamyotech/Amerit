import * as yup from 'yup';

/* TODO: Reinstate validation once we have real data
const ALPHA_NUMERIC_REGEX = /^[0-9a-zA-Z]+$/;
const MIN_LIMIT_MESSAGE = 'value should have at least 3 characters';
const LIMIT_3 = 3;
const LIMIT_12 = 12;
const LIMIT_24 = 24;

const getMaxLimitMessage = (value: number = 12) =>
  `value should be less than ${value} characters`;
*/

export const schema = yup.object().shape({
  repairOrderNbr: yup
    .string()

    // TODO: Remove the no-unused-vars when we have real data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .test('repairOrderNbr', 'error', function (value) {
      return true;

      /* TODO: Reinstate validation once we have real data
      const { path, createError } = this;
      if (value?.length === 0) return true;
      if (value && value?.length >= LIMIT_3 && value?.length <= LIMIT_12) {
        return true;
      }
      if (value && value?.length <= LIMIT_3) {
        return createError({ path, message: `Repair Order Nbr ${MIN_LIMIT_MESSAGE}` });
      }
      if (value && value?.length >= LIMIT_12) {
        return createError({ path, message: `Repair Order Nbr ${getMaxLimitMessage()}` });
      }
    */
    })
    .nullable(),
  vendorWorkOrderNbr: yup
    .string()

    // TODO: Remove the no-unused-vars when we have real data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .test('vendorWorkOrderNbr', 'error', function (value) {
      return true;

      /* TODO: Reinstate validation once we have real data
      const { path, createError } = this;
      if (value?.length === 0) return true;
      if (value && value?.length >= LIMIT_3 && value?.length <= LIMIT_12) {
        return true;
      }
      if (value && value?.length <= LIMIT_3) {
        return createError({ path, message: `Vendor Work Order Nbr ${MIN_LIMIT_MESSAGE}` });
      }
      if (value && value?.length >= LIMIT_12) {
        return createError({ path, message: `Vendor Work Order Nbr ${getMaxLimitMessage()}` });
      }
    */
    })
    .nullable(),
  vin: yup
    .string()

    // TODO: Remove the no-unused-vars when we have real data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .test('vin', 'error', function (value) {
      return true;

      /* TODO: Reinstate validation once we have real data
      const { path, createError } = this;
      if (value?.length === 0) return true;
      if (value && value?.length >= LIMIT_3 && value?.length <= LIMIT_24) {
        const regexValid = value?.match(ALPHA_NUMERIC_REGEX);
        if (regexValid != null) {
          return true;
        }

        return createError({ path, message: 'Alpha Numeric characters are allowed' });
      }
      if (value && value?.length <= LIMIT_3) {
        return createError({ path, message: `VIN ${MIN_LIMIT_MESSAGE}` });
      }
      if (value && value?.length >= LIMIT_24) {
        return createError({ path, message: `VIN ${getMaxLimitMessage(LIMIT_24)}` });
      }
    */
    })
    .nullable()
});
