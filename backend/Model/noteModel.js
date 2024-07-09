const mongoose =require("mongoose")

const noteSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,"Note must contain a title!"]
    },
    content:{
        type:String,
        required:[true,"Note must have a content"]
    },
    userId:{
        type:String,
        required:true
    }
})

const Note=mongoose.model("Notes",noteSchema)

module.exports=Note