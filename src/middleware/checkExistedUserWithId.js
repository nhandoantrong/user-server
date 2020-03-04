const mongoose = require('mongoose');

const userService = require('../services/userService');
const { errorMessage } = require('../constants');
const helper = require('../util/helper');

const checkExistedUserWithId = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const user = await userService.getUserById(id);
      if (user) {
        next();
        return;
      }
    }
    throw errorMessage.userNotFound;
  } catch (error) {
    helper.responseWithError(res, error);
  }
};

module.exports = checkExistedUserWithId;
