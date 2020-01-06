
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const db = require('../src/database') // just to initialize
const app = express();
const routes = require('../src/routes');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

app.use('/', routes)

module.exports = app;
