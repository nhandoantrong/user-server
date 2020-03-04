const express = require('express');

const Config = require('./config');
const router = require('./routes/routes');
const bodyParser = require('body-parser');

const checkDatabaseConnection = require('./middleware/checkDatabaseConnection');

const app = express();
const port = Config.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, token'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH');
  if (req.method.toLowerCase() === 'options') {
    return res.status(200).end();
  }
  return next();
});

app.use('/api', checkDatabaseConnection, router);

const startApplication = () => {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

module.exports = {
  startApplication,
};
