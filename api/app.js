var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const routerApiDocs = require('./routes/apidocs');
const routerFornecedor = require('./routes/router_fornecedor')


const routerProdutos = require('./routes/router_produtos');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api-docs', routerApiDocs);
app.use('/fornecedores', routerFornecedor);


app.use('/produtos', routerProdutos);

module.exports = app;