const MallService = require('../services/mall.service');
const validator = require('express-validator');
const mallService = new MallService();

exports.create = [
    validator.body('name', 'Name required').trim().not().isEmpty(),
    validator.body('address', 'Address required').trim().not().isEmpty(),
    validator.body('postal_code', 'postal_code required').trim().not().isEmpty(),
    validator.body('postal_code', 'Invalid postal code').isInt({min: 100000, max: 999999}),
    async function (req, res) {
        const {name, address, postal_code} = req.body
        const validationErrors = validator.validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(400).json({status: 400, message: validationErrors.array()});
        }
        try {
            const responseData = {};
            responseData["name"] = name;
            responseData["address"] = address;
            responseData["postal_code"] = postal_code;
            const mall = await mallService.createMall(responseData);
            return res.status(200).json(mall);
        } catch (error) {
            return res.status(400).json({status: 400, message: error.message});
        }
    }];

exports.createParkingLot = [
    validator.body('name', 'Name required').trim().not().isEmpty(),
    async function (req, res) {
        const ParkingLotService = require('../services/parkinglot.service');
        const parkingLotService = new ParkingLotService();
        const {name} = req.body
        const validationErrors = validator.validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(400).json({status: 400, message: validationErrors.array()});
        }
        try {
            const responseData = {};
            responseData["mall_id"] = req.params.mall_id;
            responseData["name"] = name;
            const parkingLot = await parkingLotService.createParkingLot(responseData);
            return res.status(200).json(parkingLot);
        } catch (error) {
            return res.status(400).json({status: 400, message: error.message});
        }

    }];

exports.findAll = async function (req, res) {
    try {
        const page = req.query.page ? req.query.page : 1;
        const limit = req.query.limit ? req.query.limit : 10;
        const malls = await mallService.findAll(page, limit);
        return res.status(200).json(malls);
    } catch (error) {
        return res.status(400).json({status: 400, message: error.message});
    }
}
exports.findOne = async function (req, res) {
    try {
        const responseData = {};
        responseData["mall_id"] = req.params.mall_id;
        const mall = await mallService.findOne(responseData);
        return res.status(200).json(mall);
    } catch (error) {
        return res.status(400).json({status: 400, message: error.message});
    }
};

exports.update = async function (req, res) {

};

exports.delete = async function (req, res) {

};

exports.deleteAll = async function (req, res) {

};