const express = require('express');

const router = express.Router();
var regController = require('./regController.js');
var regvalidation = require('./regvalidation.js');
var infoController=require('./infoController.js')

// router.post('/user/create', function(req, res) { employeeController.createUserControllerFn });
router.route('/user/create').post(regController.createUserControllerFn);

router.route('/user/signin').post(regvalidation.signinUserControllerFn);
//router.route('/user/findOne').get(employeeController.findOneUserController);
router.route('/info/get').post(infoController.DataControllerFn);
module.exports = router;