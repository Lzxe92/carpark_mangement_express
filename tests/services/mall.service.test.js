const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const faker = require("faker");
const MallService = require("../../services/mall.service");
const models = require('../../models');

beforeEach(async () => {
    await models.ParkingLot.destroy({
        truncate:  { cascade: true }
    });
    await models.Mall.destroy({
        truncate:  { cascade: true }
    });
});
describe("MallService", function() {
    describe("createMall", function() {
        it("It should create a new mall", async function() {
            const stubValue = {
                name: faker.random.uuid(),
                postal_code: faker.address.zipCode("######"),
                address: faker.address.streetAddress("###"),
                createdAt: faker.date.past(),
                updatedAt: faker.date.past()
            };
            const mallService = new MallService();
            const result = await mallService.createMall(stubValue);
            assert.isNotNull(result, 'Creation of mall failed');
        });
    });
});