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

async function obterTodosProdutos(req, res) {
    const produtos = await Produto.find({});
    res.json(produtos);
};

async function buscarProdutoPeloId (req, res, next) {
    try {
        const id = new mongoose.Types.ObjectId(req.params.id)
        const produto = await Produto.findOne({ _id: id });
        if (produto) {
            next();
        } else {
            res.status(404).json({ msg: 'Produto não encontrado!' })
        }
    } catch (error) {
        res.status(400).json({ msg: 'id inválido!' });
    }

}

async function obterProduto(req, res) {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const produto = await Produto.findOne({ _id: id });
    res.json(produto);
};

async function atualizarProduto(req, res) {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const produto = await Produto.findByIdAndUpdate({_id: id}, req.body);
    res.json(produto);
};

async function removerProduto(req, res) {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const produto = await Produto.findByIdAndDelete({_id: id});
    res.status(204).end();
};

module.exports = { validarDados, novoProduto, obterTodosProdutos, buscarProdutoPeloId, obterProduto, atualizarProduto, removerProduto }