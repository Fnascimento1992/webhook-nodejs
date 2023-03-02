const express = require('express');
const MongoConnect = require('../db/connect')
const logger = require('../logs/logger')
require('dotenv').config()
const bodyParser = require('body-parser')

const app = express()

//MongoConnect()

app.get('/', (req, res) => {
  res.send('Hello World!');

  logger.info("Acesso na rota")
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});