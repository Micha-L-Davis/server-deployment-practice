'use strict';

const express = require('express');
const app = express();

app.get('/hello', (request, response, next) => {
  response.send('Hello world.');
});

module.exports = app;
