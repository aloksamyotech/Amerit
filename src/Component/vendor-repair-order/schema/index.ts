import * as yup from 'yup';

const ODO_REGEX = /^[0-9]{1,6}$/;

export const schema = yup.object().shape({
  odo: yup
    .string()
    .nullable()
    .test({
      name: 'odo',
      test(value, ctx) {
        const regexValid = value?.match(ODO_REGEX);
        if (regexValid == null) {
          return ctx.createError({
            message: 'ODO must be a number between 0 & 999999'
          });
        }

        return true;
      }
    })
});
