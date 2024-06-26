const express = require('express');

const controllerClientes = require('../controllers/controller_clientes');

const validarToken = require('../middlewares/auth');

const router = express.Router();

router.post('/', controllerClientes.validarDadosCliente, controllerClientes.novoCliente);

router.get('/', validarToken, controllerClientes.obterTodosClientes );

router.get('/:id', controllerClientes.clientePeloId, controllerClientes.obterCliente);

router.put('/:id', controllerClientes.clientePeloId, controllerClientes.validarDadosCliente, controllerClientes.atualizarCliente);

router.delete('/:id', controllerClientes.clientePeloId, controllerClientes.removerCliente );

module.exports = router;