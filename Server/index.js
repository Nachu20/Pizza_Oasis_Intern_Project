const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
var routes = require('./routes.js');
const cors = require('cors');

app.use(cors(
    {
      origin: "http://localhost:4200"
    }
   
  ));

mongoose.connect("mongodb://127.0.0.1:27017/Project1",{useNewUrlParser: true,  useUnifiedTopology: true })
.then(() => {
    console.log("DB Connected!");
  })
  .catch((error) => {
    console.error("DB Connection Error:", error);
  });


app.listen(8086,function port(error)
{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log("Port  Connectedddd!!!!!!!!!!! 8086")
    }
});

app.use(express.json());
app.use(routes);