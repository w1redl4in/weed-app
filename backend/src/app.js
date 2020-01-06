const express = require('express');
const mongoose = require('mongoose');
const routes = require('../src/routes');
const morgan = require('morgan');
const app = express();

morgan('combined');

mongoose.connect(
  'mongodb+srv://fezinho11:123felao@cluster0-mtv2i.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(`MongoDB is working!`)
);

module.exports = routes(app);
