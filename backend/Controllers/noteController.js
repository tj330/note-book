const Note = require("../Model/noteModel")

exports.createNote=async(req,res)=>{
    try{
        const data=await Note.create(req.body)
        res.status(200).json({
            status:"success",
            data
        })
    }catch(err){
        res.status(404).json({
            status:"fail",
            message:err
        })
    }
}
exports.getNotes=async(req,res)=>{
    try{
        const data=await Note.find({userId: req.body.userId})
        res.status(200).json({
            status:"success",
            data:data
        })
    }
    catch(err){
        res.status(404).json({
            status:"fail",
            message:err
        })
    }
}
exports.deleteNote=async(req,res)=>{
    try{
        const id=req.params.id
        await Note.findByIdAndDelete(id)

        res.status(200).json({
            status:"success"
        })
    }catch(err){
        res.status(400).json({
            status:"fail",
            message:err
        })
    }
}