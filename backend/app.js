//@ts-nocheck
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const marketRouter = require('./routes/public/market');
const cors = require('cors');
const balanceRouter = require('./routes/private/balance');



var app = express();
require("dotenv").config();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "PUT", "UPDATE", "PATCH", "DELETE"],
  })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use("/market",marketRouter)
app.use("/balance",balanceRouter);


module.exports = app;
