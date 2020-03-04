const bcrypt = require('bcryptjs');

const hashPassword = async (req, res, next) => {
  const { password } = req.body;
  const salt = await bcrypt.genSalt();

  const hashPassword = await bcrypt.hash(password, salt);
  req.body.password = hashPassword;

  next();
};

module.exports = hashPassword;
