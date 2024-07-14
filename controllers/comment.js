const Comment = require('../models/Comment')

const controller = {

    create: async(req,res)=>{
        try{
            let new_comment = await Comment.create(req.body)

            res.status(201).json({
                id: new_comment._id,
                success: true,
                message: 'comentario creado'
            })
        } catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },

    read: async(req,res)=>{
        try{
            let todos = await Comment.find()

            res.status(200).json({
                response: todos,
                success: true,
                message: 'Se encontraron comentarios'
            })
            console.log(todos);
        } catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },

    update: async(req,res)=>{
        let{id} = req.params

        try{
            let uno = await Comment.findOneAndUpdate({_id: id}, req.body, {new: true})
            
            if(uno){
                res.status(200).json({
                    id: uno._id,
                    success: true,
                    message: 'Se modifico comentario'
                })
            } else{
                res.status(404).json({
                    success: false,
                    message: 'El comentario no existe'
                })
            }
            
        } catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },

    destroy: async(req,res)=>{
        let{id} = req.params

        try{
            let uno = await Comment.findOneAndDelete({_id: id})
            if(uno){
                res.status(200).json({
                    id: uno._id,
                    success: true,
                    message: 'Se elimino comentario'
                })
            } else{
                res.status(404).json({
                    success: false,
                    message: 'El comentario no existe'
                })
            }
        } catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }

}

module.exports = controller