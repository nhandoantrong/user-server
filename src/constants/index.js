const validator = require('./validator');

const errorResponseGenerate = (statusCode, message) => ({
  statusCode,
  message,
});

const errorMessage = {
  wrongLoginInfo: errorResponseGenerate(403, 'Wrong account or password'),
  badRequest: errorResponseGenerate(400, 'Bad Request'),
  databaseDisconnection: errorResponseGenerate(
    503,
    'Database is not connected'
  ),
  internalError: errorResponseGenerate(500, 'Internal Error'),
  existedUser: errorResponseGenerate(422, 'User existed'),
  userNotFound: errorResponseGenerate(404, 'User not found'),
};

module.exports = {
  errorMessage,
  validator,
};
