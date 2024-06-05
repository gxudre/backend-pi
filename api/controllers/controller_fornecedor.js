const mongoose=require('mongoose');
const Fornecedor = require('../models/model_fornecedor');

async function validarDadosFornecedor(req, res, next) {
    const fornecedor = new Fornecedor(req.body);
    try {
        await fornecedor.validate();
        next()
    } catch (error) {
        res.status(422).json({msg: "Dados do Fornecedor invalidos"});
    }
};

async function novoFornecedor(req, res){
    const fornecedor = await Fornecedor.create(req.body);
    res.status(201).json(fornecedor);
}


module.exports = { validarDadosFornecedor, novoFornecedor };