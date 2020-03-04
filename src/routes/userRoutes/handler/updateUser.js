const userService = require('../../../services/userService');

const updateUserById = async (req, res) => {
  const user = await userService.updateUserById(req.params.id, req.body);
  res.json(user);
};

module.exports = updateUserById;
