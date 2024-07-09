const User=require("../Model/userModel")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

exports.signup= async (req,res)=>{
    try{
        const {username,email,password}=req.body
        const hash=await bcrypt.hash(password,10)

        const data=await User.create({
            username,
            email,
            password:hash
        })
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
exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await User.findOne({email:`${email}`})
        if(!user) return res.status(401).json({
            status:'fail',
            message:"Can't Find account,Check your login cerdinals"
        })
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(401).json({
            status:"fail",
            message:"Incorrect Password"
        })

        const token=jwt.sign({id:user._id},"notebook")

        res.status(200).json({
            status:"success",
            message:"User login Successfull",
            token:token,
            user:user.username
        })
    }catch(err){
        res.status(400).json({
            status:"fail",
            message:err
        })
    }
}