const mongoose=require("mongoose");

const connectdb=async()=>{
try{
    const connect=await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Successfully connected",connect.connection.host,connect.connection.id);
}
catch(err){
    console.log(err);
    process.exit(1);
}

}

module.exports=connectdb;