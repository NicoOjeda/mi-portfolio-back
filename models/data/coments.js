require('dotenv').config()
require('../../config/database')
const Coment = require('../Coment')

let coments = [{
    "nombre": "laura",
    "email": "laura@hotmail.com",
    "whatsapp": 1155125720,
    "asunto":"oferta",
    "mensaje": "te ofrezco trabajo"
}]

coments.forEach(elemento =>{
    Coment.create({
        nombre: elemento.nombre,
        email:elemento.email,
        whatsapp: elemento.whatsapp,
        asunto: elemento.asunto,
        mensaje: elemento.mensaje
    }
    )
})

