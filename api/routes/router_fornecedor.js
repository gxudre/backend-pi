const express = require('express');

const controllerFornecedores = require('../controllers/controller_fornecedor');

const router = express.Router();

router.post('/', controllerFornecedores.validarDadosFornecedor,controllerFornecedores.novoFornecedor)

module.exports = router;