const models = require('../models');

class MallService {
    constructor() {
        // in future
    }

    async findAll(page, limit) {
        const mall = await models.Mall.findAll({
            limit: parseInt(limit),
            offset: parseInt((page - 1) * limit),
            include: [
                {
                    model: models.ParkingLot,
                    as: 'parking_lots',
                }
            ]
        }).catch((error) => {
            throw Error(error);
        });
        return mall;
    }

    async findOne(data) {
        const result = await models.Mall.findOne({
            where: {
                mall_id: data.mall_id,
            },
        }).then(function (mall) {
            if (mall) {
                return mall
            }
            throw Error("Mall id is invalid");
        })
        return result;
    }

    async createMall(data) {
        const mall = await models.Mall.create({
            name: data.name,
            address: data.address,
            postal_code: data.postal_code,
        }).then(function (mall) {
            if (mall) {
                return mall
            }
        }).catch((error) => {
            console.log("debug", error);
            throw Error(error);
        });
        return mall;
    }
}

module.exports = MallService;