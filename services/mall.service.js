var models = require('../models');
exports.createMall = async function (data) {
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