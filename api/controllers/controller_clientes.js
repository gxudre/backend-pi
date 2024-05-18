const mongoose = require('mongoose');
const Cliente = require('../models/model_clientes');

const validarDadosCliente = async (req, res, next) => {
    const cliente = new Cliente(req.body);
    try {
        await cliente.validate();
        next()
    } catch (error) {
        res.status(422).json({msg: 'Dados do Cliente inválidos'})
    }
};

const novoCliente = async (req,res) => {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
}

module.exports = { validarDadosCliente, novoCliente  };