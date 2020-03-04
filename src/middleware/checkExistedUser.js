const userService = require('../services/userService');
const { errorMessage } = require('../constants');
const helper = require('../util/helper');

const checkExistedUser = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await userService.getUserByProperty('email')(email);
    if (!user) {
      next();
      return;
    }
    throw errorMessage.existedUser;
  } catch (error) {
    helper.responseWithError(res, error);
  }
};

module.exports = checkExistedUser;
