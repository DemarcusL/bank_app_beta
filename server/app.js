var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const mongoose = require('mongoose');

// for our endpoint
const bankaccount = require('./routes/bankaccount');

var app = express();
app.use(cors());

const mongoDB = "mongodb+srv://dlester:dlester12@cluster0.ytyfm.mongodb.net/MERNAssessment?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {});

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error'));

// const PORT = process.env.PORT || 3001;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//for our router endpoints
app.use('/', bankaccount);

// for our port
// app.listen(PORT, () => console.log(`listening on ${PORT}`));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
