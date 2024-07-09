const mongoose = require('mongoose')

const schema= new mongoose.Schema({
    nombre: {type: String, required: true},
    email: {type: String, required: true},
    whatsapp: {type: Number,required: true},
    asunto:{type: String,required: true},
    mensaje: {type: String, required: true}
})

const Coment = mongoose.model('coments', schema)
module.exports = Coment