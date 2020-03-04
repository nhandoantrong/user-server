const userService = require('../../../services/userService');

const createUsers = async (req, res) => {
  const { body } = req;
  const result = await userService.createUser(body);
  res.status(201).json(result);
};

module.exports = createUsers;
