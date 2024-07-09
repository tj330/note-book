const mongoose=require("mongoose")

const todoSchema=mongoose.Schema({
    task:{
        type:String,
        required:[true,"Todo must contain a task"]
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    userId:{
        type:String,
        required:[true,"Todo must have a userId"]
    }
})

const Todo=mongoose.model('Todo',todoSchema)

module.exports=Todo