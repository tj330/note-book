const express=require("express")
const cors=require("cors")
const userRouter=require("./Routes/userRouter")
const noteRouter=require("./Routes/noteRouter")
const todoRouter=require("./Routes/todoRouter")

const app=express()
app.use(cors())
app.use(express.json())

app.use("/api/user",userRouter)
app.use("/api/notes",noteRouter)
app.use("/api/todo",todoRouter)

module.exports=app