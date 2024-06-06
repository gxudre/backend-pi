const express = require('express');

const controllerProdutos = require('../controllers/controller_produtos');
const router = express.Router();

router.post('/', controllerProdutos.validarDados, controllerProdutos.novoProduto);

router.get('/', controllerProdutos.obterTodosProdutos);

router.get('/:id', controllerProdutos.buscarProdutoPeloId, controllerProdutos.obterProduto);

module.exports = router;