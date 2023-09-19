var regModel = require('./regModel.js');

var createUserControllerFn = async (req, res) => {
    try {
      const body = req.body;
      const userModelData = new regModel({
        email: body.email,
        password: body.password,
      });
      await userModelData.save();
  
      res.status(200).send({
        status: true,
        message: "Employee created successfully",
      });
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
module.exports = { createUserControllerFn };