const express = require('express');
const mongoose = require('mongoose');
const routes = require('../src/routes');
const morgan = require('morgan');
const app = express();
const bodyparser = require('body-parser');
morgan('combined');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

mongoose.connect(
  'mongodb+srv://fezinho11:123felao@cluster0-mtv2i.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(`MongoDB is working!`)
);

module.exports = routes(app);
