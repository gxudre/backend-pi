const mongoose=require('mongoose');
const Fornecedor = require('../models/model_fornecedor');

const validarDadosFornecedor = async (req, res, next) => {
    const fornecedor = new Fornecedor(req.body);
    try {
        await fornecedor.validate();
        next()
    } catch (error) {
        res.status(422).json({msg: "Dados do Fornecedor invalidos"});
    }
};

module.exports = { acao };