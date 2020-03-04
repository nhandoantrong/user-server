const yup = require('yup');

const user = yup
  .object()
  .shape({
    username: yup.string().required(),
    email: yup
      .string()
      .email()
      .required(),
    password: yup
      .string()
      .required()
      .min(8),
  })
  .strict(true)
  .noUnknown(true);

const userLogin = yup
  .object()
  .shape({
    email: yup
      .string()
      .email()
      .required(),
    password: yup
      .string()
      .required()
      .min(8),
  })
  .strict(true)
  .noUnknown(true);

module.exports = {
  user,
  userLogin,
};
