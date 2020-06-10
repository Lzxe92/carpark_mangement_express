const models = require('../models');

describe("Clear All database", function () {
    it("It should clear parking_lot table", async function () {
        await models.ParkingLot.destroy({
            truncate:  { cascade: true }
        });
    });
    it("It should clear mall table", async function () {
        await models.Mall.destroy({
            truncate:  { cascade: true }
        });
    });
});