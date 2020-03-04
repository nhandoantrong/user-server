const { validator, errorMessage } = require('../constants');
const { responseWithError } = require('../util/helper');

const validateUserRegister = async (req, res, next) => {
  const user = req.body;
  try {
    await validator.user.validate(user);
    next();
  } catch (error) {
    responseWithError(res, {
      ...errorMessage.badRequest,
      message: error.message || errorMessage.badRequest.message,
    });
  }
};

const validateUserLogin = async (req, res, next) => {
  const user = req.body;
  try {
    await validator.userLogin.validate(user);
    next();
  } catch (error) {
    responseWithError(res, errorMessage.wrongLoginInfo);
  }
};

module.exports = {
  validateUserRegister,
  validateUserLogin,
};
