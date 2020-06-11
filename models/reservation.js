'use strict';
module.exports = (sequelize, DataTypes) => {
    const Reservation = sequelize.define('Reservation', {
        reservation_id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        parking_lot_id: {
            type: DataTypes.INTEGER,
            references: {
                model:"parking_lot",
                key:"parking_lot_id"
            },
        },
        car_id: {
            type: DataTypes.INTEGER,
            references: {
                model:"car",
                key:"car_id"
            },
        },
        start_datetime: {
            allowNull: false,
            type: DataTypes.DATE
        },
        end_datetime: {
            allowNull: false,
            type: DataTypes.DATE
        },
        price: {
            allowNull: false,
            type: DataTypes.DOUBLE
        },
    }, {tableName: "reservation"});
    Reservation.associate = function (models) {
        Reservation.belongsTo(models.ParkingLot, {
            onDelete: 'cascade',
            foreignKey: 'reservation_id',
        });
        Reservation.belongsTo (models.Car, {
            onDelete: 'cascade',
            foreignKey: 'reservation_id',
        });
    };
    return Reservation;
};