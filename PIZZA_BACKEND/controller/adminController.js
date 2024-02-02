const asyncHandler=require("express-async-handler");

const adminLogin=asyncHandler(async(req,res)=>{
    const {email,password}= req.body;
    if(!email||!password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    if(email=="c.nachiappan2003@gmail.com"&&password==2003){
        res.status(200).json({message:"Admin logged in successfully"})
    }
    else{
        res.status(401).json({message:"Not Authorized for Customers"})
    }
})

module.exports=adminLogin; 