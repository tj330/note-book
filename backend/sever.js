const app=require("./app")
const mongoose=require("mongoose")
require("dotenv").config()

const port =process.env.PORT||8000

mongoose.connect("mongodb+srv://23dev500:sangeeTH@cluster0.lof64wm.mongodb.net/note-book?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("DB connection sucess!")
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})