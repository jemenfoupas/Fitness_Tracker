const express = require('express');
const path = require('path');

const app = express();

const viewsPath = path.join(__dirname, 'views');
app.set('views', viewsPath);
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'My App', message: 'Welcome to my app!' });
});

module.exports = app;
