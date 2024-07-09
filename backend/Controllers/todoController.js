const Todo=require("../Model/todoModel")

exports.createTodo=async(req,res)=>{
    try{
        const data=await Todo.create(req.body)
        res.status(200).json({
            status:"success",
            data:data
        })
    }catch(err){
        res.status(400).json({
            status:"fail",
            message:err
        })
    }
}

exports.getTodo=async(req,res)=>{
    try{
        const data=await Todo.find({userId:req.body.userId})
        res.status(200).json({
            status:"success",
            data
        })
    }catch(err){
        res.status(400).json({
            status:"fail",
            message:err
        })
    }
}

exports.deleteTodo=async(req,res)=>{
    const id=req.params.id
    try{
        await Todo.findByIdAndDelete(id)
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