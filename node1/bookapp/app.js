var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
//可以将错误日志保存在text文件
var logger = require('morgan');

let session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var sessionRouter = require('./routes/session')
var uploadRouter = require('./routes/upload')
var cryptoRouter = require('./routes/cryptoware')

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//express中间件

//session配置
// app.use(session({
//   secret: "huanglin",
//   cookie:{}//cokkies配置，比如过期时间等
// }))
//日志输出
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//后端单独配置就可以跨域
// app.use(cors({
//   origin: ['http://localhost:3001'], // 所要允许跨域的ip
//   methods: ['GET', 'POST'],
//   alloweHeaders: ['Conten-Type', 'Authorization']
// }));
app.use('/', indexRouter);
app.use('/imgUpload',uploadRouter);
app.use('/crypto',cryptoRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter)
app.use('/session', sessionRouter)
// catch 404 and forward to error handler
//404页面
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler错误页面
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// app.listen('8080')
module.exports = app;
