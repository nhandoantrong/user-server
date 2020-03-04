const jwt = require('jsonwebtoken');

const config = require('../config');

module.exports.signToken = (payload) =>
  jwt.sign(payload, config.JWT_SECRET_KEY);

module.exports.responseWithSuccess = (response, payload) => {
  response.status(200).json(payload);
};

module.exports.responseWithError = (response, error) => {
  const status = error.statusCode || 500;
  const message = error.message || 'Internal Error';
  response.status(status).json({ message });
};
