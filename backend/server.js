const app=require("./app")
const mongoose=require("mongoose")
require("dotenv").config()

const port =process.env.PORT||8000

mongoose.connect(process.env.MONGODB).then(()=>{
    console.log("DB connection sucess!")
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})