const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago', err => {
  if (err) throw err;
  console.log('Connected to mongodb');
});
mongoose.Promise = global.Promise;

// setup express app
const app = express();

// middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(422).send({
    error: err._message,
  });
});

// listen for requests
app.listen(process.env.port || 4000, () => {
  console.log('Now listening on port 4000..');
});
