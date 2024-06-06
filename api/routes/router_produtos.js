const express = require('express');

const controllerProdutos = require('../controllers/controller_produtos');
const router = express.Router();

router.post('/', controllerProdutos.validarDados, controllerProdutos.novoProduto);

router.get('/', controllerProdutos.obterTodosProdutos);

router.get('/:id', controllerProdutos.buscarProdutoPeloId, controllerProdutos.obterProduto);

router.put('/:id', controllerProdutos.buscarProdutoPeloId, controllerProdutos.validarDados, controllerProdutos.atualizarProduto);

router.delete('/:id', controllerProdutos.buscarProdutoPeloId, controllerProdutos.removerProduto);

module.exports = router;