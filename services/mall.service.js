var models = require('../models');
exports.createMall = async function (data) {
    try {
        // Check if already exists
        const result = await models.Mall.findOne({
            where: {
                name: data.name,
            },
        });
        if (result !== null) {
            throw Error('Mall with the name already exists');
        } else {
            const mall = await models.Mall.create({
                name: data.name,
                address: data.address,
                postal_code: data.postal_code,
            });
            return mall;
        }
    } catch (error) {
        // Log Errors
        console.log("debug", error);
        throw Error(error);
    }
}