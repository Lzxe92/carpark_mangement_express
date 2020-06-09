'use strict';
module.exports = (sequelize, DataTypes) => {
    const ParkingLot = sequelize.define('ParkingLot', {
        parking_lot_id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING
        },
        rate: {
            type: DataTypes.DOUBLE
        },
        reservation_hours: {
            type: DataTypes.INTEGER
        },
    }, {});
    ParkingLot.associate = function (models) {
        // associations can be defined here

        ParkingLot.belongsTo(models.Mall, {
            foreignKey: 'mall_id'
        });
    };
    return ParkingLot;
};