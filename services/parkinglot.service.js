var models = require('../models');

class ParkinglotService {
    async createParkingLot(data) {
        const result = await models.Mall.findOne({
            where: {
                mall_id: data.mall_id,
            },
        }).then(function (mall) {
            if (mall) {
                return mall
            }
            throw Error("Mall id is invalid");
        }).then(async function (mall) {
            const parkingLot = await models.ParkingLot.create({
                name: data.name,
                mall_id: data.mall_id,
            }).catch((error) => {
                if (error.name === "SequelizeUniqueConstraintError") {
                    throw Error("A parking lot with the name " + data.name + " is already in the system");
                }
                throw error;
            });
            return parkingLot
        }).catch((error) => {
            throw error;
        });
        return result;

    }
}

module.exports = ParkinglotService;