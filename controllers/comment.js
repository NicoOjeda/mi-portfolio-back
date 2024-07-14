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

    // read: async(req,res)=>{
    //     try{
            
    //     } catch(){
            
    //     }
    // },

    // update: async(req,res)=>{
    //     try{

    //     } catch(){
            
    //     }
    // },

    // destroy: async(req,res)=>{
    //     try{

    //     } catch(){
            
    //     }
    // }

}

module.exports = controller