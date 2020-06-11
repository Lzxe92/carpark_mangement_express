const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const faker = require("faker");
const MallService = require("../../services/mall.service");
const models = require('../../models');

describe("MallService", function () {
    beforeEach(async () => {
        await models.ParkingLot.destroy({
            truncate: {cascade: true}
        });
        await models.Mall.destroy({
            truncate: {cascade: true}
        });
    });
    const stubValue = [{
        name: faker.random.uuid(),
        postal_code: faker.address.zipCode("######"),
        address: faker.address.streetAddress("###"),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
    }, {
        name: faker.random.uuid(),
        postal_code: faker.address.zipCode("######"),
        address: faker.address.streetAddress("###"),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
    }];
    describe("Create a new mall with dummy data", function () {
        it("It should return a mall object with the same value as dummy data", async function () {
            const mallService = new MallService();
            for (i = 0; i < stubValue.length; i++) {
                const result = await mallService.createMall(stubValue[i]);
                assert.isNotNull(result, 'Creation of mall failed');
                expect(result.name).to.equal(stubValue[i].name);
                expect(result.postal_code).to.equal(stubValue[i].postal_code);
                expect(result.address).to.equal(stubValue[i].address);
            }
        });
    });
    describe("Find a mall with created dummy data", function () {
        it("It should return a mall object with the same value as dummy data", async function () {
            const mallService = new MallService();
            for (i = 0; i < stubValue.length; i++) {
                var result = await mallService.createMall(stubValue[i]);
                result = await mallService.findOne({mall_id: result.mall_id});
                expect(result.name).to.equal(stubValue[i].name);
                expect(result.postal_code.toString()).to.equal(stubValue[i].postal_code);
                expect(result.address).to.equal(stubValue[i].address);
            }
        });
    });
    describe("Find malls with created dummy data", function () {
        it("It should return a mall object with the same value as dummy data", async function () {
            const mallService = new MallService();
            for (i = 0; i < stubValue.length; i++) {
                var result = await mallService.createMall(stubValue[i]);
            }
            result = await mallService.findAll(1,10);
            for (i = 0; i < result.length; i++) {
                expect(result[i].name).to.equal(stubValue[i].name);
                expect(result[i].postal_code.toString()).to.equal(stubValue[i].postal_code);
                expect(result[i].address).to.equal(stubValue[i].address);
            }


        });
    });
});