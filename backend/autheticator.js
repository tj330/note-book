const jwt=require("jsonwebtoken")

const authenticator=(req,res,next)=>{
    const token=req.headers.authorization
    if(!token) return res.status(401).json({
        message:"No Token provided please login"
    })
    try{
        const decoded=jwt.verify(token,"notebook")
        req.body.userId=decoded.id
        next()
    }catch(err){
        res.status(401).json({
            status:"fail",
            message:"Token Expired,Please login again"
        })
    }
}

module.exports=authenticator