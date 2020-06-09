const MallService = require('../services/mall.service');
const validator = require('express-validator');

exports.create = [
    validator.body('name', 'Name required').trim().not().isEmpty(),
    validator.body('address', 'Address required').trim().not().isEmpty(),
    validator.body('postal_code', 'postal_code required').trim().not().isEmpty(),
    validator.body('postal_code', 'Invalid postal code').isInt({ min: 100000, max: 999999 }),
    async function (req, res) {
        const {name, address, postal_code} = req.body
        const validationErrors = validator.validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(400).json({status: 400, message: validationErrors.array()});
        }
        try {
            var responseData = {};
            responseData["name"] = name;
            responseData["address"] = address;
            responseData["postal_code"] = postal_code;
            const mall = await MallService.createMall(responseData);
            return res.status(200).json(mall);
        } catch (error) {
            return res.status(400).json({status: 400, message: error.message});
        }
    }];

exports.createParkingLot = [
    validator.body('name', 'Name required').trim().not().isEmpty(),

    async function (req, res) {
        const validationErrors = validator.validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(400).json({status: 400, message: validationErrors.array()});
        }
        console.log(req.params.mall_id);
        return res.sendStatus(200);
    }];

exports.findAll = async function (req, res) {
    console.log(req.query.test);
    res.send('respond with a resource');
}
exports.findOne = async function (req, res) {

};

exports.update = async function (req, res) {

};

exports.delete = async function (req, res) {

};

exports.deleteAll = async function (req, res) {

};