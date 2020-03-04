const bcrypt = require('bcryptjs');
const {
  signToken,
  responseWithError,
  responseWithSuccess,
} = require('../../../util/helper');
const Constant = require('../../../constants');
const userService = require('../../../services/userService');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.getUserByProperty('email')(email);
    if (!user) {
      throw Constant.errorMessage.wrongLoginInfo;
    }

    const isLoggedIn = await bcrypt.compare(password, user.password);
    if (isLoggedIn) {
      const { username } = user;
      const payload = { username };
      const accessToken = signToken(payload);
      return responseWithSuccess(res, { accessToken });
    }

    throw Constant.errorMessage.wrongLoginInfo;
  } catch (error) {
    responseWithError(res, error);
  }
};

module.exports = login;
