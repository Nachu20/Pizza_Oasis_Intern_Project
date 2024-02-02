const mongoose=require("mongoose")

const customerSchema=mongoose.Schema({
    customerName:{
        type:String,
        required:[true,"please add the user name"],       
    },
    email:{
        type:String,
        required:[true,"please add the user email"],
        unique:[true,"Email address is already taken"]
    },
    password:{
        type:String,
        required:[true,"please add the password"],
    }
});

module.exports=mongoose.model("customer",customerSchema);