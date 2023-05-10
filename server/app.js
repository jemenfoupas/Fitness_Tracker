const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('../client/build/index');

const app = express();

const viewsPath = path.join(__dirname, '..','/client','/views');
// console.log(path.join(__dirname, '..','/client','/build','index'));
app.set('views', viewsPath);
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

path.join(__dirname, '..','/client','/views');
// console.log(path.join(__dirname, '..','/client','/views'));

//this make it look at the index file in buids for what to display in the '/' function
app.use('/', indexRouter);


module.exports = app;
