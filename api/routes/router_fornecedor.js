const express = require("express");

const controllerFornecedores = require("../controllers/controller_fornecedor");

const router = express.Router();

router.post(
  "/",
  controllerFornecedores.validarDadosFornecedor,
  controllerFornecedores.novoFornecedor
);

router.get("/", controllerFornecedores.obterTodosFornecedores);

router.get(
  "/:id",
  controllerFornecedores.buscarFornecedorPeloId,
  controllerFornecedores.obterFornecedor
);

router.put(
  "/:id",
  controllerFornecedores.buscarFornecedorPeloId,
  controllerFornecedores.validarDadosFornecedor,
  controllerFornecedores.atualizarFornecedor
);

module.exports = router;
