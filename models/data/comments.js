require('dotenv').config()
require('../../config/database')
const Comment = require('../Comment')

let comments = [{
    "nombre": "laura",
    "email": "laura@hotmail.com",
    "whatsapp": 1155125720,
    "asunto":"oferta",
    "mensaje": "te ofrezco trabajo"
}]

comments.forEach(elemento =>{
    Comment.create({
        nombre: elemento.nombre,
        email:elemento.email,
        whatsapp: elemento.whatsapp,
        asunto: elemento.asunto,
        mensaje: elemento.mensaje
    }
    )
})

