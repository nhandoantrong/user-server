const userService = require('../../../services/userService');

const getUsers = async (req, res) => {
  const userList = await userService.getUserList();
  res.json(userList);
};

module.exports = getUsers;
