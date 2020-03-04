require('dotenv').config();
const mongoose = require('mongoose');

const { startApplication } = require('./src/app');

mongoose
  .connect('mongodb://localhost:27017/user', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch(console.log);

startApplication();
