var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// port 
const port = process.env.PORT || 3000;
// url 
const host = process.env.HOST || 'localhost';

// routers
var indexRouter = require('./routes/index');
var intakeRouter = require('./routes/intake');

// the app
var app = express();
app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// main view 
app.use('/', indexRouter);
// main API
app.use('/intake', intakeRouter);

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

// fire!
console.log('--> HummingWare started on port ' + port);
console.log('--> Send commands to "http://localhost:3000/intake?message=XYZ');
// app.listen(port, () => console.log(`Hummingbird app listening on port ${port}!`))
// lol, not needed.

module.exports = app;
