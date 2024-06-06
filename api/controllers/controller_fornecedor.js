const mongoose = require("mongoose");
const Fornecedor = require("../models/model_fornecedor");

async function validarDadosFornecedor(req, res, next) {
  const fornecedor = new Fornecedor(req.body);
  try {
    await fornecedor.validate();
    next();
  } catch (error) {
    res.status(422).json({ msg: "Dados do Fornecedor invalidos" });
  }
}

async function novoFornecedor(req, res) {
  const fornecedor = await Fornecedor.create(req.body);
  res.status(201).json(fornecedor);
}

async function obterTodosFornecedores(req, res) {
  const fornecedores = await Fornecedor.find({});
  res.json(fornecedores);
}

async function buscarFornecedorPeloId(req, res, next) {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const fornecedor = await Fornecedor.findOne({ _id: id });
    if (fornecedor) {
      next();
    } else {
      res.status(404).json({ msg: "Fornecedor não encontrado!" });
    }
  } catch (error) {
    res.status(400).json({ msg: "id inválido" });
  }
}

async function obterFornecedor(req, res) {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const fornecedor = await Fornecedor.findOne({ _id: id });
  res.json(fornecedor);
}

module.exports = {
  validarDadosFornecedor,
  novoFornecedor,
  obterTodosFornecedores,
  obterFornecedor,
  buscarFornecedorPeloId,
};
