var express = require('express');
var router = express.Router();
const carController = require(__dirname+"/../../controllers/car.controller.js");


router.get("/", carController.findAll);

module.exports = router;
