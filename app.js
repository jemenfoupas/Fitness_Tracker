const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./build/server/index');
var homeRouter = require('./build/server/home');
var routineRouter = require('./build/server/routine');

const app = express();
const viewsPath = path.join(__dirname, '/client','/views');

app.set('views', viewsPath);
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/client','/stylesheets')));
app.use(express.static(path.join(__dirname, 'build','client','/typeScript')));
// console.log(path.join(__dirname, '/client','/javaScipt'));

//this make it look at the index file in buids for what to display in the '/' function
app.use('/', indexRouter);
app.use('/home', homeRouter);
app.use('/routine', routineRouter);

module.exports = app;