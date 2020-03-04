const mongoose = require('mongoose');
const { responseWithError } = require('../util/helper');
const { errorMessage } = require('../constants');

const checkDatabaseConnection = (req, res, next) => {
  const connectionStatus = mongoose.connection.readyState;
  if (connectionStatus !== 1) {
    responseWithError(res, errorMessage.databaseDisconnection);
    return;
  }
  next();
};

module.exports = checkDatabaseConnection;
