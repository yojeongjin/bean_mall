var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var db = require('./config/db');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var conn = db.init()
db.conn(conn)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
