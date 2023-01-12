var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();



// mariaDB connect
const maria = require('./database/connect/maria');
maria.connect();

//view engine setup
app.set('views', path.join(_dirnmae, 'views'));
app.set('view engine', 'jade');


