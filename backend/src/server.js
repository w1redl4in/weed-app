// const app = require('./app');

const express = require('express');
const mongoose = require('mongoose');
const routes = require('../src/routes');
const morgan = require('morgan');
const app = express();
const bodyparser = require('body-parser');
const port = 3333;

morgan('combined');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

mongoose.connect(
  'mongodb+srv://fezinho11:123felao@cluster0-mtv2i.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(`MongoDB is working!`)
);

app.listen(port, () => console.log(`Server is listening on port ${port}`));

module.exports = routes(app);
