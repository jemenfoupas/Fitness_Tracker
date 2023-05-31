const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./build/server/index');
var homeRouter = require('./build/server/home');

const app = express();

const viewsPath = path.join(__dirname, '/client','/views');

// console.log(path.join(__dirname, '..','/client','/build','index'));
app.set('views', viewsPath);
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/client','/stylesheets')));
app.use(express.static(path.join(__dirname, 'build','client','/typeScript')));
// console.log(path.join(__dirname, '/client','/javaScipt'));

// path.join(__dirname, '..','/client','/views');
// console.log(path.join(__dirname, '..','/client','/views'));

// /// session stuff start ///
// const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const sessionSecret = 'YourSessionSecret'; // Change this to a secure secret
// const sequelize = require('./client/build/sequelize');

// // Set up session middleware
// app.use(session({
//   secret: sessionSecret,
//   resave: false,
//   saveUninitialized: false,
//   store: new SequelizeStore({
//     db: sequelize, // Replace `sequelize` with your Sequelize instance
//     checkExpirationInterval: 15 * 60 * 1000, // Cleanup expired sessions every 15 minutes
//     expiration: 24 * 60 * 60 * 1000, // Expire sessions after 24 hours
//   }),
// }));
// /// session stuff end ///

// app.use(setUser, indexRouter);
//this make it look at the index file in buids for what to display in the '/' function
app.use('/', indexRouter);
app.use('/home', homeRouter);



module.exports = app;
