var express = require('express');
var router = express.Router();
const mallController = require(__dirname+"/../../controllers/mall.controller.js");


router.post("/", mallController.create);
router.get("/", mallController.findAll);
router.get("/:mall_id/", mallController.findOne);
router.post("/:mall_id/", mallController.createParkingLot);

module.exports = router;
