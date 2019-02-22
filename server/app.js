var createError = require("http-errors");
var fs = require("fs");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
var logger = require("morgan");
//引入路由模块
var usersRouter = require("./routes/user");
//实例化
var app = express();
// app.set('view engine', 'html');
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../dist")));
// 因为是单页应用 所有请求都走/dist/index.html
app.get("*", function(req, res) {
  const html = fs.readFileSync(
    path.resolve(__dirname, "../dist/index.html"),
    "utf-8"
  );
  res.send(html);
});
//链接数据库
mongoose.connect("mongodb://localhost:27017/miku", function(err) {
  if (err) {
    console.log("Mongodb数据库连接失败");
  } else {
    console.log("Mongodb数据库连接成功");
  }
});
//定义路由
app.use("/user", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.listen(3000, function(err) {
  console.log("您的影视应用MiKu 已上线");
});
module.exports = app;
