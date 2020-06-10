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
    describe("Create a new mall with dummy data", function() {
        it("It should return a mall object with the same value as dummy data", async function() {
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
            expect(result.name).to.equal(stubValue.name);
            expect(result.postal_code).to.equal(stubValue.postal_code);
            expect(result.address).to.equal(stubValue.address);
        });
    });
});