const { Router } = require('express');

const getUsers = require('./handler/getUsers');
const createUsers = require('./handler/createUsers');
const getUserById = require('./handler/getUserById');
const updateUserById = require('./handler/updateUser');
const login = require('./handler/login');
const hashPassword = require('../../middleware/hashPassword');
const validateMiddleware = require('../../middleware/validateRequestBody');
const checkExistedUser = require('../../middleware/checkExistedUser');
const checkExistedUserWithId = require('../../middleware/checkExistedUserWithId');

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post(
  '/',
  validateMiddleware.validateUserRegister,
  checkExistedUser,
  hashPassword,
  createUsers
);
router.put(
  '/:id',
  checkExistedUserWithId,
  validateMiddleware.validateUserRegister,
  updateUserById
);
router.post('/login', validateMiddleware.validateUserLogin, login);

module.exports = router;
