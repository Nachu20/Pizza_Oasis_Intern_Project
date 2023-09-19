var infoModel = require('./info.js');

var DataControllerFn = async (req, res) => {
    try {
      const body = req.body;
      const Data = new infoModel({
        email: body.email,
        message: body.message,
      });
      await Data.save();
  
      res.status(200).send({
        status: true,
        message: "Employee created successfully",
      });
    } catch (error) {
      console.log("Hello")
      res.status(400).send(error);
    }
  };
  
module.exports = { DataControllerFn };