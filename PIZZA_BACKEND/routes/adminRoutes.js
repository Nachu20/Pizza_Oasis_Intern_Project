const express=require("express");
const adminLogin=require("../controller/adminController")
const router=express.Router();

router.post("/adminPanel",adminLogin)

module.exports=router;
