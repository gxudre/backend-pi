const mongoose = require('mongoose');
const { string } = require('yaml/dist/schema/common/string');


const schema = new mongoose.Schema({
    nome:{type: string, trim: true, uppercase: true, required: true},
    telefone:{type: Number, required: true , min:0, max:9},
    email:{type: String, trim: true, uppercase: true},
    endereco:{type: string, trim: true, uppercase: true, required: true},
});

module.exports = mongoose.model('Cliente', schema);