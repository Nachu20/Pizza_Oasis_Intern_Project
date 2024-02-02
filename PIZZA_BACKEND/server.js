const express=require("express")
const dotenv=require("dotenv").config();
const app=express()
const connectdb=require("./config/dbconnection")
const cors = require('cors');

app.use(cors(
    {
      origin: "http://localhost:4200"
    }
   
  ));
connectdb();

const port=process.env.port || 8080;


app.use(express.json())

app.use("/vikings_pizza/customer",require("./routes/customerRoutes"));
app.use("/vikings_pizza/",require("./routes/adminRoutes"));

app.listen(port,()=>{
    console.log("Hi...........");
})