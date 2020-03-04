const { User } = require('../models/userModel');

const userService = {
  getUserList: () => User.find(),

  createUser: (user) => {
    const newUser = new User(user);
    return newUser.save();
  },

  getUserById: (id) => User.findById(id),

  updateUserById: (id, newUser) => User.findByIdAndUpdate(id, { ...newUser }),

  getUserByProperty: (key) => (value) => User.findOne({ [key]: value }),
};

module.exports = userService;
