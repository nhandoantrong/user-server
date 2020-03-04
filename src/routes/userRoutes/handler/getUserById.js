const userService = require('../../../services/userService');

const getUserById = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  res.json(user);
};

module.exports = getUserById;
