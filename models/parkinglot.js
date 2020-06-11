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
            type: DataTypes.DOUBLE,
            defaultValue: 5
        },
        mall_id: {
            type: DataTypes.INTEGER,
            references: {
                model:"mall",
                key:"mall_id"
            },
        },
        reservation_hours: {
            type: DataTypes.INTEGER,
            defaultValue: 3
        },
    }, {tableName: "parking_lot"});
    ParkingLot.associate = function (models) {
        // associations can be defined here

        ParkingLot.belongsTo(models.Mall, {
            foreignKey: 'mall_id',
        });
        ParkingLot.hasMany(models.Reservation, {
            onDelete: 'cascade',
            foreignKey: 'parking_lot_id',
            as: 'reservations',
        });
    };
    return ParkingLot;
};