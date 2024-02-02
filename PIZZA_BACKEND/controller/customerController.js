const  bcrypt=require("bcrypt");
const  customerModel=require("../model/customers");
const jwt=require("jsonwebtoken");
const asyncHandler=require("express-async-handler");

const registerCustomer= asyncHandler(async(req,res)=>{
    const {customerName,email,password}= req.body;
    if(!customerName||!email||!password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const customerAvailable=await customerModel.findOne({email})
    if(customerAvailable){
        res.status(400);
        throw new Error("customer already registered");
    }
    //hash password
    const hashedPassword=await bcrypt.hash(password,5);
    const customer=await customerModel.create({
        customerName,
        email,
        password:hashedPassword,
    })
    if(customer)
        res.status(201).json({_id:customer.id,email:customer.email});
    else{
        res.status(400);
        throw new Error("customer data is not valid");
    }
})
//login process
const loginCustomer= asyncHandler(async(req,res)=>{
    const {email,password}= req.body;
    if(!email||!password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const customer=await customerModel.findOne({email});
    //compare password with hashedpassword
    if(customer &&(await bcrypt.compare(password,customer.password)))
  {
    const accesstoken=jwt.sign({
        customer:{
            customername:customer.customername,
            email:customer.email,
            id:customer.id,
        }
    },process.env.ACCESS_TOKEN_SECERT,
    {expiresIn:"10m"})
    res.status(200).json({ accesstoken })

  }
  else{
    res.status(400);
    throw new Error("Password is not valid")
  }  
    
})

const currentCustomer= asyncHandler(async(req,res)=>{
    res.json("Current Customer")
})

module.exports={registerCustomer,loginCustomer,currentCustomer}