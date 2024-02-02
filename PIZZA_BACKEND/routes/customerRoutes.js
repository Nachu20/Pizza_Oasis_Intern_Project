const express=require("express");
const {registerCustomer,loginCustomer,currentCustomer}=require("../controller/customerController")
const validtoken=require("../middleware/validtoken")
const router=express.Router();

router.post("/register",registerCustomer)

router.post("/login",loginCustomer)

router.get("/currentCustomers",validtoken,currentCustomer)

module.exports=router;