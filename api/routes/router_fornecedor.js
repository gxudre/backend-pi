const express = require("express");

const controllerFornecedores = require("../controllers/controller_fornecedor");
const validarToken = require("../middlewres/auth");

const router = express.Router();

router.post(
  "/",
  controllerFornecedores.validarDadosFornecedor,
  controllerFornecedores.novoFornecedor
);

router.get("/",validarToken, controllerFornecedores.obterTodosFornecedores);

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

router.delete(
  "/:id",
  controllerFornecedores.buscarFornecedorPeloId,
  controllerFornecedores.removerFornecedor
);

module.exports = router;
