require('dotenv').config();
const mongoose = require('mongoose');

var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const routerApiDocs = require('./routes/apidocs');
const routerFornecedor = require('./routes/router_fornecedor')

var app = express();
mongoose.connect(process.env.MONGODB_URL);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api-docs', routerApiDocs);
app.use('/fornecedores', routerFornecedor);

module.exports = app;