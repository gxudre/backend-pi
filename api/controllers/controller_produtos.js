const mongoose = require('mongoose');
const Produto = require('../models/model_produtos');

async function validarDados(req, res, next) {
    const produto = new Produto(req.body);
    try {
        await produto.validate();
        next();
    } catch (error) {
        res.status(422).json({ msg: 'Dados de produto invalidos'});
    };
}

async function novoProduto(req, res) {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
}

module.exports = { validarDados, novoProduto }